"use client";

import Link from "next/link";
import { CheckCircle, Receipt, ArrowRight, Home } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-32 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-16 text-center relative overflow-hidden">
        {/* Confetti-like decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
        
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
          <CheckCircle size={48} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Payment received. You're all set! ✓</h1>
        
        <div className="my-10 bg-gray-50 rounded-2xl p-8 text-left border border-gray-100 shadow-inner">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-gray-500">Amount Paid</span>
              <span className="text-3xl font-black text-navy-900">₦100,000</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-gray-500">Description</span>
              <span className="font-bold text-navy-900 text-right">Private Data Analytics Session</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-gray-500">Payment Reference</span>
              <span className="font-mono text-electric-blue font-bold">DHL-X29B84K</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-gray-500">Paid on</span>
              <span className="font-bold text-navy-900">28 September 2026</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-500 flex items-center gap-2"><Receipt size={16} /> Receipt sent to:</span>
              <span className="font-bold text-navy-900">user@email.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="px-6 py-4 rounded-xl border-2 border-gray-200 text-navy-900 font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            View Receipt
          </button>
          <Link href="/" className="px-6 py-4 rounded-xl bg-electric-blue text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
            Continue to Your Booking <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="mt-8">
          <Link href="/" className="text-gray-500 hover:text-navy-900 font-medium inline-flex items-center gap-2 transition-colors">
            <Home size={16} /> Return to Dahel
          </Link>
        </div>
      </div>
    </div>
  );
}
