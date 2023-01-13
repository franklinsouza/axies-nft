import styles from './styles.module.scss'

const ButtonFilter = ({icon, title, children}) => {
  return(
    <button className={styles.ButtonFilter}>

      {
        children && 
        <span className={styles.ButtonFilter__icon}>
          {children}
        </span>
      }
      
      <span className={styles.ButtonFilter__title}>
        {title}
      </span>
    </button>
  )
}

export default ButtonFilter;