import React from 'react'
import styled from 'styled-components'
import './App.css'

const AppWrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const App: React.FC = () => {
  return (
    <AppWrapper>
      APP DEV PROJECT
      <span className="">
      Travel Guide
      </span>
    </AppWrapper>
  )
}

export default App
