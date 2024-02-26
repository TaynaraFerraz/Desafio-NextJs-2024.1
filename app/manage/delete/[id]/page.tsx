
"use server"

import { deletarMembro } from "@/actions/dados-pessoais/action"
import CardDelete from "@/components/card-delete";

export default async function Page({params}: {params:{ id: string }}){
    
const id = parseInt(params.id, 10);
const dados = await deletarMembro(id);

return (

   <CardDelete dados={dados}/>
)
    
}