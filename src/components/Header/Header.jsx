import React, { useContext, useState } from 'react'
import "./header.css"


import { ContactContext, SearchContext } from '../Context/ContactContext'
export default function Header() {
    const [searchquery, setsearchquery] = useState([])
    const token = window.localStorage.getItem('jwt')
    const contact = useContext(ContactContext)
    const { setsearchdata, setisSearch } = useContext(SearchContext)
    const handledisplay = (item) => {
        if (token) {
            setsearchdata(item)
            setisSearch(true)
        }
    }
    return (
        <div id='header-wrap'>
            <div id='total-contact'>Total Contacts</div>

            <div id='search'>  <img className='search-icon' src="/search.png" alt="" onClick={() => {

            }} /> <input type="search" placeholder='Serach contact by Email ID..' name="search" id="search-inp" onChange={(e) => {

                let query = contact.map((item) => {
                    if (item.Email.includes(e.target.value) && e.target.value !== "" && e.target.value.length >= 3) {
                        return (item)
                    } else if (e.target.value === "") {
                        setisSearch(false)
                    }
                    return undefined
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
                                <li key={i} onClick={() => { handledisplay(item) }}>
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
