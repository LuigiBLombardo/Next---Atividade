import Link from "next/link";

export default function Footer(){
    return (
        <footer className="w-full bg-slate-900">

            <div className="">

                <div>

                    <h2></h2>

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