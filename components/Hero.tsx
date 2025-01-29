import Image from 'next/image'
import Button from './Button'


const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500'>
      <div className="hero-map" />
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
      <Image 
      src="/Camp.svg"
      alt="Camp"
      width={50}
      height={50}
      className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'/>
      <h1 className='bold-52 lg:bold-88'>Wild Wonder Camp Area</h1>
      <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
      Wild Wonder Camp Area is a thrilling escape where adventure meets curiosity! 
      Nestled in the heart of nature, it offers a perfect blend of fun, exploration,
       and hands-on learning. From trekking through scenic trails to engaging in 
       interactive workshops, every moment sparks excitement and discovery. 
       Whether you’re seeking outdoor thrills or knowledge-packed activities, this camp 
       promises unforgettable experiences. Get ready to unleash your wild spirit and 
       embrace the wonders of nature! 
      </p>
      <div className='my-11 flex flex-wrap gap-5'>
        <div className='flex items-center gap-2'>
          {Array(5).fill(1).map((_, index) => (
            <Image
            src="/Star.svg"
            key={index}
            alt='star'
            width={24}
            height={24} 
            />
          ) )}
        </div>
        <p className='bold-16 lg:bold-20 text-blue-70'>
          278K
          <span className='regular-16 lg:regular-20 ml-1 underline'> Outstanding Reviews</span>
        </p>
      </div>
      <div className='flex flex-col w-full gap-3 sm:flex-row'>
        <Button
        type="button"
        title='Download App'
        variant='btn_green' />

<Button
        type="button"
        title='How We Work?'
        icon='/Play.svg'
        variant='btn_white_text' />

      </div>
      </div>
      
    </section>
  )
}

export default Hero