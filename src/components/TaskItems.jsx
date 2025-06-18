import { useState } from 'react';

export default function TaskItems({ displayTasks, showActive, setShowActive, toggleCompleted, moveTaskUp, moveTaskDown, editedTask, openModalDialog }) {
  return (
    <div className='task-list flex flex-col'>
      <div className='relative flex mt-2 mb-1'>
        <p className='text-base sm:text-lg'>Task List</p>
        <div className='absolute top-3.5 left-25 flex items-center'>
          <input type='checkbox' checked={showActive} onChange={(e) => setShowActive(e.target.checked)} className='accent-sky-600'/>
          <span className='pl-1 text-sm sm:text-base text-gray-700'>Show only active</span>
        </div>
      </div>
      <hr className='text-slate-300 mb-3'/>
      <ul className='tasks-content flex flex-col gap-y-2 min-h-[350px] sm:min-h-[400px]'>
        {displayTasks.map((task, index) => (
          <ItemsList key={task.id} task={task} index={index} completedTask={toggleCompleted} moveTaskUp={moveTaskUp} moveTaskDown={moveTaskDown} editedTask={editedTask} openModalDialog={openModalDialog}/>
        ))}
      </ul>
      <hr className='text-slate-300 mt-3'/>
    </div>
  );
}

function ItemsList({ task, index, completedTask, moveTaskUp, moveTaskDown, editedTask, openModalDialog }) {
  // const { task, index, completedTask, moveTaskUp, moveTaskDown, editedTask, openModal } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(task.text);
  }

  const handleSave = (taskId) => {
    if (editText.trim() === '') {
      return handleEdit();
    }
    editedTask(taskId, editText);
    setIsEditing(false);
  }

  return (
    <li className='flex flex-col sm:flex-row px-2 py-3 gap-y-2 sm:gap-x-2 rounded shadow-sm bg-gray-100 items-center'>
      <div className='flex pl-2 gap-x-4 items-center'>
        <input type='checkbox' checked={task.completed} onChange={() => completedTask(task.id)} className='size-4 accent-gray-500/25 hover:opacity-60 items-center'/>
        <span className={`size-5 rounded-full font-semibold text-sm sm:text-base text-center content-center ${task.completed ? 'text-gray-100 bg-sky-200' : 'text-white bg-sky-500'}`}>
          {index + 1}
        </span>
      </div>
      {isEditing ? (
        <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)} className='grow text-base rounded border border-gray-400 focus:outline-none'/>
      ) : (
        <span className={`flex-1 font-light text-lg sm:text-xl text-center sm:text-left break-all ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>{task.text}</span>
      )
      }
      {isEditing ? (
        <div className='actions flex space-x-1'>
          <button onClick={() => moveTaskUp(index)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>arrow_upward</i>
          </button>
          <button onClick={() => moveTaskDown(index)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>arrow_downward</i>
          </button>
          <button onClick={() => handleSave(task.id)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>save</i>
          </button>
        </div>
      ) : (
        <div className='actions flex space-x-2'>
          <button onClick={() => handleEdit(index)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>create</i>
          </button>
          <button onClick={() => openModalDialog(true, task.id)} className='flex px-1.5 py-1 rounded text-gray-500 hover:bg-zinc-200 items-center'>
            <i className='material-icons' style={{fontSize: '20px'}}>delete</i>
          </button>
        </div>
      )}          
    </li>
  );
}
