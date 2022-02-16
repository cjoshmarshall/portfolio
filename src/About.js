import React from 'react';

function About() {
  return (
      <>
        <div className='flex justify-center text-4xl pt-[85px] xl:pt-[100px] xl:text-6xl'>
            About
        </div>
        <div className='grid place-content-center h-1/2 text-2xl reveal'>
            <p>Hi, My name is <b>Josh</b></p>
            <p>I'm a <b>Full Stack Developer</b></p>
            <p>with a bachelor's degree in <b>Electronics and Communications</b></p>
            <p>Based in <b>Tamil Nadu, India</b></p>
        </div>
        <div className='flex justify-center'>
            <a href='https://drive.google.com/file/d/1BPm496p6hMDDKOzaO3uvfxw15d-82q3E/view?usp=sharing' target='_blank'>                
                <p className='text-lg hover:border-b-2'>Click here for my résumé</p>
            </a>
        </div>
    </>
    );
}

export default About;
