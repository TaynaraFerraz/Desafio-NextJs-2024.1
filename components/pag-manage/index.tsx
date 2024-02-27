"use server"

import Link from "next/link";
import SecundaryTitle from "../title-secundary";
import { Membro } from "@prisma/client";
import { deletarMembro } from "@/actions/dados-pessoais/action";
import DeleteButtom from "../deletebuttom";
import DeleteButton from "../deletebuttom";
import EditButton from "../edit-button";
import ViewButton from "../view-button";


export default async function PagManage({ dados }: { dados: Membro[] }) {
    return (
        <div className="min-h-screen mb-20">

            <div className="flex items-center justify-center">
                <div className="w-11/12 flex flex-col md:flex-row md:justify-between mt-16">
                    <SecundaryTitle text="Gerenciamento de membros" />
                    <Link href={'/manage/create'}
                        className="bg-green-500 w-56 md:w-64 text-white flex items-center justify-center px-5 py-4 text-xl md:text-2xl rounded-xl"
                    >
                        +Criar novo membro
                    </Link>
                </div>

            </div>

            <div className="relative overflow-x-auto mt-8 flex items-center justify-center">
                <div className="w-11/12 border-2 rounded-md shadow-md">
                    <table className="w-full text-xl text-left">
                        <thead className="text-xl uppercase bg-stone-200">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-2/3">
                                    Nome
                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados?.map((dados, index) => (

                                <tr className=" bg-white border-b hover:bg-amber-100">

                                    <th scope="row" className="px-6 py-4 lg:text-2xl ">
                                        {dados.name}
                                    </th>

                                    <td className="px-6 py-4">
                                        <ViewButton id={dados.id}/>
                                    </td>
                                    <td className="px-6 py-4">
                                        <EditButton id={dados.id} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <DeleteButton id={dados.id} />
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