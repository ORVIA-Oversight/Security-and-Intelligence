export const WORKSTREAMS = [
  {id:'WS-DOCUMENT-METADATA',name:'Document Metadata',tools:['oletools','document-property parsers'],report:'Document Metadata Observation Report'},
  {id:'WS-CHRONOLOGY',name:'Forensic Chronology',tools:['Plaso / log2timeline'],report:'Forensic Chronology Observation Report'},
  {id:'WS-TIMELINE-ANALYSIS',name:'Timeline Analysis',tools:['Timesketch'],report:'Timeline Analysis Observation Report'},
  {id:'WS-ENTITY-RELATIONSHIPS',name:'Entity & Relationship Analysis',tools:['Aleph / FollowTheMoney'],report:'Entity & Relationship Observation Report'},
  {id:'WS-DISK-FORENSICS',name:'Disk & Filesystem Forensics',tools:['Autopsy','The Sleuth Kit'],report:'Disk & Filesystem Forensic Observation Report'},
  {id:'WS-WINDOWS-EVENTS',name:'Windows Event Analysis',tools:['Hayabusa'],report:'Windows Event Log Observation Report'},
  {id:'WS-ENDPOINT-FORENSICS',name:'Endpoint Forensics',tools:['Velociraptor'],report:'Endpoint Forensic Collection & Observation Report'},
  {id:'WS-MEMORY-FORENSICS',name:'Memory Forensics',tools:['Volatility 3'],report:'Memory Forensic Observation Report'},
  {id:'WS-OSINT-RESEARCH',name:'Independent OSINT Research',tools:['SpiderFoot','authoritative public sources'],report:'Independent OSINT Observation Report'},
  {id:'WS-USERNAME-RESEARCH',name:'Username Correlation',tools:['Sherlock'],report:'Username Correlation Observation Report'},
  {id:'WS-INFRASTRUCTURE-RESEARCH',name:'Domain & Infrastructure Research',tools:['OWASP Amass'],report:'Domain & Infrastructure Observation Report'}
];

export const OBSERVATION_STATES=[
  'INDEPENDENTLY OBSERVED',
  'CORROBORATED',
  'CONTRADICTED',
  'INTERPRETATION REQUIRED',
  'UNRESOLVED',
  'OUTSIDE SCOPE'
];

export const HANDOFF_STAGES=[
  'WORK ORDER RECEIVED',
  'SCOPE LOCKED',
  'EVIDENCE REGISTERED',
  'WORKSTREAMS ALLOCATED',
  'EXAMINATION',
  'OBSERVATION REPORTS',
  'SPECIALIST QA',
  'HANDOFF READY',
  'RELEASED TO MAIN ORVIA'
];

export function makeWorkOrder({matterRef,requirement,product,questionIds=[]}){
  const stamp=new Date().toISOString();
  return {
    schema:'orvia.si.work-order.v1',
    workOrderRef:'SI-'+Date.now(),
    matterRef:matterRef||'UNASSIGNED',
    createdAt:stamp,
    requirement,
    product:{id:product.id,code:product.code,name:product.name},
    questionIds,
    rule:'OBSERVATIONS ONLY — no overall liability, guilt, safeguarding, motive or legal conclusion.',
    expectedOutput:product.report,
    returnTo:'ORVIA Command / main IRIS'
  };
}

export function makeObservationReport(data){
  return {
    schema:'orvia.si.observation-report.v1',
    reportRef:data.reportRef||'SIR-'+Date.now(),
    matterRef:data.matterRef||'UNASSIGNED',
    workOrderRef:data.workOrderRef||'UNASSIGNED',
    workstreamId:data.workstreamId,
    tool:data.tool,
    toolVersion:data.toolVersion||'not recorded',
    examiner:data.examiner||'ORVIA Security & Intelligence',
    completedAt:new Date().toISOString(),
    scope:data.scope||'',
    sourcesReceived:data.sourcesReceived||[],
    sourcesNotReceived:data.sourcesNotReceived||[],
    observations:data.observations||[],
    contraryObservations:data.contraryObservations||[],
    limitations:data.limitations||[],
    unresolvedQuestions:data.unresolvedQuestions||[],
    sourceReferences:data.sourceReferences||[],
    qaStatus:'PENDING',
    handoffStatus:'DRAFT',
    boundary:'Specialist observation report. Legal/evidential significance is determined downstream by ORVIA.'
  };
}
