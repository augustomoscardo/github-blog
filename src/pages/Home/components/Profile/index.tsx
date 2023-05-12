import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileContainer, ProfileInfoHeader, ProfileInfoWrapper, ProfileLinks } from "./styles";
import { User } from "../..";

interface ProfileProps {
  user: User
}

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
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
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company}
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} seguidores
          </span>
        </ProfileLinks>
      </ProfileInfoWrapper>
    </ProfileContainer>
  )
}