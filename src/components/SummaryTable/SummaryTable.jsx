import { useSelector } from 'react-redux';

import { getMonthlySum } from 'redux/transaction/transaction-selectors';

import s from './SummaryTable.module.scss';

export default function Summary() {
  const items = useSelector(getMonthlySum);


  if (items === undefined) {
    return;
  }

  return (
    <div className={s.scrollTable}>
      <table className={s.tableThead}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>Summary</th>
          </tr>
        </thead>
      </table>	
      <div className={s.scrollTableBody}>
        <table className={s.table}>
          <tbody className={s.tbody}>
          {items.map(({ month, sum }) => (
            <tr key={month} className={s.item}>
              <td className={s.td}>{month}</td>
              <td className={s.td}>{sum}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <table className={s.tableBottom}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
