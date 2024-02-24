import { fetchBuscaMembros } from "@/actions/search/actions";
import CardSearch from "@/components/card-search";
import Pesquisa from "@/components/search";
import Image from "next/image";

export default async function Page({searchParams}:{searchParams:{query?: string}}) {

    const query=searchParams?.query || ''
    
    const membros = await fetchBuscaMembros(query)

    return (
        <CardSearch membros={membros} query={query} />
    )
}