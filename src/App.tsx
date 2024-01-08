import { Routes, Route } from 'react-router-dom';

import './globals.css';
import { Home } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/forms/AuthLayout';
import RootLayout from './_root/pages/RootLayout';

const App = () => {
    return (
    <main className="flex h-screen">
        <Routes>
            {/* public routes */}  // Everybody will be able to see, the sign-up and the signin.
            <Route element={<AuthLayout />}> 
            <Route path='/sign-in' element={<SigninForm />} />
            <Route path='/sign-up' element={<SignupForm />} />
        </Route>
            {/* private routes */  }  // you'll able to see only if you are youre signin.
            <Route element={<RootLayout />}>
            <Route index element={<Home />} />
         </Route>
        </Routes>
    </main>
    )
}

export default App
