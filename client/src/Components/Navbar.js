import React from 'react'
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <div> <nav class="navbar">
    <a href="#" class="navbar-brand">PATHSHALA</a>

    <span class="menu-toggle" onclick="toggleMenu()">☰</span>
    <ul class="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav></div>
  )
}

export default Navbar