import {useState,useEffect} from "react"
import {Section} from "./components/Section"

function App() {


  const [sections, SetSection] = useState<string[]> ([
    "section 1",
    "section 2",
    "section 3",
    "section 4" // lista de section default
  ])// retorna a lista de sections no primeiro parametro e uma funcão especial de update das listas


  //funcão para inserir uma nova section
  function CreateSection()
  {
    console.log("criando uma nova section")
    SetSection([...sections,"section 5"])
  }

  useEffect(() => {//O useEffect() recebe como primeiro parâmetro uma função que será executada assim que o componente renderizar. Então é um ótimo lugar para fazer requisições.
   
    CreateSection();
	},[]) //  se quisermos que a função seja executada apenas uma vez, que é quando o componente é inserido na tela, basta passar um Array vazio.


  return (
    <div>
       {sections.map(section_i =>{

          return <Section name ={section_i} text ="section :D"/>}
        
      )}


    </div>

  
  
  )
}

export default App
