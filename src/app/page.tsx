import { ConnectButton } from '../components/ConnectButton'
import { Connected } from '../components/Connected'
import Dashboard from './dashboard'
import styles from '@styles/Home.module.css'

export function Page () {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.center}>
          <ConnectButton />

          <Connected>
            <Dashboard />
          </Connected>
        </div>
      </main>
    </>
  )
}

export default Page
