import reactLogo from '../assets/react.svg';
import viteLogo from  '../assets/vite.svg';

export default function Header() {
  return (
    <>
    <section className='Header'>
      <div className='flex flex-row px-6 sm:px-10 py-5 sm:py-6 gap-x-1 bg-slate-600 items-center'>
        <img className='h-[28px] sm:h-[36px] object-cover' src={viteLogo} alt='vite logo'/>
        <h1 className='font-poppins font-bold text-white text-2xl sm:text-5xl'>Vite</h1>
        <h1 className='ml-0.5 mr-0.5 font-poppins font-bold text-white text-2xl sm:text-5xl'>+</h1>
        <img className='h-[28px] sm:h-[36px] object-cover' src={reactLogo} alt='react logo'/>
        <h1 className='font-poppins font-bold text-white text-2xl sm:text-5xl'>React</h1>
        <h1 className='ml-1 font-poppins font-bold text-white text-2xl sm:text-5xl'>: Task List</h1>
      </div>
    </section>
    </>
  )
}
