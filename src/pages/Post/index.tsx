import { useParams } from "react-router-dom";
import { PostCard } from "./PostCard";
import { PostContainer } from "./styles";
import { PostProps } from "../../contexts/PostsContext";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;


export function Post() {
  const [postData, setPostData] = useState({} as PostProps)

  const { issueNumber } = useParams()

  async function getPostDetails() {
    const response = await api.get(`/repos/${username}/${repoName}/issues/${issueNumber}`)

    setPostData(response.data)
  }

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <PostContainer>
      <PostCard post={postData} />
    </PostContainer>
  )
}