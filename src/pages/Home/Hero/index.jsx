import styles from './styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Discover, find,<br />
            <span>Sell extraordinary</span><br />
            Monster NFTs
          </h1>

          <p className={styles.subtitle}>
            Marketplace for monster character cllections non fungible token NFTs
          </p>

          <a href="#" className='' title='Explore'>
            Explore
          </a>                           
        </div>
      </div>
    </section>
  )
}

export default Hero;