import Header from '../../components/Header';
import Hero from './Hero';
import LiveAuction from '../../components/LiveAuctions';
import TopSeller from '../../components/TopSeller';
import TodaysPicks from './TodaysPicks';
import PopularCollection from './PopularCollection';
import PreFooter from './PreFooter';


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
          <PopularCollection />
        </section>

        <section className='section'>
          <PreFooter />
        </section>
      </div>
    </>
  )
}