import LoginPage from '@/app/login/page';
import React, { Suspense } from 'react';

const LoginWraper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
        </Suspense>
    );
};

export default LoginWraper;