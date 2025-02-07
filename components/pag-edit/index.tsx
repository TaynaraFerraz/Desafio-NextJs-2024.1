import { Membro } from "@prisma/client";
import SecundaryTitle from "../title-secundary";
import { EditMembro } from "@/actions/dados-pessoais/action";


export default function PagEdit({dadosAtualizar}:{dadosAtualizar: Membro}){
    const updateMembro = EditMembro.bind(null, dadosAtualizar.id)
    return(
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white xl:w-2/5 p-8 m-6 border-4 rounded-lg">
            
                <div className="flex items-center justify-center ">
                    <div className="">
                        <SecundaryTitle text="Editar informações do membro" />
                    </div>
                </div>

                <div className="flex items-center justify-center ">
                    <form className="flex flex-col mt-24 " action={updateMembro}>
                        <label className="text-3xl">Nome:</label>

                        <input type="text"
                            className="bg-white border-2 w-full h-10 rounded-xl outline-none text-2xl p-4"
                            name="name"
                            defaultValue={dadosAtualizar.name}
                        >
                        </input>

                        <label className="text-3xl mt-8">Cargo:</label>

                        <input type="text"
                            className="bg-white border-2 w-64 md:w-[520px] h-10 rounded-xl outline-none text-2xl p-4"
                            name="cargo"
                            defaultValue={dadosAtualizar.cargo}
                        >
                        </input>

                        <label className="text-3xl mt-8">Email:</label>

                        <input type="text"
                            className="bg-white border-2 w-full h-10 rounded-xl outline-none text-2xl p-4"
                            name="email"
                            defaultValue={dadosAtualizar.email}
                        >
                        </input>

                        <div className="flex items-center justify-center">
                            <button className="w-1/2 text-2xl bg-green-500 mt-24 py-2 rounded-xl hover:bg-green-400 ">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}