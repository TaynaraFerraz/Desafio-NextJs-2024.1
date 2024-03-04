"use server"

import { fetchDados } from "@/actions/dados-pessoais/action";
import { fetchBuscaMembros } from "@/actions/search/actions";
import PagMembros from "@/components/pag-membros";


export default async function Page({searchParams}:{searchParams:{query?: string}}){
    const query=searchParams?.query || ''
    
    const busca = await fetchBuscaMembros(query)
    

    return(
        <div className="mb-16">
            <PagMembros busca={busca} />
        </div>
    )
}