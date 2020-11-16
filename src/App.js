import Parrafo from "./components/Parrafo"
import Contador from "./components/Contador"
import User from "./components/User"
import Foco from "./components/Foco"
import userEvent from "@testing-library/user-event"

function App() {
  return (
    <div>
      <table>
        <tr>
        <td><Foco lugar = "Sala"></Foco></td>
        <td><Foco lugar = "Comedor"></Foco></td>
        <td><Foco lugar = "Cocina"></Foco></td>
        </tr>
        <tr>
        <td><Foco lugar = "Estancia"></Foco></td>
        <td><Foco lugar = "Recamara Principal"></Foco></td>
        <td><Foco lugar = "Recamara de los niños"></Foco></td>
        </tr>
      </table>
      <Parrafo></Parrafo>
      <Contador></Contador>
      <User></User>
      <userEvent></userEvent>
    </div>
  );
}

export default App;