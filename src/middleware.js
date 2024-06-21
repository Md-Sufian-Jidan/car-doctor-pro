import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = (request) => {
    const token = cookies(request).get('next-auth.session-token');

    const pathName = request.nextUrl.pathName;
    if (pathName.includes("api")) return NextResponse.next();

    console.log(token);
    console.log('middleware');
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: [
        '/myBookings/:path*', "/checkout", '/services/:path*'
    ]
};