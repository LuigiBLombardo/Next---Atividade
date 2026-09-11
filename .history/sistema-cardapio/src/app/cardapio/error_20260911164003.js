"use client";
import { useEffect } from "react";

export default function ErrorCardapio({error,reset}){

    useEffect(() => {
         // Aqui você poderia enviar o erro para um serviço de log (ex: Sentry) 
        console.error("Aconteceu um erro no cardápio:", error);
    },[error]);

    return (
        <main className="flex flex-col items-center justify-center min-h-[60vh] p-10 text-center">
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 max-w-md">
                <h2 className="text-4xl mb-4">󰞽⚠</h2>
                <h1 className="text-2xl font-bold text-gray-800">Ops! A cozinha está em manutenção.</h1>
                <p className="text-gray-600 mt-4">
                    Não conseguimos carregar os pratos neste momento. Nossa equipe já foi avisada! 
                </p>

                <div
            </div>
        </main>
    )
}
