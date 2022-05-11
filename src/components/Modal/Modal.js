import React from 'react'
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
  },
};
 
export default function DownloadModal({children, openModal, close}) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        contentLabel="Download Modal"
      >
        <div className='flex justify-between mb-6'>
        <h2 className='text-3xl'>Event Ticket</h2>
        <button className='cursor-pointer' onClick={close}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
        </div>
        
        {children}
      </Modal>
    </div>
  )
}
