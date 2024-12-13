import "../styles/residencies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <div className="Swiper-container">
          {/* <SliderButtons></SliderButtons> */}
          <Swiper {...sliderSettings} >
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />
                  <span className="secondaryText r-price">
                    <span>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Residencies;

// const SliderButtons = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="r-buttons">
//       <button onClick={() => swiper.slidePrev()}>{"<"}</button>
//       <button onClick={() => swiper.slideNext()}>{">"}</button>
//     </div>
//   );
// };
