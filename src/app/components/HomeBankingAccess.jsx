"use client"

import { Link } from "react-router-dom";
import "../css/HomeBankingAccess.css"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function HomeBankingAccess() {
    return (
        <>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button" className="btn-dark">
                <Dropdown.Item> <Link to="/login" className="dropdown-item">Home Banking</Link> </Dropdown.Item>
            </DropdownButton>
        </>
    )
}