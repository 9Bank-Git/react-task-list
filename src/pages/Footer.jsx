export default function Footer() {
  return (
    <section className='Footer'>
      <div className='flex flex-col sm:flex-row p-3 gap-x-2 text-white bg-slate-600 items-center justify-center text-sm sm:text-base'>
        <span>&#169; { `${new Date().getFullYear()} TailwindCSS Theme - Made By`}</span>
          <a href='https://github.com/9Bank-Git' target='_blank' title='Visit GitHub' className='pl-2 text-cyan-300 no-underline hover:underline'>9BANK-GitHub</a>
      </div>
    </section>
  )
}