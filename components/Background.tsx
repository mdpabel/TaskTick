import React, { ReactNode } from 'react';

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='1440'
        height='250'
        preserveAspectRatio='none'
        viewBox='0 0 1440 250'
      >
        <g mask='url("#SvgjsMask1000")' fill='none'>
          <rect width='1440' height='250' x='0' y='0' fill='#0e2a47'></rect>
          <path
            d='M9 250L259 0L500.5 0L250.5 250z'
            fill='url(#SvgjsLinearGradient1001)'
          ></path>
          <path
            d='M265.6 250L515.6 0L745.1 0L495.1 250z'
            fill='url(#SvgjsLinearGradient1001)'
          ></path>
          <path
            d='M518.2 250L768.2 0L943.7 0L693.7 250z'
            fill='url(#SvgjsLinearGradient1001)'
          ></path>
          <path
            d='M758.8000000000001 250L1008.8000000000001 0L1059.8000000000002 0L809.8000000000001 250z'
            fill='url(#SvgjsLinearGradient1001)'
          ></path>
          <path
            d='M1409 250L1159 0L833.5 0L1083.5 250z'
            fill='url(#SvgjsLinearGradient1002)'
          ></path>
          <path
            d='M1168.4 250L918.4000000000001 0L681.4000000000001 0L931.4000000000001 250z'
            fill='url(#SvgjsLinearGradient1002)'
          ></path>
          <path
            d='M924.8 250L674.8 0L634.3 0L884.3 250z'
            fill='url(#SvgjsLinearGradient1002)'
          ></path>
          <path
            d='M688.1999999999999 250L438.19999999999993 0L396.19999999999993 0L646.1999999999999 250z'
            fill='url(#SvgjsLinearGradient1002)'
          ></path>
          <path
            d='M1240.6432008076429 250L1440 50.64320080764284L1440 250z'
            fill='url(#SvgjsLinearGradient1001)'
          ></path>
          <path
            d='M0 250L199.35679919235716 250L 0 50.64320080764284z'
            fill='url(#SvgjsLinearGradient1002)'
          ></path>
        </g>
        <defs>
          <mask id='SvgjsMask1000'>
            <rect width='1440' height='250' fill='#ffffff'></rect>
          </mask>
          <linearGradient
            x1='0%'
            y1='100%'
            x2='100%'
            y2='0%'
            id='SvgjsLinearGradient1001'
          >
            <stop stop-color='rgba(15, 70, 185, 0.2)' offset='0'></stop>
            <stop
              stop-opacity='0'
              stop-color='rgba(15, 70, 185, 0.2)'
              offset='0.66'
            ></stop>
          </linearGradient>
          <linearGradient
            x1='100%'
            y1='100%'
            x2='0%'
            y2='0%'
            id='SvgjsLinearGradient1002'
          >
            <stop stop-color='rgba(15, 70, 185, 0.2)' offset='0'></stop>
            <stop
              stop-opacity='0'
              stop-color='rgba(15, 70, 185, 0.2)'
              offset='0.66'
            ></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className='absolute top-0 bottom-0 left-0 right-0 p-5 text-white'>
        {children}
      </div>
    </div>
  );
};

export default Background;
