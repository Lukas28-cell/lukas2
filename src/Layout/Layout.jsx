import React from 'react'
import {Link, NavLink, Outlet} from "react-router-dom"


function Layout() {
    const LINK=[
        {id:1, url: "Home", Path: "/"},
        {id:2, url: "About", Path: "about"},
        {id:3, url: "Contact", Path: "contact"},
        {id:4, url: "Register", Path: "sign-up"},
    ]
  return (
    <div>
        {LINK.map((link)=>{
            return(
                <>
                
                    <li><NavLink to={link.Path}>{link.url}</NavLink></li>
        
                </>
            )
        }
        )}
        <Outlet/>


        </div>
  )
}
export default Layout