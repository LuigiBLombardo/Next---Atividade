"use client";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'; 

export default function Busca{
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    function handleSearch(termo){
        const params = new URLSearchParams(searchParams);

        if(termo){
            params.set
        }
    }
}
