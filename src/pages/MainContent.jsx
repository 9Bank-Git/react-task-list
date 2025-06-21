import TaskList from '../components/TaskList'

export default function MainContent() {
  return (
    <section className='MainContent'>
      <div className='flex flex-1 items-stretch justify-center bg-gray-100'>
        <div className="container max-w-full w-[93%] content-center">
          <div className='flex flex-col self-stretch mx-auto px-8 py-5 gap-y-4 text-gray-800'>
            <TaskList/>
          </div>
        </div>
      </div>
    </section>
  )
}
