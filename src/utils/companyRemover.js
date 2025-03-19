import { fetchCompaniesByActivity } from "./fetchDataFromCache";

export const removeCompany = (object) => {

  const savedEntries = fetchCompaniesByActivity(object.isActive);

  const updatedEntries = savedEntries.filter((x) => object.code !== x.code);

  if (object.isActive) {
    localStorage.setItem('activeCompanies', JSON.stringify(updatedEntries));
  } else {
    localStorage.setItem('inactiveCompanies', JSON.stringify(updatedEntries));
  }
};
