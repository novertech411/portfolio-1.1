import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { bool, func } from 'prop-types';
import "../hamburger/hamburger.css"

export default function Hamburger({  isOpen, setIsOpen}) {
 
  return (
   
    <div id="menu_button"     >
      <Input type="checkbox" id="menu_checkbox"/>
      <label for="menu_checkbox" id="menu_label"   onClick={()  => setIsOpen(!isOpen)}>
        <div id="menu_text_bar"   ></div>
      </label>
   
  </div>
  )



}
