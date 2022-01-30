// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const SidebarContent = styled.div`
  width: 17.5rem;
  height: 100%;

  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  background-color: transparent;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    text-align: center;
    margin-top: 24px;
    font-size: 1.4rem;
    line-height: 32px;
  }
`
