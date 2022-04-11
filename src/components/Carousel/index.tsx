import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Image } from "@chakra-ui/react";

type CarouselProps = {
  slides: string[];
};

export function Carousel({ slides }: CarouselProps): JSX.Element {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <Image src={img} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
