import BigNumber from 'bignumber.js'
import { TokenKeys } from './tokens'

export interface WalletBalance {
  address: string
  balances: Record<TokenKeys, BigNumber | number>
}
