import { SignIn, SignUp } from '@clerk/clerk-react';

import './Auth.scss';

export default function Auth() {
    return (
        <div className="auth-container">
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
    );
}
