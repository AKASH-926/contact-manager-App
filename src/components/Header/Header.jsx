import React, { useContext, useRef, useState } from 'react'
import "./header.css"
import axios from "axios"

import ContactContext from '../Context/ContactContext'
export default function Header() {
    const [searchquery, setsearchquery] = useState([])
    const token = window.localStorage.getItem('jwt')
    const contact = useContext(ContactContext)
    // console.log(contact)
    const handledisplay = (email) => {
        console.log(email)
    }

    return (
        <div id='header-wrap'>
            <div id='total-contact'>Total Contacts</div>

            <div id='search'>  <img className='search-icon' src="/search.png" alt="" onClick={() => {

            }} /> <input type="search" placeholder='Serach contact by Email ID..' name="search" id="search-inp" onChange={(e) => {
                let query = contact.map((item) => {
                    if (item.Email.includes(e.target.value) && e.target.value !== "" && e.target.value.length >= 3) {
                        return (item)
                    }
                })
                let filterquery = query.filter((item) => {
                    return item !== undefined
                })
                // console.log(filterquery)
                setsearchquery(filterquery)

            }} />

                <ul id='querylist'>
                    {(searchquery.length !== 0) ?
                        searchquery.map((item, i) => {
                            return (
                                <li key={i} onClick={() => { handledisplay(item.Email) }}>
                                    <img className='search-icon' src="/search.png" alt="" /> <span className='searchitem'>{item.Email}</span>
                                </li>
                            )
                        })
                        : <li>
                            <img className='search-icon' src="/search.png" alt="" /> <span className='searchitem'>No contacts found..</span>
                        </li>}

                </ul>

            </div>
            <div id='admin'><img src="/user.png" alt="" /><div id='admin-name'><span>Ram Darvin</span>
                <span>Super Admin</span></div></div>
        </div>
    )
}
