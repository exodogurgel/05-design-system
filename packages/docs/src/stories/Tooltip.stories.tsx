import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@ignite-ui-exo/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            marginTop: '$8',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: '26',
    available: true,
  },
}

export const Unavailable: StoryObj<TooltipProps> = {
  args: {
    content: '21',
    available: false,
  },
}
