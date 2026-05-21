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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
