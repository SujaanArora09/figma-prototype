interface HeroProps {
  onGetStarted: () => void; // Define the type of the onGetStarted prop as a function returning void
}


export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className='relative bg-white'>
      <div className='relative h-full w-full bg-[url("/assets/boxes.svg")] '>
        <div className='bg-grid-black/[0.2] dark:bg-grid-white/[0.2] absolute inset-0 bg-[length:50px_50px] dark:bg-[length:50px_50px]'></div>
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>
        <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6'>
          <div className='pb-12 pt-32 md:pb-20 md:pt-40'>
            <div className='pb-12 text-center md:pb-16'>
              <h1
                className='leading-tighter mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl'
                data-aos='zoom-y-out'
              >
                Think
                <span className='bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'>
                  {" "}
                  Bigger.
                </span>{" "}
                Build{" "}
                <span className='bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent'>
                  Faster.
                </span>
              </h1>
              <div className='mx-auto max-w-3xl'>
                <p
                  className='mb-8 text-xl text-gray-600'
                  data-aos='zoom-y-out'
                  data-aos-delay='150'>
                  Figma helps design and development teams build great products,
                  together.
                </p>

                <div>
                  <button
                    className='w-40 rounded-md bg-blue-600 p-3 text-white hover:bg-blue-700'
                    onClick={onGetStarted} >
                    Start Designing
                  </button>
                </div>
              </div>
            </div>
            <div className='mb-12 mt-12 flex justify-center  '>
              <video
                className='w-full rounded-lg shadow-lg'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src='/assets/figma-video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
