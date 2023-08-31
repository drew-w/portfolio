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

export enum TokenKeys {
  dlg = 'dlg',
  bgld = 'bgld',
  debt = 'debt',
  blox = 'blox',
  natg = 'natg',
  grow = 'grow',
  alum = 'alum',
  xplr = 'xplr',
  bev = 'bev',
  bnb = 'bnb',
  usdt = 'usdt',
  usdc = 'usdc',
  dcm = 'dcm',
  btcb = 'btcb',
  drip = 'drip',
  rev = 'rev'
}
