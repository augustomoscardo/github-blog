import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HomeContainer, PostCard, PostsContainer, ProfileCard, ProfileInfoHeader, ProfileInfoWrapper, ProfileLinks, SearchFormContainer } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { truncateString } from '../../utils/truncateString';
import { useForm } from 'react-hook-form';

interface User {
  avatar_url: string
  bio: string
  company: string
  followers: number
  login: string
  name: string
}

interface Post {
  url: string
  title: string
  body: string
  number: number
  created_at: string
}

const userName: string = import.meta.env.VITE_GITHUB_USERNAME
const repoName: string = import.meta.env.VITE_GITHUB_REPONAME

export function Home() {
  const [user, setUser] = useState<User>({
    name: '',
    avatar_url: '',
    bio: '',
    company: '',
    followers: 0,
    login: ''
  })
  const [posts, setPosts] = useState<Post[]>([])

  const { handleSubmit, register, reset } = useForm()

  async function getUserInfo() {
    const response = await api.get('/users/augustomoscardo')
    const userResponse = response.data

    setUser(userResponse)
  }

  async function getPosts(query = "") {
    try {
      const response = await api.get(`/search/issues?q=${query}%20repo:${userName}/${repoName}`)
      const postsResponse = response.data.items

      setPosts(postsResponse)
    } catch (err) {
      console.log(err);

    }
  }

  function handleSearchPost(query?: string) {
    getPosts(query)

    reset()
  }

  useEffect(() => {
    getUserInfo()
    getPosts()
    console.log(posts[0])
  }, [])

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
              Github {" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
          <p>{posts.length > 1 ? `${posts.length} publicações` : `${posts.length} publicação`}</p>
        </div>

        <form onSubmit={handleSubmit(handleSearchPost())}>
          <input type="text" placeholder='Buscar conteúdo' {...register('postSearch')} />
        </form>
      </SearchFormContainer>

      <PostsContainer>
        {posts.map(post => (
          <PostCard>
            <div>
              <h2>{post.title}</h2>
              <span>{post.created_at}</span>
            </div>

            <p>
              {truncateString(post.body, 200)}
            </p>
          </PostCard>
        ))}


        {/* <PostCard>
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </div>

          <p>
            {truncateString("Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.", 200)}
          </p>
        </PostCard>

        <PostCard>
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </div>

          <p>
            {truncateString("Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.", 200)}
          </p>
        </PostCard>

        <PostCard>
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </div>

          <p>
            {truncateString("Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.", 200)}
          </p>
        </PostCard> */}
      </PostsContainer>


    </HomeContainer >
  )
}