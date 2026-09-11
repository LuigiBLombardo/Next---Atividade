import Link from "next/link";

export default function Footer(){
    return (
        <footer className="w-full bg-slate-900 text-slate-400 pt-12">

            <div className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>

                    <h2 className="text-2xl">
                        Sabor & Arte
                    </h2>

                    <p></p>

                </div>

                <div>

                    <h3></h3>

                    <div>
                        <Link href="/" className="">Início</Link>
                        <Link href="/cardapio" className="">Cardápio</Link>
                        <Link href="/categorias" className="">Categorias</Link>
                    </div>

                </div>

                <div>

                </div>
            </div>

        </footer>
    )
}