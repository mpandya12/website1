import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Wrapper className='test'>About</Wrapper>
  )
}
const Wrapper =styled.section`
background-color:${
({theme})=>
  theme.colors.bg


};
width:20rem;
height:20rem;
`;
export default About