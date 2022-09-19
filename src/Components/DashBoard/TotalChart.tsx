import React from 'react';
// import { Line } from '@ant-design/plots';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TotalChart = () => {
    const data = [
        {
            jt: '0 JT',
            device: 'TV',
            number: 0,
            value: 90,
        },
        {
            jt: '1 JT',
            device: 'Taptop',
            number: 7,
            value: 120,
        },
        {
            jt: '2 JT',
            device: 'Others',
            number: 14,
            value: 130,
        },
        {
            jt: '3 JT',
            number: 21,
            value: 100,
        },
        {
            number: 28,
            value: 130,
        }
    ];
    
    // first three value for showing on left
    const firstThree = data.slice(0, 3)

    // First three value
    var firstThreeSaleValue: any[] = []

    // Calculate first three value
    const firstThreeSum = (num: any) => {
        let sum = 0
        for(let i = 0; i < num.length; i++){
            sum += num[i]
        }

        return sum + '00'
    }


//-------------------Custom tooltip-----------------------
const getIntroOfPage = (label:any) => {
    if (label === 'Page A') {
      return "Page A is about men's clothing";
    }
    if (label === 'Page B') {
      return "Page B is about women's dress";
    }
    if (label === 'Page C') {
      return "Page C is about women's bag";
    }
    if (label === 'Page D') {
      return 'Page D is about household goods';
    }
    if (label === 'Page E') {
      return 'Page E is about food';
    }
    if (label === 'Page F') {
      return 'Page F is about baby food';
    }
    return '';
  };

  type Props = {
    active: any,
    payload: any,
    label: any
  }
  
  const CustomTooltip = ({ active, payload, label }: Props) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white z-10 relative top-[-110px] right-[-65px] shadow-lg p-2 rounded text-center">
          <p className="label m-0">{`${label} : ${payload[0].value}`}</p>
          <p className="intro m-0">{getIntroOfPage(label)}</p>
          <p className="desc font-semibold mx-0 my-1">Total Sale: {firstThreeSum(firstThreeSaleValue)}</p>
        </div>
      );
    }
  
    return null;
  };
//-----------------Custom tooltip end--------------

    return (
        <div className=' flex justify-between'>
            <div className='w-1/12'>
                {firstThree.map(d => <div>
                    
                    { firstThreeSaleValue.push(d.value) }

                    <small>{d?.device}</small>
                    <h4 className='font-[400] text-[16px]'>{d?.value + '00'}</h4>

                </div>)}
            </div>
            <div className='w-11/12'>
                {/* <Line className='totalChart' {...config} /> */}
                <LineChart width={470} height={200} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="number" />
                    <YAxis />
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Tooltip content={<CustomTooltip active={true} payload='' label='' />} />
                    {/* <Legend verticalAlign="top" height={36}/> */}
                    <Line name="pv of pages" type="monotone" dataKey="value" stroke="#002ED0" />
                    {/* <Line name="uv of pages" type="monotone" dataKey="value" stroke="#82ca9d" /> */}
                </LineChart>
            </div>
        </div>
    );
};

export default TotalChart;