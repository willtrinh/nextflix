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
    <section className='relative mx-auto max-w-screen-2xl px-8 mt-4'>
      <Swiper
        // install Swiper modules
        modules={[EffectCoverflow, Pagination, Scrollbar, A11y, Autoplay]}
        grabCursor={true}
        slidesPerView={1}
        autoplay
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        pagination={{ clickable: true }}
        className='rounded-lg'
      >
        <SwiperSlide>
          <Image
            layout='responsive'
            width={875}
            height={400}
            src='/images/slider-9.jpg'
            alt='slider-9'
            className='object-fit'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            width={875}
            height={400}
            src='/images/slider-8.jpg'
            alt='slider-8'
            className='object-fit'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            width={875}
            height={400}
            src='/images/slider-7.jpg'
            alt='slider-7'
            className='object-fit'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            width={875}
            height={400}
            src='/images/slider-6.jpg'
            alt='slider-6'
            className='object-fit'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            layout='responsive'
            width={875}
            height={400}
            src='/images/slider-5.jpg'
            alt='slider-5'
            className='object-fit'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
