import React from "react";
import {IoEarthOutline} from 'react-icons/io5';

export default function Header() {
  return (
    <div className="header">
      <IoEarthOutline />
      <span className="header-text">my travel journal.</span>
    </div>
  )
}