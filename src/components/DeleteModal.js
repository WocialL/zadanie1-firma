const CompanyDeleteModal = ({onClose, onDelete, object}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pb-40'>
      <div className='bg-white p-6 rounded-2xl shadow-lg text-center w-96'>
        <h2 className='text-lg font-bold mb-4 '>
          Czy na pewno chcesz usunąć firmę {object.name}?
        </h2>
        <div className='flex justify-around'>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600'
            onClick={onDelete}
          >
            Tak
          </button>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'
            onClick={onClose}
          >
            Nie
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDeleteModal;
