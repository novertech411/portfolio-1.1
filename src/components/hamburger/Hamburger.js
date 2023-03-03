import { Input } from '@chakra-ui/react'
import React from 'react'
import "../hamburger/hamburger.css"

export default function Hamburger() {
  return (
    <div id="webapp_cover" m="auto">
    <div id="menu_button">
      <Input type="checkbox" id="menu_checkbox"/>
      <label for="menu_checkbox" id="menu_label">
        <div id="menu_text_bar"></div>
      </label>
    </div>
  </div>
  )
}
