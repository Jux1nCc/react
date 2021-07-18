import React from 'react'
function SunPage(props) {
  return (
    <div>子组件: {props.name}, 恶霸: {props.obj.eba}, 县长: {props.obj.xianzhang}</div>
  )
}
export default SunPage