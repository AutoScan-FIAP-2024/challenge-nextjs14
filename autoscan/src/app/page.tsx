import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div id="start" className="overflow-hidden bg-[#9CAEDB]">
      <Header />
      <main className="flex flex-col items-center justify-center text-center p-4 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Bem-vindo à <span className="text-[#605EDB]">AutoScan</span>
        </h1>
        <p className="mt-4 text-lg max-w-md text-gray-700 mb-6">
          Nossa empresa, AutoScan, é uma afiliada à Porto Seguro que utiliza inteligência artificial para oferecer um atendimento ao cliente eficiente e inovador.
        </p>
        <button 
          className="bg-[#605EDB] text-white py-2 px-4 rounded-3xl w-40 h-12 hover:bg-[#4d4ab6] transition duration-1000 hover:scale-110">
          <a className="text-2xl font-bebas" href="#contact">Contato</a>
        </button>
        <section className="mt-10 md:mt-20 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 md:mr-6 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Atendimento Online</h2>
              <p className="text-lg text-gray-700 mb-4">
              Nossa equipe está pronta para oferecer o melhor suporte online. 
                Entre em contato através de nossos canais de atendimento e receba 
                o suporte que você precisa de forma rápida e eficiente.
              </p>
              <button 
                className="bg-[#605EDB] text-white py-2 px-4 rounded-3xl w-60 h-12 hover:bg-[#4d4ab6] transition duration-1000 hover:scale-110">
                <Link className="text-4xl font-bebas" href="/auth/registro">Registrar-se!</Link>
              </button>
            </div>
            <div className="flex-1">
              <img src="/img/iaimg.png" alt="Atendimento Online" className="w-full h-auto max-w-xs md:max-w-full" />
            </div>
          </div>
        </section>
        <section className="mt-10 md:mt-20 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-black border-2 rounded-lg p-6 hover:shadow-lg transition duration-1000 hover:scale-110">
              <h3 className="text-xl font-semibold mb-2">Consultoria Técnica</h3>
              <p className="text-gray-700">Oferecemos consultoria via IA para otimizar seus processos.</p>
            </div>
            <div className="border-black border-2 rounded-lg p-6 hover:shadow-lg transition duration-1000 hover:scale-110">
              <h3 className="text-xl font-semibold mb-2">Suporte Online</h3>
              <p className="text-gray-700">Nosso suporte está disponível 24hrs para resolver qualquer problema.</p>
            </div>
            <div className="border-black border-2 rounded-lg p-6 hover:shadow-lg transition duration-1000 hover:scale-110">
              <h3 className="text-xl font-semibold mb-2">Software Desenvolvido</h3>
              <p className="text-gray-700">Criamos soluções personalizadas de software para atender às suas necessidades.</p>
            </div>
          </div>
        </section>
        <section className="mt-10 md:mt-20 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">O que nossos clientes dizem</h2>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-[#605EDB] pl-4 italic">
              "A AutoScan transformou a maneira como trabalhamos!"
              <footer className="mt-2 text-right">- João Vitor Rocha Cândido</footer>
            </blockquote>
            <blockquote className="border-l-4 border-[#605EDB] pl-4 italic">
              "Os serviços oferecidos são de altíssima qualidade. Recomendo!"
              <footer className="mt-2 text-right">- Alexandre Carlos Jesus</footer>
            </blockquote>
          </div>
        </section>
        <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 md:mt-20">Entre em Contato</h2>
        <section id="contact" className="w-full flex flex-col md:flex-row justify-evenly items-center">
          <form className="bg-gray-100 p-6 w-full md:w-1/3 rounded-lg mb-6 md:mb-0">
            <div className="flex flex-col space-y-4">
              <input type="text" placeholder="Seu Nome" className="p-3 border border-gray-300 rounded" required />
              <input type="email" placeholder="Seu Email" className="p-3 border border-gray-300 rounded" required />
              <textarea placeholder="Sua Mensagem" className="p-3 border border-gray-300 rounded" rows="4" required></textarea>
              <button type="submit" className="bg-[#605EDB] text-white py-2 rounded hover:bg-[#4d4ab6] transition duration-300">
                Enviar Mensagem
              </button>
            </div>
          </form>
          <img src="/img/contact.png" alt="Atendimento Online" className="w-full max-w-xs md:max-w-md h-auto" />
        </section>
        <button className="mt-10 bg-[#605EDB] text-white py-2 px-4 rounded-3xl w-40 h-12 hover:bg-[#4d4ab6] transition duration-1000 hover:scale-110">
          <a className="text-3xl font-bebas" href="#start">Início</a>
        </button>
      </main>
      <footer className="bg-black text-white py-5 text-center">
        <p>© 2024 AutoScan. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
