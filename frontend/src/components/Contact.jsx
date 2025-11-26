import React, { useState } from "react";
import { apiClient } from "../api/client";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await apiClient.post("/contact", formData);

      if (response.success) {
        setStatus({ type: "success", message: response.message });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus({ type: "error", message: response.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="container-wide max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="heading-md text-text-primary mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div
            className="group bg-bg-card border border-border-color rounded-xl p-6 hover:border-primary/40 hover:bg-bg-hover transition-all duration-300 text-center cursor-default animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-primary transition-all duration-300">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="font-bold text-text-primary mb-2">Email</h3>
            <p className="text-text-secondary text-sm">jarreugse09@gmail.com</p>
          </div>

          <div
            className="group bg-bg-card border border-border-color rounded-xl p-6 hover:border-primary/40 hover:bg-bg-hover transition-all duration-300 text-center cursor-default animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-primary transition-all duration-300">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-bold text-text-primary mb-2">Phone</h3>
            <p className="text-text-secondary text-sm">09663127629</p>
          </div>

          <div
            className="group bg-bg-card border border-border-color rounded-xl p-6 hover:border-primary/40 hover:bg-bg-hover transition-all duration-300 text-center cursor-default animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-primary transition-all duration-300">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-bold text-text-primary mb-2">Location</h3>
            <p className="text-text-secondary text-sm">Imus, Philippines</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-bg-card border border-border-color rounded-xl p-8 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Status Message */}
          {status && (
            <div
              className={`p-4 rounded-lg mb-6 text-sm font-medium ${
                status.type === "success"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-accent/10 text-accent border border-accent/20"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-hover border border-border-color rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-hover border border-border-color rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="your-email@example.com"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Phone (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-hover border border-border-color rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="+64"
            />
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-bg-hover border border-border-color rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
