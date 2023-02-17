import { Link, useLocation } from 'react-router-dom';

import s from './NotFound.module.scss';

import Button from 'components/ui/Button/Button';

export default function NotFoundPage() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={s.container}>
      <div className={s.booWrapper}>
        <div className={s.boo}>
          <div className={s.face} id="face"></div>
        </div>
        <div className={s.shadow}></div>

        <h1 className={s.title}>Ups..!</h1>
        <p className={s.txt}>
        We could not find the page
          <br />
          you were looking for.
        </p>

        <Link to={backLinkHref}>
          <Button text="Go back" btnClass="btnLogin" />
        </Link>
      </div>
    </div>
  );
}
