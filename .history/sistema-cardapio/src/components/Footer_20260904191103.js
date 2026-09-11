import Link from "next/link";

export default function Footer(){
    return (
        <footer className="flex items-center bg-gray-350">
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div>
                <h3></h3>
                <div>
                    <Link href="/" className="">Início</Link>
                    <Link href="/cardapio" className="">C</Link>
                </div>
            </div>
            <div>

            </div>

        </footer>
    )
}