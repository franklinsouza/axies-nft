import styles from './styles.module.scss'
import logo from '../../assets/logo_dark.png'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.wrap}>
          <Link to='/'>
            <img src={logo} />
          </Link>

          <ul className={styles.header__menu}>
            <li>
              <div className='container'>
                <a href="#">Home</a>
              </div>
            </li>
            <li>
              <div className='container'> 
                <a href="#">Explore</a>
              </div>
            </li>
            <li>
              <div className='container'>
                <a href="#">Activity</a>
              </div>
            </li>
            <li>
              <div className='container'>
                <a href="#">Community</a>
              </div>
            </li>
            <li>
              <div className='container'>
                <a href="#">Pages</a>
              </div>
            </li>
            <li>
              <div className='container'>
                <a href="#">Contact</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}