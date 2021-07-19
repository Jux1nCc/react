import React, { Component } from 'react'
import EventBus from '../../tools/bus'

export default class Brother2 extends Component {
  setBrotherValue = ()=>{
    EventBus.emit('myEvents',{name:'老二', key: '基'})
  }
  render() {
    return (
      <div>
        兄弟组件2
        <button onClick={this.setBrotherValue}>传值</button>
      </div>
    )
  }
}
