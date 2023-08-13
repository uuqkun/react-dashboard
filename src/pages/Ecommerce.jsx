import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

import { Button, Pie, SparkLine, Stacked } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Ecommerce = () => {
  const { currentColor } = useStateContext();
  
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="w-full lg:w-1/3 lg:h-48 p-7 m-2.5 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$88,233,12</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-wrap justify-center items-center gap-1">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="w-[40%] md:w-auto m-3 md:p-8 p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl"
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-3`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* revenue section */}
      <div className="mt-3 flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 w-11/12">
          <div className="flex justify-between">
            {/* left side - revenue */}
            <p className="font-semibold text-xl">Revenue Updates</p>

            {/* right side - expense & budget */}
            <div className="flex items-center gap-4">
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              {/* budget */}
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>budget</p>
              </div>
              {/* expense */}
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$3,438</span>
                </p>
                <p className='text-gray-500 mt-1'>expense</p>
              </div>
              {/* sparkline chart */}
              <div className="mt-5">  
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button 
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce