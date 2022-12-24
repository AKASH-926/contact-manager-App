import { ContactAPI, SearchContext } from "./ContactAPI";
import { importContext } from "./ContactAPI";
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"

export default function ContactProvider({ children }) {

    const [contactdata, setcontactdata] = useState([])
    const [pagedcontact, setpagedcontact] = useState([])
    const [seldash, setseldash] = useState(false)
    // const [selcontact, setselcontact] = useState(true)
    const token = window.localStorage.getItem("jwt")

    const { imported, isDeleted } = useContext(importContext)

    useEffect(() => {
        const datafetch = async () => {
            await axios.get("https://contact-srver-test.onrender.com/contacts", { headers: { authorization: token } }).then((response) => { setcontactdata(response.data.contacts) })
            console.log(contactdata)
        }
        datafetch()
        // eslint-disable-next-line 
    }, [imported, isDeleted, token])


    return (
        <ContactAPI.Provider value={{ contactdata, setcontactdata, pagedcontact, setpagedcontact, seldash, setseldash }}>
            {children}
        </ContactAPI.Provider>
    )
}
