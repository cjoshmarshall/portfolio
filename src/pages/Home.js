import React from 'react';

function Home() {

  return (
    <>
      <div className='grid place-content-center h-screen'>
        <div className='flex load active'>
          <p className='my-2 text-5xl sm:text-7xl animate-text1'>Hi there</p>
          <div className='m-2 text-5xl sm:text-7xl animate-text1'><p className='animate-bounce'>!</p></div>
        </div>
        <p className='my-2 text-5xl sm:text-7xl'>I'm Joshua Marshall</p>
        <p className='my-2 text-3xl xl:mb-12'>FULL STACK DEVELOPER</p> 
      </div>
    </>
  )
}

export default Home;
