"use server";

import { revalidatePath } from "next/cache"; 
import { redirect } from "next/navigation"; 
 
export async function cadastrarPrato(formData) { 
  // 1. Extraímos os dados do formulário 
  const dados = { 
    nome: formData.get("nome"), 
    descricao: formData.get("descricao"), 
    categoria: formData.get("categoria"), 
    preco: parseFloat(formData.get("preco")), 
    imagem: formData.get("imagem"), 
    destacado: formData.get("destacado") === "on", 
  }; 
 
  // 2. Enviamos para a sua API Real (POST) 
  const res = await fetch("https://api-restaurante-5iqb.onrender.com/api/produtos", { 
    method: "POST", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify(dados), 
  }); 
 
  if (!res.ok) { 
    throw new Error("Falha ao cadastrar o prato na API."); 
  } 
 
  revalidatePath("/cardapio"); 
   
  redirect("/cardapio"); 
}