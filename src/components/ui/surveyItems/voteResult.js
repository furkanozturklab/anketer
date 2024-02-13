import classNames from 'classnames';
import React from 'react'

export default function VoteResult({ data, totalVote, type }) {


    const values = [];
    const valuesY = [];
    Object.keys(data).map((item) => {
        if (item.includes("_val")) {
            if (data[item] !== null) {
                let totalY = (data[item] / totalVote) * 100;
                totalY = parseFloat(totalY.toFixed(1));
                values.push(totalY);
                valuesY.push(totalY);
            }
            else {
                values.push(null);
                valuesY.push(null);
            }
        }
    });

    return (
        <>
            {Object.keys(data).map((item, index) => (
                item.includes("_text") && values[0] !== null &&

                <div key={item} className='w-2/3 my-4'>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-white">{data[item]}</span>
                        <span className="text-sm font-medium text-white ">{values.shift()}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className={classNames({
                            " h-2.5 rounded-full": true,
                            "bg-lifeColors": type === "life",
                            "bg-productColors": type === "product",
                            "bg-politicsColor": type === "politics",
                            "bg-tecnoColos": type === "tecno",
                            "bg-publicColor": type === "public",
                            "bg-sport": type === "sport",
                        })} style={{ width: `${valuesY.shift()}%` }} ></div>
                    </div>
                </div>
            ))}
        </>
    )
}
