export const INVESTIGATION_PRODUCTS = [
  {
    id:'evidence-verification',
    name:'Evidence Verification',
    code:'SI-EV',
    href:'/evidence-verification',
    summary:'Authenticity, provenance, metadata, chronology and contradiction examination.',
    workstreams:['Document Metadata','Forensic Chronology','Timeline Analysis'],
    tools:['oletools','Plaso / log2timeline','Timesketch'],
    report:'Evidence Verification Observation Pack',
    accent:'teal'
  },
  {
    id:'digital-evidence-osint',
    name:'Digital Evidence & OSINT',
    code:'SI-DO',
    href:'/digital-evidence-osint',
    summary:'Independent public-source research kept visibly separate from client-supplied evidence.',
    workstreams:['OSINT Research','Username Correlation','Entity Relationships'],
    tools:['SpiderFoot','Sherlock','Aleph / FollowTheMoney'],
    report:'Independent OSINT Observation Pack',
    accent:'gold'
  },
  {
    id:'digital-technical-intelligence',
    name:'Digital & Technical Intelligence',
    code:'SI-DT',
    href:'/digital-technical-intelligence',
    summary:'Specialist technical examination of systems, logs, endpoints and digital artefacts.',
    workstreams:['Windows Events','Endpoint Forensics','Memory Forensics'],
    tools:['Hayabusa','Velociraptor','Volatility 3'],
    report:'Digital & Technical Intelligence Observation Pack',
    accent:'purple'
  },
  {
    id:'investigative-support',
    name:'Investigative Support',
    code:'SI-IS',
    href:'/investigative-support',
    summary:'Structured investigation support, issue mapping, chronology and evidence-gap identification.',
    workstreams:['Case Structure','Timeline Analysis','Entity Relationships'],
    tools:['DFIR-IRIS reference model','Timesketch','Aleph / FollowTheMoney'],
    report:'Investigative Support Observation Pack',
    accent:'orange'
  },
  {
    id:'disk-forensics',
    name:'Disk & Filesystem Forensics',
    code:'SI-DF',
    href:'/workspace',
    summary:'Deep examination of authorised disk images, filesystems, deleted artefacts and recovered evidence.',
    workstreams:['Disk & Filesystem Forensics'],
    tools:['Autopsy','The Sleuth Kit'],
    report:'Disk & Filesystem Forensic Observation Report',
    accent:'navy'
  },
  {
    id:'monitoring-risk',
    name:'Monitoring & Risk',
    code:'SI-MR',
    href:'/monitoring-risk',
    summary:'Controlled monitoring of agreed indicators and change conditions without replacing human judgement.',
    workstreams:['Public-source Monitoring','Change Detection'],
    tools:['Authoritative sources','Bounded monitoring workers'],
    report:'Monitoring & Change Observation Report',
    accent:'teal'
  },
  {
    id:'intelligence',
    name:'Intelligence Analysis',
    code:'SI-IA',
    href:'/intelligence',
    summary:'Source-linked synthesis of observations into bounded intelligence products with uncertainty preserved.',
    workstreams:['Entity Relationships','Chronology','Hypothesis Comparison'],
    tools:['Aleph / FollowTheMoney','Timesketch','Analyst workspace'],
    report:'Intelligence Assessment Pack',
    accent:'gold'
  },
  {
    id:'reports',
    name:'Controlled Reporting',
    code:'SI-RP',
    href:'/reports',
    summary:'Packages completed specialist observations into controlled, traceable handoff reports.',
    workstreams:['Observation Index','Source Register','Specialist QA'],
    tools:['ORVIA reporting controls'],
    report:'Security & Intelligence Handoff Package',
    accent:'navy'
  }
];

export const LOCAL_CONDUCTOR = {
  name:'IRIS-SI',
  label:'Security & Intelligence Conductor',
  boundary:'A separate local conductor for this specialist system. It allocates Security & Intelligence workstreams and tracks state. It does not share runtime state with main IRIS.',
  handoff:'Completed observation packs are exported back to ORVIA Command / main IRIS for Three Sides, legal/policy, VITA, DEREK and human review.'
};
