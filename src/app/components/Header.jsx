"use client"

import React from "react";
import "../css/Header.css"
import DropdownMenu from "./DropdownMenu";
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link href="/">
                        <img src="../images/logo-itbank.png" alt="Logo del banco" />
                    </Link>
                </div>
               <DropdownMenu></DropdownMenu>
            </header>
        </>
    )
}