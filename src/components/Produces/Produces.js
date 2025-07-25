import React from "react";
import "./Produces.css"

function Produces(){

    const pictures = [
        {src:"resources/pro1.png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (10).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (11).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (12).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (13).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (14).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (2).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (3).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (4).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (5).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (6).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (7).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (8).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (9).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (10).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
        {src:"resources/粘贴的图像 (11).png", text:"德尔玛（Deerma）布艺清洗机BY100 S多功能清洁机", money:"599$"},
    ]

    return(
        <div className="products">
        <h1>
            商品推荐
        </h1>
        <div className="pics">
            {pictures.map((item,index) => (
                <div className="responsive" key={index}>
                    <div className="img">
                        <img src={item.src} alt="加载失败"/>
                        <div className="desc"> {item.text}
                            <p>{item.money}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Produces;