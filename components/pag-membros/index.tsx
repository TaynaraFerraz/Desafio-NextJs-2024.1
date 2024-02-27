'use server'

import { Membro } from "@prisma/client";
import Pesquisa from "../search";
import SecundaryTitle from "../title-secundary";
import DadosMembro from "../dados-membro";



export default async function PagMembros({ busca }: { busca: Membro[] }) {

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
                            {busca.map((busca, index) => (

                                <DadosMembro busca={busca} />

                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}