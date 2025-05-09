'use client';
import React, { useState } from 'react';
import Mail from '../../../public/Login/Vector (4).png';
import Lock from '../../../public/Login/Group 4.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const LoginPage = () => {
    const router = useRouter(); // <-- Add this line
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        } else if (password.length < 7) {
            newErrors.password = 'Password must be at least 7 characters long';
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        console.log({ email, password, rememberMe });

        // 🔁 Navigate to dashboard or any target page
        router.push('/Subscription'); // change '/dashboard' to your target route
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#DBFAFC] px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full h-[450px] max-w-md bg-[#97DBEA] p-10 rounded-2xl shadow-2xl space-y-6"
            >
                {/* Email Field */}
                <div className="flex rounded overflow-hidden bg-[#F1F1F1] border-l-[10px] border-black">
                    <div className="flex items-center justify-center w-[50px]">
                        <Image src={Mail} alt="Mail Icon" className="w-5 h-5" />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 text-[#0086BF] font-medium focus:outline-none bg-[#F1F1F1]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {errors.email && <p className="text-red-500 text-sm -mt-4">{errors.email}</p>}

                {/* Password Field */}
                <div className="flex rounded overflow-hidden bg-[#F1F1F1] border-l-[10px] border-black">
                    <div className="flex items-center justify-center w-[50px]">
                        <Image src={Lock} alt="Lock Icon" className="w-5 h-5" />
                    </div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 text-[#0086BF] font-medium focus:outline-none bg-[#F1F1F1]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {errors.password && <p className="text-red-500 text-sm -mt-4">{errors.password}</p>}

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2 text-black font-medium">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="accent-black"
                        />
                        Remember me
                    </label>
                    <a href="#" className="text-xs italic bg-[#3F3F3F] text-white px-2 py-[2px] rounded">
                        Forget Password?
                    </a>
                </div>

                {/* Add a clear gap between Remember Me and Login Button */}
                <div className="h-6"></div> {/* This ensures a proper gap */}

                {/* Login Button centered */}
                <button
                    type="submit"
                    className="w-1/2 mx-auto bg-white text-[#0086BF] font-bold py-3 rounded-md hover:bg-gray-100 transition block" onClick={handleSubmit}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
