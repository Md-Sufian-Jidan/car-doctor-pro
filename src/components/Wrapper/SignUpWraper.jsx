import SignUpPage from '@/app/signUp/page';
import React, { Suspense } from 'react';

const SignUpWraper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignUpPage />
        </Suspense>
    );
};

export default SignUpWraper;