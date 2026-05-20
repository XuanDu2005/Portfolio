"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactFields } from "@/data/contact";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <section id="contact" className="relative py-24 md:pb-32 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-2/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="05"
          label="contact"
          title="Contact"
          description="Do you have a project, internship opportunity, or want to discuss? Send me a message."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactFields.map((field) => (
              <div key={field.label} className="glass-panel rounded-xl p-5">
                <p className="font-mono text-[10px] tracking-widest text-accent uppercase">
                  {field.label}
                </p>
                {field.href ? (
                  <a
                    href={field.href}
                    className="mt-1 block text-foreground hover:text-accent"
                  >
                    {field.value}
                  </a>
                ) : (
                  <p className="mt-1 text-foreground">{field.value}</p>
                )}
              </div>
            ))}

            <Button
              href={`mailto:${profile.email}`}
              variant="primary"
              external
              className="w-full sm:w-auto"
            >
              Gửi email trực tiếp
            </Button>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel border-gradient rounded-xl p-6 md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm text-muted"
                >
                  Họ tên
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                  placeholder="Tên của bạn"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-muted"
                >
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-white/10 bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                  placeholder="Nội dung tin nhắn..."
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="mt-6 w-full"
              disabled={status === "sent"}
            >
              <Send size={16} />
              {status === "sent" ? "Đã gửi (demo)" : "Gửi tin nhắn"}
            </Button>
            <p className="mt-3 text-center text-xs text-muted">
              Form demo — kết nối API hoặc Formspree khi deploy production.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
