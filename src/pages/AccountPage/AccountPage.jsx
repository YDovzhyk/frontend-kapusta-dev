import { useSelector } from 'react-redux';
import { isLoading } from 'redux/auth/auth-selectors';

import Section from 'components/layout/Section/Section';
import CabinetForm from 'components/CabinetForm/CabinetForm';
import Loader from 'components/ui/Loader/Loader';

import KapustaTwoIcon from 'components/icons/KapustaTwo/KapustaTwo';

export default function AccountPage() {

  const loader = useSelector(isLoading);

  return (
    <>
      
      <Section sectionClass="sectionMarg">
        {loader && <Loader/>}
        <CabinetForm />
        <KapustaTwoIcon iconClass="homeBottom" width="183" height="142" />
      </Section>
    </>
  );
}
