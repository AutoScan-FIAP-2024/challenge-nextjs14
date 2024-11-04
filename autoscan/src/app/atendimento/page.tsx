export default function page() {
  return (
    <div className="bg-[#9CAEDB] h-screen text-white">
      <header>
        <h1 className="font-bebas text-7xl p-10 pl-20">BEM-VINDO</h1>
      </header>
      <aside className="pl-12">
        <p className="text-xl">Preencha os campos se nescessário</p>
        <div className=" border-white border-opacity-60 rounded-xl
        bg-white bg-opacity-60 text-black w-1/3 flex flex-col space-y-5">
            <div className="p-4 pb-0 space-x-3">
                <input className="border-white rounded-full"
                type="checkbox" id="pcd" />
                <label 
                htmlFor="pcd">PcD (Pessoa com deficiência)</label>
            </div>
            <div className="p-4 pb-0 space-x-3">
                <input type="checkbox" id="idoso" />
                <label 
                htmlFor="idoso">Idoso (Acima de 60 anos)</label>
            </div>
             <p className="pl-4 pb-4 text-sm">
                É muito importante você assinar esses dados apenas se você faz parte desses grupos, pois ajudará a melhorarmos as expêriencias de quem for mais nescessitado.
             </p>
        </div>
      </aside>
    </div>
  )
}
