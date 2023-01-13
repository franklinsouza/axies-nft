import styles from './styles.module.scss';

export default function ProfileCard ({name, img}) {
  return(
    <div className={styles.card}>
      <div className={styles.card__avatarWrap}>
        <div className={styles.card__avatar}>
          <img src={img} alt="Crispin"/>
        </div>
        <span className={styles.card__badge}>
          <svg viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FFF">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_iconCarrier">
              <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M5 14L9 18L19 8"></path> 
            </g>
          </svg>
        </span>
      </div>

      <h5 className={styles.card__name}>
        {name}
      </h5>
      <span className={styles.card__price}>
        214.2 ETH
      </span>
    </div>
  )
}