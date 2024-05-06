// Simular a função de receber dados da API
import redesSociais from "./script/redes"

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-neutral-950">
      <div className="flex flex-col justify-center min-w-[400px] md:min-w-[500px] min-h-[700px] md:min-h-[700px] items-center rounded-2xl bg-neutral-800">
        <img src="./Pedrot.jpeg" alt="Avatar" className="object-cover h-32 w-32 rounded-full mb-8 shadow-xl" />
        <h2 className="text-2xl text-white font-bold">Pedro Lima</h2>
        <h3 className="text-sm text-lime-400 font-medium">Araras, São Paulo</h3>

        <p className="text-sm text-white font-thin my-5">"Desenvolvedor Fullstack e Produtor Musical"</p>

        <div className="flex items-center flex-col gap-3 mx-2 w-full max-w-md">
          {redesSociais.map((rede, index) => (
            <a href={rede.url} key={index} className="flex items-center justify-center w-[85%] h-12 rounded-xl bg-neutral-600 cursor-pointer hover:bg-neutral-700 transition-colors">
              <span className="text-base text-white font-bold">{rede.rede}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
