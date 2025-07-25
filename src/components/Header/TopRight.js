import React, {useState} from "react";

function TopRight(){
    const [hoverIndex, setHoverIndex] = useState(null);

    const rightmeun = [
        {name: "购物车",className: "shopping-car"},
        {name: "我的订单",className: "my-orders"},
        {name: "我的京东",className: "my-jd", myjdmenu:[
            "待处理订单","返修退换货","我的问答","我的关注","降价商品"
        ]},
        {name: "企业采购",className: "business-procurement"},
        {name: "商家服务",className: "seller-services"},
        {name: "网站导航",className: "site-navigation"},
        {name: "手机京东",className: "jd-mobile-app"},
    ];

    return(
        <ul className="second-ul">
            {rightmeun.map((item,Index) => (
                <li 
                className = {item.className} 
                key={Index}
                onMouseEnter = {()=>setHoverIndex(Index)}
                onMouseLeave = {()=>setHoverIndex(null)}
                style={{ position: "relative" }}
                >
                    {item.name}
                    {item.myjdmenu && hoverIndex === Index && (
                        <ul className="my-jd-menu">
                            {item.myjdmenu.map((jditem,jdIndex)=>(
                                <li key={jdIndex} style={{padding:"5px 0"}}>
                                    {jditem}
                                </li>
                            ))}
                        </ul> 
                    )}
                </li>
            ))}
        </ul>   
    )
}

export default TopRight;