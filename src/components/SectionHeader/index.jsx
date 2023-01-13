import styles from './styles.module.scss';

export default function SectionHeader ({ title, link, url}){
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionHeader__title}>
        {title}
      </h2>

      {
       link &&
        <a href={url} className={styles.sectionHeader__link}>
          {link}
        </a>
      }
      
    </div>
  )
}