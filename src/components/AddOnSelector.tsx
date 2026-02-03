"use client";

import { useState, useEffect, useCallback } from "react";
import {
  X,
  Check,
  CreditCard,
  Building2,
  Loader2,
  CheckCircle,
  AlertCircle,
  Rocket,
} from "lucide-react";
import { Button } from "./Button";
import type { ExtractedPricing } from "~/lib/sowBuilder";
import { formatPrice, calculateTotals } from "~/lib/sowBuilder";

interface AddOnSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  deckId: string;
  pricing: ExtractedPricing;
  preparedFor?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function AddOnSelector({
  isOpen,
  onClose,
  deckId,
  pricing,
  preparedFor,
}: AddOnSelectorProps) {
  // Form state
  const [clientName, setClientName] = useState(preparedFor ?? "");
  const [clientEmail, setClientEmail] = useState("");
  const [selectedTierId, setSelectedTierId] = useState<string | undefined>(
    pricing.tiers[0]?.id
  );
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);
  const [paymentType, setPaymentType] = useState<"credit" | "debit">("credit");

  // Submit state
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Pre-select required add-ons
  useEffect(() => {
    const requiredIds = pricing.addOns
      .filter((a) => a.isRequired)
      .map((a) => a.id);
    setSelectedAddOnIds((prev) => {
      const newIds = new Set([...prev, ...requiredIds]);
      return Array.from(newIds);
    });
  }, [pricing.addOns]);

  // Reset form when preparedFor changes
  useEffect(() => {
    if (preparedFor) {
      setClientName(preparedFor);
    }
  }, [preparedFor]);

  // Get selected tier
  const selectedTier = pricing.tiers.find((t) => t.id === selectedTierId);

  // Get selected add-ons
  const selectedAddOns = pricing.addOns.filter((a) =>
    selectedAddOnIds.includes(a.id)
  );

  // Calculate totals
  const totals = calculateTotals(selectedTier, selectedAddOns);
  const grandTotal = totals.setupTotal + totals.addOnsTotal;

  // Toggle add-on selection
  const toggleAddOn = useCallback((id: string, isRequired: boolean) => {
    if (isRequired) return; // Can't toggle required add-ons
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName || !clientEmail) {
      setStatus("error");
      setErrorMessage("Please enter your name and email");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/start-engagement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deckId,
          clientName,
          clientEmail,
          selectedTierId,
          selectedAddOnIds,
          paymentType,
        }),
      });

      const data = (await response.json()) as {
        success: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Failed to start engagement");
      }

      setStatus("success");
      // Keep success state visible
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  // Handle close
  const handleClose = useCallback(() => {
    if (status === "loading") return; // Prevent closing while submitting
    onClose();
    // Reset form after animation
    setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 300);
  }, [status, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 m-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-700 bg-neutral-900 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-700 bg-neutral-900 px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-white">Get Started</h2>
            <p className="text-sm text-gray-400">
              Select your package and add-ons
            </p>
          </div>
          <button
            onClick={handleClose}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Success State */}
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="bg-primary/20 mb-6 rounded-full p-4">
              <CheckCircle className="text-primary h-12 w-12" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">
              You&apos;re All Set!
            </h3>
            <p className="mb-6 max-w-sm text-gray-400">
              Check your email for next steps. We&apos;ll send over the contract
              and payment link shortly.
            </p>
            <Button onClick={handleClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 px-6 py-6">
              {/* Tier Selection (if multiple tiers) */}
              {pricing.tiers.length > 1 && (
                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Select Package
                  </label>
                  <div className="grid gap-3">
                    {pricing.tiers.map((tier) => (
                      <label
                        key={tier.id}
                        className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all ${
                          selectedTierId === tier.id
                            ? "border-primary bg-primary/10"
                            : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="tier"
                            value={tier.id}
                            checked={selectedTierId === tier.id}
                            onChange={() => setSelectedTierId(tier.id)}
                            className="sr-only"
                          />
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                              selectedTierId === tier.id
                                ? "border-primary bg-primary"
                                : "border-neutral-500"
                            }`}
                          >
                            {selectedTierId === tier.id && (
                              <Check className="h-3 w-3 text-white" />
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-white">
                              {tier.name}
                            </span>
                            {tier.description && (
                              <p className="text-sm text-gray-400">
                                {tier.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-primary font-bold">
                            {tier.price}
                          </span>
                          {tier.priceLabel && (
                            <span className="ml-1 text-sm text-gray-400">
                              {tier.priceLabel}
                            </span>
                          )}
                          {tier.monthly && (
                            <p className="text-sm text-gray-400">
                              + {tier.monthly}
                            </p>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Single tier display */}
              {pricing.tiers.length === 1 && selectedTier && (
                <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-white">
                        {selectedTier.name}
                      </span>
                      {selectedTier.description && (
                        <p className="text-sm text-gray-400">
                          {selectedTier.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-bold">
                        {selectedTier.price}
                      </span>
                      {selectedTier.priceLabel && (
                        <span className="ml-1 text-sm text-gray-400">
                          {selectedTier.priceLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Add-ons */}
              {pricing.addOns.length > 0 && (
                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Add-ons
                  </label>
                  <div className="space-y-2">
                    {pricing.addOns.map((addon) => (
                      <label
                        key={addon.id}
                        className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all ${
                          selectedAddOnIds.includes(addon.id)
                            ? "border-primary bg-primary/10"
                            : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
                        } ${addon.isRequired ? "opacity-75" : ""}`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedAddOnIds.includes(addon.id)}
                            onChange={() =>
                              toggleAddOn(addon.id, addon.isRequired ?? false)
                            }
                            disabled={addon.isRequired}
                            className="sr-only"
                          />
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
                              selectedAddOnIds.includes(addon.id)
                                ? "border-primary bg-primary"
                                : "border-neutral-500"
                            }`}
                          >
                            {selectedAddOnIds.includes(addon.id) && (
                              <Check className="h-3 w-3 text-white" />
                            )}
                          </div>
                          <div>
                            <span className="font-medium text-white">
                              {addon.name}
                            </span>
                            {addon.isRequired && (
                              <span className="ml-2 text-xs text-gray-500">
                                (Required)
                              </span>
                            )}
                            {addon.description && (
                              <p className="text-sm text-gray-400">
                                {addon.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-primary font-bold">
                            {addon.price}
                          </span>
                          {addon.priceLabel && (
                            <span className="ml-1 text-sm text-gray-400">
                              {addon.priceLabel}
                            </span>
                          )}
                          {addon.monthly && (
                            <p className="text-sm text-gray-400">
                              + {addon.monthly}
                            </p>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Type */}
              <div>
                <label className="mb-3 block text-sm font-medium text-gray-300">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all ${
                      paymentType === "credit"
                        ? "border-primary bg-primary/10"
                        : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentType"
                      value="credit"
                      checked={paymentType === "credit"}
                      onChange={() => setPaymentType("credit")}
                      className="sr-only"
                    />
                    <CreditCard
                      className={`h-5 w-5 ${paymentType === "credit" ? "text-primary" : "text-gray-400"}`}
                    />
                    <div>
                      <span className="font-medium text-white">Credit Card</span>
                      <p className="text-xs text-gray-400">Standard processing</p>
                    </div>
                  </label>

                  <label
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all ${
                      paymentType === "debit"
                        ? "border-primary bg-primary/10"
                        : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentType"
                      value="debit"
                      checked={paymentType === "debit"}
                      onChange={() => setPaymentType("debit")}
                      className="sr-only"
                    />
                    <Building2
                      className={`h-5 w-5 ${paymentType === "debit" ? "text-primary" : "text-gray-400"}`}
                    />
                    <div>
                      <span className="font-medium text-white">
                        ACH / Bank Transfer
                      </span>
                      <p className="text-xs text-gray-400">Lower fees</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="clientName"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="John Smith"
                    className="focus:border-primary focus:ring-primary w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:ring-1 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="clientEmail"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="clientEmail"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="focus:border-primary focus:ring-primary w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:ring-1 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Error message */}
              {status === "error" && errorMessage && (
                <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-400">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 border-t border-neutral-700 bg-neutral-900 px-6 py-4">
              {/* Totals */}
              <div className="mb-4 space-y-1">
                {totals.setupTotal > 0 && (
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Setup</span>
                    <span>{formatPrice(totals.setupTotal)}</span>
                  </div>
                )}
                {totals.addOnsTotal > 0 && (
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Add-ons</span>
                    <span>{formatPrice(totals.addOnsTotal)}</span>
                  </div>
                )}
                {totals.monthlyTotal > 0 && (
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Monthly</span>
                    <span>{formatPrice(totals.monthlyTotal)}/mo</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-neutral-700 pt-2 text-lg font-bold text-white">
                  <span>Total</span>
                  <span>
                    {formatPrice(grandTotal)}
                    {totals.monthlyTotal > 0 && (
                      <span className="ml-1 text-sm font-normal text-gray-400">
                        + {formatPrice(totals.monthlyTotal)}/mo
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                icon={status === "loading" ? Loader2 : Rocket}
                loadingIcon={Loader2}
                loading={status === "loading"}
                disabled={status === "loading"}
                className="w-full"
              >
                {status === "loading" ? "Processing..." : "Get Started"}
              </Button>

              {pricing.note && (
                <p className="mt-3 text-center text-xs text-gray-500">
                  {pricing.note}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
