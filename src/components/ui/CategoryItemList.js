import React from 'react'
import { Icon } from 'Icons/Icons'
import AnketData from "data/anket.json";
import classNames from 'classnames';
export default function CategoryItemList() {
  return (

    <>
      {
        AnketData.map((item, index) => (
          <div className={classNames({
            "ds w-10/12": true,
            "before:bg-public": item.type === "public",
            "before:bg-judgment": item.type === "politics",
            "before:bg-tecno": item.type === "tecno",
            "before:bg-product": item.type === "product",
            "before:bg-life": item.type === "life",
          })}>

            <div className='dsx z-30 flex px-6'> <Icon name="iconT" /> <span className='ml-3'>{item.title}</span></div>
            <div className='dsj info flex z-0 justify-center text-sm'>

              <span className='flex mr-3'><Icon name="vote" /> <span className='ml-2 mt-1'>{item.totalResponse}</span></span>
              <span className='flex mr-3'><span className='mt-2'><Icon name="eye" /></span> <span className='ml-2 mt-2'>{item.view}</span></span>
              <span className='flex mr-3'><span className='ml-2 mt-1'>Detay</span> <span className='rotate-45 ml-2'><Icon name="arrowUp" /></span> </span>

            </div>

          </div>
        ))
      }

    </>

  )
}
