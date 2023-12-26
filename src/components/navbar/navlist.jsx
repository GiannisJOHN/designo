import React from 'react'
import {Link} from "react-router-dom"

//css
import './navbar.css'

function Navlist(props) {
    //to handle class additions and removals conditionaly.
    let theme = {
        textStyleDesktop: 'navbar-list-a list-a-desktop',
        ulStyleDesktop: 'navbar-list list-desktop',
        textStyleMobile: 'navbar-list-a list-a-mobile',
        ulStyleMobile: 'navbar-list list-mobile',
        showMobile: 'list-mobile-show',
        hideMobile: 'list-mobile-hide',
        ul: function (state) {
            if (state.mobile === true) {
                return this.ulStyleMobile
            } else {return this.ulStyleDesktop}
        },
        text: function (state) {
            if (state.mobile === true) {
                return this.textStyleMobile
            } else {return this.textStyleDesktop}
        },
        showMobileList: function (state) {
            if (state.show === true) {
                return this.showMobile
            } else if (state.mobile === false) {
                return ''
            } else {return this.hideMobile}
        }
    }
    

    return (
        <ul className={`${theme.ul(props)} ${theme.showMobileList(props)}`}>
            <li>
                <Link to='/about' className={theme.text(props)}>OUR COMPANY</Link>
            </li>
            <li>
                <Link to='/locations' className={theme.text(props)}>LOCATIONS</Link>
            </li>
            <li>
                <Link to='/contact' className={theme.text(props)}>CONTACT</Link>
            </li>
        </ul>
    )
}

export default Navlist