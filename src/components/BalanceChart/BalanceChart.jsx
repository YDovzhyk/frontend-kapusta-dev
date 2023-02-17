import { getReportBalance } from 'redux/transaction/transaction-selectors';
import { useSelector } from 'react-redux';

import Text from 'components/ui/Text/Text';

import s from './BalanceChart.module.scss';

export default function BalanceChart() {

  const reportBalance = useSelector(getReportBalance);

  const getData = (data) => {
    if(reportBalance.length > 0 && data === "expenses") {
      return '- ' + reportBalance[0].expenses + ' UAH';
    } 
    if(reportBalance.length > 0 && data === "income") {
      return '+ ' + reportBalance[1].income + ' UAH';
    } else {
      return 0 + ' UAH';
    }
  };
  
  return (
    <div className={s.overlay}>
      <div className={s.overlayExp}>
        <Text text="Expenses:" textClass="textBalanceChart" />
        <Text text={getData("expenses")} textClass="textBalanceEx" />
      </div>
      <div className={s.vertBorder}></div>
      <div className={s.overlayInc}>
        <Text text="Income:" textClass="textBalanceChart" />
        <Text text={getData("income")} textClass="textBalanceIn" />
      </div>
    </div>
  );
}
