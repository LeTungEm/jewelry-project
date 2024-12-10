"use client"; 

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";


export default function SlideShowCPN() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]} 
            pagination={true} 
            className="mySwiper"
            autoplay={{ delay: 3000 }}
        >
            <SwiperSlide>
                <div className="h-[80vh] flex items-center justify-center text-white text-xl">
                    <Image
                        className="inline-block"
                        src="/images/slide/image1.png"
                        alt="viet nam logo"
                        layout="fill"
                        priority
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[80vh] flex items-center justify-center text-white text-xl">
                    <Image
                        className="inline-block"
                        src="/images/slide/image2.png"
                        alt="viet nam logo"
                        layout="fill"
                        priority
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[80vh] flex items-center justify-center text-white text-xl">
                    <Image
                        className="inline-block"
                        src="/images/slide/image3.png"
                        alt="viet nam logo"
                        layout="fill"
                        priority
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}