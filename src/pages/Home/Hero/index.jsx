import styles from './styles.module.scss';
import bunny from '../../../assets/imgslider2.png';
import detail1 from '../../../assets/img-bg-sliderhome2.png';



const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__boxLeft}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Discover, find,<br />
            <span>Sell extraordinary</span><br />
            Monster NFTs
          </h1>

          <p className={styles.hero__subtitle}>
            Marketplace for monster character cllections non fungible token NFTs
          </p>                        
        </div>
      </div>
        

      <div className={styles.hero__boxRight}>
        <img src={bunny} />
        <img src={detail1} className={styles.hero__datail1}/>
      </div>
    </section>
  )
}

export default Hero;