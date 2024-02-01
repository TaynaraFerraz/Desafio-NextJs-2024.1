'use client'

import RedesSociais from "@/components/redes-sociais-contato";
import Text from "@/components/text";
import Title from "@/components/title";

export default function Page(){
    return(
        <div className="min-h-screen mt-10">
         <Title title="Sobre nós" subtitle="Conheça um pouco mais sobre nossa história e nossos métodos de contato" />

            <div className="mt-8">
               <Text text="Somos uma empresa familiar, que teve sua primeira loja numa cidade do interior de Minas Gerais, onde nos deu asas para voar e alcançar nossos principais objetivos. Hoje em dia, temos nossa sede na capital, Belo Horizonte, e várias franquias espalhadas pelo nosso estado de origem. Com extrema qualidade e atendimento especializado, nossa sorveteria e nossos produtos recebem destaque por onde estiver."/>
             </div>
         
             <div className="mt-24">
                <Title title="Entre em contato conosco" subtitle="Nossos ícones contarão com links destinados as redes oficiais da empresa" />

            </div>

            <div>
                <RedesSociais/>
            
            </div>
        </div>

    )
}