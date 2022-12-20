import React from 'react'
import "./ContactTable.css"
export default function ContactTable() {
    return (
        <div id='contactTable-wrap'>
            <table>

                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Industry</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>


                <tr>
                    <td>Akash</td>
                    <td>CEO</td>
                    <td>Nvidia</td>
                    <td>Software</td>
                    <td>akash.arthanur26@gmail.com</td>
                    <td>8861945561</td>
                    <td>India</td>
                    <td>yes</td>
                </tr>

            </table>
        </div>
    )
}

