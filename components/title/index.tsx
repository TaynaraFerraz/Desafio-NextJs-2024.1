
type TitleProps={
    title: string,
    subtitle: string
}

export default function Title({title, subtitle}: TitleProps){
    return(
        <div className=" flex flex-col m-3 md:px-16 lg:my-12 ">
            <h1 className="text-3xl text-sky-700 uppercase md:text-4xl lg:text-5xl ">
            {title}
            </h1>

            <h2 className="text-2xl text-gray-700 mt-2 md:text-3xl lg:text-4xl ">
            {subtitle}
            </h2>
        </div>
    )
}