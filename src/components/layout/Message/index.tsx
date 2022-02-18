import { useEffect, useState } from "react"
import { Div } from "./style"

interface MessageProps{
  type:string,
  msg:string,
}
export function Message({type, msg}:MessageProps){
  const [visible, setVisible] = useState(false)
 
  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [msg])

  return (
    <>
      {visible && (
        <Div className={type}>
          {msg}
        </Div>
      )}
    </>
  )
}