/* import { useContext } from "react" */
/* import { CounterContext } from "../context/CounterContext" */
import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"



const About = () => {
  const {counter} = useCounterContext()
  return (
    <div>
      <h1>Sobre</h1>
      <p>valor do contador: {counter}</p>
      <ChangeCounter/>
      
    </div>
  )
}

export default About