
import TopLeft from "./TopLeft"
import TopRight from "./TopRight"
import "./Header.css"

function Header(){
    return(  
    <div className="top-nav">
        <TopLeft />
        <TopRight />
    </div>
    )
}

export default Header