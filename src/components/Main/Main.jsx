import * as S from './MainStyled'
import Scooby from '../../assets/scooby.png'
import Ben10 from '../../assets/ben10.png'
import Pernalonga from '../../assets/pernalonga.png'
import Gamboo from '../../assets/gamboo.png'
import Powergirl from '../../assets/powergirl.png'
import Tom from '../../assets/tom.png'

function Main() {
  
    return (
      <main>
        <S.StyledSection>
          <img src={Scooby} alt="" />
          <img src={Ben10} alt="" />
          <img src={Pernalonga} alt="" />
        </S.StyledSection>
        <S.StyledSection2>
          <img src={Gamboo} alt="" />
          <img src={Powergirl} alt="" />
          <img src={Tom} alt="" />
        </S.StyledSection2>
     
      
      </main>
    )
  }
  
  export default Main