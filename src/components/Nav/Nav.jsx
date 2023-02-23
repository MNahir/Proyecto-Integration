 import SearchBar from "../SearchBar/SearchBar";
 import style from "./Nav.module.css";
 import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
        <nav className={style.container}>
            <hr className={style.borde} ></hr>
            <div className={style.container} >
                 <Link to='/' className={style.nav} >Logout</Link>
                 <Link to='/about' className={style.nav} >About</Link>
                 <Link to='/home' className={style.nav} >Home</Link>
                 <Link to='/favorites' className={style.nav}>Favorites</Link>
            </div>
                 <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;





