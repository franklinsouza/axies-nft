import styles from './styles.module.scss';
import loader from '../../assets/preload.png'

const Loading = () => {
  return (
    <div className={styles.loader}>
      <img src={loader} className={styles.loader__img}/>
    </div>
  )
}

export default Loading;