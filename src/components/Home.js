// dependencies
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import GridLoader from "react-spinners/GridLoader";
import { animate } from "framer-motion";
import { Element } from "react-scroll";

// my components
import Nav from "./ui/Nav";
import Counter from "./ui/Counter";
import CategoryItemList from "./ui/CategoryItemList";
import Vote from "./ui/surveyItems/vote";
import VoteResult from "./ui/surveyItems/voteResult";

// my functions
import { loadSurver } from "../api/apimodel";
import { Icon } from "Icons/Icons";
import { timerSet, voteEffect } from "../Tools/Gears";
import { scrollToSection } from "Animation/Animations";
import { scrollToTop } from "Animation/Animations";

export default function Home() {
  const [jsonData, setJsonData] = useState(null);
  const [postVoteData, setPostVoteData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [aniStatus, setAniStatus] = useState(false);

  const [oldAnketer, setOldAnketer] = useState(false);

  let timeEnd = timerSet();

  const vote = useRef();
  const prgBar = useRef();
  const baseRef = useRef();

  // UseEffect  //

  //* load useEffect
  useEffect(() => {
    const pageLoad = async () => {
      await loadSurver(setJsonData, setPostVoteData);
      setIsLoading(false);
    };
    if (jsonData === null) pageLoad();
    return () => {
      console.log("Destory");
    };
  }, [jsonData]);

  //* load first page load useEffect
  useEffect(() => {
    if (isLoading) console.log("useEffect 1 - >true");
    else if (jsonData !== null && !aniStatus) {
      console.log("x");
      setAniStatus(true);
      animate(
        baseRef.current,
        {
          opacity: [0, 1],
          scale: [0.8, 1],
          filter: ["blur(2px)", "blur(0px)"],
        },
        { duration: 0.8, easing: "ease-in-out", steps: 60 }
      );
    }
  }, [isLoading, jsonData, aniStatus]);

  //* vote send useEffect
  useEffect(() => {
    const ani = async () => {
      await animate(
        prgBar.current,
        { height: [0, 240], opacity: [0, 1] },
        { duration: 0.4, easing: "ease-in-out", steps: 60 }
      );
    };
    if (postVoteData) ani();
  }, [postVoteData]);

  // UseEffect //

  // Main Load //

  if (isLoading) {
    return (
      <div className="spinner">
        <GridLoader color="#c2410c" size={30} />
      </div>
    );
  } else if (jsonData !== null) {
    return (
      <section
        ref={baseRef}
        className={classNames({
          "anketer-base overflow-y-auto ": true,
          "before:bg-tecno tecno": jsonData[0]["anketer_type"] === "tecno",
          "before:bg-judgment politics":
            jsonData[0]["anketer_type"] === "politics",
          "before:bg-public public": jsonData[0]["anketer_type"] === "public",
          "before:bg-product product":
            jsonData[0]["anketer_type"] === "product",
          "before:bg-life life": jsonData[0]["anketer_type"] === "life",
          "before:bg-sport sport": jsonData[0]["anketer_type"] === "sport",
        })}
      >
        <Element
          name="navSection"
          className=" py-2 px-9  h-16 fixed z-40 w-full"
        >
          <Nav />
        </Element>
        
        <section className="anketer-content">
          <div className="anketer-header">
            <div className="anket-question transition-all">
              <p>{jsonData[0]["anketer_question"]}</p>
            </div>
            {postVoteData ? (
              <>
                <div
                  ref={prgBar}
                  className=" prg-bar "
                  style={{ opacity: 0, height: 0 }}
                >
                  <VoteResult
                    data={jsonData[1]}
                    totalVote={jsonData[0]["anketer_total"]}
                    type={jsonData[0]["anketer_type"]}
                  />
                </div>
              </>
            ) : (
              <>
                <div ref={vote} className="anketer-buttons">
                  {Object.keys(jsonData[1]).map(
                    (item, index) =>
                      item.includes("_text") &&
                      jsonData[1][item] !== null && (
                        <Vote
                          key={index}
                          voteEffect={voteEffect}
                          setJsonData={setJsonData}
                          vote={vote}
                          setPostVoteData={setPostVoteData}
                          vote_col={item}
                          text={jsonData[1][item]}
                          id={jsonData[1]["anketer_id"]}
                        />
                      )
                  )}
                </div>
              </>
            )}
          </div>

          <div className="anketer-footer">
            <div className="mb-2 w-full flex justify-center">
              <button
                onClick={() =>
                  scrollToSection(".list-sections", setOldAnketer)
                }
                className="opacity-80 hover:opacity-100 tracking-wide"
              >
                Önceki Anketler
              </button>
            </div>
            <Counter
              className="mb-4 ml-3 block"
              getHours={timeEnd[0]}
              getMinutes={timeEnd[1]}
              getSeconds={timeEnd[2]}
              getIsRunning={true}
            />
            <span className="flex mb-4 mr-3">
              <Icon name="user" />
              <span className="ml-4">{jsonData[0]["anketer_total"]}</span>{" "}
            </span>
          </div>
        </section>

        <Element name="listSections" style={{display:"none"}} className="element list-sections">
          <ul className="w-full relative">
            {oldAnketer && <CategoryItemList />}
          </ul>
          <div className="list-section-icon"><span onClick={()=> scrollToTop(".anketer-content",setOldAnketer)}><Icon name="arrowUp" size={24} /></span></div>
        </Element>
      </section>
    );
  }

  // Main Load //
}
