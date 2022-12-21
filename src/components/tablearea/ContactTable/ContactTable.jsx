import React, { useEffect, useState } from 'react'
import "./ContactTable.css"
import axios from 'axios'
export default function ContactTable() {

    const [contact, setcontact] = useState([])
    const header = window.localStorage.getItem("jwt")

    useEffect(() => {
        axios.get("http://localhost:8000/contacts", { headers: { authorization: header } }).then((response) => { setcontact([...response.data.contacts]) }
        )
    }, [])
    // console.log(contact)
    return (
        <div id='contactTable-wrap'>
            <table id='table-wrap' cellSpacing={0}>
                <thead >
                    <tr id='head-wrap'>
                        <th className='border-left-radius' ><div><input type="checkbox" name="" id="" /></div></th>
                        <th >Name</th>
                        <th >| Designation</th>
                        <th >| Industry</th>
                        <th >| Company</th>
                        <th >| Email</th>
                        <th>| Phone Number</th>
                        <th>| Country</th>
                        <th className='border-right-radius'>| Action</th>
                    </tr>
                </thead>

                <tbody id='table-rows'>
                    {/* <tr className='table-content-wrap'>
                        <td><div><input type="checkbox" name="" id="" /></div></td>
                        <td> Akash</td>
                        <td>CEO</td>
                        <td>Software</td>
                        <td>Google</td>
                        <td>akash.arthnaur26@gmail.com</td>
                        <td>123456789</td>
                        <td>IND</td>
                        <td><div className='edit-del-icon'>
                            <img src="/pencil.png" alt="pencil" />  <img src="/trash.png" alt="trash" />
                        </div></td>
                    </tr> */}
                    {
                        contact.map((value, i) => {
                            return (
                                <tr className='table-content-wrap'>
                                    <td><div><input type="checkbox" name="" id="" /></div></td>
                                    <td>{value.Name}</td>
                                    <td>{value.Designation}</td>
                                    <td>{value.Industry}</td>
                                    <td>{value.Company}</td>
                                    <td>{value.Email}</td>
                                    <td>{value.Phone_number}</td>
                                    <td>{value.Country}</td>
                                    <td><div className='edit-del-icon'>
                                        <img src="/pencil.png" alt="pencil" />  <img src="/trash.png" alt="trash" />
                                    </div></td>
                                </tr>
                            )
                        }

                        )
                    }



                </tbody>


            </table>
        </div>
    )
}

