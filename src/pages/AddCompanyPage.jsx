import React from 'react';
import Title from '../components/Title';
import CompanyForm from '../components/CompanyForm/CompanyForm';

function AddCompanyPage() {
  return (
    <div>
      <Title name={'Dodaj firmę'} />
      <CompanyForm />
    </div>
  );
}

export default AddCompanyPage;
