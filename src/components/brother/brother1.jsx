import React, { Component } from 'react'
import EventBus from '../../tools/bus'

export default class Brother1 extends Component {
  // 生命周期 mounted()
  componentDidMount(){
    console.log('componentDidMount');
    
    EventBus.on('myEvents',data=>{
      console.log(data);
    })
  }
  render() {
    return (
      <div>
        兄弟组件1
      </div>
    )
  }
}
