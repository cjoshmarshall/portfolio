function Skills() {

  return (
        <>
        <div className='flex justify-center text-4xl pt-[85px] xl:pt-[105px] 2xl:text-6xl'>
          Skills
        </div>
        <div className='grid grid-cols-1 w-[80%] mx-auto my-6 gap-x-12 lg:grid-cols-2 lg:gap-x-20 xl:my-12 reveal'>
            <div className='flex flex-col'>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>HTML/CSS</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-[80%] h-3 bg-white rounded-full"></div>
                        </div>
                        <p id='bar' className='text-lg xl:text-2xl'>80%</p>
                    </div>
                </div>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>Javascript</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-[65%] h-3 bg-white rounded-full"></div>
                        </div>
                        <p className='text-lg xl:text-2xl'>65%</p>
                    </div>
                </div>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>Bootstrap/Tailwind CSS</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-[70%] h-3 bg-white rounded-full"></div>
                        </div>
                        <p className='text-lg xl:text-2xl'>70%</p>
                    </div>
                </div>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>jQUERY</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-[60%] h-3 bg-white rounded-full"></div>
                        </div>
                        <p className='text-lg xl:text-2xl'>60%</p>
                    </div>
                </div>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>Photoshop</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-1/2 h-3 bg-white rounded-full"></div>
                        </div>
                        <p className='text-lg xl:text-2xl'>50%</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>ReactJS</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-[65%] h-3 bg-white rounded-full"></div>
                        </div>
                        <p className='text-lg xl:text-2xl'>65%</p>
                    </div>
                </div>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>MySQL/NoSQL</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-[70%] h-3 bg-white rounded-full"></div>
                        </div>
                        <p className='text-lg xl:text-2xl'>70%</p>
                    </div>
                </div>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>MongoDB</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-[70%] h-3 bg-white rounded-full"></div>
                        </div>
                        <p className='text-lg xl:text-2xl'>70%</p>
                    </div>
                </div>
                <div className='m-3 xl:my-6'>
                    <p className='my-2 xl:text-xl'>NodeJS</p>
                    <div className='flex justify-between items-baseline'>
                        <div className="w-[85%] h-3 mb-4 bg-gray-500 rounded-full sm:w-[88%]">
                            <div className="w-[60%] h-3 bg-white rounded-full"></div>
                        </div>
                        <p className='text-lg xl:text-2xl'>60%</p>
                    </div>
                </div>
            </div>
        </div>        
        
        </>
    );
}

export default Skills;
