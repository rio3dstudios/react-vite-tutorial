type SectionProps = 
{
    name: string;
    text: string;
   
}

export function Section(props: SectionProps)
{

    return(

        <div>Hello my name is {props.name} and my value is {props.text}</div>

     
    )

}