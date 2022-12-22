import { ContactContext } from "./ContactContext";

import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function ContactProvider({ children }) {
    const [contactdata, setcontactdata] = useState([])
    const [pagedcontact, setpagedcontact] = useState([])
    const token = window.localStorage.getItem("jwt")

    // useEffect(() => {
    //     const datafetch = async () => {
    //         await axios.get("http://localhost:8000/contacts", { headers: { authorization: token } }).then((response) => { console.log(response.data.contacts) })
    //     }
    //     datafetch()
    //     // eslint-disable-next-line 
    // }, [])
    useEffect(() => {
        const datafetch = async () => {
            await axios.get("http://localhost:8000/contacts", { headers: { authorization: token } }).then((response) => { setcontactdata(response.data.contacts) })
        }
        datafetch()
        // eslint-disable-next-line 
    }, [])





    return (
        <ContactContext.Provider value={{ contactdata, setcontactdata, pagedcontact, setpagedcontact }}>
            {children}
        </ContactContext.Provider>
    )
}
