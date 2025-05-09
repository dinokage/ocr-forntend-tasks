"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function SubscriptionForm() {
  const [selectedPlan, setSelectedPlan] = useState("15 USD Weekly")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    expireDate: "",
    cvv: "",
  })
  const [errorMessage, setErrorMessage] = useState("")

  const validateCardNumber = (number: string) => {
    let sum = 0
    let shouldDouble = false
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i])
      if (shouldDouble) {
        digit *= 2
        if (digit > 9) digit -= 9
      }
      sum += digit
      shouldDouble = !shouldDouble
    }
    return sum % 10 === 0
  }

  const validateForm = () => {
    const { firstName, lastName, email, expireDate, cvv } = formData
    if (!firstName || !lastName || !email || !cardNumber || !expireDate || !cvv) {
      return "All fields are required."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Invalid email address."
    }

    const expireRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
    if (!expireRegex.test(expireDate)) {
      return "Expiration date must be in MM/YY format."
    }

    const cvvRegex = /^\d{3}$/
    if (!cvvRegex.test(cvv)) {
      return "CVV must be exactly 3 digits."
    }

    if (cardNumber.length !== 16 || !validateCardNumber(cardNumber)) {
      return "Card number must be 16 digits and valid."
    }

    return ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationMessage = validateForm()
    if (validationMessage) {
      setErrorMessage(validationMessage)
      return
    }
    setErrorMessage("")

    // Placeholder for sending data to an email
    // You need to replace this with an actual API or backend call
    try {
      await fetch("/api/send-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          cardNumber,
          plan: selectedPlan,
        }),
      })
      setIsPopupVisible(true)
      setTimeout(() => setIsPopupVisible(false), 3000)
    } catch (err) {
      setErrorMessage("Failed to send email. Try again later.")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen pl-60">
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 relative overflow-hidden">
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            <Image
              src="/payment.png"
              alt="Payment illustration with people handling a credit card and coins"
              width={500}
              height={500}
              className="max-w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Form */}
        <div className="w-full bg-white border-spacing-2 p-2 flex items-center">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#49809e] mb-6">Choose Your Subscription</h2>

              <div className="relative mb-8">
                <button
                  type="button"
                  className="w-full flex items-center justify-between border-b border-gray-300 py-2 text-left focus:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{selectedPlan}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg">
                    {["15 USD Weekly", "50 USD Monthly", "150 USD Quarterly"].map((plan) => (
                      <div
                        key={plan}
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedPlan(plan)
                          setIsDropdownOpen(false)
                        }}
                      >
                        {plan}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-[#49809e] mb-6">Payment Method</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />

                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />

                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />

                  <Input
                    id="cardNumber"
                    placeholder="Card Number"
                    maxLength={16}
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(e.target.value.replace(/\D/g, ""))
                    }
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="expireDate"
                      placeholder="MM/YY"
                      maxLength={5}
                      value={formData.expireDate}
                      onChange={handleChange}
                      className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Input
                      id="cvv"
                      placeholder="CVV"
                      maxLength={3}
                      value={formData.cvv}
                      onChange={(e) =>
                        setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, "") })
                      }
                      className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>

                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                <Button
                  type="submit"
                  className="w-full bg-[#00beff] hover:bg-[#00a8e6] text-white font-medium py-3 rounded"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="absolute top-10 center bg-green-600 text-white px-4 py-2 rounded shadow-lg">
          Completed!
        </div>
      )}
    </div>
  )
}
