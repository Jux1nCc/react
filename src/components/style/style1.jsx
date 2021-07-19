import React, { Component } from 'react'
import Style from './style1.module.css'

export default class style1 extends Component {
  render() {
    return (
      <div>
        {/* <p style={{fontSize:'30px',color:'red',fontWeight:700}}>样式组件1</p> */}
        <p className={Style.text}>样式组件1</p>
      </div>
    )
  }
}
