import React, {useState} from 'react';
import DataTable from '../components/DataTable/DataTable';
import Title from '../components/Title';
import DeleteModal from '../components/DeleteModal';
import {removeCompany} from '../utils/companyRemover';

function CompaniesPage({isActive}) {
  const [showModal, setShowModal] = useState(false);
  const [deleteObject, setDeleteObject] = useState();

  let activeCompanies;
  let inactiveCompanies;

  activeCompanies = JSON.parse(localStorage.getItem('activeCompanies'));
  inactiveCompanies = JSON.parse(localStorage.getItem('inactiveCompanies'));

  const hideModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    removeCompany(deleteObject);
    hideModal();
  }

  return (
    <>
      {showModal && (
        <DeleteModal
          object={deleteObject}
          show={showModal}
          onDelete={handleDelete}
          onClose={hideModal}
        />
      )}
      {isActive ? (
        <>
          <Title name={'Aktywne firmy'} />
          <DataTable
            data={activeCompanies}
            setShowModal={setShowModal}
            setDeleteObject={setDeleteObject}
          />
        </>
      ) : (
        <>
          <Title name={'Nieaktywne firmy'} />
          <DataTable
            data={inactiveCompanies}
            setShowModal={setShowModal}
            setDeleteObject={setDeleteObject}
          />
        </>
      )}
    </>
  );
}

export default CompaniesPage;
