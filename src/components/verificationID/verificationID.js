import { Navigate } from 'react-router-dom';
import PageLogements from '../pageLogements/PageLogements';
import logements from '../../logements.json'
import PageErreur from '../pageErreur';

function CheckLogementExists({ logementId }) {
  const logementExists = logements.find((logements) => logementId == logements.id);
  console.log(logementExists);
  return (logementExists == true ? <PageLogements /> : <PageErreur />);
}

export default CheckLogementExists;