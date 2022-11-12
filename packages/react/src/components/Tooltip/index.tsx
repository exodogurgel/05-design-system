import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
  content: string
  available: boolean
}

export function Tooltip({ content, available }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger available={available}>{content}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {available
              ? `${content} de Outubro - Disponível`
              : `${content} de Outubro - indisponível`}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}
