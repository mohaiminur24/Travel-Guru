import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y,EffectCards,EffectFade,Navigation, Pagination, Scrollbar } from 'swiper';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const HomePage = () => {
    const data = useLoaderData();
    return (
        <>
            <div className='w-full min-h-[calc(100vh-250px)] grid grid-cols-3 gap-10 justify-center items-center'>
            <div>
                <h1 className='uppercase lg:text-5xl mb-5 font-bold '>Cox's bazar</h1>
                <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse porro, minima aperiam excepturi quam reiciendis. Quis excepturi iste non sed cumque magnam vitae omnis voluptate adipisci, enim quos eveniet Quis excepturi iste non sed cumque magnam vitae omnis voluptate adipisci, enim quos eveniet</p>

                <NavLink to="/booking"> <button className="px-5 py-2 font-bold bg-yellow-600 rounded-md text-black mt-5">Booking</button> </NavLink>
            </div>

            <div className='col-span-2'>

                <Swiper
                
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
                navigation={{nextEl:".next-button", prevEl:".prev-button", clickable:true}}
                spaceBetween={10}
                slidesPerView={3}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                effect={""}
                >
                    {
                        data && data.map(spot=> <SwiperSlide key={spot.id} style={
                            {backgroundImage:`url(${spot.thumbnail})`, height:"300px", backgroundSize:"100% 100%", backgroundColor:"#AEAEAE", backgroundBlendMode:"multiply",borderRadius:"4%", padding:"10px"}}
                         >

                            <h1 className='absolute bottom-10 text-2xl font-bold text-gray-200'>{spot.spotName}</h1>
                            </SwiperSlide> )
                    }
                    
                </Swiper>
            </div>
        </div>

            <div className='flex gap-5 w-full justify-center mt-10'>
                <button className="prev-button p-3 rounded-full text-black bg-white"><FaArrowLeft/></button>
                <button className="next-button p-3 rounded-full text-black bg-white"><FaArrowRight/></button>
            </div>
        </>
    );
};

export default HomePage;