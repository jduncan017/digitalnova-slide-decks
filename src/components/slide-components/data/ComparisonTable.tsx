"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Box from "../layout/Box";
import Body from "../typography/Body";

interface ComparisonColumn {
  /** Column header label */
  label: string;
  /** Whether this is the highlighted/featured column */
  featured?: boolean;
}

interface ComparisonRow {
  /** Feature name */
  feature: string;
  /** Values for each column (true = check, false = X) */
  values: boolean[];
}

interface ComparisonTableProps {
  /** Column definitions */
  columns: ComparisonColumn[];
  /** Row data */
  rows: ComparisonRow[];
  /** Animation delay for the table */
  delay?: number;
  /** Additional className */
  className?: string;
}

export default function ComparisonTable({
  columns,
  rows,
  delay = 0.3,
  className = "",
}: ComparisonTableProps) {
  return (
    <Box animation="slideUp" delay={delay} hoverEffect="none" className={className}>
      <div className="rounded-2xl border border-neutral-700 overflow-hidden">
        {/* Header row */}
        <div
          className="grid bg-neutral-800/50"
          style={{ gridTemplateColumns: `1fr repeat(${columns.length}, 1fr)` }}
        >
          <div className="p-4 text-gray-500 text-sm font-medium">Feature</div>
          {columns.map((col, i) => (
            <div
              key={i}
              className={`p-4 text-center border-l border-neutral-700 ${
                col.featured ? "bg-primary/10" : ""
              }`}
            >
              <Body
                size="sm"
                className={col.featured ? "text-primary font-semibold" : "text-gray-400"}
              >
                {col.label}
              </Body>
            </div>
          ))}
        </div>

        {/* Data rows */}
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 + rowIndex * 0.1 }}
            className="grid border-t border-neutral-700"
            style={{ gridTemplateColumns: `1fr repeat(${columns.length}, 1fr)` }}
          >
            <div className="p-4">
              <Body size="sm" className="text-gray-300">{row.feature}</Body>
            </div>
            {row.values.map((value, colIndex) => (
              <div
                key={colIndex}
                className={`p-4 flex justify-center border-l border-neutral-700 ${
                  columns[colIndex]?.featured ? "bg-primary/5" : ""
                }`}
              >
                {value ? (
                  <Check
                    className={`h-5 w-5 ${
                      columns[colIndex]?.featured ? "text-primary" : "text-green-400"
                    }`}
                  />
                ) : (
                  <X className="h-5 w-5 text-gray-600" />
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </Box>
  );
}
