import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faLink } from '@fortawesome/free-solid-svg-icons'

export type LinkProps = {
  title: string
  path: string
  icon: IconDefinition
}

const Link = ({ title = 'Button', path = '#', icon = faLink }: LinkProps) => (
  <S.Wrapper title={title}>
    <S.Link href={path} target="_blank" rel="noopener">
      <FontAwesomeIcon icon={icon} /> {title}
    </S.Link>
  </S.Wrapper>
)

export default Link
