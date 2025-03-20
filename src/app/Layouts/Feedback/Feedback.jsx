import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import './Feedback.scss'

import { imageUrlFor } from '../../lib/sanityClient';

import { IoIosArrowForward, IoIosArrowBack, IoMdStar, IoMdStarOutline, IoMdStarHalf } from 'react-icons/io'


const Feedback = (testimonials) => {

    const RatingStars = ({ rating, maxRating }) => {
        const filledStarsCount = Math.floor(rating); // Number of full stars (integer part)
        const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

        const filledStars = Array.from({ length: filledStarsCount }, (_, index) => (
            <IoMdStar key={index} />
        ));

        let halfStar = null;
        if (hasHalfStar) {
            halfStar = <IoMdStarHalf />; // Render half star if there's a fractional part
        }

        const emptyStarsCount = maxRating - filledStarsCount - (hasHalfStar ? 1 : 0);
        const emptyStars = Array.from({ length: emptyStarsCount }, (_, index) => (
            <IoMdStarOutline key={index} />
        ));

        return (
            <div>
                {filledStars}
                {halfStar}
                {emptyStars}
            </div>
        );
    };

    return (
        <>
            <div className='header-feed'>
                <div>
                    <h2>Our Customer <span>Feedback</span></h2>
                    <p>Don’t take our word for it. Trust our customers</p>
                </div>

                <div className='swiper-buttons'>
                    <div className='swiper-button-pre'><IoIosArrowBack /> PREVIOUS</div>
                    <div className='swiper-button-nex'>NEXT <IoIosArrowForward /></div>
                </div>
            </div>


            <Swiper
                slidesPerView={3}
                loop={true}
                grabCursor={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                pagination={{
                    el: '.swiper-pag',
                    clickable: true,
                }}
                navigation={{
                    prevEl: '.swiper-button-pre',
                    nextEl: '.swiper-button-nex',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {testimonials?.map((testimonial, index) =>
                    <SwiperSlide key={index}>
                        <div className="container">
                            <div className='header'>
                                <img src={imageUrlFor(testimonial.image) ? imageUrlFor(testimonial.image) : TestFeed} alt={testimonial.image.alt} />


                                <div className='stars-feed'>
                                    <RatingStars rating={testimonial.rating} maxRating={5} />
                                </div>
                            </div>

                            <div className='body'>
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.message}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>



        </>
    )
}

export default Feedback