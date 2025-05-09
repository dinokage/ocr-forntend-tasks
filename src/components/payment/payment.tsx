'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
                
import {
    FaUser,
    FaEnvelope,
    FaCreditCard,
    FaCalendarAlt,
    FaDollarSign,
    FaKey,
} from 'react-icons/fa';

export default function Payment() {
       const router = useRouter();
    const paymentPage = () => {
        router.push('/request'); // Replace with your desired route
      };
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordStrong = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const cardRegex = /^\d{16}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    const cvvRegex = /^\d{3,4}$/;

    // Luhn Algorithm for Card Validation
    const luhnCheck = (cardNumber: string): boolean => {
        let sum = 0;
        let shouldDouble = false;

        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i));
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'expiry') {
            let formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
            if (formattedValue.length > 2) {
                formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4); // Format as MM/YY
            }
            setFormData(prev => ({ ...prev, expiry: formattedValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const validateForm = () => {
        const newErrors: any = {};

        const cleanedCardNumber = formData.cardNumber.replace(/\D/g, '');

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
        if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email address.';
        if (!passwordStrong.test(formData.password)) {
            newErrors.password = 'Password must contain uppercase, lowercase, number, and symbol.';
        }
        if (!cardRegex.test(cleanedCardNumber) || !luhnCheck(cleanedCardNumber)) {
            newErrors.cardNumber = 'Invalid card number.';
        }
        if (!expiryRegex.test(formData.expiry)) newErrors.expiry = 'Invalid expiry date (MM/YY).';
        if (!cvvRegex.test(formData.cvv)) newErrors.cvv = 'CVV must be 3 or 4 digits.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    cardNumber: '',
                    expiry: '',
                    cvv: '',
                });
            }, 3000);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white relative">
            {showPopup && (
                <div className="absolute top-10 right-10 bg-green-600 text-white px-6 py-3 justify-center rounded-md shadow-lg text-lg font-medium z-50">
                    ✅ Completed
                </div>
            )}

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/payment-illustration.png"
                        alt="Payment Illustration"
                        width={500}
                        height={500}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                <form onSubmit={handleSubmit} className="w-full md:w-1/2 max-w-md space-y-6">
                    <h2 className="text-lg font-semibold text-[#39708d]">Choose Your Subscription</h2>
                    <div className="flex items-center mb-4">
                        <div className="bg-[#39708d] text-white px-3 py-3 rounded-l">
                            <FaDollarSign />
                        </div>
                        <select
                            name="subscription"
                            onChange={handleChange}
                            className="w-full border-none bg-[#f5f5f5] px-4 py-3 rounded-r text-sm text-gray-700 focus:outline-none"
                            defaultValue="50 USD Monthly"
                        >
                            <option>49 USD Monthly</option>
                            <option>29 USD Monthly</option>
                        </select>
                    </div>

                    <h2 className="text-lg font-semibold text-[#39708d]">Payment Method</h2>

                    <div className="space-y-7">
                        {[ 
                            { name: 'firstName', icon: <FaUser />, placeholder: 'First Name', type: 'text' },
                            { name: 'lastName', icon: <FaUser />, placeholder: 'Last Name', type: 'text' },
                            { name: 'email', icon: <FaEnvelope />, placeholder: 'Email Address', type: 'email' },
                            { name: 'password', icon: <FaKey />, placeholder: 'Password', type: 'password' },
                            { name: 'cardNumber', icon: <FaCreditCard />, placeholder: 'Card Number', type: 'text' },
                        ].map(({ name, icon, placeholder, type }) => (
                            <div key={name} className="space-y-2">
                                <div className="flex items-center">
                                    <div className="bg-[#39708d] text-white p-3 rounded-l w-12 flex justify-center items-center">
                                        {icon}
                                    </div>
                                    <input
                                        name={name}
                                        type={type}
                                        placeholder={placeholder}
                                        value={formData[name]}
                                        onChange={handleChange}
                                        className="w-full bg-[#f5f5f5] px-4 py-3 text-sm text-gray-700 rounded-r focus:outline-none"
                                    />
                                </div>
                                {errors[name] && (
                                    <p className="text-sm text-red-500 mt-1 ml-1">{errors[name]}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2 space-y-2">
                            <div className="flex items-center">
                                <div className="bg-[#39708d] text-white p-3 rounded-l w-12 flex justify-center items-center">
                                    <FaCalendarAlt />
                                </div>
                                <input
                                    name="expiry"
                                    type="text"
                                    placeholder="MM/YY"
                                    value={formData.expiry}
                                    onChange={handleChange}
                                    className="w-full bg-[#f5f5f5] px-4 py-3 text-sm text-gray-700 rounded-r focus:outline-none"
                                />
                            </div>
                            {errors.expiry && (
                                <p className="text-sm text-red-500 mt-1 ml-1">{errors.expiry}</p>
                            )}
                        </div>
                        <div className="w-1/2 space-y-2">
                            <input
                                name="cvv"
                                type="password"
                                placeholder="CVV"
                                value={formData.cvv}
                                onChange={handleChange}
                                className="w-full bg-[#f5f5f5] px-4 py-3 text-sm text-gray-700 rounded-r focus:outline-none"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-medium py-3 rounded-md transition-colors" onClick={paymentPage}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
