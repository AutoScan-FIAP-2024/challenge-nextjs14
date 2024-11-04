import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen" 
    style={{ backgroundColor: '#605EDB' }}>
      <main className="flex items-center justify-center pt-20 space-x-48">
      <img width={'550px'} src="/img/error.png" alt="" />
      <div className="flex flex-col items-start gap-7 pb-12">
        <h1 className="font-paytone text-9xl">404</h1>
        <p className="font-archivo text-2xl w-96 mb-5">Oops! Você foi aonde não deveria ir.
        Que tal uma viagem de volta?</p>
        <button style={{ borderColor: '#41A2B7',
                         backgroundColor: '#41A2B7'
         }} 
        className="border rounded-lg w-96 h-16 font-bebas text-5xl cursor-pointer hover:scale-110 duration-500"
        ><Link className="" 
        href='/'>PÁGINA INICIAL</Link>
        </button>
      </div>
      </main>
    </div>
  )
}
