import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/person1.jpg";
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data=[{id:0,image:AVTR1,title:'Ernest Achiever',
content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eteveniet harum illum porro! Adipisci perspiciatis iste reprehenderitaccusantium incidunt minus commodi corruptidolor maximeasperiores nobis sapiente qui tempora"},{id:1,image:AVTR1,title:'Ernest Achiever',
content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eteveniet harum illum porro! Adipisci perspiciatis iste reprehenderitaccusantium incidunt minus commodi corruptidolor maximeasperiores nobis sapiente qui tempora"},{id:2,image:AVTR1,title:'Ernest Achiever',
content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eteveniet harum illum porro! Adipisci perspiciatis iste reprehenderitaccusantium incidunt minus commodi corruptidolor maximeasperiores nobis sapiente qui tempora"},{id:3,image:AVTR1,title:'Ernest Achiever',
content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eteveniet harum illum porro! Adipisci perspiciatis iste reprehenderitaccusantium incidunt minus commodi corruptidolor maximeasperiores nobis sapiente qui tempora"}];
const Testimonials = () => {

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {data.map(listItem=><SwiperSlide className="testimonial">
  <div className="client_avatar">
    <img src={listItem.image} alt="" />
  </div>
  <h5 className="client_name">{listItem.title}</h5>
  <small className="client_review">{listItem.content}
  </small>
</SwiperSlide>)}
      </Swiper>
    </section>
  );
};

export default Testimonials;
