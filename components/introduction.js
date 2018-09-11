import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutMe = () => (
  <div style={{marginTop: 30}}>
    <Container>
      <IconImageContainer>
        <span>🏠</span>
        <span>Kerobokan</span>
      </IconImageContainer>
      <IconImageContainer>
        <span>🏢</span>
        <span>Prinzio</span>
      </IconImageContainer>
    </Container>
  </div>
)

export default function Introduction() {
  return (
    <div>
      <strong style={{fontSize: '2em'}}>Wayan Jimmy</strong>
      <AboutMe />
    </div>
  )
}
