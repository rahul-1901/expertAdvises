import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const CardSwipe = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
    .swiper {
      width: 40%;
      padding-bottom: 40px;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
      height: 320px;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }

    @media (max-width: 768px) {
      .swiper {
        width: 90%;
      }

      .swiper-slide {
        height: 260px;
      }
    }
  `

  return (
    <section className="py-10">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-3xl rounded-[20px] p-4">
        <div className="relative mx-auto flex w-full flex-col items-center gap-6">
          <Swiper
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            effect="cards"
            grabCursor={true}
            loop={true}
            rewind={true}
            cardsEffect={{
              slideShadows: slideShadows,
            }}
            modules={[EffectCards, Autoplay, Pagination, Navigation]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default CardSwipe
