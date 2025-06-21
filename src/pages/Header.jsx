import reactLogo from '../assets/react.svg';
import viteLogo from  '../assets/vite.svg';

export default function Header() {
  return (
    <section className='Header'>
      <div className='flex flex-row px-8 sm:px-16 py-5 sm:py-6 gap-x-1 sm:gap-x-1.5 font-poppins font-bold text-white bg-slate-600 items-center'>
        <img className='h-[28px] sm:h-[36px] object-cover' src={viteLogo} alt='vite logo'/>
        <h1 className='text-2xl sm:text-5xl'>Vite</h1>
        <h1 className='ml-0.5 sm:ml-1 mr-0.5 sm:mr-1 text-2xl sm:text-5xl'>+</h1>
        <img className='h-[28px] sm:h-[36px] object-cover' src={reactLogo} alt='react logo'/>
        <h1 className='text-2xl sm:text-5xl'>React</h1>
        <h1 className='ml-1 text-2xl sm:text-5xl'>: App Task List</h1>
      </div>
    </section>
  )
}
