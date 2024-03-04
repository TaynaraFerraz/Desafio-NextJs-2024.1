'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const imagens = [
    { src: '/assets/carrossel/acai.jpeg', alt: "Açaí da sorveteria " },
    { src: '/assets/carrossel/picole.jpeg', alt: "Picolé da sorveteria" },
    { src: '/assets/carrossel/sorvete.jpeg', alt: "Sundae da sorveteria" }
]

export default function Carrossel() {
    return (
        <div className="flex lg:col-span-2 relative group items-center justify-center rounded-full">
            <div className="w-full sm:w-7/12 lg:w-full rounded-full">
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {imagens.map((imagens, index) => (
                        <SwiperSlide key={index}>
                            <div className=" ">
                                <img
                                    src={imagens.src}
                                    alt={imagens.alt}
                                    width={904}
                                    height={904}
                                    className=" p-8 rounded-full "
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>

    )
}