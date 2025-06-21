export default function AddTask({ task, setTask, addTask }) {
  return (
    <section className='AddTask'>
      <form onSubmit={(e) => {addTask(task); e.preventDefault(); setTask('')}}>
        <h6 className='text-base sm:text-lg mt-2 mb-1'>Crate New Task</h6>
        <div className='flex flex-row text-base'>
          <input
            type='text'
            value={task}
            maxLength='60'
            onChange={(e) => setTask(e.target.value)}
            className='w-full px-1 bg-white shadow-xs rounded-l-md border border-gray-400/80 outline-none text-gray-800 placeholder-gray-400'
            placeholder='Write something ...'
            required
          />
          <button 
            type='submit'
            title='Add new task'
            className='w-28 py-1.5 text-base sm:text-lg font-semibold rounded-r-md border border-slate-600 text-white bg-slate-600 hover:bg-slate-700 cursor-pointer'
          >
            ADD
          </button>
        </div>
      </form>
    </section>
  )
}
