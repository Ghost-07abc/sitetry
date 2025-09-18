import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xqabrrdz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      // Only show error if response.ok is false
      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a102a] text-purple-100 font-['Quicksand'] px-4 py-12 relative">
      {/* Back to Home Link */}
      <a href="/" className="absolute top-6 left-6 text-[#FFCD4B] hover:text-[#FFC233] transition-colors font-semibold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Home
      </a>
              <div className="w-full max-w-xl bg-[#23113a]/80 backdrop-blur-md rounded-xl shadow-glass p-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-6 text-orange-400">Contact TechBasic</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-8">
          <label className="text-purple-100 font-semibold">Website Package</label>
          <select name="package" className="bg-[#2a1550]/70 text-purple-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500">
            <option value="Essentials">Essentials Plan (£299)</option>
            <option value="Premium">Premium Plan (£399)</option>
          </select>
          <label className="text-purple-100 font-semibold">Maintenance</label>
          <select name="maintenance" className="bg-[#2a1550]/70 text-purple-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500">
            <option value="Quarterly">Quarterly Maintenance Plan (£50)</option>
            <option value="Annual">Annual Plan (£175 - Best Value)</option>
          </select>
          <input type="text" name="name" placeholder="Your Name" className="bg-[#2a1550]/70 text-purple-100 placeholder-purple-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" required />
          <input type="email" name="email" placeholder="Your Email" className="bg-[#2a1550]/70 text-purple-100 placeholder-purple-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" required />
          <textarea name="message" placeholder="Your Message" rows={4} className="bg-[#2a1550]/70 text-purple-100 placeholder-purple-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" required />

          {isSubmitted && (
            <div className="mb-4 p-4 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400 text-center">
              <h3 className="font-semibold text-lg mb-2">Thank you for your message!</h3>
              <p>We've received your inquiry and will get back to you soon.</p>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="shadow-xl shadow-black/20 bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-400 transition-all duration-300 font-semibold text-lg border border-orange-800/40 backdrop-blur-sm transform hover:scale-110 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <div className="mb-4">
          <div className="mb-2">Email: <a href="mailto:techbasic851@gmail.com" className="text-orange-400 hover:underline">techbasic851@gmail.com</a></div>
        </div>
        <a href="/" className="text-orange-400 hover:underline">← Back to Home</a>
      </div>

    </div>
  );
};

export default Contact; 