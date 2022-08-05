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
  }
`;


export default function ProjectItem( {
    img  = projectImg, 
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
        </div>
        </ProjectItemStyles>
    </div>
  )
}
