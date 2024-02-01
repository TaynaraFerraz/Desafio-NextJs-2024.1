import Image from 'next/image'

type ImagensProps={
    src:string,
    alt:string,
    width:number,
    heigth:number
}

export default function Imagens({src, alt}: ImagensProps){
    return(
        <Image 
        src={src}
        alt={alt}
        width={904}
        height={904}
        />
    )
}