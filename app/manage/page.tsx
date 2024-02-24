"use server"

import { fetchDados } from "@/actions/dados-pessoais/action";
import PagManage from "@/components/pag-manage";


export default async function Page() {

    const dados = await fetchDados();

    return (
       <div className="min-h-screen">
            <PagManage dados={dados} />
       </div>
    )
}