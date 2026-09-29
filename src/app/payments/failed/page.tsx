"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCcw, Search, MessageSquare, ArrowLeft } from "lucide-react";

export default function PaymentFailedPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-32 px-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
        
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8 text-red-500">
          <AlertTriangle size={48} />
        </div>
        
        <h1 className="text-3xl font-bold text-navy-900 mb-4">We couldn't complete your payment</h1>
        
        <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-10 text-left text-gray-700 text-sm md:text-base">
          <p className="mb-2">Your payment wasn't completed successfully.</p>
          <p>
            If your account was debited, <strong className="text-navy-900">please don't pay again immediately</strong>. 
            Check your transaction status or contact us with your payment reference.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Link href="/payments" className="w-full px-6 py-4 rounded-xl bg-electric-blue text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
            <RefreshCcw size={18} /> Try Again
          </Link>
          <button className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 text-navy-900 font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Search size={18} /> Check Payment Status
          </button>
          <button className="w-full px-6 py-4 rounded-xl bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <MessageSquare size={18} /> Contact Support
          </button>
        </div>
        
        <div className="mt-8">
          <Link href="/payments" className="text-gray-500 hover:text-navy-900 font-medium inline-flex items-center gap-2 transition-colors">
            <ArrowLeft size={16} /> Back to Payments
          </Link>
        </div>
      </div>
    </div>
  );
}
