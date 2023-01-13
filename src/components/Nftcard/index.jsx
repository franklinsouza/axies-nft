import styles from './styles.module.scss'

export default function NftCard ({name, img, profileName, price, current, role, profileAvatar}) {
  return (
    <div className={styles.card}>
      <div className={styles.card__cover}>
        <a href='#'>
          <img src={img} className={styles.card__coverImg} />
        </a>
      </div>
      <div className={styles.card__content}>

        <div className={styles.card__title}>
          <h3 className={styles.card__nft_title}>
            <a href='#'>
              {name}
            </a>
          </h3>

          <div className={styles.card__tag}>
            bsc
          </div>
        </div>

        <div className={styles.card__line}>
          <div className={styles.card__profile}>
            <div className={styles.card__avatar}>
              <img src={profileAvatar}/>
            </div>
            <div className={styles.card__info}>
              <span className={styles.card__status}>{role}</span>
              <p className={styles.card__name}>{profileName}</p>
            </div>
          </div>

          <div className={styles.card__data}>
            <span className={styles.card__status}>
              Current Bid
            </span>
            <span className={styles.card__price}>
              {price} {current}
            </span>
          </div>
        </div>

      </div>
    </div>
  )
};