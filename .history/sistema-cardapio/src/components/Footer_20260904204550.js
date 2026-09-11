import Link from "next/link";

export default function Footer(){
    return (
            <footer className="w-full bg-slate-900 text-slate-400 pt-12">

                <div className="max-w-7xl mx-auto px-8 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">

                    <div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">
                            Luigi lindi
                        </h2>
                        <p className="text-sm max-w-xs text-slate-400">
                            O melhor menu digital da região. Pratos artesanais feitos com
                            paixão, ingredientes frescos e entrega rápida na sua mesa. fdgdsfg dsfgdsf
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">
                            Navegação dgsdgsdgdf
                        </h3>
                        <div className="flex flex-col gap-2 text-sm">

                            <Link href="/" className="hover:text-white transition">Início</Link>
                            <Link href="/cardapio" className="hover:text-white transition">Cardápio dfsgdsgdsfgdsf</Link>
                            <Link href="/categorias" className="hover:text-white transition">Categorias</Link>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">
                            Funcionamento sdfgdsgdsfgdf
                        </h3>
                        <p className="text-sm text-slate-300">
                            Terça a Domingo: 18h às 23h30
                        </p>
                        <p className="text-xs text-slate-500 mb-4">
                            Atendimento local e Delivery
                        </p>

                        <span className="block text-xs text-slate-500 mb-1">
                            Dúvidas ou Reservas?
                        </span>
                        <a className="text-lg font-bold text-orange-500 inline-block">
                            (47) 99999-9999
                        </a>
                    </div>
                </div>

                <div className="bg-blue-500">
                    
                </div>

            </footer>
    )
}