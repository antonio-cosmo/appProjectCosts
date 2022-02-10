
import {LinkBtn} from './style'

type LinkButtonProps= {
  to:string,
  text:string
}
export function LinkButton({ to, text}: LinkButtonProps) {
  return (
    <LinkBtn to={to}>
      {text}
    </LinkBtn>
  )
}