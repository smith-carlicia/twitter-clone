import ListGroup from 'react-bootstrap/ListGroup';
import {Router, NavLink} from 'react-router-dom'; 
import './style.css';

const Nav = () => {

    function alertClicked() {
        alert('You clicked the third ListGroupItem');
    }

    return(
        <>
        <header>Twitter Icon</header>
        <nav>
            <NavLink className="link" to="home">
                Home
            </NavLink>
            <NavLink to="explore">
                Explore
            </NavLink>
            <NavLink to="notifications">
                Notifications
            </NavLink>
            <NavLink to='messages'>
                Messages
            </NavLink>
            <NavLink to="bookmarks">
                Bookmarks
            </NavLink>
            <NavLink to="lists">
                Lists
            </NavLink>
            <NavLink to="profile">
                Profile
            </NavLink>
            <NavLink to="more">
                More
            </NavLink>
        </nav>
        </>
    )
}

export default Nav;