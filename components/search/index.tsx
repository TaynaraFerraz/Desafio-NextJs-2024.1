'use client'

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Pesquisa() {
    const searchParams = useSearchParams()

    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch=(query:string) =>{
        if(!query){
            return 
        }

        const params=new URLSearchParams();
        params.set('query', query)
        router.push(`/membros/search/?${params.toString()}`)
    }

    const input = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        handleSearch(searchTerm)
    }

    useEffect(()=>{
        setSearchTerm(searchParams.get('query') || '')
    }, [searchParams])

   
    return (
        <div className="w-11/12">
            <form onSubmit={input} className="" autoComplete="off">
                
                <div className="flex bg-zinc-200 rounded-xl ">
                    <input type="text" id="search" placeholder="Procure um membro"
                    className="h-[46px] text-black text-xl w-full bg-zinc-200 p-4 rounded-xl outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    ></input>

                    <Search className="mt-3 mx-2" />
                </div>
                    
                
            </form>

        </div>
    )
}