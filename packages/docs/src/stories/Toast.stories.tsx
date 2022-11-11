import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui-exo/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
