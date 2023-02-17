import { useSelector } from 'react-redux';
import { isLoading } from 'redux/auth/auth-selectors';

import FormLogin from 'components/FormLogin/FormLogin';
import Loader from 'components/ui/Loader/Loader';

import Section from 'components/layout/Section/Section';
import KapustaManyIcon from 'components/icons/KapustaMany/KapustaMany';
import KapustaOneIcon from 'components/icons/KapustaOne/KapustaOne';
import KapustaTwoIcon from 'components/icons/KapustaTwo/KapustaTwo';
import LogoKapustaMobIcon from 'components/icons/LogoKapustaMob/LogoKapustaMob';
import LogoKapustaTabIcon from 'components/icons/LogoKapustaTab/LogoKapustaTab';

export default function LoginPage() {

  const loader = useSelector(isLoading);

  return (
    <Section sectionClass="section">
      {loader && <Loader/>}
      <LogoKapustaMobIcon iconClass="home" width="183" height="63" />
      <LogoKapustaTabIcon iconClass="home" width="305" height="100" />
      <KapustaManyIcon iconClass="home" width="1334" height="232" />
      <KapustaOneIcon
        iconClass="homeTop"
        width="83"
        heigth="89"
        transform="rotate(180)"
      />
      <FormLogin />
      <KapustaOneIcon iconClass="homeBottom" width="83" height="89" />
      <KapustaTwoIcon iconClass="homeBottom" width="183" height="142" />
    </Section>
  );
}
