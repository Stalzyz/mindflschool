import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, Calendar, Heart, MessageSquare } from 'lucide-react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    program: 'Sprouts (2–3 Years)',
    pathway: 'Independent Pathway (9:00 am – 12:30 pm)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F0] border border-[#E5DFD3] rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden my-8">
      
      {/* Subtle Boho Decorative Background Circle */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#7a9660]/10 rounded-full pointer-events-none blur-xl"></div>

      {submitted ? (
        <div className="text-center py-12 space-y-6 max-w-lg mx-auto">
          <div className="w-16 h-16 bg-[#7a9660] text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-[#1F291E]">
            Expression of Interest Submitted!
          </h3>
          <p className="text-base text-[#3A4739] leading-relaxed">
            Thank you, <strong className="font-semibold text-[#2C4A2E]">{formData.parentName}</strong>. We have received your inquiry for <strong className="font-semibold text-[#2C4A2E]">{formData.childName}</strong> for the <strong className="font-semibold text-[#2C4A2E]">{formData.program}</strong>. Our admissions team will reach out to schedule your <em>Landscape Dialogue & Tour</em>.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  parentName: '',
                  email: '',
                  phone: '',
                  childName: '',
                  program: 'Sprouts (2–3 Years)',
                  pathway: 'Independent Pathway (9:00 am – 12:30 pm)',
                  message: ''
                });
              }}
              className="px-6 py-2.5 bg-[#7a9660] text-white text-sm font-semibold rounded-full hover:bg-[#5e7a45] transition shadow-sm"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          
          <div className="text-center space-y-2 border-b border-[#EAE4D7] pb-6">
            <span className="text-xs uppercase tracking-widest text-[#5e7a45] font-semibold bg-[#7a9660]/15 px-3 py-1 rounded-full">
              Digital Inquiry Form
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F291E]">
              Admission & Recruitment Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5548]">
              Begin your family's journey or apply to join our Learning Village as a Nature Crafter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Parent Name */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#1F291E] uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#7a9660]" />
                Parent / Applicant Name *
              </label>
              <input
                type="text"
                name="parentName"
                required
                value={formData.parentName}
                onChange={handleChange}
                placeholder="e.g. Ananya Govind"
                className="w-full px-4 py-3 bg-white border border-[#D5CDBF] rounded-xl focus:ring-2 focus:ring-[#7a9660] focus:border-transparent outline-none text-sm transition"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#1F291E] uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#7a9660]" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. parent@example.com"
                className="w-full px-4 py-3 bg-white border border-[#D5CDBF] rounded-xl focus:ring-2 focus:ring-[#7a9660] focus:border-transparent outline-none text-sm transition"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#1F291E] uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#7a9660]" />
                Phone Number / WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 bg-white border border-[#D5CDBF] rounded-xl focus:ring-2 focus:ring-[#7a9660] focus:border-transparent outline-none text-sm transition"
              />
            </div>

            {/* Child Name */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#1F291E] uppercase tracking-wider flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#7a9660]" />
                Child's Name (or N/A for Educator)
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="e.g. Aarav"
                className="w-full px-4 py-3 bg-white border border-[#D5CDBF] rounded-xl focus:ring-2 focus:ring-[#7a9660] focus:border-transparent outline-none text-sm transition"
              />
            </div>

            {/* Program Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#1F291E] uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#7a9660]" />
                Program Interest
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#D5CDBF] rounded-xl focus:ring-2 focus:ring-[#7a9660] focus:border-transparent outline-none text-sm transition"
              >
                <option value="Parent–Toddler (6–24 Months)">Parent–Toddler (6 – 24 Months)</option>
                <option value="Sprouts (2–3 Years)">Sprouts (2 – 3 Years)</option>
                <option value="Seedlings (3–4 Years)">Seedlings (3 – 4 Years)</option>
                <option value="Buds (4–5 Years)">Buds (4 – 5 Years)</option>
                <option value="Blossoms (5–6 Years)">Blossoms (5 – 6 Years)</option>
                <option value="Nature Crafter Application">Nature Crafter Application (Educator)</option>
              </select>
            </div>

            {/* Preferred Pathway */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#1F291E] uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#7a9660]" />
                Preferred Rhythm / Pathway
              </label>
              <select
                name="pathway"
                value={formData.pathway}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#D5CDBF] rounded-xl focus:ring-2 focus:ring-[#7a9660] focus:border-transparent outline-none text-sm transition"
              >
                <option value="Independent Pathway (9:00 am – 12:30 pm)">Independent Pathway (9:00 am – 12:30 pm)</option>
                <option value="Full Day Pathway (9:00 am – 4:30 pm)">Full Day Pathway (9:00 am – 4:30 pm)</option>
                <option value="Parent–Toddler 2-Hour Sessions (3 Days/Wk)">Parent–Toddler 2-Hour Sessions (3 Days/Wk)</option>
                <option value="Sprouts 3-Hour Sessions (5 Days/Wk)">Sprouts 3-Hour Sessions (5 Days/Wk)</option>
              </select>
            </div>

          </div>

          {/* Message / Details */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-[#1F291E] uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-[#7a9660]" />
              Tell us about your child or why this approach speaks to you
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your family's aspirations or questions..."
              className="w-full px-4 py-3 bg-white border border-[#D5CDBF] rounded-xl focus:ring-2 focus:ring-[#7a9660] focus:border-transparent outline-none text-sm transition"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2C4A2E] hover:bg-[#1D321F] text-white text-sm font-bold rounded-full shadow-lg transition transform hover:-translate-y-0.5"
            >
              SUBMIT EXPRESSION OF INTEREST
              <Send className="w-4 h-4" />
            </button>
          </div>

        </form>
      )}

    </div>
  );
}
