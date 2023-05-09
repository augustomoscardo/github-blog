import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HomeContainer } from './styles'


export function Home() {
  return (
    <HomeContainer>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <div>
          <h1>Augusto Moscardo</h1>
          <a href="#">
            Github
            <FontAwesomeIcon icon="arrow-up-right-from-square" />
          </a>
        </div>

        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <div>
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
        </div>
      </div>

      <div>
        <div>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </div>

        <form action="">
          <input type="text" placeholder='Buscar conteúdo' />
        </form>
      </div>
    </HomeContainer>
  )
}