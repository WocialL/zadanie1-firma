import React from 'react';
import {Routes, Route} from 'react-router';
import SideBar from '../components/SideBar/SideBar';
import CompaniesPage from '../pages/CompaniesPage';
import AddCompanyPage from '../pages/AddCompanyPage';

export default function MainLayout() {

  return (
    <div className='bg-gray-200 h-screen w-full px-0 mx-0 flex'>
      <SideBar />
      <div className='bg-gray-200 margin-left w-full relative w-90per overflow-y-auto'>
        <Routes>
          <Route path ='*' element={<CompaniesPage />} />
          <Route exact path='/activeCompanies' element={<CompaniesPage isActive={true} />} />
          <Route exact path='/inactiveCompanies' element={<CompaniesPage isActive={false} />} />
          <Route exact path='/add' element={<AddCompanyPage />} />
        </Routes>
      </div>
    </div>
  );
}
