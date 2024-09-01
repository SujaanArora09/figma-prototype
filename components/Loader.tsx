import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2 bg-white'>
    <Image
      src='/assets/loader.gif'
      alt='loader'
      width={250}
      height={10}
      className='object-contain'
      
    />
    <p className='text-sm font-bold text-primary-grey-100'>Loading</p>
  </div>
);

export default Loader;
