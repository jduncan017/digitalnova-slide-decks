"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Slide from "~/components/Slide";
import { Button } from "~/components/Button";
import Image from "next/image";
import { Heading, Body, Box, PageHeader } from "~/components/slide-components";
import * as LucideIcons from "lucide-react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
} from "lucide-react";
import type { CTASlideContent, IconName } from "../../types";

interface CTASlideProps {
  content: CTASlideContent;
  slideNumber: number;
  deckTitle?: string;
  preparedFor?: string;
}

function getIcon(name: IconName) {
  const Icon = LucideIcons[name] as React.ComponentType<{ className?: string }>;
  return Icon ? <Icon className="text-primary h-6 w-6" /> : null;
}

function getLucideIcon(name: IconName): LucideIcons.LucideIcon | undefined {
  return LucideIcons[name] as LucideIcons.LucideIcon | undefined;
}

export default function CTASlide({
  content,
  slideNumber,
  deckTitle,
  preparedFor,
}: CTASlideProps) {
  const pathname = usePathname();
  const deckId = pathname?.replace("/", "") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-deck-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          deckId,
          deckTitle,
          preparedFor: name || preparedFor,
        }),
      });

      if (!response.ok) {
        // Try to parse JSON error, fallback to status text
        let errorMessage = "Failed to send email";
        try {
          const data = (await response.json()) as { error?: string };
          errorMessage = data.error ?? errorMessage;
        } catch {
          // Response wasn't JSON (e.g., "Internal Server Error")
          errorMessage = response.statusText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      setStatus("success");
      setName("");
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send email",
      );
    }
  };

  return (
    <Slide showLogo slideNumber={slideNumber}>
      <div className="flex h-full items-center gap-20">
        {/* Left side - CTA text */}
        <div className="flex max-w-[640px] flex-col justify-center">
          <PageHeader
            label={content.label}
            title={content.title}
            subtitle={content.subtitle}
            align="left"
          />

          {/* CTA Button */}
          {content.ctaButton && (
            <Box
              animation="slideUp"
              delay={0.5}
              hoverEffect="none"
              className="mb-20"
            >
              <Button
                as="a"
                href={content.ctaButton.href}
                target="_blank"
                size="lg"
                icon={
                  content.ctaButton.icon
                    ? getLucideIcon(content.ctaButton.icon)
                    : undefined
                }
                textColor={content.ctaButton.textColor}
              >
                {content.ctaButton.text}
              </Button>
            </Box>
          )}

          {/* Profile */}
          {content.profile && (
            <Box
              animation="fade"
              delay={0.6}
              className="mb-8 flex items-center gap-4"
              hoverEffect="highlight"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-700">
                <Image
                  src={content.profile.image}
                  alt={content.profile.name}
                  className="rounded-full"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Heading level="h3" className="text-xl font-bold text-gray-300">
                  {content.profile.name}
                </Heading>
                <Body size="sm" className="text-gray-400">
                  {content.profile.title}
                </Body>
              </div>
            </Box>
          )}

          {/* Contact links */}
          {content.contactItems && content.contactItems.length > 0 && (
            <Box
              animation="slideUp"
              delay={0.4}
              className="mb-8 space-y-5"
              hoverEffect="none"
            >
              {content.contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="hover:text-primary flex items-center gap-4 text-gray-300 transition-colors"
                >
                  {getIcon(item.icon)}
                  <Body size="lg" as="span" className="hover:underline">
                    {item.text}
                  </Body>
                </a>
              ))}
            </Box>
          )}

          {/* Book a call button */}
          <Box
            animation="slideUp"
            delay={0.5}
            hoverEffect="none"
            className="mb-8"
          >
            <Button
              as="a"
              href="https://cal.com/digitalnovastudio/follow-up"
              target="_blank"
              icon={Calendar}
            >
              Book a Follow-up Call
            </Button>
          </Box>

          {/* Email proposal form */}
          <Box
            animation="slideUp"
            delay={0.6}
            hoverEffect="none"
            className="border-t border-neutral-700 pt-6"
          >
            <Body size="sm" className="mb-3 text-gray-500">
              Send this proposal via email:
            </Body>
            <form onSubmit={handleSendEmail} className="flex gap-3" onKeyDown={(e) => e.stopPropagation()}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="Name"
                className="focus:border-primary focus:ring-primary flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-gray-300 placeholder-gray-500 transition-colors focus:ring-1 focus:outline-none"
                disabled={status === "loading" || status === "success"}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="Email address"
                className="focus:border-primary focus:ring-primary flex-1 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-gray-300 placeholder-gray-500 transition-colors focus:ring-1 focus:outline-none"
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                disabled={
                  !email || status === "loading" || status === "success"
                }
                className={`flex cursor-pointer items-center gap-2 rounded-xl px-6 py-3 font-semibold shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 ${
                  status === "success"
                    ? "bg-green-600 text-white shadow-green-600/20"
                    : status === "error"
                      ? "bg-red-600 text-white shadow-red-600/20 hover:bg-red-700"
                      : "bg-primary hover:bg-primary/90 shadow-primary/20 hover:shadow-primary/30 text-white"
                }`}
              >
                {status === "loading" && (
                  <Loader2 className="h-5 w-5 animate-spin" />
                )}
                {status === "success" && <CheckCircle className="h-5 w-5" />}
                {status === "error" && <AlertCircle className="h-5 w-5" />}
                {status === "idle" && <Send className="h-5 w-5" />}
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                    ? "Sent!"
                    : status === "error"
                      ? "Retry"
                      : "Send"}
              </button>
            </form>
            {status === "error" && errorMessage && (
              <Body size="sm" className="mt-2 text-red-400">
                {errorMessage}
              </Body>
            )}
          </Box>
        </div>

        {/* Right side - Image */}
        {content.sideImage && (
          <Box
            animation="fade"
            delay={0.4}
            hoverEffect="highlight"
            className="relative z-10 ml-auto h-full max-w-2xl"
          >
            <Image
              src={content.sideImage}
              alt="Illustration"
              width={500}
              height={500}
              className="h-full rounded-2xl border border-neutral-800 object-cover shadow-xl"
            />
          </Box>
        )}
      </div>
    </Slide>
  );
}
