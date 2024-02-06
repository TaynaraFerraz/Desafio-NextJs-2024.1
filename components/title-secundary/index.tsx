
type SecundaryTitleProps={
    text:string
}

export default function SecundaryTitle({text}: SecundaryTitleProps){
    return(
            <div className=" ">
                    <h1 className="text-3xl text-sky-700 uppercase md:text-4xl lg:text-5xl ">{text}</h1>
            </div>
        
    )
}