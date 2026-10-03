export const MASTER_BANK_VERSION = '2.0-implementation';

export const ORVIA_PRINCIPLES = [
  'Observation',
  'Reflection',
  'Visibility',
  'Insight',
  'Accountability'
];

export const THREE_SIDES = [
  'Their Side',
  'Client Side',
  'Evidential Position'
];

export const EVIDENCE_CLASSIFICATIONS = [
  'FACT',
  'ALLEGATION',
  'CORROBORATED ASSERTION',
  'CONTRADICTION',
  'INFERENCE',
  'ADVERSE EVIDENCE',
  'ALTERNATIVE EXPLANATION',
  'UNKNOWN / GAP'
];

export const VERIFICATION_STATES = ['Verified','Assumed','Missing'];

export const MANDATORY_CONTROLS = [
  {
    id:'evidence-strength',
    name:'Evidence Strength',
    question:'How strong is the evidential support for this finding, and why?',
    output:'HIGH / MODERATE / LIMITED / SPECULATIVE, with a written basis rather than an unexplained percentage.',
    rule:'Strength never substitutes for the source trail. A strong finding still requires traceable evidence.'
  },
  {
    id:'evidence-weight',
    name:'Evidence Weight',
    question:'Which evidence carries the greatest probative weight, which carries the least, and how many apparently separate items derive from the same source?',
    output:'Weight assessment, primary-source priority and dependency count.',
    rule:'Quantity is not independence. Repetition of one allegation does not create multiple corroborating sources.'
  },
  {
    id:'contamination-dependency',
    name:'Evidence Contamination & Dependency',
    question:'Who saw earlier accounts, which later records depended on them, and which apparently independent conclusions trace back to the same origin?',
    output:'Source-dependency map and contamination flags.',
    rule:'Repeated reporting is separated from genuinely independent corroboration.'
  },
  {
    id:'negative-evidence',
    name:'Negative Evidence / Expected Record',
    question:'If the asserted event occurred, what record would normally be expected, where should it exist, and what explains its absence?',
    output:'Expected → found / absent / inaccessible / retention expired / never created / unknown.',
    rule:'Absence is not automatically proof that an event did not occur; the expected-record proposition must itself be supported.'
  },
  {
    id:'knowledge-map',
    name:'Decision-Maker Knowledge Map',
    question:'Who made the decision, what did they know, when did they know it, how did they know it, what remained unknown, and what available information was not considered?',
    output:'Decision → person → knowledge → source → time → missing knowledge.',
    rule:'Do not infer knowledge merely because information existed somewhere in an organisation.'
  },
  {
    id:'finding-traceability',
    name:'Finding Traceability',
    question:'Can this finding be traced backwards without a broken link to the original source and its provenance?',
    output:'Finding → interpretation → observations → evidence items → original source → metadata/provenance → verification.',
    rule:'No material finding is release-ready without a source trail.'
  },
  {
    id:'hostile-review',
    name:'Report Vulnerability / Hostile Review',
    question:'Which finding would a well-resourced opposing reviewer attack first, what assumption would they remove, and what new evidence could reverse the conclusion?',
    output:'Vulnerability register, collapse tests and required narrowing or further evidence.',
    rule:'Challenge the strongest client-favouring and opposing findings alike.'
  }
];

export const FINDING_CHAIN = [
  'Original source',
  'Provenance / metadata',
  'Specialist observation',
  'Evidence classification',
  'Their Side',
  'Client Side',
  'Evidential Position',
  'Legal / policy relevance',
  'VITA challenge',
  'DEREK verification',
  'Human sign-off'
];

export const ACTIVATION_DOMAINS = [
  'Universal',
  'Employment',
  'Family',
  'Safeguarding',
  'Regulatory',
  'Civil',
  'Data',
  'Corporate',
  'Digital Forensics',
  'OSINT'
];
