import React from 'react'
import Header from '../Header/Header'
import Pagination from '../Pagination/Pagination'
import Sidebar from '../sidebar/sidebar'
import TableArea from '../tablearea/TableArea'
import "./contactpage.css"
export default function ContactPage() {
    return (
        <div id='contact-page-wrap'>
            <Sidebar />
            <Header />
            <TableArea />
            <Pagination />
        </div>
    )
}
