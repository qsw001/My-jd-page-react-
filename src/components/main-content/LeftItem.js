import React, { useState } from "react";

function LeftItem(){
    const Leftul=[
        {name: "家用电器"},
        {name: "手机 / 运营商 / 数码"},
        {name: "电脑 / 办公 / 文具用品"},
        {name: "家居 / 家具 / 家装 / 厨具"},
        {name: "男装 / 女装 / 童装 / 内衣"},
        {name: "美妆 / 个护清洁 / 宠物"},
        {name: "女鞋 / 箱包 / 钟表 / 珠宝"},
        {name: "男鞋 / 运动 / 户外"},
        {name: "母婴 / 玩具乐器"},
        {name: "食品 / 酒类 / 生鲜 / 特产"},
        {name: "艺术 / 礼品鲜花 / 农牧园艺"},
        {name: "图书 / 文娱 / 教育 / 电子书"},
        {name: "图书 / 文娱 / 教育 / 电子书1"},
        {name: "图书 / 文娱 / 教育 / 电子书2"},
        {name: "图书 / 文娱 / 教育 / 电子书3"},
        {name: "图书 / 文娱 / 教育 / 电子书4"},
    ];

    const [popupContent, setpopupContent] = useState("");
    const [popupVisible, setpopupVisible] = useState(false);

    return(
        <div className="left-item">
            <div 
                onMouseEnter={() => setpopupVisible(true)}
                onMouseLeave={() => setpopupVisible(false)}
            >
                <ul className="content-ul">
                {Leftul.map((text,index) => (
                        <li
                            key={index}
                            onMouseEnter={() => setpopupContent(text.name)}
                        >
                        {text.name}
                    </li>
                    ))}
                </ul>
                {popupVisible && (
                    <div className="popup">
                        {popupContent} 的详细信息
                    </div>
                )}
            </div>
        </div>
    )
}

export default LeftItem;