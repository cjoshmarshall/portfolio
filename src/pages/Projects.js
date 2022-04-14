import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import {projects} from "../data.js"

function Projects() {
  return (
        <>
            <div className='flex justify-center text-4xl pt-[85px] 2xl:mb-24 2xl:pt-[100px] 2xl:text-6xl'>
                Projects
            </div>
            <div className=''>
                {projects.map(project=>(
                    <div className='mx-10 my-16  box-border border-2 reveal' key={project.id}>
                    <div className='flex flex-col lg:grid lg:grid-cols-2'>
                        <div className='scale-75 transition ease-out hover:scale-90'>
                            <a href={project.link} target='_blank' rel="noreferrer">
                                <div className='h-full'>
                                    <img className='absolute w-full animate-fade1' src={project.image1} alt=' ' />
                                    <img className='absolute w-full animate-fade2' src={project.image2} alt=' ' />
                                    <img className='w-full animate-fade3' src={project.image3} alt=' ' />
                                </div>
                                <div className='absolute top-0 left-0 w-full h-full  bg-black opacity-0 hover:opacity-100 hover:bg-opacity-50 transition'>
                                    <div className='grid place-content-center h-full text-4xl text-white bg-opacity-100'>
                                        <div className='flex'>
                                            <p>go to site</p>
                                            <div><LinkIcon className='scale-150 mx-4'/></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='p-8 lg:px-0 lg:w-11/12'>
                            <p className='text-2xl'>{project.title}</p>
                            <ul className='flex justify-center my-3 text-xl'>
                            {project.tech.map(items=>(
                                <li className='mx-6'>{items}</li>
                                ))}
                            </ul>
                            <div className='2xl:my-12 2xl:text-xl'>
                                <p className='my-2'>Description:</p>
                                <p>{project.description}</p>
                            </div>
                            
                        <div className='flex justify-end mx-4 mt-6'>
                            <a href={project.link} target='_blank'>
                                <LinkIcon className='hover:transition ease-out hover:scale-150 mx-2'/>
                            </a>
                            <a href={project.githubclient} target='_blank'>
                                <GitHubIcon className='hover:transition ease-out hover:scale-150 mx-2'/>
                            </a>
                            <a href={project.githubserver} target='_blank'>
                                <GitHubIcon className='hover:transition ease-out hover:scale-150 mx-2'/>
                            </a>                        
                        </div>
                        </div>
                    </div>                    
                </div>
                ))}
            </div>
        </>
    );
}

export default Projects;
