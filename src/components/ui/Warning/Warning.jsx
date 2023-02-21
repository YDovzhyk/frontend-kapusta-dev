import { RotatingLines } from 'react-loader-spinner';
import Text from 'components/ui/Text/Text';

import s from './Warning.module.scss';

export default function Warning() {
    return <div className={s.warning}>
        <Text text="Please wait," textClass="textWarning" />
        <Text text="we are trying to update" textClass="textWarning" />
        <Text text="your profile..." textClass="textWarningLast" />
        <RotatingLines
            strokeColor="#FF751D"
            strokeWidth="3"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    </div>
}