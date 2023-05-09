import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'


export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logo Github Blog" />
    </HeaderContainer>
  )
}