import styles from './styles.module.scss';
import CardCollection from '../../../components/CardCollection';
import Loading from '../../../components/Loading';
import SectionHeader from '../../../components/SectionHeader';
import useFetch from '../../../services/useFech';

const PopularCollection = () => {
  const { data, loading, error } = useFetch('/popularCollection/?_expand=users');

  return (
    <>    
      <SectionHeader title='Popular Collection' link='Explore more' url='#' />
      
      { loading && <Loading />}
      
      <div className={styles.lineCollection}>
        {
          data &&
          data.map(collection =>
            <CardCollection 
              key={Math.random()}
              title={collection.title}
              likes={collection.likes}
              imgs={collection.imgs}
              authorImg={collection.users.img}
              authorName={collection.users.name}
            />
          )
        }
      </div>
    </>
  )
}

export default PopularCollection;