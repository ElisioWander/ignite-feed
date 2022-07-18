import igniteFeedLogo from '../../assets/logo.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header} >
      <img src={igniteFeedLogo} alt="Logotipo Ignite Feed" />
    </header>
  )
}