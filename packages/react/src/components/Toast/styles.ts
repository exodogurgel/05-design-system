import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const ToastProvider = Toast.Provider
export const ToastClose = Toast.Close

const VIEWPORT_PADDING = 32

export const ToastViewport = styled(Toast.Viewport, {
  padding: VIEWPORT_PADDING,
  position: 'fixed',
  bottom: 0,
  right: 0,
  maxWidth: '100%',
  width: 360,
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  position: 'relative',

  display: 'grid',
  gridTemplateAreas: '"title" "description"',
  alignItems: 'start',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  fontSize: '$xl',
  lineHeight: '$base',
  fontWeight: 'bold',
  fontFamily: '$default',
  color: '$white',

  marginBottom: '$1',
})

export const ToastDescription = styled(Toast.Title, {
  gridArea: 'description',
  fontSize: '$sm',
  lineHeight: '$base',
  fontFamily: '$default',
  color: '$gray200',
})

export const ButtonClose = styled('button', {
  background: 'transparent',
  border: 0,
  position: 'absolute',
  right: '$4',
  top: '$4',
  color: '$gray200',
  lineHeight: 0,

  cursor: 'pointer',
})
