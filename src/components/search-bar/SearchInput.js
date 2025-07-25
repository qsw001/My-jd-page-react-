import React,{useState}from "react";

function SearchInput(){
    const [text,setText] = useState("");

    const handleSearch = () => {
        console.log("点击搜索框");
        //点击后的逻辑
    }

    return(
        <div className="search-father">
            <input 
                type="text" 
                placeholder="搜索"
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />
            <img 
                src="/resources/6ee6489b504e48fe84496f2e5b7e6071.png" 
                alt="加载失败" 
                className="image"
                onClick={handleSearch}
            />
        </div>
    )
}

export default SearchInput; 


// import React, { useState, useEffect } from "react";

// function SearchInput() {
//   const hotWords = [
//     "除湿器",
//     "空气净化器",
//     "手机通讯",
//     "小天鹅洗衣机",
//     "行车记录仪",
//   ];

//   const [placeholderIndex, setPlaceholderIndex] = useState(0);
//   const [text, setText] = useState("");

//   // 每隔 2 秒更新 placeholderIndex
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPlaceholderIndex((prevIndex) => (prevIndex + 1) % hotWords.length);
//     }, 2000);

//     // 清除定时器
//     return () => clearInterval(interval);
//   }, [hotWords.length]);

//   const handleSearch = () => {
//     console.log("搜索内容：", text);
//   };

//   return (
//     <div className="search-father">
//       <input
//         type="text"
//         placeholder={hotWords[placeholderIndex]}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <img
//         src="/resources/6ee6489b504e48fe84496f2e5b7e6071.png"
//         alt="加载失败"
//         className="image"
//         onClick={handleSearch}
//       />
//     </div>
//   );
// }

// export default SearchInput;