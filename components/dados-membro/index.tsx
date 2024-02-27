import { Membro } from "@prisma/client";


export default function DadosMembro({busca}:{busca:Membro}){
    return(
    <tr className="bg-white border-b hover:bg-amber-100 ">
        <th scope="row" className="px-6 py-4 xl:text-2xl ">
            {busca.name}
        </th>
        <td className="px-6 py-4 xl:text-2xl">
            {busca.cargo}
        </td>
        <td className="px-6 py-4 xl:text-2xl">
            {busca.email}
        </td>
    </tr>
    )
}