import React from 'react'
class CountPage extends React.Component{
  constructor(props){
    super()
    this.state = {
      num: props.num
    }
  }
  add = () =>{
    this.setState({
      num: this.state.num +1
    },()=>{
      this.props.callBack({num:this.state.num})
    })
  }
  render(){
    return (
      <div>
        <p>计数器</p>
        <p>num is {this.state.num}</p>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
export default CountPage