import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi'
import { bsc, bscTestnet, mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    bsc,
    ...(process.env.NODE_ENV === 'development' ? [bscTestnet] : [])
  ],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
  projectId: walletConnectProjectId
})

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})

export { chains }
