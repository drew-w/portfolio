//Chakra
import { Tooltip } from '@chakra-ui/react'

//Style UI
import { Icon } from '@components/Factory/Icon'

//Types
interface Props {
  label: string
  dark?: boolean
}

export const InfoTooltip = ({ label, dark }: Props) => (
  <Tooltip label={label} hasArrow>
    <span>
      <Icon
        size='15px'
        prefix='fal'
        name='circle-info'
        color={dark ? 'icon-secondary' : 'icon-primary'}
      />
    </span>
  </Tooltip>
)
