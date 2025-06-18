import reactLogo from '../assets/react.svg';
import viteLogo from  '../assets/vite.svg';

export default function Header() {
  return (
    <>
    <section className='Header'>
      <div className='flex flex-row px-4 sm:px-6 py-4 sm:py-5 gap-x-1 bg-slate-600 items-center'>
        <img className='h-[20px] sm:h-[28px] object-cover' src={viteLogo} alt='vite logo'/>
        <h1 className='font-poppins font-semibold text-white text-2xl sm:text-4xl'>Vite</h1>
        <h1 className='ml-0.5 mr-0.5 font-poppins font-semibold text-white text-2xl sm:text-4xl'>+</h1>
        <img className='h-[20px] sm:h-[28px] object-cover' src={reactLogo} alt='react logo'/>
        <h1 className='font-poppins font-semibold text-white text-2xl sm:text-4xl'>React</h1>
        <h1 className='ml-1 font-poppins font-semibold text-white text-2xl sm:text-4xl'>: Task List</h1>
      </div>
    </section>
    </>
  )
}
