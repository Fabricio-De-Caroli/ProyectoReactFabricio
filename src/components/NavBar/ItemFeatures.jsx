import { Link } from "react-router-dom";

const ItemFeatures = ({isActive = false, name, path}) =>{
    return(
        <Link className={`nav-link ${isActive ? "active" : null}`} aria-current="page" to= {`/${path}`}>{name}</Link>
    )
}

export default ItemFeatures;