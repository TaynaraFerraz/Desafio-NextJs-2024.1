import { fetchBuscaMembros } from "@/actions/search/actions";
import Pesquisa from "@/components/search";
import Image from "next/image";

export default async function Page({
    searchParams,
}:{
    searchParams:{
        query?: string;
    }
}) {

    const query=searchParams?.query || ''
    
    const membros = await fetchBuscaMembros(query)

    return (
        <div className="flex mt-20 justify-center h-screen">
            <div className="w-11/12 bg-zinc-100">
                <Pesquisa />


                <div className="flex flex-col md:grid md:grid-cols-2 bg-white border-4 rounded-xl mt-12 w-[300px] h-96 sm:w-[620px] lg:w-[920px] ">
                    <Image src={'/assets/ConePronto.png'} alt="Logo do site" width={904}
                        height={904} className=" hidden md:block w-[378px] h-[378px] rounded-l-xl "></Image>

                    <div className="flex flex-col justify-between">
                        <h1 className="flex text-3xl p-4 font-semibold text-indigo-700">Aurea Cunha Prado</h1>
                        <div className="flex flex-col">
                            <span className="text-2xl p-4">Cargo: Assessora do Comercial</span>
                            <span className="text-2xl p-4">Email: aurea.cunha@codejr.com.br</span>
                        </div>

                    </div>

                </div>
            </div>



        </div>

    )
}