import React from 'react';
import vm_img1 from './vm_img1.png'
import vm_img2 from './vm_img2.png'
import vm_img3 from './vm_img3.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function Projects() {
  return (
        <>
            <div className='flex justify-center text-4xl pt-[85px] 2xl:mb-24 2xl:pt-[100px] 2xl:text-6xl'>
                Projects
            </div>
            <div className=''>
                <div className='mx-10 my-16  box-border border-2 reveal'>
                    <div className='flex flex-col lg:grid lg:grid-cols-2'>
                        <div className='scale-75 transition ease-out hover:scale-90'>
                            <a href='https://www.google.com' target='_blank' rel="noreferrer">
                                <div className='h-full'>
                                    <img className='absolute w-full animate-fade1' src={vm_img1} alt=' ' />
                                    <img className='absolute w-full animate-fade2' src={vm_img2} alt=' ' />
                                    <img className='w-full animate-fade3' src={vm_img3} alt=' ' />
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
                            <p className='text-2xl'>Vintage Motors Rentals - Personal Project</p>
                            <ul className='flex justify-center my-3 text-xl'>
                                <li className='mx-6'>ReactJS</li>
                                <li className='mx-6'>NodeJS</li>
                                <li className='mx-6'>MongoDB</li>
                                <li className='mx-6'>AWS</li>
                            </ul>
                            <div className='2xl:my-12 2xl:text-xl'>
                                <p className='my-2'>Description:</p>
                                <p>A completely responsive e-commerce site for renting Bikes implemented using the MERN stack.</p>
                            </div>
                            
                        <div className='flex justify-end mx-4 mt-6'>
                            <a href='https://www.github.com' target='_blank'>
                                <LinkIcon className='hover:transition ease-out hover:scale-150 mx-2'/>
                                <GitHubIcon className='hover:transition ease-out hover:scale-150 mx-2'/>
                            </a>
                        </div>
                        </div>
                    </div>                    
                </div>

                <div className='mx-10 my-16  box-border border-2 reveal'>
                    <div className='flex flex-col lg:grid lg:grid-cols-2'>
                        <div className='scale-75 transition ease-out hover:scale-90'>
                            <a href='https://www.google.com' target='_blank' rel="noreferrer">
                                <div className='h-full'>
                                    <img className='absolute w-full animate-fade1' src={vm_img1} alt=' ' />
                                    <img className='absolute w-full animate-fade2' src={vm_img2} alt=' ' />
                                    <img className='w-full animate-fade3' src={vm_img3} alt=' ' />
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
                            <p className='text-2xl'>Messenger App - Personal Project</p>
                            <ul className='flex justify-center my-3 text-xl'>
                                <li className='mx-6'>ReactJS</li>
                                <li className='mx-6'>NodeJS</li>
                                <li className='mx-6'>MongoDB</li>
                                <li className='mx-6'>socket.io</li>
                            </ul>
                            <div className='2xl:my-12 2xl:text-xl'>
                                <p className='my-2'>Description:</p>
                                <p>A completely responsive common messenger application created using the MERN stack with socket.io</p>
                            </div>
                            
                        <div className='flex justify-end mx-4 mt-6'>
                            <a href='https://www.github.com' target='_blank'>
                                <LinkIcon className='hover:transition ease-out hover:scale-150 mx-2'/>
                                <GitHubIcon className='hover:transition ease-out hover:scale-150 mx-2'/>
                            </a>
                        </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    );
}

export default Projects;
