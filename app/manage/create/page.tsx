"use server"

import {  criarMembro} from "@/actions/dados-pessoais/action";
import SecundaryTitle from "@/components/title-secundary";

export default async function Page() {
    
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white xl:w-2/5 p-8 m-6 border-4 rounded-lg">
            
                <div className="flex items-center justify-center ">
                    <div className="">
                        <SecundaryTitle text="Criar um novo membro" />
                    </div>
                </div>

                <div className="flex items-center justify-center ">
                    <form className="flex flex-col mt-24 " action={criarMembro} id="form-id">
                        
                        <label className="text-3xl">Nome:</label>

                        <input type="text"
                            className="bg-white border-2 w-full h-10 rounded-xl outline-none text-2xl p-4"
                            name="name" required
                        >
                        </input>

                        <label className="text-3xl mt-8">Cargo:</label>

                        <input type="text"
                            className="bg-white border-2 w-64 md:w-[520px] h-10 rounded-xl outline-none text-2xl p-4"
                            name="cargo" required
                        >
                        </input>

                        <label className="text-3xl mt-8">Email:</label>

                        <input type="text"
                            className="bg-white border-2 w-full h-10 rounded-xl outline-none text-2xl p-4"
                            name="email" required
                        >
                        </input>

                        <div className="flex items-center justify-center">
                            <button className="w-1/2 text-2xl bg-green-500 mt-24 py-2 rounded-xl hover:bg-green-400">
                                Salvar
                            </button>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )

} 
