import React from 'react';
import icon_mongodb from './icon_mongodb.png'
import icon_express from './icon_express.png'
import icon_react from './icon_react.png'
import icon_node from './icon_node.png'

function About() {
  return (
      <>
        <div className='flex justify-center text-4xl pt-[85px] xl:pt-[100px] 2xl:text-6xl'>
            About
        </div>
        <div className='grid place-content-center h-1/2 text-2xl reveal'>
            <p>Hi, You could just call me <b>Josh</b></p>
            <div className='flex'>
                <p>I'm a <b>Full Stack Developer</b></p>
                <div className='flex ml-8'>
                    <img className='mx-2 h-8' src={icon_mongodb} alt=' ' />
                    <img className='m-2 h-4' src={icon_express} alt=' ' />
                    <img className='mx-1 h-8' src={icon_react} alt=' ' />
                    <img className='mx-1 h-8' src={icon_node} alt=' ' />
                </div>                
            </div>            
            <p>with a bachelor's degree in <b>Electronics and Communications</b></p>
            <p>Based in <b>Tamil Nadu, India</b></p>
        </div>
        <div className='flex justify-center'>
            <a href='https://drive.google.com/file/d/1vs0a-XtPDvzKzFWrMJffBezib0o5Mr1B/view?usp=sharing' target='_blank'>                
                <p className='text-lg hover:border-b-2'>Click here for my résumé</p>
            </a>
        </div>
    </>
    );
}

export default About;
