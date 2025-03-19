export const fetchCompaniesByActivity = (isActive) => {
  if(isActive){
    return JSON.parse(localStorage.getItem('activeCompanies')) || [];
  } else {
    return JSON.parse(localStorage.getItem('inactiveCompanies')) || [];
  }
}
