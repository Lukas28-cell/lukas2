import React from 'react'
import { Link } from 'react-router-dom'

export default function Ability() {
 const   LINK = [
        {id:1, url:"Home", Path:"/"},
        {id:2, url:"About", Path:"about"},
        {id:3, url:"Contact", Path:"contact"},
        {id:4, url:"Register", Path:"register"},
    ]
  return (
    <div>
      {Link.map((Link)=>{

        return(
            <>
            <div>
                <li><Nav to={Link.Path}>{Link.url}</Nav></li>
            </div>
            </>
        )
      }
    
    )}
    </div>
  )
}
