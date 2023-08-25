export interface Token {
  contractAddress: string
  decimals: number
  id: number
  key: string
  name: string
  routeToDebt: string[]
  tax: number
  type: string
  uiConfig: {
    brandColor: string
    brandColorAltShade?: string
    comingSoon?: boolean
    hideMarketValue?: boolean
    name: string
    onPancake?: boolean
    symbol: string
    tokenLogo: string
    unitLabel: string
    unitLabelAbbr: string
    valueHidden: boolean
    comingSoonHidden?: boolean
    atomicUnitLabel?: string
    atomicUnitLabelAbbr?: string
    rewardsUnitToDisplay?: string | null
  }
  pair: string | null
  marketValueNow: string
  marketValue24HrsAgo: string
}
