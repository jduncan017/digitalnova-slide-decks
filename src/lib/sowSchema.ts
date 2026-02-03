// SOW (Statement of Work) type definitions

export interface SOWDeliverable {
  title: string;
  description?: string;
  items?: string[];
}

export interface SOWMilestone {
  title: string;
  description?: string;
  payment?: string;
}

export interface SOWPayment {
  description: string;
  amount: string;
  due: string;
}

export interface SOWDefinition {
  /** Project title */
  projectTitle: string;

  /** Client information */
  client: {
    name: string;
    contactName?: string;
    contactEmail?: string;
  };

  /** Project overview/summary */
  overview: string;

  /** Start date */
  startDate: string;

  /** Estimated completion */
  estimatedCompletion?: string;

  /** Deliverables - what we're building */
  deliverables: SOWDeliverable[];

  /** Timeline/milestones */
  timeline?: SOWMilestone[];

  /** Payment schedule */
  payments: SOWPayment[];

  /** Total investment */
  totalInvestment: string;

  /** Items explicitly out of scope */
  outOfScope?: string[];

  /** Assumptions we're making */
  assumptions?: string[];

  /** Additional notes */
  notes?: string;

  /** Contract signing link (e.g., Jotform, DocuSign) */
  contractLink?: string;

  /** Payment link (e.g., GoCardless, Stripe) - only shown if provided */
  paymentLink?: string;
}
