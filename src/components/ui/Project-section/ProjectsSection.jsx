import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import projectData from '../../../assets/data/projectdata';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);


const ProjectSectionStyle = styled.div`
  padding: 0rem 0;
  .projects-all {
    display: flex;
    gap: 3rem;
    margin-top: 0rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 0px;
    width: 80px;
    z-index: 10;
    border-radius: 8px;
    top: 30%;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    .projects-all {
      max-width: 96%;
      margin: 0 auto;
      margin-top: -2.5rem;
      margin-bottom: -1.8rem;
      gap: 5rem;
      .projectItem-img {
        width: 100%;
        height: 50%;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      height: 0px;
      width: 12px;
      z-index: 10;
      border-radius: 8px;
      top: 20%;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 1.5rem;
    }
  }
`;

function Projects() {
  return (
    <>
    <ProjectSectionStyle>
    <div className="container animate__animated animate__fadeInLeft">
      <div className="projects-all">
        <Swiper spaceBetween={30} slidesPerView={1} navigation 
                style={{"--swiper-pagination-color": "#fff", "--swiper-navigation-color": "#fff",}}>
          {projectData.map((project, index) =>{
            return (
              <SwiperSlide key={project.id} >
                <ProjectItem title={project.name} img={project.img} desc={project.desc} link={project.link} />
              </SwiperSlide>  
            )
          })}
        </Swiper>
      </div>
    </div>
    </ProjectSectionStyle>
    </>
  )
}

export default Projects