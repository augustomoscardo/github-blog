import { useContext } from "react";
import { PostCard, PostsContainer } from "./styles";
import { PostsContext } from "../../../../contexts/PostsContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { truncateString } from "../../../../utils/truncateString";

export function Posts() {
  const { posts } = useContext(PostsContext)

  return (
    <PostsContainer>
      {posts.map(post => (
        <PostCard key={post.number} to={`/post/${post.number}`}>
          <div>
            <h2>{post.title}</h2>
            <span>{formatDistanceToNow(new Date(post.created_at), {
              locale: ptBR,
              addSuffix: true
            })}</span>
          </div>

          <p>
            {truncateString(post.body, 200)}
          </p>
        </PostCard>
      ))}
    </PostsContainer>
  )
}