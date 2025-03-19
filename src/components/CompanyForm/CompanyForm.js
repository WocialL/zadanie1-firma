import React, {useState} from 'react';
import {generateCode} from '../../utils/codeGenerator';
import {sendDataToCache} from '../../utils/sendDataToCache';
import './CompanyForm.css';
import {DataValidator} from './DataValidator';

const CompanyForm = () => {
  const [name, setName] = useState();
  const [companyCode, setCompanyCode] = useState();
  const [profile, setProfile] = useState();
  const [isActive, setIsActive] = useState();
  const [street, setStreet] = useState();
  const [postalCode, setPostalCode] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();
  const [feedbackMessage, setFeedbackMessage] = useState();

  const handleGenereCode = () => {
    setCompanyCode(generateCode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let tempFeedbackMessage = null;
    DataValidator(name, (message)=> tempFeedbackMessage = message, email, isActive, companyCode);

    if (tempFeedbackMessage == null) {
      sendDataToCache(
        name,
        companyCode,
        profile,
        isActive,
        street,
        postalCode,
        city,
        email,
      );
      setFeedbackMessage({status: 'ok', text: 'Pomyślnie dodano firmę!'});

      var form = document.getElementById('companyForm');
      form.reset();
      setCompanyCode(undefined);
    } else {
      setFeedbackMessage(tempFeedbackMessage);
    }
  };

  return (
    <form id='companyForm' onSubmit={handleSubmit}>
      <p className='heading-style'>Nazwa firmy</p>
      <div className='flex'>
        <input
          className='input-style'
          type='text'
          placeholder='Wocial Company S.A'
          maxLength={20}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className='flex justify-center mt-10 space-x-40'>
        <div className='text-center'>
          <p className='heading-style'>Kod firmy</p>
          <div className='flex'>
            <input
              className='input-style'
              type='number'
              placeholder='1234'
              onChange={(event) => setCompanyCode(event.target.value)}
              value={companyCode ? companyCode : ''}
              min={1}
              max={9999}
              required
            />
          </div>
          <button
            type='button'
            className='drop-shadow-lg bg-green-accent cursor-pointer hover:bg-green-darker
             text-white font-bold rounded text-center px-3 mt-2'
            onClick={handleGenereCode}
          >
            Generuj kod
          </button>
        </div>
        <div className='text-center'>
          <p className='heading-style'>Profil firmy</p>
          <div className='flex'>
            <select
              type='search'
              required
              className='input-style'
              onChange={(event) => setProfile(event.target.value)}
            >
              <option selected disabled hidden>
                Wybierz...
              </option>
              <option value='mały'>Mały</option>
              <option value='średni'>Średni</option>
              <option value='duży'>Duży</option>
            </select>
          </div>
        </div>
        <div className='text-center mt-10'>
          <label htmlFor='isActive' className='heading-style'>
            Aktywna firma
          </label>
          <div className='flex'>
            <input
              className='input-style'
              id='isActive'
              name='isActive'
              type='checkbox'
              onChange={(event) => {
                setIsActive(event.target.checked);
              }}
            />
          </div>
        </div>
      </div>
      <p className='heading-style'>Ulica</p>
      <div className='flex'>
        <input
          className='input-style'
          type='text'
          placeholder='Krucza 15'
          onChange={(event) => setStreet(event.target.value)}
        />
      </div>
      <p className='heading-style'>Kod pocztowy</p>
      <div className='flex'>
        <input
          className='input-style'
          type='text'
          placeholder='12-345'
          onChange={(event) => setPostalCode(event.target.value)}
        />
      </div>
      <p className='heading-style'>Miasto</p>
      <div className='flex'>
        <input
          className='input-style'
          type='text'
          placeholder='Warszawa'
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <p className='heading-style'>Email</p>
      <div className='flex'>
        <input
          className='input-style'
          type='text'
          placeholder='lukasz.wocial@o2.pl'
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className='w-full flex items-center justify-center mt-10'>
        <input
          className='shadow bg-green-accent cursor-pointer hover:bg-green-darker text-white font-bold py-1 mt-2 mb-5 px-3 rounded mx-auto'
          type='submit'
          value={'Dodaj'}
        />
      </div>

      {feedbackMessage && (
        <div
          className={
            (feedbackMessage.status === 'ok'
              ? 'text-green-500'
              : 'text-red-500') + ' font-bold text-xl text-center'
          }
        >
          {feedbackMessage.text}
        </div>
      )}
    </form>
  );
};

export default CompanyForm;
