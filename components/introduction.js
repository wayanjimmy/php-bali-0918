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
        <img src={require('file-loader!../images/house.png')} />
        <span>(Jimboy Labs) Kerobokan</span>
      </IconImageContainer>
      <IconImageContainer>
        <img src={require('file-loader!../images/office.png')} />
        <span>Prinzio</span>
      </IconImageContainer>
    </Container>
    <div>
      <h3>Sedang Belajar</h3>
      <Container>
        <IconImageContainer>
          <span>Laravel & PHP</span>
        </IconImageContainer>
        <IconImageContainer>
          <span>ReactJS</span>
        </IconImageContainer>
        <IconImageContainer>
          <span>Node</span>
        </IconImageContainer>
      </Container>
    </div>
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
