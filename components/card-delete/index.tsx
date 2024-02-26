'use client'

import { deletarMembro } from "@/actions/dados-pessoais/action";
import { Membro } from "@prisma/client";


export default function CardDelete({dados}:{dados:Membro}){
    return(
        <div className="min-h-screen flex justify-center mt-24 ">
        <div className="bg-white h-96 border-2 rounded-xl w-[520px] flex flex-col justify-center items-center gap-16" id="modal">
            <p className="text-3xl text-center mt-12">Deseja excluir permanentemente esse membro?</p>

            <button className="bg-red-500 text-white text-2xl p-4 rounded-xl" onClick={() => deletarMembro(dados.id)}>Excluir</button>
        </div>
    </div>
    )
}