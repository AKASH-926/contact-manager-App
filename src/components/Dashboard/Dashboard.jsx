import React, { useContext } from 'react'
import Header from '../Header/Header'
import Sidebar from '../sidebar/sidebar'
import "./Dashboard.css"
import { ContactAPI } from '../Context/ContactAPI'
export default function Dashboard() {
    let user_display = window.localStorage.getItem('user_name');
    const { contactdata } = useContext(ContactAPI)
    return (
        <div>
            <Sidebar />
            <Header />
            <div id='dashboard-wrap'>
                <h1>DASHBOARD</h1>
                <p>Welcome <span id='user_name'>{user_display}</span> </p>
                <p>Total Contacts:{contactdata.length}</p>
            </div>
        </div>
    )
}
