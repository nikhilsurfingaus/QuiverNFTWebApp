import { Link } from '@mui/material'
import React from 'react'
import projectImg from './../../../assets/images/And.png'
import styled from 'styled-components'

const ProjectItemStyles = styled.div`
  .projectItem-img {
    width: 100%;
    height: 450px;
    overflow: hidden;
    display: inline-block;
    img {
      height: 100%;
      width: 80%;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      border: 3px solid var(--gray-2);
      margin-left: auto;
      margin-right: auto;
      display: block;

    }
  }
  .projectItem-info {
    margin-top: -1rem;
    background-color: #0c264f;
    padding: 1rem;
    border-radius: 12px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .projectItem-title {
    font-size: 1.8rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    color: white;

  }
  .projectItem-desc {
    font-size: 1rem;
    margin-top: 1rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .projectItem-info .create__btn i {
    font-size: 1.4rem !important;
  }

  .projectItem-info .create__btn {
    margin: auto;
    display: block;
  }
  @media only screen and (max-width: 768px) {
    .projectItem-img {
      height: 350px;
      img {
        height: 150px;
      }
    }

    .projectItem-title {
      font-size: 1.4rem;
    }
    .projectItem-desc {
      font-size: 0.8rem;
      line-height: 1.4;
      text-align:justify;
      text-align-last:justify;
    }
    .projectItem-info .create__btn i {
      font-size: 1.2rem !important;
    }
  }
`;


export default function ProjectItem( {
    img  = projectImg, 
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link = "https://www.google.com/"
}) {
  return (
    <div>
        <ProjectItemStyles>
        <Link to="/home" className='projectItem-img'>
            <img src={img} alt='project' /> 
        </Link>
        <div className="projectItem-info">
            <h3 className='projectItem-title'>{title}</h3>
            <p className='projectItem-desc'>{desc}</p>
            <button className="create__btn d-flex align-items-center gap-2">
                  <i className="but ri-information-line"></i>
                  <a target="_blank" rel="noopener noreferrer" href={link}>Learn More</a>
            </button>
        </div>
        </ProjectItemStyles>
    </div>
  )
}
