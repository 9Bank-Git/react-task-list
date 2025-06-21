import TaskList from '../components/TaskList'

export default function MainContent() {
  return (
    <section className='MainContent'>
        <div className="container h-full max-w-full w-[93%] justify-center place-items-center bg-gray-100"> 
          <div className='flex flex-col m-auto px-8 py-5 gap-y-4 text-gray-800'>
            <TaskList/>
          </div>
        </div>
    </section>
  )
}
