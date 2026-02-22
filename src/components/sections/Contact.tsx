"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Youtube, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Whether you have a
              question or just want to say hi, I'll try my absolute best to get
              back to you!
            </p>
          </div>

          <div className="flex items-start gap-4 text-gray-300">
            <div className="p-3 bg-gray-800 rounded-lg text-purple-400">
              <Linkedin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-white">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/shree-manickaraja-2a2963372/"
                className="hover:text-purple-400 transition-colors"
                target="_blank"
              >
                Shree Manickaraja
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 text-gray-300">
            <div className="p-3 bg-gray-800 rounded-lg text-gray-400">
              <Github size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-white">GitHub</h3>
              <a
                href="https://github.com/shreetheman2011"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                shreetheman2011
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 text-gray-300">
            <div className="p-3 bg-gray-800 rounded-lg text-red-500">
              <Youtube size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-white">YouTube</h3>
              <a
                href="https://www.youtube.com/channel/UCYE40Cl3gPXuqXHJRiMvzqw"
                className="hover:text-red-400 transition-colors"
                target="_blank"
              >
                Shree Manickaraja
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 text-gray-300">
            <div className="p-3 bg-gray-800 rounded-lg text-green-400">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Location</h3>
              <p>Livermore, CA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`cursor-pointer w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                status === "success"
                  ? "cursor-default! bg-green-600 hover:bg-green-700"
                  : status === "error"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-linear-to-r from-blue-600 to-purple-600 hover:opacity-90"
              } ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status === "success" ? (
                "Message Sent!"
              ) : status === "error" ? (
                "Failed to Send. Try Again."
              ) : status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
