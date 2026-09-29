"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, GraduationCap, Users, Building, HeartHandshake, FileText, Lock, CheckCircle, Receipt, HelpCircle, AlertCircle, RefreshCcw, Globe } from "lucide-react";
import Image from "next/image";

export default function PaymentsPage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentTypes = [
    { id: "course", icon: GraduationCap, title: "Courses & Training", desc: "Pay for a course, cohort, bootcamp, or learning program." },
    { id: "session", icon: Users, title: "Private Sessions", desc: "Book one-on-one or group consulting/training sessions." },
    { id: "corporate", icon: Building, title: "Corporate Services", desc: "Training, software, consulting, and institutional engagements." },
    { id: "support", icon: HeartHandshake, title: "Support Dahel", desc: "Support technology education, digital access, and innovation." },
    { id: "other", icon: FileText, title: "Other Payment", desc: "For an invoice, custom service, or payment arrangement." }
  ];

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing for demo
    setTimeout(() => {
      if (Math.random() > 0.2) {
        router.push("/payments/success");
      } else {
        router.push("/payments/failed");
      }
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24 w-full max-w-full overflow-hidden">
      {/* HEADER */}
      <header className="bg-navy-900 text-white pt-28 md:pt-32 pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Make Your Payment</h1>
          <p className="text-lg sm:text-xl text-blue-100 font-medium mb-6">Complete your payment securely for a Dahel Technologies course, session, program, or service.</p>
          <div className="bg-blue-900/40 border border-blue-800 rounded-lg p-4 inline-block max-w-2xl text-blue-50 text-sm">
            Choose what you're paying for, select your preferred payment method, and receive confirmation immediately after payment.
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-10 w-full">
        
        {/* STEP 1 */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">1. What are you paying for?</h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {paymentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`text-left p-6 rounded-xl border-2 transition-all flex flex-col gap-3 cursor-pointer ${selectedType === type.id ? 'border-electric-blue bg-blue-50 shadow-sm' : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${selectedType === type.id ? 'bg-electric-blue text-white' : 'bg-gray-100 text-gray-600'}`}>
                    <type.icon size={20} />
                  </div>
                  <h3 className={`font-bold ${selectedType === type.id ? 'text-electric-blue' : 'text-navy-900'}`}>{type.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </button>
            ))}
          </div>
        </section>

        {/* STEP 2 */}
        {selectedType && (
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">2. Payment details</h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" required placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" required placeholder="Where should we send your receipt?" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" required placeholder="+234..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Payment Reference / Invoice Number (Optional)</label>
                  <input type="text" placeholder="e.g. DTH-2026-00421" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Payment Description</label>
                  <input type="text" required placeholder="What is this payment for?" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                  <div className="relative flex">
                    <select className="bg-gray-50 border border-gray-300 border-r-0 rounded-l-lg px-4 py-4 font-bold text-gray-700 focus:ring-2 focus:ring-electric-blue outline-none transition-all cursor-pointer">
                      <option value="NGN">₦ NGN</option>
                      <option value="USD">$ USD</option>
                      <option value="EUR">€ EUR</option>
                      <option value="GBP">£ GBP</option>
                      <option value="GHS">GH₵ GHS</option>
                    </select>
                    <input type="number" required placeholder="0.00" className="w-full px-4 py-4 text-lg font-bold rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all" />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <button type="submit" disabled={isProcessing} className="w-full md:w-auto bg-electric-blue hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                  {isProcessing ? (
                    <span className="flex items-center gap-2"><RefreshCcw className="animate-spin" size={20} /> Processing...</span>
                  ) : (
                    <span className="flex items-center gap-2">Continue to Payment <ArrowRight size={20} /></span>
                  )}
                </button>
              </div>
            </form>
          </section>
        )}

        {/* STEP 3 & 4 - Side by side on large screens */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* PAYMENT METHODS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Pay securely with</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span>🇳🇬</span> Nigerian payments
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Card</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Bank Transfer</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> USSD</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Account-to-account options</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span>🌍</span> International payments
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> International cards</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> USD payment options</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 text-sm text-gray-500 flex items-center gap-2">
              <Lock size={14} /> Processed by Paystack & Flutterwave
            </div>
          </div>

          {/* PSYCHOLOGICAL REASSURANCE */}
          <div className="bg-navy-900 text-white rounded-2xl shadow-sm p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Your payment. Your peace of mind.</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We take payment security seriously. Your payment is processed through trusted payment infrastructure, and Dahel Technologies does not directly store your card details.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Lock className="text-electric-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Secure</h4>
                  <p className="text-sm text-gray-400">Your payment information is protected through our payment partners.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Confirmed</h4>
                  <p className="text-sm text-gray-400">You'll receive payment confirmation and a receipt immediately.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Receipt className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Trackable</h4>
                  <p className="text-sm text-gray-400">Every transaction has a reference you can use when contacting us.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* PROOF OF PAYMENT INFO */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-16 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-navy-900 mb-2">Have you made a payment?</h3>
          <p className="text-gray-600 mb-6">Please send your proof of payment to confirm your transaction.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              Send to Nora on WhatsApp
            </a>
            <a href="mailto:financedahelgroup@gmail.com" className="bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
              financedahelgroup@gmail.com
            </a>
          </div>
        </div>

        {/* HELP SECTION */}
        <section className="border-t border-gray-200 pt-16">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-600">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl font-bold text-navy-900">Having trouble paying?</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h4 className="font-bold text-navy-900 mb-2 flex items-center gap-2"><AlertCircle size={18} className="text-red-500" /> Payment failed?</h4>
              <p className="text-sm text-gray-600">Try another payment method or contact our support team.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h4 className="font-bold text-navy-900 mb-2 flex items-center gap-2"><CheckCircle size={18} className="text-yellow-500" /> Paid but didn't receive confirmation?</h4>
              <p className="text-sm text-gray-600">Keep your transaction reference and contact us.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h4 className="font-bold text-navy-900 mb-2 flex items-center gap-2"><FileText size={18} className="text-blue-500" /> Need an invoice?</h4>
              <p className="text-sm text-gray-600">Request an invoice before making payment.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h4 className="font-bold text-navy-900 mb-2 flex items-center gap-2"><Globe size={18} className="text-green-500" /> Want to pay from your country?</h4>
              <p className="text-sm text-gray-600">Select an international payment option or contact us for assistance.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
