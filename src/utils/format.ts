import BigNumber from 'bignumber.js'

export const formatCurrency = (number: number | string): string => {
  const bigNumber = new BigNumber(number)
  return `$${bigNumber.toNumber().toFixed(2)}`
}

export const formatDelta = (
  current: string,
  previous: string
): { change: 'neutral' | 'positive' | 'negative'; delta: string } => {
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
    //@ts-ignore
    change,
    delta: marketDelta
  }
}
