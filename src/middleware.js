import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = (request) => {
    const token = cookies(request).get('__Secure-next-auth.session-token');

    const pathName = request.nextUrl.pathname;
    if (pathName.includes("api")) {
        return NextResponse.next();
    }
    console.log('token is not coming', token);
    console.log('middleware');
    if (!token) {
        return NextResponse.redirect(new URL(`/login?redirect=${pathName}`, request.url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: [
        '/myBookings/:path*', '/services/:path*'
    ]
};