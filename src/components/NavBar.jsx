import ButtonResponsive from "./Button"
import CartContainer from "./CartContainer"
import ItemFeatures from "./ItemFeatures"
import Brand from "./brand"

const NavBar = ()=>{
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
    <Brand />
    <ButtonResponsive />
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <ItemFeatures isActive = {true} name = "Shooters" path={"shooters"}/>
            </li>
            <li className="nav-item">
                <ItemFeatures isActive = {true} name = "SandBox" path={"sandbox"}/>
            </li>
            <li className="nav-item">
                <ItemFeatures isActive = {true} name = "Sports" path={"sports"}/>
            </li>
        </ul>
    </div>
    
    <CartContainer />
</div>
</nav>
    )
}

export default NavBar;