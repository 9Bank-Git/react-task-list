import TaskList from '../components/TaskList'

export default function MainContent() {
  return (
    <section className='MainContent'>
        <div className='container max-w-full w-[93%] justify-center place-items-center'> 
          <div className='flex flex-col px-8 py-6 gap-y-4 text-gray-800'>
            <TaskList/>
          </div>
        </div>
    </section>
  )
}
