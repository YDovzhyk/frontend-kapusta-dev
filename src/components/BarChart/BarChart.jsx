import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { getChartData } from 'redux/transaction/transaction-operations';
import { getUserIsRefreshing } from 'redux/auth/auth-selectors';

import {
  getCategoryData,
  getCategoryName,
  getCurrentDate,
} from 'redux/transaction/transaction-selectors';

import s from './BarChart.module.scss';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  LabelList,
} from 'recharts';

function Chart() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const dispatch = useDispatch();
  const categoryName = useSelector(getCategoryName);
  const currentDate = useSelector(getCurrentDate);

  const isRefresh = useSelector(getUserIsRefreshing);

  useEffect(() => {
    if(!categoryName || currentDate === '') {
      return;
    } else {
      dispatch(
        getChartData({
          reqDate: currentDate,
          transitionCategory: categoryName,
        })
      );
    }
  }, [dispatch, currentDate, categoryName, isRefresh]);

  const chartData = useSelector(getCategoryData);

  const [data, setData] = useState([{name: '', price: 0}]);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const changeObjFormat = chartData.map(el => {
      for (const key in el) {
        return { name: key, price: el[key] };
      }
    });
    setData(changeObjFormat);
  }, [chartData]);

  const sorteredData = data.sort((a, b) => b.price - a.price);

  const renderCustomizedLabelName = ({ x, y, value }) => {
    return (
      <g className={s.name}>
        <text x={x} y={y - 10} dominantBaseline="middle">
          {value}
        </text>
      </g>
    );
  };

  const renderCustomizedLabel = ({ x, y, width, value }) => {
    if (isMobile) {
      return (
        <g className={s.price}>
          <text x={x + 60 + width / 2} y={y - 10} dominantBaseline="middle">
            {`${value} UAH`}
          </text>
        </g>
      );
    }

    return (
      <g className={s.text}>
        <text
          x={x + width / 1.5}
          y={y-10}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {`${value} UAH`}
        </text>
      </g>
    );
  };

  const renderCustomizedAxisTick = ({ x, y, payload }) => {
    if (isMobile) {
      return (
        <g transform={`translate(${x},${y})`} className={s.text}>
          <text x={7} y={0} dy={-20} dominantBaseline="middle">
            {payload.value}
          </text>
        </g>
      );
    }

    return (
      <g transform={`translate(${x},${y})`} className={s.text}>
        <text x={0} y={0-5} dy={15} textAnchor="middle">
          {payload.value}
        </text>
      </g>
    );
  };

  const dinamicHight = data?.length * 55;

  if (isMobile) {
    return (
      <div className={s.wrap}>
        <ResponsiveContainer maxWidth="100%" height={dinamicHight}>
          <BarChart data={sorteredData} layout="vertical" maxBarSize={18}>
            <XAxis type="number" hide axisLine={false} tickLine={false} />
            <YAxis
              hide
              type="category"
              dataKey="name"
              tick={renderCustomizedAxisTick}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar dataKey="price">
              {sorteredData.map((_, i) => (
                <Cell
                  key={`${i}`}
                  fill={i % 3 ? 'var(--second-accent-color)' : 'var(--accent-color)'}
                  radius={[0, 10, 10, 0]}
                />
              ))}

              <LabelList
                dataKey="name"
                fill="var(--text-color)"
                content={renderCustomizedLabelName}
              />
              <LabelList
                dataKey="price"
                fill="var(--text-color)"
                content={renderCustomizedLabel}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className={s.wrap}>
      <ResponsiveContainer width="100%" height={380}>
        <BarChart 
        data={sorteredData}
        margin={{
          top: 40,
          right: 20,
          left: 20,
          bottom: 5,
        }}
        >
          <CartesianGrid vertical={false} stroke="#F5F6FB" horizontalPoints={[]} y={38} />
            <XAxis
              tick={renderCustomizedAxisTick}
              axisLine={false}
              tickLine={false}
              dataKey="name"
            >
          <Label />
          </XAxis>
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Bar dataKey="price" maxBarSize={38}>
            {data.map((_, i) => (
              <Cell
                key={i}
                fill={i % 3 ? 'var(--second-accent-color)' : 'var(--accent-color)'}
                radius={[10, 10, 0, 0]}
              />
            ))}
            <LabelList
              dataKey="price"
              position="top"
              fill="var(--text-color)"
              content={renderCustomizedLabel}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
