import React from 'react'
class IndexPage extends React.Component {
  constructor(props){
    super()
    this.state = {
      num:1,
      name: props.name
    }
    // this.add = this.add.bind(this)
  }
  add = () =>{
    // console.log(this);
    this.setState({
      num: this.state.num + 1
    },()=>{ 
      // console.log(this.state.num);
    })
  }
  zizuajin = () =>{
    this.props.callBack({name:'胡万'})
  }
  render(){
    return (
      <div>
        <p>子组件1</p><br/>
        <p>num is {this.state.num}</p><br/>
        <p>name is {this.state.name}, age is {this.props.age} {this.props.isMan?'isMan':'isWoMan'}</p><br/>
        {/* <button onClick={this.add.bind(this)}>+1</button> */}
        <button onClick={this.add}>+1</button>
        <button onClick={this.zizuajin}>子组件传值</button>
      </div>
    )
  }
}
export default IndexPage