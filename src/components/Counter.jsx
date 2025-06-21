export default function Counter({ tasksActive, tasksTotal, openModalDialog }) {
  return (
    <section className='Counter'>
      <div className='flex flex-col sm:flex-row gap-y-2 mt-2 justify-between items-center'>
        <span className='font-normal text-base sm:text-lg'>
          Active : {tasksActive} out of {tasksTotal} tasks
        </span>
        <button
          type='button'
          title='Remove all'
          onClick={() => openModalDialog(false, 'reset')}
          className='px-8 py-1 font-medium text-sm sm:text-base rounded-md shadow outline outline-black/15 text-gray-600 bg-gray-50 hover:bg-gray-200'
        >
          Reset
        </button>
      </div>
    </section>
  )
}


