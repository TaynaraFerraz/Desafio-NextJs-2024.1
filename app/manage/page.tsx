'use client'

import SecundaryTitle from "@/components/title-secundary";
import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen">

          <div className="flex items-center justify-center">
            <div className="w-11/12 flex flex-col md:flex-row md:justify-between mt-16">
                <SecundaryTitle text="Gerenciamento de membros"/>
                <Link href={'/manage/create'}
                className="bg-green-500 w-64 text-white flex items-center justify-center px-5 py-4 text-2xl rounded-xl"
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
                            <tr className=" bg-white border-b hover:bg-amber-100">
                               
                                    <th scope="row" className="px-6 py-4 ">
                                        Áurea cunha Prado
                                    </th>
                                    
                                        <td className="px-6 py-4">
                                            <Link href={'/manage/view'} className="bg-sky-600 text-white px-12 py-3 rounded-xl">
                                                Vizualizar
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={'/manage/edit'} className="bg-sky-600 text-white px-16 py-3  rounded-xl">
                                                Editar
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={'/manage/delete'} className="bg-sky-600 text-white px-16 py-3 rounded-xl">
                                                Excluir
                                            </Link>
                                        </td>
                                        
                                    
                              


                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}