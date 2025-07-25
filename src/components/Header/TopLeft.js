import React, { useState } from "react";

// function TopLeft(){
//     const [hoverIndex, setHoverIndex] = useState(null);

//     const countrys = ["港澳版", "中国台湾版", "海外版"]

//     return(
//         <ul className="first-ul">
//             <li className="ls-one">京东首页</li>
//             <li className="top-region" >
//                 中国大陆版
//             </li>
//             <li className="hello">你好,请登陆</li>
//             <li className="change">切换至企业版</li>
//         </ul> 
//     )
// }


function TopLeft() {
  // 记录哪个菜单项处于 hover 状态
  const [hoverIndex, setHoverIndex] = useState(null);

  // 示例菜单数据，部分菜单项带子菜单
  const menuItems = [
    { name: "京东首页", className: "ls-one" },
    { name: "中国大陆版", className: "top-region", submenu: ["港澳版", "中国台湾版", "海外版"] },
    { name: "你好,请登录", className: "hello"},
    { name: "切换至企业版", className: "change"},
  ];

  return (
    <ul className="first-ul">
      {menuItems.map((item, index) => (
        <li
          className = {item.className}
          key={index}
          onMouseEnter={() => setHoverIndex(index)}  // 鼠标进来设置hover
          onMouseLeave={() => setHoverIndex(null)}   // 鼠标离开清空hover
          style={{ position: "relative" }}
        >
          {item.name}
          {item.submenu && hoverIndex === index && (
            <ul className="submenu">
              {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} style={{ 
                    padding: "5px 0" ,
                  }}>
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TopLeft;