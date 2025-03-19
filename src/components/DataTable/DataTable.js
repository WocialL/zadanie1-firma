import React from 'react';
import './DataTable.css';
import {FaTrash} from 'react-icons/fa';

const DataTable = ({data, setShowModal, setDeleteObject}) => {
  const handleDelete = (object) => {
    setDeleteObject(object);
    setShowModal(true);
  };

  return (
    <div className='bg-white rounded shadow-md mt-2 mx-5'>
      <div className='w-full items-end flex height-50 border-b-2 border-gray-400 py-2 px-3'>
        <div className='font-bold width-col-text'>Nazwa</div>
        <div className='font-bold width-col-shorttext'>Kod</div>
        <div className='font-bold width-col-shorttext text-center'>Profil</div>
        <div className='font-bold width-col-shorttext text-center'>Miasto</div>
        <div className='font-bold width-col-shorttext text-center'>
          Kod pocztowy
        </div>
        <div className='font-bold width-col-text text-center'>Ulica</div>
        <div className='font-bold width-col-text text-center'>Email</div>
      </div>
      <div className='height-table overflow-auto w-full'>
        {data &&
          data.map((el) => (
            <div
              className='flex items-center px-3 py-2 border-b-2 border-gray-200 hover:bg-gray-200'
              key={el.id}
            >
              <div className='width-col-text'>{el.name}</div>
              <div className='width-col-shorttext'>{el.code}</div>
              <div className='width-col-shorttext text-center'>
                {el.profile}
              </div>
              <div className='width-col-shorttext text-center'>{el.city}</div>
              <div className='width-col-shorttext text-center'>
                {el.postalCode}
              </div>
              <div className='width-col-text text-center'>{el.street}</div>
              <div className='width-col-text text-center'>{el.email}</div>
              <div
                className='width-col-shorttext text-center cursor-pointer ml-14'
                onClick={() => {
                  handleDelete(el);
                }}
              >
                <FaTrash className='text-red-500 text-xl' />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DataTable;
