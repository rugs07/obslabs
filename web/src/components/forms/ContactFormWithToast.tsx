"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/feedback/ToastProvider";
import Spinner from "@/components/ui/feedback/Spinner";
import ShardButton from "@/components/ui/buttons/ShardButton";
import MagneticButton from "@/components/ui/buttons/MagneticButton";

export default function ContactFormWithToast() {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all fields", "warning");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c46dbc47-bdac-4f44-99d7-86939926ffde",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        showToast(
          "Message sent successfully! We'll get back to you soon.",
          "success"
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        showToast("Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      showToast("Network error. Please try again later.", "error");
    }

    setIsSubmitting(false);
  };

  const inputClasses =
    "w-full px-6 py-4 md:px-8 md:py-5 bg-white/[0.03] border border-white/10 rounded-[4px] text-white text-base md:text-lg font-light tracking-wide outline-none transition-all duration-300 focus:border-white/40 focus:bg-white/5 placeholder:text-white/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg flex flex-col gap-5 md:gap-6"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className={inputClasses}
      />

      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className={inputClasses}
      />

      <textarea
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        className={`${inputClasses} resize-y font-[inherit]`}
      />

      <div className="pt-4">
        <MagneticButton strength={20}>
          <ShardButton
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="lg"
            className="w-full md:w-auto justify-center"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-3">
                <Spinner size="sm" color="black" />
                <span className="text-sm">Sending...</span>
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <span className="text-sm">INITIATE TRANSMISSION</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            )}
          </ShardButton>
        </MagneticButton>
      </div>
    </form>
  );
}
