import { Icon } from 'Icons/Icons'
import React from 'react'
import CatData from 'data/category.json'
import classNames from 'classnames'
import CategoryItemList from './CategoryItemList'

export default function CategoryItem({ ...props }) {
    return (

        <>

          
         


            {CatData.map((item, index) => (
                <li key={index} className='basis-full md:basis-1/5 z-30 p-1'>
                    <div className={classNames({
                        "p-6 content flex flex-wrap": true,
                        "after:bg-publicColor before:bg-public": item.type === "public",
                        "after:bg-politicsColor before:bg-judgment": item.type === "politics",
                        "after:bg-tecnoColos before:bg-tecno": item.type === "tecno",
                        "after:bg-productColors before:bg-product": item.type === "product",
                        "after:bg-lifeColors before:bg-life": item.type === "life",
                    })}>
                        <div className="flex h-11 items-center my-2 tracking-wider"> <span><Icon size={36} name="iconT" /></span> <h2 className='font-semibold text-2xl ml-2'>Anketer</h2>  </div>
                        <div className="mx-3 my-4 w-full">
                            <div className={classNames({
                                "content-img": true,
                                "bg-public": item.type === "public",
                                "bg-judgment ": item.type === "politics",
                                "bg-tecno": item.type === "tecno",
                                "bg-product  ": item.type === "product",
                                "bg-life": item.type === "life",
                            })} />
                        </div>
                        <div className="my-4 h-56">
                            <h3 className='text-white font-semibold text-2xl leading-8'>{item.title}</h3>
                            <p className='text-second opacity-90 my-2 text-[15px] h-44'>{item.sub}</p>
                        </div>
                        <div className="h-10 mb-9 flex justify-center items-center w-full">
                            <button className={classNames({
                                "px-10 py-2 rounded border  border-three font-medium transition-all tracking-wider ": true,
                                "hover:bg-publicColor hover:border-publicColor": item.type === "public",
                                "hover:bg-politicsColor hover:border-politicsColor": item.type === "politics",
                                "hover:bg-tecnoColos hover:border-tecnoColos": item.type === "tecno",
                                "hover:bg-productColors hover:border-productColors": item.type === "product",
                                "hover:bg-lifeColors hover:border-lifeColors": item.type === "life",
                            })}> Anketleri Göster</button>
                        </div>
                        <div className="border-t border-three w-full pt-3 flex content-center items-center justify-between">


                            <div className='text-sm flex items-center'>
                                <span className='mr-1'><Icon name="vote" /></span>
                                <span className='mr-1 mt-1'>15K Oylama</span>
                            </div>

                            <div className='text-sm flex items-center'>
                                <span className='mr-1'><Icon name="survey" /></span>
                                <span className='mr-1 mt-1'> 50K Anket</span>
                            </div>

                        </div>
                    </div>
                </li>
            ))}
        </>




    )
}
