import {Button} from './style'

type SubmitButtonProps = {
  text:string
}
export function SubmitButton({ text }:SubmitButtonProps) {
  return (
    <div>
      <Button>{text}</Button>
    </div>
  )
}