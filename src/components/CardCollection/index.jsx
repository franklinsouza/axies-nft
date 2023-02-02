import styles from './styles.module.scss';

const CardCollection = ({title, authorImg, authorName, likes, imgs}) => {
  return (
    <div className={styles.CardCollection}>
      <div className={styles.CardCollection__line}>

        <div className={styles.CardCollection__profile}>
          <div className={styles.CardCollection__avatarWrap}>
            <div className={styles.CardCollection__avatar}>
              <img src={authorImg}/>
            </div>
            <span className={styles.CardCollection__badge}>
              <svg viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FFF">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_iconCarrier">
                  <path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M5 14L9 18L19 8"></path> 
                </g>
              </svg>
            </span>
          </div>

          <div className={styles.CardCollection__info}>
            <a href="#" className={styles.CardCollection__title}>
              {title}
            </a>
            <p>
              Created by 
              <span className={styles.CardCollection__author}>
                {authorName}
              </span>
            </p>
          </div>
        </div>

        <span>Likes: {likes}</span>
      </div>

      <div className={styles.CardCollection__galleryWrap}>
        {imgs.map( (img, index) => 
          <div className={styles[`CardCollection__item_${index+1}`]}>
            <img src={img} key={img} className={styles.CardCollection__coverGallery}/>
          </div>
        )}
      </div>

    </div>
  )
}

export default CardCollection;