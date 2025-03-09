import { Modal } from 'antd';
import { useState } from 'react';
import { GET_SINGLE_REVIEW } from '../utils/queries';

const EditReview = ({reviewId}) => {
    //Get the single review:

    //For the andD to open and close the modal:
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return ( 
    <>
      <button className='button' onClick={showModal}>
        Edit
      </button>
      <Modal title="Edit Your Review" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <textarea cols="40" row="40">
        </textarea>
      </Modal>
    </>
  );
};

export default EditReview;