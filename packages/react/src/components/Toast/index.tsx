import { useState, useRef, useEffect } from 'react'
import { X } from 'phosphor-react'

import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Button } from '../..'
import {
  ButtonClose,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps {
  title: string
  description?: string
}

export function Toast({ title, description }: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  function oneWeekAway() {
    const now = new Date()
    const inOneWeek = now.setDate(now.getDate() + 7)
    return new Date(inOneWeek)
  }

  function handleOpenToast() {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = oneWeekAway()
      setOpen(true)
    }, 100)
  }

  function FormatDate(date: any) {
    const dateFormatted = format(date, "EEEE', 'dd' de 'MMMM' às 'HH'h'", {
      locale: ptBR,
    })

    return dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1)
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastProvider swipeDirection="right">
      <Button onClick={handleOpenToast}>Open Toast</Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastClose asChild>
          <ButtonClose>
            <X size={20} />
          </ButtonClose>
        </ToastClose>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {description || FormatDate(eventDateRef.current)}
          </time>
        </ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
