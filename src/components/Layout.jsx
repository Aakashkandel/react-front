import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Layouts/Nav'

export default function Layout(props) {
    return (
        <div>
           <div>
           <Nav />
           <Outlet />
           </div>
        </div>
    )
}
