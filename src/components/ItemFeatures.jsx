
const ItemFeatures = ({isActive = false, name, path}) =>{
    return(
        <a className={`nav-link ${isActive ? "active" : null}`} aria-current="page" href= {`/${path}`}>{name}</a>
    )
}

export default ItemFeatures;