"use client";

import Image from "next/image";
import { useTheme } from "~/components/ThemeProvider";
import {
  Check,
  X,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import type {
  OnePagerDefinition,
  OnePagerSection,
  BulletItem,
} from "~/lib/onepagerSchema";

/* ── Helpers ─────────────────────────────────────────────── */

function BulletIcon({
  style,
  color,
  size = 15,
}: {
  style?: BulletItem["style"];
  color: string;
  size?: number;
}) {
  switch (style) {
    case "check":
      return <Check size={size} className="mt-0.5 shrink-0" style={{ color }} />;
    case "x":
      return <X size={size} className="mt-0.5 shrink-0 text-red-400" />;
    default:
      return (
        <span
          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
      );
  }
}

function SectionHeading({
  children,
  primary,
  text,
}: {
  children: React.ReactNode;
  primary: string;
  text: string;
}) {
  return (
    <h3
      className="mb-3 flex items-center gap-2 text-[15px] font-bold uppercase tracking-wider"
      style={{ color: text }}
    >
      <span
        className="h-5 w-1 shrink-0 rounded-full"
        style={{ backgroundColor: primary }}
      />
      {children}
    </h3>
  );
}

/* ── Section Renderers ───────────────────────────────────── */

function RenderSection({ section }: { section: OnePagerSection }) {
  const theme = useTheme();

  switch (section.type) {
    case "text":
      return (
        <div>
          {section.title && (
            <SectionHeading primary={theme.primary} text={theme.gray[300]}>
              {section.title}
            </SectionHeading>
          )}
          <p
            className="whitespace-pre-line text-[14px] leading-relaxed"
            style={{ color: theme.gray[400] }}
          >
            {section.content}
          </p>
        </div>
      );

    case "bullets":
      return (
        <div>
          <SectionHeading primary={theme.primary} text={theme.gray[300]}>
            {section.title}
          </SectionHeading>
          <ul className="space-y-2.5">
            {section.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5"
                style={{ color: theme.gray[400] }}
              >
                <BulletIcon style={item.style} color={theme.primary} />
                <span className="text-[14px] leading-snug">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "math":
      return (
        <div
          className="rounded-lg border p-5"
          style={{
            backgroundColor: theme.neutral[800],
            borderColor: theme.primary + "25",
          }}
        >
          <SectionHeading primary={theme.primary} text={theme.gray[300]}>
            {section.title}
          </SectionHeading>
          <div className="space-y-0">
            {section.rows.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2"
                style={{
                  borderBottom:
                    i < section.rows.length - 1
                      ? `1px solid ${theme.neutral[700]}`
                      : undefined,
                }}
              >
                <span
                  className="text-[14px]"
                  style={{ color: theme.gray[400] }}
                >
                  {row.input}
                </span>
                <span
                  className="text-[18px] font-bold"
                  style={{ color: theme.primary }}
                >
                  {row.result}
                </span>
              </div>
            ))}
          </div>
          {section.footer && (
            <p
              className="mt-3 pt-3 text-center text-[13px] italic font-medium"
              style={{
                color: theme.gray[500],
                borderTop: `1px solid ${theme.neutral[700]}`,
              }}
            >
              {section.footer}
            </p>
          )}
        </div>
      );

    case "comparison":
      return (
        <div>
          <SectionHeading primary={theme.primary} text={theme.gray[300]}>
            {section.title}
          </SectionHeading>
          <div className="grid grid-cols-2 gap-3">
            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: theme.neutral[900] }}
            >
              <p
                className="mb-2.5 text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "#dc2626" }}
              >
                What You Don&apos;t Do
              </p>
              <div className="space-y-2">
                {section.dont.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-[13px]"
                    style={{ color: theme.gray[400] }}
                  >
                    <X size={14} className="mt-0.5 shrink-0 text-red-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-lg border p-4"
              style={{
                backgroundColor: theme.neutral[800],
                borderColor: theme.primary + "40",
              }}
            >
              <p
                className="mb-2.5 text-[11px] font-bold uppercase tracking-widest"
                style={{ color: theme.primary }}
              >
                What You Do
              </p>
              <div className="space-y-2">
                {section.do.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-[13px]"
                    style={{ color: theme.gray[400] }}
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: theme.primary }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case "steps":
      return (
        <div>
          <SectionHeading primary={theme.primary} text={theme.gray[300]}>
            {section.title}
          </SectionHeading>
          <div className="grid grid-cols-4 gap-3">
            {section.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-lg p-3 text-center"
                style={{ backgroundColor: theme.neutral[800] }}
              >
                <div
                  className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold"
                  style={{
                    backgroundColor: theme.primary,
                    color: "#ffffff",
                  }}
                >
                  {i + 1}
                </div>
                <p
                  className="text-[12px] leading-snug"
                  style={{ color: theme.gray[400] }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case "callout":
      return (
        <div
          className="rounded-lg px-5 py-3.5 text-center text-[13px] font-medium"
          style={{
            color: theme.gray[300],
            backgroundColor: theme.primary + "0C",
            border: `1px solid ${theme.primary}30`,
          }}
        >
          {section.content}
        </div>
      );

    default:
      return null;
  }
}

/* ── Page wrapper (8.5 x 11, no rounding) ────────────────── */

function Page({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <div
      className="onepager-page w-full shadow-none md:shadow-2xl"
      style={{
        maxWidth: 816,
        aspectRatio: "8.5 / 11",
        background: bg,
      }}
    >
      {children}
    </div>
  );
}

/* ── Intro Page ──────────────────────────────────────────── */

function IntroPage({ content }: { content: OnePagerDefinition }) {
  const theme = useTheme();

  return (
    <Page bg={`linear-gradient(180deg, ${theme.slideBg.from} 0%, ${theme.slideBg.to} 100%)`}>
      <div className="flex h-full flex-col items-center px-10 pb-8 pt-10 md:px-16 md:pt-14 md:pb-10">
        {/* Title in pink serif italic */}
        <h1
          className="text-center font-serif text-[32px] italic leading-tight md:text-[40px]"
          style={{ color: theme.primary }}
        >
          {content.title}
        </h1>

        {/* Logo - prominent */}
        {theme.clientLogo && (
          <Image
            src={theme.clientLogo}
            alt={theme.clientName ?? "Logo"}
            width={480}
            height={192}
            className="mt-4 h-16 w-auto object-contain md:mt-5 md:h-20"
          />
        )}

        {/* Subtitle */}
        {content.subtitle && (
          <h2
            className="mt-6 whitespace-pre-line text-center text-[18px] font-bold leading-snug md:mt-8 md:text-[22px]"
            style={{ color: theme.gray[300] }}
          >
            {content.subtitle}
          </h2>
        )}

        {/* Description */}
        {content.introDescription && (
          <p
            className="mt-3 max-w-lg text-center text-[14px] leading-relaxed md:text-[15px]"
            style={{ color: theme.gray[500] }}
          >
            {content.introDescription}
          </p>
        )}

        {/* Hero Image - contained, not overwhelming */}
        {content.heroImage && (
          <div
            className="relative mt-6 w-full overflow-hidden rounded-xl md:mt-8"
            style={{ flex: "1 1 0", maxHeight: "40%" }}
          >
            <Image
              src={content.heroImage}
              alt="Hero"
              fill
              className="object-cover"
              sizes="(max-width: 816px) 100vw, 700px"
              unoptimized={content.heroImage.startsWith("http")}
            />
          </div>
        )}

        {/* Stats */}
        {content.stats && content.stats.length > 0 && (
          <div
            className="mt-5 grid w-full gap-3 md:mt-6"
            style={{
              gridTemplateColumns: `repeat(${content.stats.length}, 1fr)`,
            }}
          >
            {content.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-lg py-3.5 text-center md:py-4"
                style={{ backgroundColor: theme.gray[300] }}
              >
                <p className="text-[22px] font-bold text-white md:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-neutral-400 md:text-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Page>
  );
}

/* ── Details Page ────────────────────────────────────────── */

function DetailsPage({ content }: { content: OnePagerDefinition }) {
  const theme = useTheme();

  return (
    <Page bg={`linear-gradient(180deg, ${theme.slideBg.from} 0%, ${theme.slideBg.to} 100%)`}>
      <div className="flex h-full flex-col px-8 pb-6 pt-7 md:px-10">
        {/* Page header - logo + divider + title */}
        <div
          className="mb-5 flex items-center gap-3 border-b pb-4"
          style={{ borderColor: theme.neutral[700] }}
        >
          {theme.clientLogo && (
            <Image
              src={theme.clientLogo}
              alt={theme.clientName ?? "Logo"}
              width={240}
              height={96}
              className="h-7 w-auto object-contain"
            />
          )}
          <div
            className="h-5 w-px"
            style={{ backgroundColor: theme.neutral[600] }}
          />
          <span
            className="font-serif text-[16px] italic"
            style={{ color: theme.primary }}
          >
            {content.title}
          </span>
        </div>

        {/* Sections - clean top-to-bottom flow */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-5">
            {content.sections.map((section, i) => (
              <RenderSection key={i} section={section} />
            ))}
          </div>

          {/* Contact footer - pink bar */}
          {content.contact && (
            <div
              className="mt-5 rounded-lg px-5 py-4"
              style={{ backgroundColor: theme.primary }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[15px] font-bold text-white">
                    {content.contact.name}
                  </p>
                  <p className="text-[12px] text-white/70">
                    {content.contact.role}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-5">
                  {content.contact.email && (
                    <a
                      href={`mailto:${content.contact.email}`}
                      className="flex items-center gap-2 text-[12px] text-white/90 hover:text-white"
                    >
                      <Mail size={13} />
                      {content.contact.email}
                    </a>
                  )}
                  {content.contact.phone && (
                    <a
                      href={`tel:${content.contact.phone}`}
                      className="flex items-center gap-2 text-[12px] text-white/90 hover:text-white"
                    >
                      <Phone size={13} />
                      {content.contact.phone}
                    </a>
                  )}
                  {content.contact.website && (
                    <a
                      href={`https://${content.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[12px] text-white/90 hover:text-white"
                    >
                      <Globe size={13} />
                      {content.contact.website}
                    </a>
                  )}
                </div>
              </div>
              {content.closingLine && (
                <p className="mt-3 border-t border-white/20 pt-3 text-center text-[12px] italic text-white/80">
                  {content.closingLine}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}

/* ── Main Document ───────────────────────────────────────── */

interface OnePagerDocumentProps {
  content: OnePagerDefinition;
}

export function OnePagerDocument({ content }: OnePagerDocumentProps) {
  const theme = useTheme();

  return (
    <div
      className="onepager-document flex min-h-screen flex-col items-center gap-8 px-0 py-0 md:px-8 md:py-8"
      style={{ backgroundColor: theme.outerBg }}
    >
      <IntroPage content={content} />
      <DetailsPage content={content} />
    </div>
  );
}
