import { chakra, IconProps } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

const FAIcon = chakra(FontAwesomeIcon)

interface Props extends IconProps {
  prefix: IconPrefix
  name: IconName
  size?: string
  color?: string
}

export function Icon ({
  prefix,
  name,
  size = '4xl',
  color = 'icon-primary',
  ...rest
}: Props) {
  return (
    //@ts-ignore
    <FAIcon
      color={color}
      icon={[prefix as IconPrefix, name as IconName]}
      fontSize='4xl'
      {...rest}
    />
  )
}
