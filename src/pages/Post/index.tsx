import { useParams } from "react-router-dom";
import { PostCard } from "./PostCard";
import { PostContainer } from "./styles";
import { PostProps } from "../../contexts/PostsContext";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Loading } from "../../components/Loading";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;


export function Post() {
  const [postData, setPostData] = useState({} as PostProps)

  const { issueNumber } = useParams()

  async function getPostDetails() {

    try {
      const response = await api.get(`/repos/${username}/${repoName}/issues/${issueNumber}`)
      console.log(response);

      setPostData(response.data)
    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <PostContainer>
      {Object.keys(postData).length > 0 ? (
        <PostCard post={postData} />
      ) : (<Loading />)}
    </PostContainer>
  )
}