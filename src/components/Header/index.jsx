import styles from './styles.module.scss'
import logo from '../../assets/logo_dark.png'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrap}>
          <img src={logo} />
        </div>
      </div>
    </header>
  )
}