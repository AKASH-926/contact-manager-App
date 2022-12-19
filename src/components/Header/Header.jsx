import React from 'react'
import "./header.css"
export default function Header() {
    return (
        <div id='header-wrap'>
            <div id='total-contact'>Total Contacts</div>

            <div id='search'>   <img id='search-icon' src="/search.png" alt="" /> <input type="search" name="search" id="search-inp" /></div>
            <div id='admin'><img src="/user.png" alt="" /><div id='admin-name'><span>Ram Darvin</span>
                <span>Super Admin</span></div></div>
        </div>
    )
}
