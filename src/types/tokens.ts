export interface Token {
  id: string
  name: string
  symbol: TokenKeys
  address: string
  decimals: number
  chainId: number
  uiConfig: {
    logoUri: string
    primaryColor: string
  }
  type: string
  createdAt: Date
  updatedAt: Date
  marketValueNow?: string
  marketValue24HrsAgo?: string
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
