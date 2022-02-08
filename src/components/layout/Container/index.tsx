import { ReactNode } from "react";
import { Div } from "./style";
interface IChildren{
  children: ReactNode;
}
export function Container({children}:IChildren){
  return <Div>
    {children}
  </Div>
}