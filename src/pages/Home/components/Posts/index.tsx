import { useContext } from "react";
import { PostCard, PostsContainer } from "./styles";
import { PostsContext } from "../../../../contexts/PostsContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { truncateString } from "../../../../utils/truncateString";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostCardContent } from "./styles";

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

          {/* <p>
            {truncateString(post.body, 200)}
          </p> */}
          <ReactMarkdown children={truncateString(post.body, 200)} components={{
            h1: 'p',
            h2: 'p',
            h3: 'p',
            a: 'p'
          }} />
        </PostCard>
      ))}
    </PostsContainer>
  )
}