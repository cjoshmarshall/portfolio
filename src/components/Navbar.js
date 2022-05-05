import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function Navbar() {
  
  const [toggle, setToggle] = useState(true);



  const handleToggle=()=>{        
      setToggle(toggle=>!toggle);
      const navbar=document.getElementById("navbar")
      const navbar_menu=document.getElementById("navbar_menu")
      if(toggle==true){
        navbar.style.backgroundColor=" rgba(0, 0, 0, 0.8)"
        navbar_menu.style.display="block"
      }else{
        navbar.style.backgroundColor="transparent"
        navbar_menu.style.display="none"
      }
  }


  return (
    <>
      <div className='fixed w-[100%] text-2xl md:text-3xl transition ease-out duration-200 z-50 md:hidden' id="navbar">
        <div className='flex w-[97%] place-content-end cursor-pointer fixed' onClick={handleToggle}>
          {toggle?<MenuIcon className='absolute my-4 z-50' fontSize='large' />:
          <CloseIcon className='absolute my-4 z-50' fontSize='large' />}
        </div>
        <ul className='font-marcellus opacity-100 hidden' id="navbar_menu">
          <li className='block w-fit mx-auto my-20 cursor-pointer' onClick={handleToggle}>
            <a href='#'>HOME</a>
          </li>
          <li className='block w-fit mx-auto my-20 cursor-pointer' onClick={handleToggle}>
            <a href='#about'>ABOUT</a>
          </li>
          <li className='block w-fit mx-auto my-20 cursor-pointer' onClick={handleToggle}>
            <a href='#projects'>PROJECTS</a>
          </li>
          <li className='block w-fit mx-auto my-20 cursor-pointer' onClick={handleToggle}>
            <a href='#skills'>SKILLS</a>
          </li>
          <li className='block w-fit mx-auto my-20 cursor-pointer' onClick={handleToggle}>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </>
  )
} 

export default Navbar