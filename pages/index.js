import styled from 'styled-components';
import AppHeader from './components/AppHeader';
import AppHome from './components/AppHome/AppHome';
import bg from '../assets/img/bgwave.svg'
import AppContato from './components/AppContato/AppContato';
import AppSobre from './components/AppSobre/AppSobre';
import AppPortfolio from './components/AppPortfolio';
import AppFooter from './components/AppFooter';
import AppToTopButton from './components/AppToTopButton';

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`
const BG = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 99vw;
`

export default function Home() {
  return (
    <BG>
      <AppHeader/>
      <AppHome/>
      <AppSobre/>
      <AppPortfolio/>
      <AppContato/>
      <AppFooter/>
      <AppToTopButton/>
    </BG>
  )
  
}
