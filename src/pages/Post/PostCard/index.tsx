import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinksWrapper, PostCardContainer, PostContent, PostInfo, PostTitle } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PostProps } from "../../../contexts/PostsContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface PostCardProps {
  post: PostProps
}

export function PostCard({ post }: PostCardProps) {

  const formattedIntervalDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <>
      <PostCardContainer>
        <LinksWrapper>
          <a href="/">
            &lt; Voltar
          </a>
          <a href={`https://github.com/augustomoscardo/github-blog/issues/${post.number}`} target="_blank">
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
            {formattedIntervalDate}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {`${post.comments} comentário(s)`}
          </span>
        </PostInfo>


      </PostCardContainer>
      <PostContent>
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>
      </PostContent>
    </>
  )
}