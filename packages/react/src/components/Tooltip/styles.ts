import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = Tooltip.Provider

export const TooltipRoot = Tooltip.Root

export const TooltipPortal = Tooltip.Portal

export const TooltipTrigger = styled(Tooltip.Trigger, {
  padding: '$4 $6',
  width: '4.125rem',
  height: '3.625rem',
  borderRadius: '$sm',
  border: 'none',
  backgroundColor: '$gray600',
  color: '$white',
  fontFamily: '$default',
  lineHeight: '$base',
  fontSize: '$md',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    available: {
      false: {
        backgroundColor: 'transparent',
      },
    },
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '$short',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  marginBottom: -10,
  width: '$4',
  height: '$2',
})
