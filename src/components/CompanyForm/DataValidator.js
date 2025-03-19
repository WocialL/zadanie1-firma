import {fetchCompaniesByActivity} from '../../utils/fetchDataFromCache';
import {companyNameRegex, emailRegex} from '../../utils/regexPatterns';

const isCompanyCodeUnique = (isActive, companyCode) => {
  const data = fetchCompaniesByActivity(isActive).filter(
    (x) => companyCode === x.code,
  );

  if (data.length === 0) return true;

  return false;
};

export const DataValidator = (
  name,
  setFeedbackMessage,
  email,
  isActive,
  companyCode,
) => {
  if (!companyNameRegex.test(name)) {
    setFeedbackMessage({
      status: 'fail',
      text: 'Nazwa firmy musi składać się tylko z liter!',
    });
  } else if (email && !emailRegex.test(email)) {
    setFeedbackMessage({status: 'fail', text: 'Nieprawidłowy e-mail!'});
  } else if (!isCompanyCodeUnique(isActive, companyCode)) {
    setFeedbackMessage({
      status: 'fail',
      text: 'Ten kod firmy jest już zajęty!',
    });
  }
};
