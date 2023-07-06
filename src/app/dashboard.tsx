'use client'

import styles from '@styles/Home.module.css'
import { useAccount } from 'wagmi'
import {
  useRewardTokenBalanceOf,
  useRewardDistributorPendingRewards,
  useRewardNftBalanceOf,
  useRewardDistributorStakedBalanceOf,
  usePrepareRewardNftSafeMint,
  useRewardNftSafeMint,
  usePrepareRewardDistributorStakeAllTokens,
  useRewardDistributorStakeAllTokens,
  usePrepareRewardNftSetApprovalForAll,
  useRewardNftSetApprovalForAll,
  useRewardDistributorCollectRewards,
  usePrepareRewardDistributorCollectRewards,
  useRewardDistributorUnstakeAllTokens,
  usePrepareRewardDistributorUnstakeAllTokens
} from '../generated'

enum ContractAddress {
  RewardToken = '0x9B7Aa964f4Eb862EdE5b1C9a14A400534dd2DD95',
  Nft = '0xED32089936765F5d2d195f2e96dE381569B951ec',
  RewardDistributor = '0x60a315f4BB7F0ed10edBBD83a752C27fcb31Bf99'
}

export default function Dashboard () {
  const account = useAccount()

  const { data: tokenBalance } = useRewardTokenBalanceOf({
    enabled: account?.isConnected,
    address: ContractAddress.RewardToken,
    args: [account.address!]
  })

  const { data: pendingRewards } = useRewardDistributorPendingRewards({
    enabled: account?.isConnected,
    address: ContractAddress.RewardDistributor,
    args: [account.address!],
    watch: true
  })

  const { data: nftBalance } = useRewardNftBalanceOf({
    enabled: account?.isConnected,
    address: ContractAddress.Nft,
    args: [account.address!]
  })

  const { data: stakedBalance } = useRewardDistributorStakedBalanceOf({
    enabled: account?.isConnected,
    address: ContractAddress.RewardDistributor,
    args: [account.address!]
  })

  const safeMintPrep = usePrepareRewardNftSafeMint({
    enabled: account?.isConnected,
    address: ContractAddress.Nft,
    args: [account.address!]
  })

  const safeMintMutation = useRewardNftSafeMint(safeMintPrep.config)

  const stakeNftPrep = usePrepareRewardDistributorStakeAllTokens({
    enabled: account?.isConnected,
    address: ContractAddress.RewardDistributor
  })

  const stakeNftMutation = useRewardDistributorStakeAllTokens(
    stakeNftPrep.config
  )

  const unstakeNftPrep = usePrepareRewardDistributorUnstakeAllTokens({
    enabled: account?.isConnected,
    address: ContractAddress.RewardDistributor
  })

  const unstakeNftMutation = useRewardDistributorUnstakeAllTokens(
    unstakeNftPrep.config
  )

  const approveStakePrep = usePrepareRewardNftSetApprovalForAll({
    enabled: account?.isConnected,
    address: ContractAddress.Nft,
    args: [ContractAddress.RewardDistributor, true]
  })

  const approveStakeMutation = useRewardNftSetApprovalForAll(
    approveStakePrep.config
  )

  const collectPrep = usePrepareRewardDistributorCollectRewards({
    enabled: account?.isConnected,
    address: ContractAddress.RewardDistributor
  })

  const collectMutation = useRewardDistributorCollectRewards(collectPrep.config)

  return (
    <span className={styles.row}>
      <div className={styles.card}>
        <h2>Balance:</h2>
        <p>{tokenBalance?.toString()}</p>
      </div>

      <div className={styles.card}>
        <h2>NFTs:</h2>
        <p>{nftBalance?.toString()}</p>
        <button
          disabled={!safeMintMutation.write}
          onClick={safeMintMutation.write}
        >
          MINT
        </button>
      </div>

      <div className={styles.card}>
        <h2>Staked Nfts:</h2>
        <p>{stakedBalance?.toString()}</p>
        <button
          disabled={!approveStakeMutation.write}
          onClick={approveStakeMutation.write}
        >
          approve
        </button>
        <button
          disabled={!stakeNftMutation.write}
          onClick={stakeNftMutation.write}
        >
          STAKE
        </button>
        <button
          disabled={!unstakeNftMutation.write}
          onClick={unstakeNftMutation.write}
        >
          unSTAKE
        </button>
      </div>

      <div className={styles.card}>
        <h2>Rewards:</h2>
        <p>{pendingRewards?.toString()}</p>
        <button
          disabled={!collectMutation.write}
          onClick={collectMutation.write}
        >
          COLLECT
        </button>
      </div>
    </span>
  )
}
