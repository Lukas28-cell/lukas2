import React from 'react'
import { Outlet } from 'react-router-dom'

export default function luke() {
    const LINK=[
        {id:1, url:"Main", Path:"/"},
        {id:2, url:"About", Path:"about"},
        {id:3, url:"Blog", Path:"blog"},
        {id:4, url:"Service", Path:"service"},

    ]
  return (
    <div>
      {LINK.map((link)=>{

        return(
            <>
            <div>
                <li><NavLink to={link.Path}>{link.url}</NavLink></li>
            </div>
            </>
        )
      }
    
    )}
    <Outlet/>
    </div>
  )
}
