import TaskList from '../components/TaskList'

export default function Content() {
  return (
    <section className='Content flex flex-1 items-stretch justify-center bg-gray-100'>
      <div className="container max-w-full w-[85%] m-10 content-center">
        <div className='flex flex-col self-stretch mx-auto px-8 py-5 gap-y-4 text-gray-800'>
          <TaskList/>
        </div>
      </div>
    </section>
  )
}
