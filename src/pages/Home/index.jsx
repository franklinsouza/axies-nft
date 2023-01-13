//import styles from './styles.module.scss';

import Header from '../../components/Header';
import Hero from './Hero';
import SectionHeader from '../../components/SectionHeader';
import LiveAuction from '../../components/LiveAuctions';
import TopSeller from '../../components/TopSeller';
import TodaysPicks from './TodaysPicks';

export default function Home() {  
  return (
    <>
      <Header />
      
      <div className='container'>
        <Hero />
        
        <section className='section'>
          <LiveAuction />
        </section>

        <section className='section'>
          <TopSeller />
        </section>

        <section className='section'>
          <TodaysPicks />
        </section>

        <section className='section'>
          <SectionHeader title='Popular Collection' link='Explore more' url='#' />
        </section>
      </div>
    </>
  )
}