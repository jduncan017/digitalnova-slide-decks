// One-pager document type definitions

export interface BulletItem {
  text: string;
  subtext?: string;
  style?: "check" | "x" | "school" | "star" | "default";
}

export interface MathRow {
  input: string;
  result: string;
}

export type OnePagerSection =
  | { type: "text"; title?: string; content: string }
  | {
      type: "bullets";
      title: string;
      subtitle?: string;
      items: BulletItem[];
      columns?: 1 | 2 | 3;
    }
  | {
      type: "math";
      title: string;
      subtitle?: string;
      rows: MathRow[];
      footer?: string;
    }
  | { type: "comparison"; title: string; dont: string[]; do: string[] }
  | { type: "steps"; title: string; steps: string[] }
  | { type: "callout"; content: string };

export interface OnePagerContact {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  website?: string;
}

export interface OnePagerStat {
  value: string;
  label: string;
}

export interface OnePagerIntroFeature {
  icon: string;
  title: string;
  description: string;
}

export interface OnePagerDefinition {
  /** Intro page */
  title: string;
  subtitle?: string;
  introDescription?: string;
  heroImage?: string;
  stats?: OnePagerStat[];
  introFeatures?: OnePagerIntroFeature[];

  /** Details page */
  sections: OnePagerSection[];

  /** Contact (rendered at bottom of last page) */
  contact?: OnePagerContact;
  closingLine?: string;
}
