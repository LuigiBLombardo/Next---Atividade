import { NextResponse } from 'next/server'; 
export function middleware(request) { 

const token = request.cookies.get('auth_token')?.value; 

if (request.nextUrl.pathname.startsWith('/admin') && !token) { 
// Redirecionamos para a página de login 
return NextResponse.redirect(new URL('/login', request.url)); 
} 

return NextResponse.next(); 
} 
export const config = { 
matcher: '/admin/:path*', 
};