import { render, screen } from '@testing-library/react'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import Link from '.'

describe('<Link />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Link title="Title" path="https://google.com" icon={faFile} />
    )

    expect(screen.getByRole('link', { name: /Title/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
