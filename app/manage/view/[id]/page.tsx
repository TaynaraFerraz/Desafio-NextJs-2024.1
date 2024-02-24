import {  fetchDadosById } from "@/actions/dados-pessoais/action";
import ManageView from "@/components/manage-view";


export default async function Page({params}:{params:{id: string }}) {

    const id = parseInt(params.id, 10) ;
    const dadosAtualizar = await fetchDadosById(id);

    return (
        <ManageView dadosAtualizar={dadosAtualizar} />
    )
} 