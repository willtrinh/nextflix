import Image from 'next/image';
import { useRouter } from 'next/router';
export default function Custom404() {
  const router = useRouter();
  return (
    <div className='bg-white w-screen h-screen flex justify-center items-center '>
      <Image src='/images/404.svg' alt='404' width={900} height={900} />
      <button
        className='absolute bottom-16 text-black border-2 border-black uppercase px-4 py-1.5 rounded font-medium tracking-wide hover:bg-black hover:text-white transition duration-200'
        onClick={() => router.push('/')}
      >
        Go back
      </button>
    </div>
  );
}
