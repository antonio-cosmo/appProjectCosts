export type Category = {
    id: number,
    name: string,
}
  
export type Project = {
    id: string
    cost: number,
    services: Service[],
    name: string,
    budget: number,
    category: {
        id: string,
        name: string,
    },
}
  
export type Service ={
    id:string, 
    name:string, 
    cost:number, 
    description:string, 
}