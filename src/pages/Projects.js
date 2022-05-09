import LaunchIcon from '@mui/icons-material/Launch';

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
                            <a href={project.link} target='_blank' rel="noopener noreferrer">
                                <div className='h-full'>
                                    <img className='absolute w-full animate-fade1' src={project.image1} alt=' ' />
                                    <img className='absolute w-full animate-fade2' src={project.image2} alt=' ' />
                                    <img className='w-full animate-fade3' src={project.image3} alt=' ' />
                                </div>
                                <div className='absolute top-0 left-0 w-full h-full  bg-black opacity-0 hover:opacity-100 hover:bg-opacity-60 transition'>
                                    <div className='grid place-content-center h-full text-4xl text-white bg-opacity-100'>
                                        <div className='flex'>
                                            <p>go to site</p>
                                            <div><LaunchIcon className='scale-150 mx-4'/></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='p-8 lg:px-0 lg:w-11/12'>
                            <p className='text-2xl'>{project.title}</p>
                            <ul className='flex justify-center my-3 md:text-xl'>
                            {project.tech.map(items=>(
                                <li className='mx-6' key={items}>{items}</li>
                                ))}
                            </ul>
                            <div className='2xl:my-12 2xl:text-xl'>
                                <p className='my-2'>Description:</p>
                                <p>{project.description}</p>
                            </div>                            
                        
                            <ul className='flex justify-between mt-6 text-l sm:justify-evenly'>
                                <li className='flex mx-2 cursor-pointer hover:underline'>
                                    <a href={project.githubclient} target='_blank'>
                                        Go to Git-Client
                                    </a>
                                    <span className='hidden sm:block'><LaunchIcon className='mx-2'/></span>
                                </li>
                                <li className='flex mx-2 cursor-pointer hover:underline'>
                                    <a href={project.githubserver} target='_blank'>
                                        Go to Git-Server
                                    </a>
                                    <span className='hidden sm:block'><LaunchIcon className='mx-2'/></span>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </div>
                ))}
            </div>
        </>
    );
}

export default Projects;
