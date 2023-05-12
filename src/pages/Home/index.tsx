import { HomeContainer } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { Posts } from './components/Posts';
import { Profile } from './components/Profile';

export type User = {
  avatar_url: string
  bio: string
  company: string
  followers: number
  login: string
  name: string
}

export function Home() {
  const [user, setUser] = useState<User>({
    name: '',
    avatar_url: '',
    bio: '',
    company: '',
    followers: 0,
    login: ''
  })

  async function getUserInfo() {
    const response = await api.get('/users/augustomoscardo')
    const userResponse = response.data

    setUser(userResponse)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <HomeContainer>
      <Profile user={user} />
      <SearchForm />
      <Posts />
    </HomeContainer >
  )
}