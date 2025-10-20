'use client'
import {useState} from "react";
export default function Dropdown(){
    const[isOpen ,setIsOpen]=useState(false);
    const toggleDropdown=()=>{
        setIsOpen(!isOpen)
    };
    const closeDopdown=()=>{
        setIsOpen(false);    }
};