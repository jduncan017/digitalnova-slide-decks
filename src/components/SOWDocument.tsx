"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import type { SOWDefinition } from "~/lib/sowSchema";
import { useTheme } from "~/components/ThemeProvider";
import { Check, X, AlertCircle, Download, Loader2 } from "lucide-react";

interface SOWDocumentProps {
  content: SOWDefinition;
}

export function SOWDocument({ content }: SOWDocumentProps) {
  const theme = useTheme();
  const pathname = usePathname();
  const [isDownloading, setIsDownloading] = useState(false);

  // Extract deckId from pathname (e.g., "/colorado-business-cpa/sow" -> "colorado-business-cpa")
  const deckId = pathname.split("/")[1];

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(`/api/pdf/${deckId}`);
      if (!response.ok) throw new Error("Failed to generate PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${deckId}-sow.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error:", error);
      // Fallback to browser print
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      className="sow-document min-h-screen py-8 px-4 md:px-8"
      style={{ backgroundColor: theme.outerBg }}
    >
      {/* Download Button - hidden in print */}
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="print:hidden fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-70"
        style={{
          backgroundColor: theme.primary,
          color: "#ffffff",
        }}
      >
        {isDownloading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Download size={16} />
            Download PDF
          </>
        )}
      </button>

      {/* Document Container */}
      <div
        className="sow-container max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme.slideBg.from} 0%, ${theme.slideBg.to} 100%)`,
        }}
      >
        {/* Header */}
        <header
          className="px-8 py-10 border-b"
          style={{ borderColor: theme.neutral[700] }}
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: theme.primary }}
              >
                Statement of Work
              </p>
              <h1
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: theme.gray[300] }}
              >
                {content.projectTitle}
              </h1>
              <p className="text-lg" style={{ color: theme.gray[400] }}>
                Prepared for {content.client.name}
                {content.client.contactName && ` — ${content.client.contactName}`}
              </p>
            </div>
            {theme.clientLogo && (
              <img
                src={theme.clientLogo}
                alt="Logo"
                className="h-12 w-auto object-contain print:h-10"
              />
            )}
          </div>

          {/* Project Dates */}
          <div className="flex gap-8 mt-6 pt-6 border-t" style={{ borderColor: theme.neutral[800] }}>
            <div>
              <p className="text-xs uppercase tracking-wide mb-1" style={{ color: theme.gray[500] }}>
                Start Date
              </p>
              <p className="font-medium" style={{ color: theme.gray[300] }}>
                {content.startDate}
              </p>
            </div>
            {content.estimatedCompletion && (
              <div>
                <p className="text-xs uppercase tracking-wide mb-1" style={{ color: theme.gray[500] }}>
                  Est. Completion
                </p>
                <p className="font-medium" style={{ color: theme.gray[300] }}>
                  {content.estimatedCompletion}
                </p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-wide mb-1" style={{ color: theme.gray[500] }}>
                Total Investment
              </p>
              <p className="font-semibold" style={{ color: theme.primary }}>
                {content.totalInvestment}
              </p>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="px-8 py-8 space-y-10">
          {/* Overview */}
          <section>
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: theme.gray[300] }}
            >
              <span
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: theme.primary }}
              />
              Project Overview
            </h2>
            <p className="leading-relaxed" style={{ color: theme.gray[400] }}>
              {content.overview}
            </p>
          </section>

          {/* Deliverables */}
          <section>
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: theme.gray[300] }}
            >
              <span
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: theme.primary }}
              />
              Deliverables
            </h2>
            <div className="space-y-4">
              {content.deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: theme.neutral[800] }}
                >
                  <h3 className="font-semibold mb-2" style={{ color: theme.gray[300] }}>
                    {deliverable.title}
                  </h3>
                  {deliverable.description && (
                    <p className="text-sm mb-3" style={{ color: theme.gray[400] }}>
                      {deliverable.description}
                    </p>
                  )}
                  {deliverable.items && deliverable.items.length > 0 && (
                    <ul className="space-y-1.5">
                      {deliverable.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: theme.gray[400] }}
                        >
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0"
                            style={{ color: theme.primary }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          {content.timeline && content.timeline.length > 0 && (
            <section>
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: theme.gray[300] }}
              >
                <span
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: theme.primary }}
                />
                Timeline
              </h2>
              <div className="space-y-3">
                {content.timeline.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg"
                    style={{ backgroundColor: theme.neutral[800] }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{ backgroundColor: theme.primary, color: "#ffffff" }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold" style={{ color: theme.gray[300] }}>
                          {milestone.title}
                        </h3>
                        {milestone.payment && (
                          <span
                            className="text-sm font-medium px-2 py-0.5 rounded"
                            style={{ backgroundColor: theme.neutral[700], color: theme.primary }}
                          >
                            {milestone.payment}
                          </span>
                        )}
                      </div>
                      {milestone.description && (
                        <p className="text-sm mt-1" style={{ color: theme.gray[400] }}>
                          {milestone.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Payment Schedule */}
          <section>
            <h2
              className="text-xl font-bold mb-4 flex items-center gap-2"
              style={{ color: theme.gray[300] }}
            >
              <span
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: theme.primary }}
              />
              Payment Schedule
            </h2>
            <div
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: theme.neutral[800] }}
            >
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: theme.neutral[700] }}>
                    <th
                      className="text-left px-4 py-3 text-xs uppercase tracking-wide font-semibold"
                      style={{ color: theme.gray[400] }}
                    >
                      Description
                    </th>
                    <th
                      className="text-right px-4 py-3 text-xs uppercase tracking-wide font-semibold"
                      style={{ color: theme.gray[400] }}
                    >
                      Amount
                    </th>
                    <th
                      className="text-right px-4 py-3 text-xs uppercase tracking-wide font-semibold"
                      style={{ color: theme.gray[400] }}
                    >
                      Due
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.payments.map((payment, index) => (
                    <tr
                      key={index}
                      style={{
                        borderTop: index > 0 ? `1px solid ${theme.neutral[700]}` : undefined,
                      }}
                    >
                      <td className="px-4 py-3" style={{ color: theme.gray[300] }}>
                        {payment.description}
                      </td>
                      <td
                        className="px-4 py-3 text-right font-semibold"
                        style={{ color: theme.primary }}
                      >
                        {payment.amount}
                      </td>
                      <td className="px-4 py-3 text-right" style={{ color: theme.gray[400] }}>
                        {payment.due}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Out of Scope */}
          {content.outOfScope && content.outOfScope.length > 0 && (
            <section>
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: theme.gray[300] }}
              >
                <span className="w-1 h-6 rounded-full bg-red-500" />
                Out of Scope
              </h2>
              <div className="p-4 rounded-lg" style={{ backgroundColor: theme.neutral[800] }}>
                <ul className="space-y-2">
                  {content.outOfScope.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: theme.gray[400] }}
                    >
                      <X size={14} className="mt-0.5 shrink-0 text-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Assumptions */}
          {content.assumptions && content.assumptions.length > 0 && (
            <section>
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: theme.gray[300] }}
              >
                <span
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: theme.gray[500] }}
                />
                Assumptions
              </h2>
              <div className="p-4 rounded-lg" style={{ backgroundColor: theme.neutral[800] }}>
                <ul className="space-y-2">
                  {content.assumptions.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: theme.gray[400] }}
                    >
                      <AlertCircle
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: theme.gray[500] }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Notes */}
          {content.notes && (
            <section>
              <h2
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: theme.gray[300] }}
              >
                <span
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: theme.gray[500] }}
                />
                Additional Notes
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: theme.gray[400] }}>
                {content.notes}
              </p>
            </section>
          )}
        </div>

        {/* Footer */}
        <footer
          className="px-8 py-6 border-t"
          style={{ borderColor: theme.neutral[700], backgroundColor: theme.neutral[900] }}
        >
          <p className="text-sm" style={{ color: theme.gray[500] }}>
            This Statement of Work is governed by the DigitalNova Service Agreement.
            Electronic acceptance of this SOW indicates agreement to the terms outlined above.
          </p>
        </footer>
      </div>
    </div>
  );
}
