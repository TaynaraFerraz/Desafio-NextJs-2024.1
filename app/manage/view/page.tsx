import SecundaryTitle from "@/components/title-secundary";

export default function View() {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white xl:w-2/5 p-8 m-6 border-4 rounded-lg">
            
                <div className="flex items-center justify-center ">
                    <div className="text-center">
                        <SecundaryTitle text="Visualizar informações do membro" />
                    </div>
                </div>

                <div className="flex items-center justify-center ">
                    <form className="flex flex-col mt-24 mb-20 ">
                        <label className="text-3xl">Nome:</label>

                        <input type="text"
                            className="bg-white border-2 w-full h-10 rounded-xl outline-none text-2xl p-4"
                        >
                        </input>

                        <label className="text-3xl mt-8">Cargo:</label>

                        <input type="text"
                            className="bg-white border-2 w-64 sm:w-[520px] h-10 rounded-xl outline-none text-2xl p-4"
                        >
                        </input>

                        <label className="text-3xl mt-8">Email:</label>

                        <input type="text"
                            className="bg-white border-2 w-full h-10 rounded-xl outline-none text-2xl p-4"
                        >
                        </input>
                    </form>
                </div>
            </div>
        </div>
    )
} 