import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

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

    // Push First three value
    var firstThreeSaleValue: any[] = []

    // Calculate first three value for show in tooltip
    const firstThreeSum = (num: any) => {
        let sum: number = 0
        for (let i = 0; i < num.length; i++) {
            sum += num[i]
        }
        return sum + ',00,00'
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

    //   Props type for custom tooltip function
    type Props = {
        active: any,
        payload: any,
        label: any
    }

    const CustomTooltip = ({ active, payload, label }: Props) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip bg-white border py-2 px-3 shadow text-center relative top-[-10px]">
                    <p className="label m-0">{`${label} : ${payload[0].value}`}</p>
                    <p className="intro">{getIntroOfPage(label)}</p>
                    <p className="desc font-semibold mx-0 my-1">{firstThreeSum(firstThreeSaleValue)}</p>
                </div>
            );
        }

        return null;
    };
    //-----------------Custom tooltip end--------------

    return (
        <div className='flex justify-between'>
            <div className='w-1/12'>
                {firstThree.map(d => <div>
                    {/* Push value to variable */}
                    <div className='hidden'>{firstThreeSaleValue.push(d.value)}</div>

                    <small className='text-slate-700'>{ d.device}</small>
                    <h4 className='text-[16px] font-semibold'>{d.value + ',00'}</h4>

                </div>)}
            </div>
            <div className='total-chart w-11/12'>
                <LineChart style={{overflowX: 'auto'}} width={465} height={200} data={data}
                    margin={{ top: 5, right: 5, left: 20, bottom: 5 }}>
                    <XAxis dataKey="number" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="0 0" />
                    <Tooltip content={<CustomTooltip active={true} payload={[{ name: '05-01', value: 12, unit: 'kg' }]} label='' />} />
                    <Line name="pv of pages" type="monotone" dataKey="value" stroke="#002ED0" />
                </LineChart>
            </div>
        </div>
    );
};

export default TotalChart;