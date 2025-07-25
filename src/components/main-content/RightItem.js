import React from "react";

const services = [
    { img:"resources/pic1.png", text:"客服服务"},
    { img:"resources/pic2.png", text:"物流服务"},
    { img:"resources/pic3.png", text:"售后政策"},
]

function RightItem(){
    return(
        <div class="right-item">
            <div class="first">
                <img class="jd-pic" src="resources/mainpage.png" alt="图片加载失败"/>
                <div class="doc">HI~欢迎来到京东!</div>
            </div>
            <div class="second">
                <h4>中国特讯</h4>
                京东全球运费说明<br/>
                全球首后业务支付问题<br/>
                京东全球售自营商品售后说明
            </div>
            <div class="third">
                {services.map((item,index) => (
                    <div key={index}>
                        <img src={item.img} alt="加载失败"/>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
            <div class="fouth">
                <h4>国际支付</h4>
                <img src="resources/pay.png" alt="图片加载失败"/>
            </div>
        </div>
    )
}

export default RightItem;