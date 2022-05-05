function Header() {

  return (
    <div> 
        <ul className='gap-x-[80px] justify-center py-6 font-marcellus text-lg fixed top-0 inset-x-0 z-10 bg-gradient-to-b from-black via-black hidden md:flex'>
          <li className='hover:text-xl'><a href='#'>HOME</a></li>
          <li className='hover:text-xl'><a href='#about'>ABOUT</a></li>
          <li className='hover:text-xl'><a href='#projects'>PROJECTS</a></li>
          <li className='hover:text-xl'><a href='#skills'>SKILLS</a></li>
          <li className='hover:text-xl'><a href='#contact'>CONTACT</a></li>
        </ul>
    </div>
    )
}

export default Header;
