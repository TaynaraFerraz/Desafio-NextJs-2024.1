import { Search } from "lucide-react";

export default function Pesquisa() {
    return (
        <div className="w-11/12">
            <form className="" autoComplete="off">
                
                <div className="flex bg-zinc-200 rounded-xl">
                    <input type="text" id="search" placeholder="Procure um membro"
                    className="h-[42px] text-black text-xl w-full bg-zinc-200 p-4 rounded-xl outline-none"
                    ></input>

                    <Search className="mt-2 mx-2" />
                </div>
                    
                
            </form>

        </div>
    )
}