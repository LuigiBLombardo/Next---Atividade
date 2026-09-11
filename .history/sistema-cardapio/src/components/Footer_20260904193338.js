import Link from "next/link";

export default function Footer(){
    return (
        <footer className="w-full bg-slate-900 text-slate-400 pt-12">

            <div className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">
                        Sabor & Arte
                    </h2>
                    <p className="text-sm max-w-xs text-slate-400">
                        O melhor menu digital da região. Pratos artesanais feitos com
                        paixão, ingredientes frescos e entrega rápida na sua mesa.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white mb-4">
                        Navegação
                    </h3>
                    <div className="space-y-2 text-sm">

                        <Link href="/" className="hover:text-white transition">Início</Link>
                        <Link href="/cardapio" className="hover:text-white transition">Cardápio</Link>
                        <Link href="/categorias" className="hover:text-white transition">Categorias</Link>

                    </div>
                </div>

                <div>

                </div>
            </div>

        </footer>
    )
}