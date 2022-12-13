import {Link, NavLink} from 'react-router-DOMException';

const Menu = () => {
    return (
    <div className="pageHeader" >
        <h1><Link to="/">Claim Page</Link></h1>
        <ul className="nav">
            <li><Link to="/find">Find Claims</Link></li>
            <li><NavLink to="/add">New Claim</NavLink></li>
        </ul>
    </div>);
}

export default Menu;