'use client'

import Cards from '@/components/cards'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import Carrossel from '@/components/swiper'
import Text from '@/components/text'
import Title from '@/components/title'
import Produtos from '@/components/vendas-cards'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen '>

      <div className='flex flex-col mt-8 lg:grid lg:grid-flow-col lg:grid-cols-6  mx-3 md:gap-0'>
        <div className='flex flex-col gap-6 lg:col-span-4'>
          <Title title='Os melhores sorvetes você encontra aqui' subtitle='Não fique sem experimentar nossos sucessos de vendas' />

          <Text text='Somos uma equipe especializada a mais de 15 anos na produção de sorvetes e nossa maior felicidade é ver o sorrisso no rosto de nossos clientes ao provar nossas criações.
          Contamos com um cardápio diverso de produtos, como sorvetes e picolés de sabores variados, açaí com diversos acompanhamentos, milkshae, sundae, sorvete na casquinha, picolés recheados e mais uma infinidade de delícias geladas.'
          />

          <p className='text-2xl text-amber-500 md:text-3xl md:px-16 lg:text-4xl'>Venha conhecer nossa loja e experimentar nossos deliciosos produtos!</p>
        </div>

        <div className='flex lg:col-span-2 relative group items-center justify-center'>
          <Image src={'/assets/fotoPrincipal.jpeg'} alt='Foto principal do site' width={904} height={904}
            className='w-1/2 rounded-xl lg:w-9/12 mt-8 '
          >
          </Image>
        </div>
      </div>

      <div className='mt-20 mx-3'>
        <Title title='Conheça a Gran Gelato' subtitle='Nossas qualidades e mais informações sobre a empresa' />
      </div>

      <div className=' flex flex-wrap justify-center gap-10 lg:gap-x-24'>
        <div className='mt-10'>
          <Cards src='/assets/cards/award.svg' text='Materiais de altíssima qualidade para desenvolver os produtos' />
        </div>

        <div className='mt-10'>
          <Cards src='/assets/cards/check.svg' text='Grande aprovação do público consumidor'
          />
        </div>

        <div className='mt-10'>
          <Cards src='/assets/cards/dollar.svg' text='Produtos acessíveis à população, com ótimo custo-benefício' />
        </div>

        <div className='mt-10'>
          <Cards src='/assets/cards/user.svg' text='Atendimaneto especializado e eficiente para atender os clientes' />
        </div>
      </div>



      <div className='flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-6  mt-24 mx-3 md:gap-0 '>
        <div className='flex flex-col lg:col-span-4 '>
          <Title title='Nossos Produtos' subtitle='Sensações com sabores incríveis'/>

          <Text text='Na Gran Gelato, a criação e implementação de um novo produto passa por uma complexa fase de pesquisa ao consumidor, análise no mercado e dedicação máxima de toda equipe na sua formulação até chegar ao cliente.
          Os sorvetes Gran Gelato são receitas exclusivas feitas artesanalmente com excelentes matérias-primas, muito carinho, sabor inigualável e diferente de tudo que você já experimentou. Desenvolvidos com alta qualidade, nossos produtos possuem destaque na região e conquista o paladar de todos que os provam. ' />
        </div>

        <Carrossel />
      </div>

      <div className='mx-3'>
        <Title title='Principais vendas' subtitle='Não fique sem essas delícias no seu dia!!' />
      </div>
      <div className='flex justify-center items-center mb-24'>
      <div className='gap-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-32'>
        
          <Produtos src='/assets/carrossel/acai.jpeg' nome='Açaí' valor='R$ 16,00' />
          <Produtos src='/assets/carrossel/picole.jpeg' nome='Picolé' valor='R$ 4,50' />
          <Produtos src='/assets/carrossel/sorvete.jpeg' nome='Sorvete' valor='R$ 5,50' />
          <Produtos src='/assets/carrossel/sundae.jpeg' nome='Sundae' valor='R$ 5,50' />
          <Produtos src='/assets/carrossel/milkshake.jpeg' nome='Milkshake' valor='R$ 15,00' />
          <Produtos src='/assets/carrossel/picole2.jpeg' nome='Picolé recheado' valor='R$ 7,00' />
        
      </div>
      </div>

    </div>
  )
}
