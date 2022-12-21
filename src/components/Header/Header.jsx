import React from 'react'
import "./header.css"
export default function Header() {
    const handlesearch = () => {

    }
    return (
        <div id='header-wrap'>
            <div id='total-contact'>Total Contacts</div>

            <div id='search'>   <img id='search-icon' src="/search.png" alt="" /> <input type="search" placeholder='Serach contact by Email ID..' name="search" id="search-inp" onChange={handlesearch()} /></div>
            <div id='admin'><img src="/user.png" alt="" /><div id='admin-name'><span>Ram Darvin</span>
                <span>Super Admin</span></div></div>
        </div>
    )
}
