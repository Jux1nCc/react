import React from 'react'
class IndexPage extends React.Component {
  constructor(){
    super()
    this.date = {
      num:1
    }
    // this.add = this.add.bind(this)
  }
  add = () =>{
    // console.log(this);
    this.setState({
      num: this.date.num++
    },()=>{
      // console.log(this.date.num);
    })
  }
  render(){
    return (
      <div>
        <p>子组件</p><br/>
        <p>num is {this.date.num}</p><br/>
        {/* <button onClick={this.add.bind(this)}>+1</button> */}
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
export default IndexPage