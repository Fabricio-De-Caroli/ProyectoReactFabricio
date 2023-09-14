
const ItemFeatures = ({isActive = false, name}) =>{
    return(
        <a class={`nav-link ${isActive ? "active" : null}`} aria-current="page" href="#">{name}</a>
    )
}

export default ItemFeatures;