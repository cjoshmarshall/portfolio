import icon_mongodb from '../assets/icon_mongodb.png'
import icon_express from '../assets/icon_express.png'
import icon_react from '../assets/icon_react.png'
import icon_node from '../assets/icon_node.png'

function About() {
  return (
      <>
        <div className='flex justify-center text-4xl pt-[85px] xl:pt-[100px] 2xl:text-6xl'>
            About
        </div>
        <div className='grid place-content-center mx-12 h-1/2 text-center reveal lg:text-2xl'>
            <p>Hi, You can just call me <b>Josh</b></p>
            <div className='flex justify-center'>
                <p>I'm a <b>Full Stack Developer</b></p>
                <div className='hidden ml-8 lg:flex'>
                    <img className='mx-2 h-8' src={icon_mongodb} alt=' ' />
                    <img className='m-2 h-4' src={icon_express} alt=' ' />
                    <img className='mx-1 h-8' src={icon_react} alt=' ' />
                    <img className='mx-1 h-8' src={icon_node} alt=' ' />
                </div>                
            </div>            
            <p>with a bachelor's degree in <b>Electronics and Communications</b></p>
            <p>Based in <b>Tamil Nadu, India</b></p>
        </div>
        <ul className='flex justify-evenly'>                
            <li className='lg:text-lg hover:border-b-2'>
                <a href='https://drive.google.com/file/d/1GKAFIFHIdcJGFLEh0sQPjMzcWF4fFLxk/view' target='_blank'>
                    Click here for my résumé
                </a>
            </li>                
            <li className='lg:text-lg hover:border-b-2'>
                <a href='https://github.com/cjoshmarshall' target='_blank'>
                    Go to my Github profile
                </a>
            </li>            
        </ul>
    </>
    );
}

export default About;
