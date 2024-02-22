import { fetchDados } from "@/actions/dados-pessoais/action";
import PagMembros from "@/components/pag-membros";


export default async function Page(){
    const dados = await fetchDados();
    return(
        <div className="mb-16">
            <PagMembros dados={dados} />
        </div>
    )
}