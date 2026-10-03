# ORVIA Security & Intelligence - Independent Investigation System

## Position

The Security & Intelligence investigation environment is a separate specialist system from the main ORVIA Command / IRIS runtime.

It is not an IRIS layer.

IRIS may commission work, track that a workstream exists, receive the completed controlled outputs and then continue the wider ORVIA review. IRIS does not perform the specialist examination and does not need to understand or orchestrate every forensic tool internally.

## Operating boundary

Main ORVIA / IRIS:
- receives the client instruction
- defines the matter and questions to answer
- allocates a Security & Intelligence work order
- sends the authorised evidence scope or source references
- waits for controlled specialist outputs
- ingests the returned reports and observation packages
- runs the wider Three Sides, legal/policy, VITA, DEREK and human-review process

Security & Intelligence Investigation System:
- receives a bounded work order
- creates its own investigation workspace
- preserves its own specialist examination state
- allocates independent specialist workstreams
- runs the appropriate forensic / research tooling
- produces separate observation reports
- consolidates those observations into a Security & Intelligence handoff package
- returns controlled reports and source references to ORVIA

The specialist system does not make the final ORVIA case finding.

## Internal specialist workstreams

Each workstream is independent and produces its own observation report:

1. Document Metadata
   - oletools and document-property parsers
   - output: Document Metadata Observation Report

2. Forensic Chronology
   - Plaso / log2timeline
   - output: Forensic Chronology Observation Report

3. Timeline Analysis
   - Timesketch
   - output: Timeline Analysis Observation Report

4. Entity & Relationship Analysis
   - Aleph / FollowTheMoney
   - output: Entity & Relationship Observation Report

5. Disk & Filesystem Forensics
   - Autopsy + The Sleuth Kit
   - output: Disk & Filesystem Forensic Observation Report

6. Windows Event Analysis
   - Hayabusa
   - output: Windows Event Log Observation Report

7. Endpoint Forensics
   - Velociraptor
   - output: Endpoint Forensic Collection & Observation Report

8. Memory Forensics
   - Volatility 3
   - output: Memory Forensic Observation Report

9. OSINT Research
   - SpiderFoot plus authoritative public sources
   - output: Independent OSINT Observation Report

10. Username Correlation
   - Sherlock
   - output: Username Correlation Observation Report

11. Domain & Infrastructure Research
   - OWASP Amass
   - output: Domain & Infrastructure Observation Report

## Specialist system workflow

WORK ORDER RECEIVED
-> SCOPE LOCKED
-> EVIDENCE / SOURCE REFERENCES REGISTERED
-> SPECIALIST WORKSTREAMS ALLOCATED
-> INDEPENDENT EXAMINATIONS RUN
-> SEPARATE OBSERVATION REPORTS COMPLETED
-> INTERNAL SPECIALIST QA
-> SECURITY & INTELLIGENCE HANDOFF PACKAGE CREATED
-> RETURN TO ORVIA / IRIS

## Observation rule

Every specialist tool reports what it observes.

It does not decide:
- guilt
- liability
- safeguarding outcome
- legal breach
- motive
- credibility of the entire case
- final client position

Example:

Observation:
"Document metadata records LastModifiedBy = X on 21 July 2026."

Not:
"X fabricated the document."

The second statement requires comparison with chronology, provenance, opposing evidence and the legal/evidential review.

## Handoff package to ORVIA

Every completed specialist job returns a controlled package containing:

- Matter reference
- Security & Intelligence work-order reference
- Scope received
- Questions commissioned
- Evidence/source register
- Workstreams run
- Workstreams not run and why
- Separate observation reports
- Observation index
- Source/provenance references
- Hashes where relevant
- Contradictions between workstreams
- Unresolved technical questions
- Limitations
- Specialist QA status
- Completion date/time
- Controlled report files
- Machine-readable observation manifest

## Observation manifest

Each observation should have:

- observation_id
- workstream_id
- tool
- tool_version
- source_ref
- source_hash where available
- observed_at
- observation_type
- statement
- deterministic_support
- limitation
- confidence only where methodologically supportable
- related_question
- requires_interpretation true/false
- requires_human_specialist true/false

## Integration contract

IRIS should receive only the completed handoff package and report references.

IRIS should not ingest raw specialist runtime state as if it were ORVIA reasoning.

Preferred handoff:

SECURITY & INTELLIGENCE
-> controlled JSON observation manifest
-> controlled PDF/DOCX specialist reports
-> HIVE/source references
-> IRIS matter import

IRIS then creates downstream work from the returned package.

## Downstream ORVIA review

After import, ORVIA can run:

1. Their Side
2. Client Side
3. Evidential Position
4. Contradiction analysis
5. Missing-evidence analysis
6. Legal / policy / regulatory review
7. VITA challenge
8. DEREK factual and citation verification
9. Human review
10. Final controlled report

This preserves the separation between specialist observation and wider case interpretation.

## User experience

Inside the Security & Intelligence workspace, the user should see the specialist system in full:

- each allocated workstream
- what it does
- evidence allocated to it
- status
- observations
- separate report
- limitations
- handoff readiness

Inside main Command / IRIS, the user should see only:

Security & Intelligence Work Order
- commissioned
- running
- completed
- reports received
- observations imported
- downstream review started

The forensic tooling remains visible in the specialist workspace, not duplicated throughout IRIS.

## Architectural rule

Security & Intelligence is a specialist production system.

IRIS is the enterprise conductor.

The handoff between them is controlled evidence and reports, not shared internal reasoning.
