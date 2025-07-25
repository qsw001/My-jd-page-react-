import React from "react";
import "./SearchBar.css"
import SearchHotWords from "./SearchHotWords";
import SearchInput from "./SearchInput";

function Search(){
    return(
    <div className="search-bar">
        <img className="jd-pic" src="/resources/0742847dfed41e81.png" alt="加载失败"/>
        <div className="middle-block">
            <SearchInput />
            <SearchHotWords keywords={["除湿器", "空气净化器", "手机通讯", "福临门大米", "油烟机灶具套装", "小天鹅洗衣机", "网络机顶盒", "行车记录仪"]} />
        </div>
        <div className="shopping-car">购物车</div>  
    </div>
    )
}

export default Search;
