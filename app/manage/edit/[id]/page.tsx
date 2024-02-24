"use server"

import { fetchDadosById } from "@/actions/dados-pessoais/action";
import PagEdit from "@/components/pag-edit";


export default async function Page({params}:{params:{id: string }}) {
    
    const id = parseInt(params.id, 10) ;
    const dadosAtualizar = await fetchDadosById(id);

    return (
        <div>
            <PagEdit dadosAtualizar={dadosAtualizar} />
        </div>
    )
} 