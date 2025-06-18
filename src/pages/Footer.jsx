export default function Footer() {
  return (
    <section className='Footer'>
      <div className='flex flex-col sm:flex-row px-4 sm:px-2 py-4 gap-x-2 text-base sm:text-lg text-white bg-slate-600 items-center justify-center'>
        <span>&#169; { `${new Date().getFullYear()} TailwindCSS Theme - Made By`}</span>
        <a href='https://github.com/9Bank-Git' target='_blank' title='Visit GitHub' className='pl-2 text-cyan-300 no-underline hover:underline'>9BANK-GitHub</a>
      </div>
    </section>
  )
}
