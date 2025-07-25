import React from "react";
import "./MainContent.css"
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import MiddleItem from "./MiddleItem";

function MainContent(){
    return(
        // <!-- 主体内容 -->
    <div class="main-content">
        <LeftItem />
        <MiddleItem />
        <RightItem />
    </div>
    )
}

export default MainContent;