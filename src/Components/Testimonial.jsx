import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Data } from "./Data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../App/App.css'
import { Pagination, Navigation } from "swiper";



export default function Testimonial(){
    return(
        <>
        <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }} className='text-right'>
          <p className='text-5xl italic'>Testimonials</p>
          <p className='text-small text-gray-400 italic'>What others say about me</p>
          <motion.hr initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: 1.5 }} className=" h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        </motion.div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Data.map(({ id, image, title, description }) => {
            return (
                <SwiperSlide key={id}>

                    <div className="mx-auto text-center testimonial-cards w-full h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10 ">
                            <br></br>
                            <img className="w-20 h-20 mb-3 rounded-full shadow-lg" src={image} alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
                            <p className="mb-3 text-gray-500 dark:text-gray-400 testimonial-description">{description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        })}
        </Swiper>
        <br/>
        </>
    )
}