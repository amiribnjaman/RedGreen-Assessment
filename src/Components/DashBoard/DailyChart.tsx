import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DailyCart: React.FC = () => {
  const data = [
    {
      type: '50% TV',
      value: 50,
    },
    {
      type: '25% Laptop',
      value: 25,
    },
    {
      type: '25% Others',
      value: 25,
    }
  ];
  const config = {
    appendPadding: 1,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.6,
    innerRadius: 0.7,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '',
      style: {
        textAlign: 'center',
        fontSize: 5,
      },
    },
    theme: {
        colors10: [
          '#2D5BFF',
          '#6284FD',
          '#96ADFF'
        ]
    },
    style: {
        fill: 'red',
        fillOpacity: 0.5,
        stroke: 'black',
        lineWidth: -10,
        lineDash: [4, 5],
        strokeOpacity: 0.7,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
        cursor: 'pointer'
      },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
  };

  return <Pie {...config} />;
};

export default DailyCart;
