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
        <div className="components">
        <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }} className='text-right'>
          <p className='text-5xl italic'>Testimonials</p>
          <p className='text-small text-gray-400 italic'>What others say about me</p>

          <motion.hr initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: 1.5 }} className=" h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
            <div class="absolute px-4 -translate-x-1/2 bg-none left-1/2 dark:bg-gray-900">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            </div>
        </motion.div>
        <br></br>
        <Swiper
        // slidesPerView={1}
        // spaceBetween={30}
        // slidesPerGroup={1}
        breakpoints={{
            576: {
              slidesPerView: 1,
            },
            1080: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30
              },
          }}
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
                            <img className="w-20 h-20 mb-3 rounded-full shadow-lg" src={image} alt="Avatar"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
                            <p className="mb-3 text-gray-500 dark:text-gray-400 testimonial-description">{description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            );
        })}
        </Swiper>
        <br/>
        </div>
    )
}