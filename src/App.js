// import logo from './logo.svg'
import React from 'react'
import './App.css'
import IndexPage from './components/index-page'
import SunPage from './components/sun-page'
import CountPage from './components/count-page'
import Index from './components/brother/index'

// function App () {
//   return (
//     <div className='App'>
//       {/* <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header> */}
//       <p>根元素</p>
//       <IndexPage name='汤师爷' age={20} isMan={true}></IndexPage>
//       <SunPage
//         name='鹅城'
//         obj={{ eba: '黄四郎', xianzhang: '马邦德' }}
//       ></SunPage>
//     </div>
//   )
// }
class App extends React.Component {
  setValue = obj => {
    console.log(obj)
  }
  getCount = num => {
    console.log(num)
  }
  render () {
    return (
      <div className='App'>
        {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header> */}
        <p>根元素</p>
        <IndexPage
          name='汤师爷'
          age={20}
          isMan={true}
          callBack={this.setValue}
        ></IndexPage>
        <SunPage
          name='鹅城'
          obj={{ eba: '黄四郎', xianzhang: '马邦德' }}
        ></SunPage>
        <CountPage num={10} callBack={this.getCount}></CountPage>
        <Index></Index>
      </div>
    )
  }
}

export default App
