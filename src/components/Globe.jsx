import React from 'react'
import Globe from "react-globe.gl";

const GlobE = () => {
  return (
    <section className='bg-black-100 p-8 rounded-2xl shadow-lg'>
      <div className="rounded-3xl w-3/5 mx-auto sm:h-[326px] h-fit flex justify-center items-center mb-6">
        <Globe
          height={326}
          width={326}
          backgroundColor="rgba(0,0,0,0)"
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          labelsData={[
            {
              lat: 24,
              lng: 90,
              text: "I'm here!",
              color: "white",
              size: 20,
            },
          ]}
        />
      </div>
      <p className="grid-headtext text-white text-xl font-semibold text-center mb-2">
        I work remotely across most timezones.
      </p>
      <p className="grid-subtext text-gray-300 text-center">
        I'm based in <span className='font-bold'>Bangladesh</span>, with remote work available.
      </p>
    </section>
  )
}

export default GlobE