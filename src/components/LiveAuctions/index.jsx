// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import NftCard from '../Nftcard';
import SectionHeader from '../SectionHeader';

const LiveAuction = () => {
  const { data, loading, error } = useFetch('/liveAuctions/?_expand=users');

  return (
    <>
      <SectionHeader title='Live Auctions' link='Explore more' url='#' />

      { loading && <Loading />}

      {
        data &&
        <Swiper
          style={{paddingTop: '10px'}}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768 : {
              slidesPerView: 2,
            },
            992 : {
              slidesPerView: 3,
            },
            1200 : {
              spaceBetween: 30,
              slidesPerView: 4,
            }
          }}
          pagination={{clickable: true}} 
          modules={[Pagination]}
        >
          {data.map( nft => 
            <SwiperSlide key={nft.id.toString()}>
              <NftCard 
                id={nft.id}
                name={nft.name} 
                img={nft.img} 
                price={nft.price}
                current={nft.current}
                profileName={nft.users.name}
                profileAvatar={nft.users.img}
                role={nft.users.role}
              />
            </SwiperSlide>
          )}
        </Swiper>
      }
    </>
  )
}

export default LiveAuction;