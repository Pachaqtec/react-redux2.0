import React from 'react'
import { useSelector } from 'react-redux'

import './style.css'

const Layout = ({ children }) => {
  const nickName = useSelector((x) => x.update)
  console.log('nickName', nickName)

  return (
    <div className="layout">
      <div className="header">
        <h1>Header</h1> <p>{nickName}</p>
      </div>
      <div className="body">
        {children}
      </div>
    </div>
  )
}

export default Layout
