import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HomeContainer, ProfileCard, ProfileInfoHeader, ProfileInfoWrapper, ProfileLinks, SearchFormContainer } from './styles'


export function Home() {



  return (
    <HomeContainer>
      <ProfileCard>
        <div>
          <img src="https://picsum.photos/200/300" alt="" />
        </div>

        <ProfileInfoWrapper>
          <ProfileInfoHeader>
            <h1>Augusto Moscardo</h1>
            <a href="https://github.com/augustomoscardo">
              Github
              <FontAwesomeIcon icon="arrow-up-right-from-square" />
            </a>
          </ProfileInfoHeader>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

          <ProfileLinks>
            <span>
              <FontAwesomeIcon icon="github" />
              augustomoscardo
            </span>

            <span>
              <FontAwesomeIcon icon="building" />
              Rocketseaet
            </span>

            <span>
              <FontAwesomeIcon icon="user-group" />
              32 seguidores
            </span>
          </ProfileLinks>
        </ProfileInfoWrapper>
      </ProfileCard>



      <SearchFormContainer>
        <div>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </div>

        <form action="">
          <input type="text" placeholder='Buscar conteúdo' />
        </form>
      </SearchFormContainer>
    </HomeContainer >
  )
}