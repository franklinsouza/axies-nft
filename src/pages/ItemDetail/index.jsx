import { useParams } from 'react-router-dom';
import useFetch from '../../services/useFech';
import styles from './styles.module.scss';
import Header from "../../components/Header";
import LiveAuction from "../../components/LiveAuctions";
import Loading from '../../components/Loading';

const ItemDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/liveAuctions/${id}`);

  return (
    <>
      <Header />

      <div className="container">
        <div className={styles.data}>
          
          { loading && <Loading />}

          <div className={styles.data__boxLeft}>            
            {
              data  && 
              <img src={data.img} className={styles.data__cover}/>
            }
          </div>
          <div className={styles.data__boxRight}>

            {
              data &&
              <h1 className={styles.data__title}>
                {data.name}
              </h1>
            }

            <p className={styles.data__text}>
              Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
               ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed 
               ipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursus 
               lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi 
               fringilla urna amet sed ipsum
            </p>
          </div>

        </div>

        <section className='section'>
          <LiveAuction />
        </section>
      </div>
    </>
  )
}

export default ItemDetail;