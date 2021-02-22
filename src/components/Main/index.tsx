import * as S from './styles'
import Link from '../Link'
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

const Main = ({
  title = 'Paulo Bruny Lima',
  description = "Jr. Software Engineer, focused on front-end web development, always learning about React and other front-end trending topics. I'm also a terrible guitar player and a weird duck lover. Feel free to get in touch if you want, I like to meet new people =)",
  social = '@PauloBruny'
}) => (
  <S.Wrapper>
    <S.ContentWrapper>
      <S.Picture
        src="/img/profile.jpg"
        alt="Uma foto do autor do site com um chapéu e um fundo de céu claro"
      />
      <S.Title>{title}</S.Title>
      <S.Social>{social}</S.Social>
      <S.Description>{description}</S.Description>
      <S.LinksList>
        <Link title="Github" path="https://github.com/pbruny" icon={faGithub} />
        <Link
          title="LinkedIn"
          path="https://linkedin.com/in/paulobruny"
          icon={faLinkedin}
        />
        <Link
          title="Twitter"
          path="https://twitter.com/PauloBruny"
          icon={faTwitter}
        />
        <Link
          title="Email"
          path="https://twitter.com/PauloBruny"
          icon={faEnvelope}
        />
        <Link
          title="Resume"
          path="https://docs.google.com/document/d/1_zgaujgkw-_EMKK4RZg_WfPNWEx_Dm-Vfo3LxHG8ktM/edit?usp=sharing"
          icon={faFile}
        />
      </S.LinksList>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Main
