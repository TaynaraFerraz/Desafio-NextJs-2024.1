"use server"

import { fetchDados } from "@/actions/dados-pessoais/action";
import Pesquisa from "@/components/search";
import SecundaryTitle from "@/components/title-secundary";
import { Membro } from "@prisma/client";



export default async function Page({dados}:{dados: Membro[]}){
    const dado = fetchDados;
    return (
        <div className="min-h-screen">

            <div className="flex items-center justify-center mt-12">
                <Pesquisa />

            </div>

            <div className="flex items-center justify-center mt-16">
                <div className="w-11/12">
                    <SecundaryTitle text="Membros da empresa" />
                </div>
                
            </div>


            <div className="relative overflow-x-auto mt-8 flex items-center justify-center">
                <div className="w-11/12 border-2 rounded-md shadow-md">
                    <table className="w-full text-xl text-left">
                        <thead className="text-xl uppercase bg-stone-200">
                            <tr>
                                <th scope="col" className="w-2/3 px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cargo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados?.map((dado, index)=>(
                                    <tr className="bg-white border-b hover:bg-amber-100 ">
                                    <th scope="row" className="px-6 py-4 ">
                                        {dado.name} 
                                    </th>
                                    <td className="px-6 py-4">
                                        {dado.cargo}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dado.email}
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}