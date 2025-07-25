// import React from "react";

// function MiddleItem(){
//     return(
//         <div className="middle-item">
//             <div className="carousel-wrap" id="wrap">
//                 <ul className="list">
//                     <li className="item-active"><img className="carousel" src="resources/guanggao.png" alt="加载失败"/></li>
//                     <li className="item"><img className="carousel" src="resources/guanggao4.png" alt="加载失败"/></li>
//                     <li className="item"><img className="carousel" src="resources/guanggao5.png" alt="加载失败"/></li>
//                     {/* <!-- <button className="btn" id="left-button"> < </button>
//                     <button className="btn" id="right-button"> > </button> --> */}
//                 </ul>
//                  <button className="btn" id="left-button">{"<"}</button>
//                  <button className="btn" id="right-button">{">"}</button>
//                 {/* <!-- <img className="carousel" src="resources/guanggao.png" alt="加载失败"> --> */}
//             </div>
//             <div className="bottom-block">
//                 <a href="https://pro.jd.com/mall/active/QAXvQxvGkVUm2aJcnd6kNHRkC2p/index.html?babelChannel=ttt6">
//                     <img className="i1" src="resources/guanggao2.png" alt="加载失败"/>
//                 </a>
//                 <a href="https://pro.jd.com/mall/active/4JQQFF8EabeJgZiGauc3H5JgEAsA/index.html?babelChannel=ttt9">
//                     <img className="i2" src="resources/guanggao3.png" alt="加载失败"/>
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default MiddleItem;

import React, { useEffect, useState } from "react";

function MiddleItem() {
  const images = [
    "resources/guanggao.png",
    "resources/guanggao4.png",
    "resources/guanggao5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext(); // 自动切换
    }, 3000); // 每3秒切换一次

    return () => clearInterval(timer); // 清除定时器
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="middle-item">
      <div className="carousel-wrap" id="wrap">
        <ul className="list">
          {images.map((src, index) => (
            <li
              key={index}
              className={index === currentIndex ? "item-active" : "item"}
            >
              <img className="carousel" src={src} alt="加载失败" />
            </li>
          ))}
        </ul>
        <button className="btn" onClick={handlePrev} id="left-button">{"<"}</button>
        <button className="btn" onClick={handleNext} id="right-button">{">"}</button>
      </div>

      <div className="bottom-block">
        <a href="https://pro.jd.com/mall/active/QAXvQxvGkVUm2aJcnd6kNHRkC2p/index.html?babelChannel=ttt6">
          <img className="i1" src="resources/guanggao2.png" alt="加载失败" />
        </a>
        <a href="https://pro.jd.com/mall/active/4JQQFF8EabeJgZiGauc3H5JgEAsA/index.html?babelChannel=ttt9">
          <img className="i2" src="resources/guanggao3.png" alt="加载失败" />
        </a>
      </div>
    </div>
  );
}

export default MiddleItem;