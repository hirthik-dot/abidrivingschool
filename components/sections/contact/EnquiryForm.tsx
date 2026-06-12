"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { COURSES } from "@/lib/constants";

type FormData = {
  name: string;
  phone: string;
  service: string;
  message?: string;
};

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    console.log("Form data submitted:", data);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card"
    >
      <h3 className="text-2xl font-bold mb-2">Send an Enquiry</h3>
      <p className="text-white/60 mb-8">
        Fill out the form below and our team will get back to you shortly.
      </p>

      {isSuccess ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-green-500 mb-2">Message Sent Successfully!</h4>
            <p className="text-green-500/80">
              Thank you for reaching out. We will call you back within the hour.
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Full Name <span className="text-amber">*</span>
            </label>
            <input
              id="name"
              type="text"
              className={cn(
                "w-full bg-black/50 border rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all",
                errors.name ? "border-red-500 focus:ring-red-500/50" : "border-white/10 focus:border-amber focus:ring-amber/50"
              )}
              placeholder="Enter your full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone Number <span className="text-amber">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              className={cn(
                "w-full bg-black/50 border rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 transition-all",
                errors.phone ? "border-red-500 focus:ring-red-500/50" : "border-white/10 focus:border-amber focus:ring-amber/50"
              )}
              placeholder="e.g. 9876543210"
              {...register("phone", { 
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number"
                }
              })}
            />
            {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold mb-2">
              Service Needed <span className="text-amber">*</span>
            </label>
            <select
              id="service"
              className={cn(
                "w-full bg-black/50 border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer",
                errors.service ? "border-red-500 focus:ring-red-500/50" : "border-white/10 focus:border-amber focus:ring-amber/50"
              )}
              {...register("service", { required: "Please select a service" })}
            >
              <option value="" disabled selected>Select a service...</option>
              {COURSES.map(c => (
                <option key={c.id} value={c.id} className="bg-navy">{c.full}</option>
              ))}
              <option value="other" className="bg-navy">Other Query</option>
            </select>
            {errors.service && <span className="text-red-500 text-xs mt-1 block">{errors.service.message}</span>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Additional Message <span className="text-white/40 font-normal">(Optional)</span>
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/50 transition-all resize-none"
              placeholder="Any specific questions or preferred batch timings?"
              {...register("message")}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber text-black-deep font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Enquiry <Send className="w-5 h-5" />
              </>
            )}
          </button>

        </form>
      )}
    </motion.div>
  );
}
