import React, { useState } from 'react'
import "./sidebar.css"
export default function Sidebar() {
    const [selstyle, setselstyle] = useState({ dashboard: true, contact: true })
    return (
        <div id='sidebar-wrap'>
            <div id='logo'>
                Logo
            </div>
            <div className='Sidebar-options' id={selstyle.dashboard ? "dashboard-cont" : "dashboard-cont-select"} onClick={() => { setselstyle({ ...selstyle, dashboard: false, contact: true }) }}>
                <img src="/dashboard.png" alt="dashboard" /><span>Dashboard</span>
            </div>
            <div className='Sidebar-options' id={selstyle.contact ? "contact-cont" : "contact-cont-select"} onClick={() => { setselstyle({ ...selstyle, contact: false, dashboard: true }) }}>
                <img src="/vector.png" alt="contact" /><span>Total contacts </span>
            </div>
            <div id='logout'>
                <img src="/logout.png" alt="logout" /><span>Logout</span>
            </div>
        </div>
    )
}
