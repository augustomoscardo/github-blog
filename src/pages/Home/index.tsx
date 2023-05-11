import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HomeContainer, ProfileCard, ProfileInfoHeader, ProfileInfoWrapper, ProfileLinks, SearchFormContainer } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

interface User {
  avatar_url: string
  bio: string
  company: string
  followers: number
  login: string
  name: string
}

const userName = ''
const repoName = ''

export function Home() {
  const [user, setUser] = useState<User>({
    name: '',
    avatar_url: '',
    bio: '',
    company: '',
    followers: 0,
    login: ''
  })
  const [posts, setPosts] = useState([])

  async function getUserInfo() {
    const response = await api.get('/users/augustomoscardo')

    const userResponse = response.data
    console.log(userResponse);

    setUser(userResponse)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  async function getPosts(query = "") {
    try {
      const response = await api.get(`/search/issues?q=${query}%20repo:${userName}/${reponame}`)

      console.log(response.data);
    } catch (err) {
      console.log(err);

    }

  }

  getPosts()
  return (
    <HomeContainer>
      <ProfileCard>
        <div>
          <img src={user.avatar_url} alt="" />
        </div>

        <ProfileInfoWrapper>
          <ProfileInfoHeader>
            <h1>{user.name}</h1>
            <a href="https://github.com/augustomoscardo">
              Github
              {/* <FontAwesomeIcon icon="arrow-up-right-from-square" /> */}
            </a>
          </ProfileInfoHeader>

          <p>{user.bio}</p>

          <ProfileLinks>
            <span>
              <FontAwesomeIcon icon={faGithub} />{" "}
              {user.login}
            </span>

            <span>
              <FontAwesomeIcon icon={faBuilding} />{" "}
              {user.company}
            </span>

            <span>
              <FontAwesomeIcon icon={faUserGroup} />{" "}
              {user.followers} seguidores
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