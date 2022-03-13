import React from 'react';

function Header() {
  return (
    <div> 
        <ul className='flex gap-x-[100px] justify-center py-6 font-marcellus text-lg fixed top-0 inset-x-0 z-10 bg-gradient-to-b from-black via-black'>
          <li className='hover:text-xl'><a href='#'>HOME</a></li>
          <li className='hover:text-xl'><a href='#about'>ABOUT</a></li>
          <li className='hover:text-xl'><a href='#projects'>PROJECTS</a></li>
          <li className='hover:text-xl'><a href='#skills'>SKILLS</a></li>
        </ul>
    </div>
    )
}

export default Header;
