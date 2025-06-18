export default function Counter({ tasksActive, tasksTotal, openModalDialog }) {
  // const {tasksActive, tasksTotal, openModal} = prop;
  return (
    <section className='CountTask'>
      <div className='flex flex-col gap-y-2 sm:flex-row justify-between items-center'>
        <span className='font-normal text-base'>
          Active : {tasksActive} out of {tasksTotal} tasks
        </span>
        <button 
          type='button' 
          onClick={() => openModalDialog(false, 'reset')}
          className='px-8 h-6.5 font-medium text-sm rounded-md shadow-sm outline outline-black/20 text-gray-600 bg-gray-50 hover:bg-gray-200' 
          title='Reset'
        >
          Reset
        </button>
      </div>
    </section>
  )
}


