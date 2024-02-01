
type TextProps={
    text:string
}

export default function Text({text}:TextProps){
    return(
        <div className="md:px-16">
            <p className="text-2xl text-gray-700 text-justify md:text-3xl lg:text-4xl">{text} </p>
        </div>
    )
}