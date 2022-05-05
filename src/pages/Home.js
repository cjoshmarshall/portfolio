function Home() {

  return (
    <div className="">
      <div className='grid relative place-content-center h-screen overflow-hidden text-clip whitespace-nowrap'>
        <div className='flex load active'>
          <p className='my-2 text-4xl md:text-5xl lg:text-7xl animate-text1'>Hi there</p>
          <div className='m-2 text-4xl md:text-5xl lg:text-7xl animate-text1'><p className='animate-bounce'>!</p></div>
        </div>
        <p className='my-2 text-4xl md:text-5xl lg:text-7xl'>I'm Joshua Marshall</p>
        <div className="">
          <p className='my-2 md:text-2xl lg:text-3xl xl:mb-12 animate-move1 absolute'>FULL STACK DEVELOPER</p> 
          <p className='my-2 md:text-2xl lg:text-3xl xl:mb-12 animate-move2 absolute'>FULL STACK DEVELOPER</p> 
          <p className='my-2 md:text-2xl lg:text-3xl xl:mb-12 animate-move3 absolute'>FULL STACK DEVELOPER</p> 
        </div>
      </div>
    </div>
  )
}

export default Home;
