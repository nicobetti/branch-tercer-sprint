"use client"

import React from "react";
import Link from 'next/link'
import HomeBankingAccess from "./HomeBankingAccess";


export default function HomeHeader() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link href="/">
                        <img src="../images/logo-itbank.png" alt="Logo del banco" />
                    </Link>
                </div>
                <HomeBankingAccess></HomeBankingAccess>
            </header>
        </>
    )
}
