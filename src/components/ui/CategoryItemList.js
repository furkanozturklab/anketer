import React, { useEffect, useRef, useState, forwardRef } from "react";
import { Icon } from "Icons/Icons";
import AnketData from "data/anket.json";
import classNames from "classnames";
import AnketerBeforeSket from "components/skeleton/anketerBeforeSket";
import { oldLoadSurver } from "api/apimodel";
import { animate } from "framer-motion";
export default function CategoryItemList() {
  const [oldJsonData, setOldJsonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const skeletons = useRef();
  const listItems = useRef();
  const rSkletons = useRef();

  useEffect(() => {
    oldLoadSurver(setOldJsonData);
  }, []);

  useEffect(() => {
    const loadAni = async () => {
      if (!isLoading) {
        setIsLoading(true);
        await animate(skeletons.current, { opacity: [0, 1] }, { duration: 5 });
      } else if (isLoading) {
    
        await animate(
          skeletons.current,
          { opacity: [1, 0], display: ["block", "none"] },
          { duration: 0.4 }
        );
        await animate(
          listItems.current,
          { opacity: [0, 1] },
          { duration: 0.4 }
        );
      }
    };

    loadAni();
  }, [oldJsonData]);

  return (
    <>
      <AnketerBeforeSket ref={skeletons} skeletons={7} />

      {oldJsonData &&
        oldJsonData.map((item, index) => {
          const listItem = (
            <li
              ref={listItems}
              key={item.anketer_id}
              className={classNames({
                "list-items": true,
                "before:bg-public": item.anketer_type === "public",
                "before:bg-judgment": item.anketer_type === "politics",
                "before:bg-tecno": item.anketer_type === "tecno",
                "before:bg-product": item.anketer_type === "product",
                "before:bg-life": item.anketer_type === "life",
                "before:bg-sport": item.anketer_type === "sport",
              })}
            >
              <div className="header">
                <div className="icon">
                  <Icon name="iconT" />
                </div>
                <div className="text">
                  <p className=""> {item.anketer_question} </p>
                </div>
                <div className="date">
                  <span className="relative font-semibold">
                    {" "}
                    {new Date(item.anketer_time).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                  </span>
                </div>
              </div>
            </li>
          );

          return listItem;
        })}
    </>
  );
}
