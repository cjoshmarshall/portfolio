import Reactnpm from 'react';

function Home() {

  
  
  function load(){
    console.log("hi")
    var loaded=document.querySelectorAll('.load')
    loaded.classList.add('active');
      
  }

  return (
    <>
      <div className='grid place-content-center h-screen' onLoad={load}>
        <div className='flex load active'>
          <p className='my-2 text-5xl sm:text-7xl'>Hi there</p>
          <p className='m-2 text-5xl sm:text-7xl animate-bounce'>!</p>
        </div>
        <p className='my-2 text-5xl sm:text-7xl'>I'm Joshua Marshall</p>
        <p className='my-2 text-3xl xl:mb-12'>FULL STACK DEVELOPER</p> 
      </div>
    </>
  )
}

export default Home;
