// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import useFetch from '../../services/useFech';

import Loading from '../Loading';
import ProfileCard from '../ProfileCard';
import SectionHeader from '../SectionHeader';


const TopSeller = () => {
  const { data, loading, error } = useFetch('/users');

  return (
    <>
      <SectionHeader title='Top Seller'/>
  
      { loading && <Loading />}

      {
        data &&
        <>
          <div className='navigation'>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 4
              },
              992: {
                slidesPerView: 6
              },
              1200: {
                spaceBetween: 40,
                slidesPerView: 9
              }
            }}
          >
            {data.map( profile => 
              <SwiperSlide key={profile.id.toString()}>
                <ProfileCard  
                  name={profile.name} 
                  img={profile.img} 
                  price={profile.price}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </>
      }
    </>
  )
}

export default TopSeller;