// import logo from './logo.svg'
import './App.css'
// import IndexPage from './components/index-page'
import SunPage from './components/sun-page'

function App () {
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
      {/* <IndexPage></IndexPage> */}
      <SunPage
        name='鹅城'
        obj={{ eba: '黄四郎', xianzhang: '马邦德' }}
      ></SunPage>
    </div>
  )
}

export default App
