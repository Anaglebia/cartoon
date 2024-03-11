import Logo from '../../assets/logo.png'
import Jogos from '../../assets/jogos.png'
import Relogio from '../../assets/relogio.png'
import * as S from './HeaderStyled'

function Header() {
  
    return (
      <>
      <S.HeaderMenu>

        <img src={Logo}/>
        <S.StyleSection>
        <S.StyleDiv>
        <img src={Jogos}/>
        <p>JOGOS</p>
        </S.StyleDiv>
        <S.StyleDiv>
        <img src={Relogio}/>
        <p>ROGRAMAÇÃO</p>
        </S.StyleDiv>

        </S.StyleSection>

      </S.HeaderMenu> 
      </>
    )
  }
  
  export default Header