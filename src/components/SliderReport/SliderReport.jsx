import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSliderReportData } from 'redux/transaction/transaction-selectors';
import { addCategoryName } from 'redux/transaction/transaction-slice';

import { nanoid } from '@reduxjs/toolkit';

import ArrowCalendLeftIcon from 'components/icons/ArrowCalendLeft/ArrowCalendLeft';
import ArrowCalendRightIcon from 'components/icons/ArrowCalendRight/ArrowCalendRight';
import ProductsIcon from 'components/icons/Products/Products';
import AlcoholIcon from 'components/icons/Alcohol/Alcohol';
import EntertainmentIcon from 'components/icons/Entertainment/Entertainment';
import HealthIcon from 'components/icons/Health/Health';
import TransportIcon from 'components/icons/Transport/Transport';
import HousingIcon from 'components/icons/Housing/Housing';
import TechniqueIcon from 'components/icons/Technique/Technique';
import CommunalIcon from 'components/icons/Communal/Communal';
import SportsIcon from 'components/icons/Sports/Sports';
import EducationIcon from 'components/icons/Education/Education';
import OtherIcon from 'components/icons/Other/Other';
import SalaryIcon from 'components/icons/Salary/Salary';
import AddIncomeIcon from 'components/icons/AddIncome/AddIncome';
import RectangleIcon from 'components/icons/Rectangle/Rectangle';

import Text from 'components/ui/Text/Text';

import s from './SliderReport.module.scss';

import { expenses, income } from './data.js';

const FilterIcon = (category, height, style) => {
  switch (category?.toLocaleLowerCase()) {
    case 'products':
      return <ProductsIcon height={height} style={style} />;
    case 'alcohol':
      return <AlcoholIcon height={height} style={style} />;
    case 'entertainment':
      return <EntertainmentIcon height={height} style={style} />;
    case 'health':
      return <HealthIcon height={height} style={style} />;
    case 'transport':
      return <TransportIcon height={height} style={style} />;
    case 'housing':
      return <HousingIcon height={height} style={style} />;
    case 'technique':
      return <TechniqueIcon height={height} style={style} />;
    case 'communal, communication':
      return <CommunalIcon height={height} style={style} />;
    case 'sports, hobbies':
      return <SportsIcon height={height} style={style} />;
    case 'education':
      return <EducationIcon height={height} style={style} />;
    case 'other':
      return <OtherIcon height={height} style={style} />;
    case 'salary':
      return <SalaryIcon height={height} style={style} />;
    case 'add.income':
      return <AddIncomeIcon height={height} style={style} />;
    default:
      return '';
  }
};

export default function SliderReport() {

  const [item, setItem] = useState(true);
  const [categoryName, setCategoryName] = useState('expenses');
  const [expensesList, setExpensesList] = useState(expenses);
  const [incomeList, setIncomeList] = useState(income);
  const [selectedCatName, setSelectedCatName] = useState('');
  const [data, setData] = useState(false);
  
  const dispatch = useDispatch();

  const getTranformData = (data) => {
    const result = data.map(el => ({category: Object.keys(el)[0], sum: Object.values(el)[0]}));
    const sortedResult = result.sort((a, b) => b.sum - a.sum);
    return sortedResult;
  }

  const reportData = useSelector(getSliderReportData);
  const expensesData = getTranformData(reportData[1].expenses);
  const incomeData = getTranformData(reportData[0].income);

  const lengthExpensesData = expensesData.length;
  const lengthincomeData = incomeData.length;

  const handlerToggle = () => {
    setItem(!item);
    if(!item) {
      setCategoryName('expenses');
      setSelectedCatName(`${expensesData[0].category}`);
    } else {
      setCategoryName('income');
      setSelectedCatName(`${incomeData[0].category}`);
    }
  };

  useEffect(() => {
    if (categoryName === 'expenses' && lengthExpensesData === 0) {
      setData(false);
      return;
    }
    if (categoryName === 'income' && lengthincomeData === 0) {
      setData(false);
      return;
    }
    if (categoryName === 'expenses' && lengthExpensesData > 0) {
      setSelectedCatName(expensesData[0].category);
      setExpensesList(expensesData);
      setData(true);
    }
    if (categoryName === 'income' && lengthincomeData > 0) {
      setSelectedCatName(incomeData[0].category);
      setIncomeList(incomeData);
      setData(true);
    }
    // eslint-disable-next-line
  }, [categoryName, lengthExpensesData, lengthincomeData]);

  const handleClick = (e, categoryName) => {
    e.preventDefault();
    setSelectedCatName(categoryName)
  };

  useEffect(() => {
    dispatch(addCategoryName(selectedCatName));
  }, [dispatch, selectedCatName]);

  return (
    <div className={s.overlay}>
      <div className={s.overlayBtn}>
        <ArrowCalendLeftIcon width="7px" height="10px" onClick={handlerToggle} />
        {item ? (
          <Text text="Expenses" textClass="textSliderTitle" />
        ) : (
          <Text text="Income" textClass="textSliderTitle" />
        )}
        <ArrowCalendRightIcon width="7px" height="10px" onClick={handlerToggle} />
      </div>

      {item && data && (
        <ul className={s.list}>
          {expensesList.map(({ category, sum }) => (
            <li key={nanoid()} className={s.item} onClick={(e) => handleClick(e, category)}>
              {category === selectedCatName ? <Text text={sum} textClass="selectedItem"/> : <Text text={sum}/>}
              {category === selectedCatName ? FilterIcon(category, '56', '#FF751D') : FilterIcon(category, '56', '#071F41')}
              <div className={s.overlayIcon}>
                <RectangleIcon width="59px" height="46px" fill="#F5F6FB" />
              </div>
              {category === selectedCatName ? <Text text={category} textClass="selectedItem"/> : <Text text={category}/>}
            </li>
          ))}
        </ul>
      )}
      {!item && data && (
        <ul className={s.list}>
          {incomeList.map(({ category, sum }) => (
            <li key={nanoid()} className={s.item} onClick={(e) => handleClick(e, category)}>
              {category === selectedCatName ? <Text text={sum} textClass="selectedItem"/> : <Text text={sum}/>}
              {category === selectedCatName ? FilterIcon(category, '56', '#FF751D') : FilterIcon(category, '56', '#071F41')}
              <div className={s.overlayIcon}>
                <RectangleIcon width="59px" height="46px" fill="#F5F6FB" />
              </div>
              {category === selectedCatName ? <Text text={category} textClass="selectedItem"/> : <Text text={category}/>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
