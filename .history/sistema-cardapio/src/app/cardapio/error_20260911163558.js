"use client";
import { useEffect } from "react";

export default function ErrorCardapio({error,reset}){

    useEffect(() => {
         // Aqui você poderia enviar o erro para um serviço de log (ex: Sentry) 
        console.error("Aconteceu um erro no cardápio:", error);
    },[error]);

    return
}
