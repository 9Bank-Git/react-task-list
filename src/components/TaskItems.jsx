import { useState } from 'react';
import { toast } from 'react-toastify'

export default function TaskItems({ displayTasks, showActive, setShowActive, toggleCompleted, moveTaskUp, moveTaskDown, editedTask, openModalDialog }) {
  return (
    <section className='TaskList'>
      <div className='flex flex-col flex-1'>
        <div className='relative flex mt-2 mb-1'>
          <p className='text-base sm:text-lg'>Tasks List</p>
          <label className='absolute top-1 left-25 sm:left-30 flex items-center'>
            <input 
              type='checkbox'
              checked={showActive}
              onChange={(e) => setShowActive(e.target.checked)}
              className='accent-sky-600'
            />
            <span className='pl-1 text-sm sm:text-base text-gray-700'>Show only active</span>
          </label>
        </div>
        <hr className='text-slate-300 mb-3'/>
        <ul className='flex flex-col gap-y-2 min-h-[380px] sm:min-h-[420px]'>
          {displayTasks.map((task, index) => (
            <ItemsList
              key={task.id}
              task={task}
              index={index}
              completedTask={toggleCompleted}
              moveTaskUp={moveTaskUp}
              moveTaskDown={moveTaskDown}
              editedTask={editedTask}
              openModalDialog={openModalDialog}
            />
          ))}
        </ul>
        <hr className='text-slate-300 mt-3'/>
      </div>
    </section>
  );
}

function ItemsList({ task, index, completedTask, moveTaskUp, moveTaskDown, editedTask, openModalDialog }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(task.text);
  }

  const handleSave = (taskId) => {
    if (editText.trim() === '') {
      toast.warning('Please, write something to save changes');
      return
    } else {
    editedTask(taskId, editText);
    setIsEditing(false);
    }
  }

  return (
    <li className='flex flex-col sm:flex-row px-4 py-3 gap-y-2 sm:gap-x-2 rounded shadow bg-white items-center'>
      <input type='checkbox' checked={task.completed} onChange={() => completedTask(task.id)} className='size-4 ml-2 accent-gray-500/25 hover:opacity-60 items-center'/>
      <span className={`ml-2 size-5 rounded-full font-semibold text-sm sm:text-base text-center content-center ${task.completed ? 'text-gray-100 bg-sky-200' : 'text-white bg-sky-500'}`}>
        {index + 1}
      </span>
      <div className='flex flex-1 font-light text-base sm:text-lg text-center sm:text-left break-all'>
        {isEditing ? (
          <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)} className='grow rounded border border-gray-400 focus:outline-none invalid:border-pink-500' required/>
        ) : (
          <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>{task.text}</span>
        )}
      </div>
      <div className='flex mr-1 space-x-1'>
        {isEditing ? (
          <>
          <button type='button' title='Move up' onClick={() => moveTaskUp(index)} className='flex px-1 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>arrow_upward</i>
          </button>
          <button type='button' title='Move down' onClick={() => moveTaskDown(index)} className='flex px-1 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>arrow_downward</i>
          </button>
          <button type='button' title='Save' onClick={() => handleSave(task.id)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>save</i>
          </button>
          <button type='button' title='Cancel' onClick={() => setIsEditing(false)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>close</i>
          </button>
          </>
        ) : (
          <>
          <button type='button' title='Edit' onClick={() => handleEdit(index)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>edit</i>
          </button>
          <button type='button' title='Delete' onClick={() => openModalDialog(true, task.id)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>delete</i>
          </button>
          </>
        )}
      </div>
    </li>
  );
}
