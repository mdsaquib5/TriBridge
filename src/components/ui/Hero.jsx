'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { RiArrowRightLine } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
    const slides = [
        {
            id: 1,
            heading1: 'TriBridge Premier Indian',
            heading2: 'Manpower.',
            text: 'We supply top-tier Indian labour, engineers, and professionals for Gulf jobs. We are the leading international recruitment agency for UAE, Saudi Arabia, Kuwait, and Qatar.',
            image: '/banner.jpg'
        },
        {
            id: 2,
            heading1: 'Expert Manpower For',
            heading2: 'Middle East.',
            text: 'Streamline your recruitment process with our specialized HR consultants. Get reliable Indian manpower for major infrastructure projects including Hyundai, Daelim, and Saudi Binladin jobs.',
            image: '/her-2.jpg'
        },
        {
            id: 3,
            heading1: 'Your Trusted Overseas',
            heading2: 'Consultants.',
            text: 'Connecting ambitious companies in the Middle East with a vast network of elite candidates. We are the best placement agency to fulfill all your manpower and HR recruitment needs.',
            image: '/banner.jpg'
        }
    ];

    return (
        <div className="hero-bg">
            <div className="hero-slider">
                <Swiper
                    modules={[Navigation, EffectFade, Autoplay]}
                    effect="fade"
                    navigation
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    className="mySwiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            {({ isActive }) => (
                                <>
                                    <div className="hero-image">
                                        <div className="image-wrapper">
                                            <Image src={slide.image} alt={''} width={1920} height={1000} priority className="slider-image" />
                                        </div>
                                    </div>
                                    <div className="overlay-content">
                                        <AnimatePresence>
                                            {isActive && (
                                                <div className="main-content">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -50 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -50 }}
                                                        transition={{ duration: 0.8, delay: 0.2 }}
                                                        className="top-heading"
                                                    >
                                                        {slide.heading1}
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        transition={{ duration: 0.8, delay: 0.5 }}
                                                        className="heading-main"
                                                    >
                                                        <span><RiArrowRightLine /></span>{slide.heading2}
                                                    </motion.div>
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 50 }}
                                                        transition={{ duration: 0.8, delay: 0.8 }}
                                                    >
                                                        {slide.text}
                                                    </motion.p>
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}

export default Hero;