import * as S from'./FooterStyle'
import Warnerbros from '../../assets/warnerbros.png'
import Github from '../../assets/github.png'
import Linkendin from '../../assets/linkendin.png'


function Footer() {
  
    return (
      <footer>
        <S.StyledSection>
          <img src={Warnerbros} alt="" />

          <S.StylesectionList>
          <ul>
            <li>Sobre nós</li>
            <li>Produtos</li>
            <li>Personagens</li>
          </ul>
         </S.StylesectionList>
          
          <img src={Github} alt="" />
          <img src={Linkendin} alt="" />
        </S.StyledSection>
        
        <S.StyledSection2>
        &#174; 2024 Cartoon Network
         
        </S.StyledSection2>
     
      </footer>
    )
  }
  
  export default Footer