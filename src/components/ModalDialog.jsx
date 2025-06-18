import { useRef, useEffect } from 'react'

export default function ModalDialog({ isShow, eventTarget, submitDialog, setShow }) {
  // const { isShow, eventTarget, submitDialog, setShow } = prop;
  const dialogRef = useRef(null);
  const dialog = dialogRef.current

  useEffect(() => {
    if (!isShow) {
      return;
    }
    dialog.showModal()
    return () => dialog.close();
  }, [isShow, dialog]);

  return (
    <dialog 
      ref={dialogRef} 
      className='mx-auto my-40 w-80 px-6 py-6 bg-white rounded-xl shadow-lg outline outline-black/20 backdrop:backdrop-blur-xs backdrop:bg-white/20'
    >
      <form onSubmit={(e) => {submitDialog(e.preventDefault()); setShow(false);}}>
        <div className='flex flex-col gap-y-4'>
          <h5 className='text-xl font-extrabold text-gray-700'>Do you want to {eventTarget ? 'delete' : 'reset'}?</h5>
          <p className='text-base text-zinc-500'>This well permanently {eventTarget ? 'delete this task.' : 'remove all task.'}</p>
          <div className='flex justify-end mt-2 gap-x-2 font-semibold text-sm tracking-wider'>
            <button type="submit" className='w-20 py-2.5 rounded-md shadow-sm outline outline-black/20 text-white bg-blue-600 hover:bg-blue-800'>
              {eventTarget ? 'Delete': 'Reset'}
            </button>
            <button type="button" onClick={() => setShow(false)} className='w-20 py-2.5 rounded-md shadow-sm outline outline-black/20 text-gray-600 bg-gray-50 hover:bg-gray-200'>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </dialog>
  )
}