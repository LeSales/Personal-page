import styled from 'styled-components';
import AppHeader from './components/AppHeader';
import AppMainGrid from './components/AppMainGrid/AppMainGrid';

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <>
    <AppHeader></AppHeader>
    <AppMainGrid>Welcome</AppMainGrid>
  </>
  
}
