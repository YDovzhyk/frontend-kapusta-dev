import { RotatingLines } from 'react-loader-spinner';
import Text from 'components/ui/Text/Text';


import s from './Loader.module.scss';

export default function Loader() {
    return <div className={s.loader}>
        <Text text="Please wait, data loading..." textClass="textModal" />
        <RotatingLines
            strokeColor="#FF751D"
            strokeWidth="3"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    </div>
}