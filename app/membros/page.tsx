import Pesquisa from "@/components/search";


export default function Page() {
    return (
        <div className="min-h-screen">

            <div className="flex items-center justify-center mt-12">
                <Pesquisa />

            </div>

            <div className="flex items-center justify-center mt-16">
                <div className=" w-11/12">
                    <h1 className="text-3xl text-sky-700 uppercase md:text-4xl lg:text-5xl ">Membros da empresa</h1>
                </div>
            </div>


            <div className="relative overflow-x-auto mt-8 flex items-center justify-center">
                <div className="w-11/12 border-2 rounded-md shadow-md">
                    <table className="w-full text-xl text-left">
                        <thead className="text-xl uppercase bg-stone-200">
                            <tr>
                                <th scope="col" className="px-6 py-3">
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
                            <tr className="bg-white border-b hover:bg-amber-100 ">
                                <th scope="row" className="px-6 py-4 ">
                                    Áurea cunha Prado
                                </th>
                                <td className="px-6 py-4">
                                    Assessor
                                </td>
                                <td className="px-6 py-4">
                                    aurea.prado@codejr.com.br
                                </td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-amber-100 ">
                                <th scope="row" className="px-6 py-4 ">
                                    Breno Furtado Rosado
                                </th>
                                <td className="px-6 py-4">
                                    Assessor
                                </td>
                                <td className="px-6 py-4">
                                    breno.furtado@codejr.com.br
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}