import React, { Component } from 'react'
import Style from './style2.module.css'

export default class style2 extends Component {
  render() {
    return (
      <div>
        {/* <p style={{fontSize:'50px',color:'blue'}}>样式组件2</p> */}
        <p className={Style.text}>样式组件2</p>
      </div>
    )
  }
}
