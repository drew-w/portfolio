import { TokenKeys } from '@./types/tokens'
import { WalletBalance } from '@./types/wallet'
import { Project } from '@./types/projects'
import BigNumber from 'bignumber.js'

export const formatCurrency = (number: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(number)
}

//if a variable can be either a number OR big number object, makes sure that it is a big number object
export const formatBigNumber = (
  value: number | string | BigNumber
): BigNumber => new BigNumber(value?.toString() || value)

export const formatDelta = (
  current: string,
  previous: string
): { change: 'neutral' | 'positive' | 'negative' | string; delta: string } => {
  const today = new BigNumber(current)
  const yesterday = new BigNumber(previous)

  const marketValueDelta = today.minus(yesterday)
  const percentage = marketValueDelta
    .div(yesterday)
    .times(100)
    .abs()

  const displayPercentage =
    typeof percentage !== 'object' ? 0 : percentage.toNumber()
  let delta = '±'
  let change = 'neutral'

  if (marketValueDelta.isLessThan(0)) {
    delta = '-'
    change = 'negative'
  } else if (marketValueDelta.isGreaterThan(0)) {
    delta = '+'
    change = 'positive'
  }

  const marketDelta = `${delta}${displayPercentage.toFixed(2)}`
  return {
    change,
    delta: marketDelta
  }
}

interface TokenTotals {
  tokenAmount: BigNumber
  dollarAmount: BigNumber
  percent: BigNumber
}
type FormattedBalance = Record<TokenKeys | string, TokenTotals>
export const formatBalancePercentage = (
  walletBalance: WalletBalance,
  projects: Project[]
) => {
  const { balances } = walletBalance

  //gets the total dollar value balance across all tokens
  const totalBalance: BigNumber = Object.keys(balances).reduce(
    (total: any, key: TokenKeys[any]) => {
      const project = projects.find(project => project.token.symbol === key)
      const token = project?.token
      const decimal = 1 / Math.pow(10, token?.decimals || 18)

      //adding this because we dont have a market value right now
      if (token) {
        token.marketValueNow = '.00412'
      }
      const balance = formatBigNumber(balances?.[key])
      if (token?.marketValueNow) {
        return total.plus(balance.times(decimal).times(token?.marketValueNow))
      } else return total
    },
    new BigNumber(0)
  )

  //gets the amount of tokens, the dollar amount and percentage of total dollar amount
  //per token
  const formatted: FormattedBalance = Object.keys(balances).reduce(
    (acc: any, tokenKey: string | TokenKeys[any]) => {
      const project = projects.find(
        project => project.token.symbol === tokenKey
      )
      const token = project?.token
      const decimal = 1 / Math.pow(10, token?.decimals || 18)

      const balance = formatBigNumber(balances?.[tokenKey])
      const tokenAmount = balance.times(decimal)
      if (token?.marketValueNow) {
        const dollarAmount = tokenAmount.times(token?.marketValueNow)
        const percent = dollarAmount.div(totalBalance).times(100)
        acc[tokenKey] = {
          tokenAmount,
          dollarAmount,
          percent
        }
      }
      return acc
    },
    {}
  )

  //sorts the list of formatted tokens based on percentage of total dollar amount
  const sortedByValue = sortByValue(formatted)

  //getting the top 4 token keys based on percentage
  const top4 = sortedByValue.splice(0, 4)

  //calculating the percentage and dollar amount of the rest of the tokens not in the top 4
  const otherFormatted = sortedByValue.reduce(
    (totals: TokenTotals, tokenKey: TokenKeys[any]) => {
      const currentKey: TokenTotals = formatted[tokenKey]
      const newTokenAmount = totals.tokenAmount.plus(currentKey.tokenAmount)
      const newDollarAmount = totals.dollarAmount.plus(currentKey.dollarAmount)
      const newPercent = totals.percent.plus(currentKey.percent)

      return {
        tokenAmount: newTokenAmount,
        dollarAmount: newDollarAmount,
        percent: newPercent
      }
    },
    {
      tokenAmount: new BigNumber(0),
      dollarAmount: new BigNumber(0),
      percent: new BigNumber(0)
    }
  )

  //re formatting the total object based off the list of top 4 keys
  const top4Formatted = Object.keys(formatted).reduce((acc: any, tokenKey) => {
    if (top4.includes(tokenKey)) {
      if (formatted[tokenKey].tokenAmount.isGreaterThan(0)) {
        acc[tokenKey] = formatted[tokenKey]
      }
    }
    return acc
  }, {})

  return {
    data: { ...top4Formatted, other: otherFormatted },
    order: [...top4, 'other']
  }
}
const sortByValue = (formatted: FormattedBalance) =>
  Object.keys(formatted)
    .filter(tokenKey => formatted[tokenKey].tokenAmount.isGreaterThan(0))
    .sort((a: TokenKeys[any], b: TokenKeys[any]) => {
      const aPercent = formatted[a].percent
      const bPercent = formatted[b].percent
      return aPercent.isLessThan(bPercent)
        ? 1
        : aPercent.isGreaterThan(bPercent)
        ? -1
        : 0
    })

interface TokenTypes {
  allTokens: Project[]
  myTokens: Project[]
}
export const partitionProjects = (
  { balances }: WalletBalance,
  tokens: Project[]
): TokenTypes => {
  const [myTokens, allTokens] = tokens.reduce(
    // Use "deconstruction" style assignment
    (result: Project[][], project) => {
      const balance = formatBigNumber(balances?.[project.token.symbol])

      result[balance.isGreaterThan(0) ? 0 : 1].push(project) // Determine and push to small/large arr
      return result
    },
    [[], []]
  )

  return {
    allTokens,
    myTokens
  }
}

export const getTokenOwnership = (
  { balances }: WalletBalance,
  projects: Project[]
): Project[] => {
  return projects.filter(project => {
    const balance = formatBigNumber(balances?.[project.token.symbol])
    return balance.isGreaterThan(0)
  })
}
