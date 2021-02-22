import { Story, Meta } from '@storybook/react/types-6-0'
import Link, { LinkProps } from '.'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Link',
  component: Link,
  args: {
    title: 'default title',
    path: 'https://google.com',
    icon: faFile
  }
} as Meta

export const Basic: Story<LinkProps> = (args: LinkProps) => <Link {...args} />
Basic.args = {
  title: 'basic title',
  path: 'https://google.com',
  icon: faFile
}

export const Default: Story<LinkProps> = (args: LinkProps) => <Link {...args} />
