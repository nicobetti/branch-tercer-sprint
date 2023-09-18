"use client"

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Link from 'next/link'

export default function HomeHeader() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link href="/">
                        <img src="../images/logo-itbank.png" alt="Logo del banco" />
                    </Link>
                </div>
                <DropdownButton id="dropdown-basic-button" variant="dark" title="Ingresar" className="btn-dark">
                    <Dropdown.Item> <Link href="/login" >Home Banking</Link> </Dropdown.Item>
                </DropdownButton>
            </header>
        </>
    )
}

{/* <i className="fa-solid fa-right-to-bracket"></i> */}