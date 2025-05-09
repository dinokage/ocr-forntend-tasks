"use client";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (data) => {
    // Simulate successful submission
    setShowSuccess(true);
    reset();

    // Hide pop-up after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Payment Form</title>
      </Head>

      {/* Success Message Popup */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 transition">
          ✅ Payment Completed!
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 md:p-10">
        <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src="/subscription image.png"
              alt="Payment Illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-1/2 p-6 md:p-10 space-y-4 bg-white"
            noValidate
          >
            <h2 className="text-xl font-bold text-sky-600 mb-4">Choose Your Subscription</h2>
            <select
              {...register("plan", { required: "Please select a subscription" })}
              className="w-full border p-3 rounded"
            >
              <option value="">-- Select a plan --</option>
              <option value="monthly">29 USD Monthly-Standard</option>
              <option value="monthly">49 USD Monthly-Premium</option>
            </select>
            {errors.plan && (
              <p className="text-red-500 text-sm">{errors.plan.message}</p>
            )}

            <h2 className="text-xl font-bold text-sky-600 mt-6 mb-4">Payment Details</h2>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "Too short" },
                  })}
                  className="w-full border p-3 rounded"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                )}
              </div>

              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: { value: 2, message: "Too short" },
                  })}
                  className="w-full border p-3 rounded"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full border p-3 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="text"
              inputMode="numeric"
              maxLength={15}
              placeholder="Card Number"
              {...register("card", {
                required: "Card number is required",
                pattern: {
                  value: /^\d{15}$/,
                  message: "Must be exactly 15 digits",
                },
              })}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              className="w-full border p-3 rounded"
            />
            {errors.card && (
              <p className="text-red-500 text-sm">{errors.card.message}</p>
            )}

            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="MM/YY"
                  {...register("expiry", {
                    required: "Expiry date is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: "Use MM/YY format",
                    },
                  })}
                  onInput={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length >= 3) {
                      value = value.slice(0, 2) + "/" + value.slice(2, 4);
                    }
                    e.target.value = value.slice(0, 5);
                  }}
                  className="w-full border p-3 rounded"
                />
                {errors.expiry && (
                  <p className="text-red-500 text-sm">{errors.expiry.message}</p>
                )}
              </div>

              <div className="w-1/2">
  <input
    type="password" // ⬅️ Changed here
    inputMode="numeric"
    maxLength={3}
    placeholder="CVV"
    {...register("cvv", {
      required: "CVV is required",
      pattern: {
        value: /^\d{3}$/,
        message: "Must be exactly 3 digits",
      },
    })}
    onInput={(e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
    }}
    className="w-full border p-3 rounded"
  />
  {errors.cvv && (
    <p className="text-red-500 text-sm">{errors.cvv.message}</p>
  )}
</div>

            </div>

            <button
              type="submit"
              className="bg-sky-500 text-white w-full py-3 rounded hover:bg-sky-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
