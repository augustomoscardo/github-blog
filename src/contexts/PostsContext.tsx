import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { User } from "../pages/Home";


export type PostProps = {
  url: string
  title: string
  body: string
  number: number
  created_at: string
  user: User
  comments: number
}

interface PostContextData {
  getPosts: (query: string) => Promise<void>
  posts: PostProps[]
}

interface PostContextProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostContextData)

const userName: string = import.meta.env.VITE_GITHUB_USERNAME
const repoName: string = import.meta.env.VITE_GITHUB_REPONAME

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([])



  async function getPosts(query = "") {
    try {
      const response = await api.get(`/search/issues?q=${query}%20repo:${userName}/${repoName}`)
      const postsResponse = response.data.items

      setPosts(postsResponse)
    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ getPosts, posts }}>
      {children}
    </PostsContext.Provider>
  )
}