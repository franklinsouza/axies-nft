// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import useFetch from '../../services/useFech';
import Loading from '../Loading';
import NftCard from '../Nftcard';
import SectionHeader from '../SectionHeader';

const LiveAuction = () => {
  const { data: auctionsData, loading: auctionsLoading, error: auctionsError } = useFetch('/liveAuctions');

  return (
    <>
      <SectionHeader title='Live Auctions' link='Explore more' url='#' />

      { auctionsLoading && <Loading />}

      {
        auctionsData &&
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
          {auctionsData.map( nft => 
            <SwiperSlide key={nft.id.toString()}>
              <NftCard 
                name={nft.name} 
                img={nft.img} 
                role={nft.role}
                profileAvatar={nft.profileImg}
                profileName={nft.profileName}
                price={nft.price}
                current={nft.current}
              />
            </SwiperSlide>
          )}
        </Swiper>
      }
    </>
  )
}

export default LiveAuction;