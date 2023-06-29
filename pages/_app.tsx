import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets
} from '@rainbow-me/rainbowkit'
import {
  trustWallet,
  rainbowWallet,
  metaMaskWallet
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, bscTestnet, bsc } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { AppProps } from 'next/app'

const { chains, publicClient } = configureChains(
  [mainnet, bsc, bscTestnet],
  [publicProvider()]
)

// const { connectors } = getDefaultWallets({
//   appName: 'My Rainbowkit App',
//   projectId: 'MY_PROJECT_ID',
//   chains
// })

const connectors = connectorsForWallets([
  {
    groupName: 'Dumb Wallets',
    wallets: [
      rainbowWallet({ projectId: 'MY_PROJECT_ID', chains }),
      metaMaskWallet({ projectId: 'MY_PROJECT_ID', chains })
    ]
  },
  {
    groupName: 'DEBT WALLETS',
    wallets: [
      trustWallet({
        projectId: 'MY_PROJECT_ID',
        chains
      })
    ]
  }
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
