import ButtonResponsive from "./Button"
import CartContainer from "./CartContainer"
import ItemFeatures from "./ItemFeatures"
import Brand from "./brand"

const NavBar = ()=>{
    return(
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <Brand />
    <ButtonResponsive />
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <ItemFeatures isActive = {true} name = "Most played games" />
            </li>
            <li class="nav-item">
                <ItemFeatures isActive = {true} name = "Shooters" />
            </li>
            <li class="nav-item">
                <ItemFeatures isActive = {true} name = "SandBox" />
            </li>
            <li class="nav-item">
                <ItemFeatures isActive = {true} name = "Sports" />
            </li>
        </ul>
    </div>
    
    <CartContainer />
</div>
</nav>
    )
}

export default NavBar;