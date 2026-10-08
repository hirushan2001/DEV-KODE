import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle, CreditCard, Landmark, ShieldCheck, Lock, Upload, Sparkles, ArrowRight, Download } from 'lucide-react';

export default function EnrollModal({ isOpen, onClose, onLaunchLMS }) {
  const [step, setStep] = useState(1); // 1: Info & Method, 2: Confirmation / Success
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'bank'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    slipFile: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      // Fire confetti burst!
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti error', err);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-panel w-full max-w-xl rounded-3xl overflow-hidden border border-neutral-700 shadow-2xl relative p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-900 text-neutral-400 hover:text-white flex items-center justify-center border border-neutral-800"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <form onSubmit={handleEnrollSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                Instant Access Enrollment
              </span>
              <h3 className="text-2xl font-extrabold text-white">Enroll in Editor.lk Masterclass</h3>
              <p className="text-xs text-neutral-400">
                Get lifetime LMS access + LKR 25,000 Free Asset Pack today for LKR 4,900.
              </p>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Select Payment Method</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-orange-500/15 border-orange-500 text-white font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-orange-400 shrink-0" />
                  <div className="text-xs">
                    <span className="block font-bold">Credit / Debit Card</span>
                    <span className="text-[10px] text-neutral-400">Visa / Mastercard Instant</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    paymentMethod === 'bank'
                      ? 'bg-orange-500/15 border-orange-500 text-white font-bold'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Landmark className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-xs">
                    <span className="block font-bold">Bank Transfer</span>
                    <span className="text-[10px] text-neutral-400">Commercial / Sampath / HNB</span>
                  </div>
                </button>
              </div>
            </div>

            {/* User Details Form */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-neutral-400">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Kasun Perera"
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-400">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="kasun@example.com"
                    className="w-full mt-1 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-400">WhatsApp Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+94 77 123 4567"
                    className="w-full mt-1 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Bank Transfer Instructions if Bank selected */}
            {paymentMethod === 'bank' && (
              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs text-neutral-300">
                <span className="font-bold text-orange-400 block">🇱🇰 Sri Lankan Bank Deposit Details:</span>
                <p><strong>Bank:</strong> Commercial Bank Sri Lanka</p>
                <p><strong>Account Name:</strong> Editor LK (Pvt) Ltd</p>
                <p><strong>Account Number:</strong> 8009 1234 5678</p>
                <p><strong>Branch:</strong> Colombo Main</p>
                
                <div className="pt-2 border-t border-neutral-800">
                  <label className="block text-[11px] font-semibold text-neutral-400 mb-1">Upload Bank Slip Photo (Simulator)</label>
                  <input
                    type="file"
                    className="text-xs text-neutral-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-neutral-800 file:text-white hover:file:bg-neutral-700"
                  />
                </div>
              </div>
            )}

            {/* Promo Code Pre-applied indicator */}
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center justify-between font-bold">
              <span>Applied Promo Code: MASTER30 (70% Off)</span>
              <span>LKR 4,900 Total</span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white font-extrabold text-base shadow-xl shadow-orange-500/30 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-spin" /> Processing Access...
                </span>
              ) : (
                <span>Complete Enrollment & Launch LMS Access</span>
              )}
            </button>

            <div className="text-center text-[11px] text-neutral-500 flex items-center justify-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Instant LMS login link emailed immediately after completion.
            </div>

          </form>
        ) : (
          /* STEP 2: CONFIRMATION SUCCESS */
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-500/40 shadow-2xl">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-white">Enrollment Successful! 🎉</h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto">
                Welcome to Editor.lk, <strong>{formData.name || 'Student'}</strong>! Your account has been activated with lifetime LMS access & free asset bundle downloads.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-left text-xs text-neutral-300 space-y-2">
              <p><strong>Registered Email:</strong> {formData.email || 'kasun@example.com'}</p>
              <p><strong>Access Status:</strong> <span className="text-emerald-400 font-bold">ACTIVE — Full Unlocked</span></p>
              <p><strong>Included Extras:</strong> LKR 25,000 Asset Pack, Discord & WhatsApp Community</p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => { onClose(); onLaunchLMS(); }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch LMS Student Portal Dashboard</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onClose}
                className="text-xs text-neutral-400 hover:text-white underline"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
