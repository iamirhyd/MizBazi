import React from 'react'
import Beams from './Beams'

const landingPage = () => {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden ">

        <div className="absolute inset-0 z-0 ">
          <Beams
            beamWidth={1.2}
            beamHeight={20}
            beamNumber={37}
            lightColor="red"
            speed={2}
            noiseIntensity={1.2}
            scale={0.2}
            rotation={24}
          />
        </div>

        {/*Text*/}

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 px-4 text-center">
          <h1 className="text-white font-bold  text-3xl sm:text-4xl md:text-7xl">
            Cubic Moves
          </h1>

          <h2 className="text-gray-50 font-bold
          text-sm sm:text-base md:text-2xl
          max-w-sm sm:max-w-md md:max-w-3xl
        leading-relaxed">
            Everything starts with just a cube
          </h2>

          {/* <button className='text-black cursor-pointer bg-white '>Get Started</button> */}


        </div>

      </section >


    </>

  )
}

export default landingPage