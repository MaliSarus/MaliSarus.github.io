import Swiper from "swiper";
import 'swiper/css/bundle';

export default function swipersInit() {
  const swipers = [...document.querySelectorAll(".swiper")];
  if (swipers.length) swipersSetup(swipers);
}

const swipersSetup = (swipers) => {
  swipers.forEach((swiper) => {
    let swiperOptions = JSON.parse(swiper.getAttribute("data-swiper-options"));
    const swiperObject = new Swiper(swiper, swiperOptions);
  });
};
