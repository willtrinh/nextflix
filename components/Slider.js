import Image from 'next/image';
import {
  EffectCoverflow,
  EffectCreative,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';

const Slider = () => {
  return (
    <section className='relative shadow-2xl mx-auto max-w-screen-2xl px-8 mt-4'>
      <Swiper
        // install Swiper modules
        modules={[EffectCoverflow, Pagination, Scrollbar, A11y, Autoplay]}
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        effect={'coverflow'}
        // creativeEffect={{
        //   prev: {
        //     shadow: true,
        //     translate: [0, 0, -400],
        //   },
        //   next: {
        //     translate: ['100%', 0, 0],
        //   },
        // }}
        pagination={{ clickable: true }}
        className='rounded-lg'
      >
        <SwiperSlide>
          <Image
            layout='responsive'
            width={900}
            height={250}
            src='/images/slider-1.jpg'
            alt='slider-1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            width={900}
            height={250}
            src='/images/slider-2.jpg'
            alt='slider-2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            width={900}
            height={250}
            src='/images/slider-3.jpg'
            alt='slider-3'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            width={900}
            height={250}
            src='/images/slider-4.jpg'
            alt='slider-4'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
