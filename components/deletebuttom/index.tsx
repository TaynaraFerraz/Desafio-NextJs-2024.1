'use client'

import { deletarMembro } from "@/actions/dados-pessoais/action";



export default function DeleteButton({id}:{id: number}) {
    return (
        <button onClick={() => deletarMembro(id)} className="bg-sky-600 text-white px-8 md:px-16 py-2 rounded-xl">
            Excluir
        </button>
    )
}