import './Testimonial.css';
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import Avatar5 from '../../assets/avatar2.jpg'
import Avatar6 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        "avatar": Avatar1,
        "name": "John Doe",
        "id": 1,
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique elit in metus venenatis, sit amet auctor lacus volutpat. Nulla facilisi."
    },
    {
        "avatar": Avatar2,
        "name": "Jane Smith",
        "id": 2,
        "review": "Curabitur at velit id lectus efficitur sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque mattis semper ligula id gravida."
    },
    {
        "avatar": Avatar3,
        "name": "Mark Johnson",
        "id": 3,
        "review": "Nam a leo ut metus efficitur efficitur. Aenean vitae tincidunt urna. Nulla id facilisis velit. Duis ac nisi ac ex faucibus pharetra. Ut ac rhoncus urna."
    },
    {
        "avatar": Avatar4,
        "name": "Emily Davis",
        "id": 4,
        "review": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis maximus, nunc vitae cursus condimentum, dui odio hendrerit tellus, at condimentum purus urna non sapien."
    },
    {
        "avatar": Avatar5,
        "name": "Michael Brown",
        "id": 5,
        "review": "Vestibulum hendrerit orci libero, ut eleifend arcu tristique a. Suspendisse faucibus urna tortor, sed elementum ex faucibus id. Cras dignissim felis non mi semper malesuada."
    },
    {
        "avatar": Avatar6,
        "name": "Olivia Wilson",
        "id": 6,
        "review": "Etiam eu finibus nibh. Fusce dapibus tincidunt lacinia. Aliquam eget elit a elit cursus feugiat. Mauris finibus mi a diam venenatis egestas. Nulla dictum lorem at commodo fringilla."
    }
]


const Testimonial = () => {
    return (
        <section id='testimonial'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                {
                    reviews.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide className="testimonial" key={index}>
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className="avatar__name">
                                    {name}
                                </h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    );
};

export default Testimonial;