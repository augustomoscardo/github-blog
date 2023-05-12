import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinksWrapper, PostCardContainer, PostContent, PostInfo, PostTitle } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PostProps } from "../../../contexts/PostsContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostCardProps {
  post: PostProps
}

export function PostCard({ post }: PostCardProps) {
  console.log(post);

  // const formattedIntervalDate = formatDistanceToNow(new Date(post.created_at), {
  //   locale: ptBR,
  //   addSuffix: true
  // })

  return (
    <PostCardContainer>
      <LinksWrapper>
        <a href="/">
          &lt; Voltar
        </a>
        <a href={`https://api.github.com/repos/augustomoscardo/github-blog/issues/${post.number}`}>
          Ver no github{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </LinksWrapper>

      <PostTitle>
        {post.title}
      </PostTitle>

      <PostInfo>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {post.user.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          {/* {formattedIntervalDate} */}
          {post.created_at}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {post.comments > 1 ? `${post.comments} comentários` : `${post.comments} comen`} comentários
        </span>
      </PostInfo>

      <PostContent>

      </PostContent>
    </PostCardContainer>
  )
}