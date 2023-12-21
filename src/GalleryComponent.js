import React, { useEffect } from 'react';
import Swiper from 'swiper';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Mousewheel} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import HomePage from './Homepage';
import ProblemPage from './ProblemPage';
import SolutionPage from './SolutionPage';
import AlliancePage from './AlliancePage';
import ContactPage from './ContactPage';

const GalleryComponent = () => {
  useEffect(() => {
    SwiperCore.use([Navigation, Pagination, Mousewheel]);
    const swiper = new Swiper('.swiper', {
      speed: 1000,
      effect: 'slide',
      loop: true,
      mousewheel: {
        enabled: true,
        invert: false,
        sensitivity: 100,
      },
      breakpoints: {
        768: {
          direction: 'horizontal',
        },
        320: {
          direction: 'vertical',
          height: 500,
        }
      }
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);


  return (
    <div style={{flex: 1, background: "#000"}}>
      <section>
        {/* <img
          className="hero"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c62efd51-f844-4335-ba29-70ea35521dd8"
          alt=""
        /> */}
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <HomePage/>
            </div>
            <div className="swiper-slide">
                <ProblemPage/>
            </div>
            <div className="swiper-slide">
              <SolutionPage/>
            </div>
            <div className="swiper-slide">
              <AlliancePage/>
            </div>
            <div className="swiper-slide">
            <ContactPage/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryComponent;