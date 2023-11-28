import React from 'react'
import ReactDOM from 'react-dom'
import Text from './Text'

const App = () => {

  return (
    <Text name="Rachel" />
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('customer-lookup'))