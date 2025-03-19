import { fetchCompaniesByActivity } from "./fetchDataFromCache";

export const sendDataToCache = (
  name,
  code,
  profile,
  isActive,
  street,
  postalCode,
  city,
  email,
) => {
  const newEntry = {
    name: name,
    code: code,
    profile: profile,
    isActive: isActive,
    street: street,
    postalCode: postalCode,
    city: city,
    email: email
  };

  const savedEntries = fetchCompaniesByActivity(isActive);

  savedEntries.push(newEntry);

  if(isActive){
    localStorage.setItem('activeCompanies', JSON.stringify(savedEntries));
  } else {
    localStorage.setItem('inactiveCompanies', JSON.stringify(savedEntries));
  }
};
