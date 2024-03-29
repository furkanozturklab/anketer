import React, { forwardRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AnketerBeforeSket = forwardRef(({ skeletons }, ref) => {
  return (
    <div className="" style={{position:"absolute", width:"100%"}} ref={ref}>
      {Array(skeletons)
        .fill(0)
        .map((item, index) => (
          <li className="list-items before:bg-public" key={index} ref={ref}>
            <div className="header">
              <div className="icon">
                <Skeleton circle width={24} height={24} />
              </div>
              <div className="text">
                <Skeleton />
              </div>
              <div className="date">
                <Skeleton />
              </div>
            </div>
          </li>
        ))}
    </div>
  );
});

export default AnketerBeforeSket;
