import { ContactContext } from "./ContactContext";

import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function ContactProvider({ children }) {
    const [contactdata, setcontactdata] = useState([])
    const token = window.localStorage.getItem("jwt")
    useEffect(() => {
        axios.get("http://localhost:8000/contacts", { headers: { authorization: token } }).then((response) => { setcontactdata([...response.data.contacts]) }
        )
    }, [])

    return (
        <ContactContext.Provider value={contactdata}>
            {children}
        </ContactContext.Provider>
    )
}
