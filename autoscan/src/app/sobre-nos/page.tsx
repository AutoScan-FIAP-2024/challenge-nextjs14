import Header from "@/components/header"

export default function page() {
    return (
        <div className="bg-[#181a1b]">
            <Header></Header>
            <main className="flex flex-col justify-center items-center mt-10 mb-16">
                <img className="hover:scale-110 duration-1000 mb-5"
                    width={500} src="/img/imgbook.png" alt="Livro" />
                <p className="text-center font-cinzel text-2xl max-w-md"
                >Estudantes da Faculdade de Informática e administração paulista (FIAP), Desafiados e incentivados pela <span style={{ color: "#41A2B7" }}>Porto Seguro</span>, para criar este projeto.</p>
            </main>
            <h1 className="text-3xl text-center font-mono mb-16">CRIADORES DA AUTOSCAN</h1>
            <aside className="text-center flex justify-around font-cinzel">
                <div className="flex flex-col">
                    <div className="flex max-w-2xl">
                        <img className="mb-14 hover:scale-110 duration-1000"
                            src="/img/fotoeduardo.png" alt="Eduardo" />
                        <div className="flex flex-col">
                            <p className="max-w-xl text-justify text-lg mt-5 pl-8"><span className="underline">Eduardo Augusto Pelegrino Einsfeldt</span>, 24 anos, Da 1TDSPM. Atualmente cursando análise e desenvolvvimento de sistemas. Não há nenhuma área de foco porém costuma trabalhar com front-end  JUNTO COM FRAMEWORKS COMO REACT, TYPESCRIPT E VITE.</p>
                            <a className="text-lg max-w-xs mt-2 ml-7 hover:underline"
                                href="https://github.com/EduardoEinsfeldt" target="_blank">https://github.com/EduardoEinsfeldt</a>
                        </div>
                    </div>
                    <div className="flex max-w-2xl">
                        <img className="hover:scale-110 duration-1000"
                            src="/img/joaocandido.png" alt="João Vitor Rocha Cândido" />
                        <div className="flex flex-col">
                            <p className="max-w-xl text-justify text-lg mt-5 pl-8"><span className="underline">João Vitor ROCHA CÂNDIDO</span>, 18 anos, DA 1TDSPF, atualmente cursando análise e desenvolvvimento de sistemas. Não há nenhuma área de foco porém costuma trabalhar com backend com python.</p>
                            <a className="text-lg max-w-xs mt-2 ml-6 hover:underline"
                                href="https://github.com/JvrCandido" target="_blank">https://github.com/JvrCandido</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <img className="hover:scale-110 duration-1000"
                        height={50} width={350}
                        src="/img/joaobroggine.png" alt="João Vitor Broggine" />
                    <p className="max-w-md text-justify text-lg mt-5 pl-24"
                    >
                        <span className="underline">João Vitor Broggine</span>, 18 anos, DA 1TDSPF, atualmente cursando análise e desenvolvimento de sistemas. Não há nenhuma área de foco porém costuma trabalhar com front-end e java, backend.
                    </p>
                    <a className="text-lg mt-2 pr-6 hover:underline"
                        href="https://github.com/joaobroggine" target="_blank">
                        https://github.com/joaobroggine
                    </a>
                </div>
            </aside>
            <aside className="font-cinzel text-center text-2xl mt-5 hover:underline">
                <a href="https://github.com/AutoScan-FIAP-2024" target="_blank">https://github.com/AutoScan-FIAP-2024</a>
            </aside>
        </div>
    )
}
