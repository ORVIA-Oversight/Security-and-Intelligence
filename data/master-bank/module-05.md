## MODULE 05 — Metadata, Digital Forensics & Authenticity

### Q101 — What do creation, modification and access timestamps actually signify in the source platform?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Prevents timestamp semantics being guessed.

**Evidence to seek:**  
Platform documentation; native properties; audit events.

**Adverse-evidence test:**  
Seek and assess: platform behaviour explaining a supposedly suspicious date.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Platform documentation; native properties; audit events.

**Applicable to:** Universal

### Q102 — Does the displayed document date agree with native metadata, and what explains any difference?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests dating without presuming fabrication.

**Evidence to seek:**  
Native file; PDF properties; Office core properties.

**Adverse-evidence test:**  
Seek and assess: migration or export records supporting legitimate later creation.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Native file; PDF properties; Office core properties.

**Applicable to:** Data

### Q103 — Who is listed as author and lastModifiedBy, and do those fields identify an actual actor or inherited template value?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests metadata attribution.

**Evidence to seek:**  
Office XML; account mapping; template originals.

**Adverse-evidence test:**  
Seek and assess: inherited properties explaining a wrongly attributed author.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Office XML; account mapping; template originals.

**Applicable to:** Universal

### Q104 — What revision history shows content changes before and after the dispute became known?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Detects material retrospective changes.

**Evidence to seek:**  
Version history; revision identifiers; dispute chronology.

**Adverse-evidence test:**  
Seek and assess: an earlier version supporting the opposing account.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Version history; revision identifiers; dispute chronology.

**Applicable to:** Universal

### Q105 — Which PDF producer, creator and conversion dates indicate an export rather than original composition?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Distinguishes production from authorship.

**Evidence to seek:**  
PDF properties; native source; export logs.

**Adverse-evidence test:**  
Seek and assess: an ordinary conversion workflow explaining later timestamps.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: PDF properties; native source; export logs.

**Applicable to:** Data

### Q106 — What Office XML relationships, embedded objects or tracked changes survive outside the rendered view?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests information beyond the display.

**Evidence to seek:**  
Document XML; embedded files; tracked-change records.

**Adverse-evidence test:**  
Seek and assess: hidden or deleted text undermining the client's preferred reading.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Document XML; embedded files; tracked-change records.

**Applicable to:** Data

### Q107 — Do email Message-ID and Received headers support the asserted sending route and time?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Checks transport provenance.

**Evidence to seek:**  
Original EML/MSG; server headers; message trace.

**Adverse-evidence test:**  
Seek and assess: server records contradicting a client-supplied header interpretation.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Original EML/MSG; server headers; message trace.

**Applicable to:** Data

### Q108 — What evidence distinguishes sending, delivery, opening and human reading of a message?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Prevents overstating communication knowledge.

**Evidence to seek:**  
Message traces; delivery reports; access logs.

**Adverse-evidence test:**  
Seek and assess: delivery without evidence the alleged decision-maker saw it.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Message traces; delivery reports; access logs.

**Applicable to:** Universal

### Q109 — Do sender, reply-to, return-path and authentication results agree with the asserted origin?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests message identity.

**Evidence to seek:**  
Full headers; domain authentication data; mailbox records.

**Adverse-evidence test:**  
Seek and assess: delegation or spoofing evidence defeating the attribution.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Full headers; domain authentication data; mailbox records.

**Applicable to:** Universal

### Q110 — What timestamp offsets or daylight-saving conversions were applied during export or display?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests clock conversion artefacts.

**Evidence to seek:**  
Server timezone settings; export documentation; raw timestamps.

**Adverse-evidence test:**  
Seek and assess: a conversion accounting for an apparent backdate.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Server timezone settings; export documentation; raw timestamps.

**Applicable to:** Data

### Q111 — Do attachment hashes and names match across sender, recipient and disclosure copies?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Checks attachment integrity across custody points.

**Evidence to seek:**  
Native messages; attachment manifests; hashes.

**Adverse-evidence test:**  
Seek and assess: recipient copy materially differing from the client's version.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Native messages; attachment manifests; hashes.

**Applicable to:** Data

### Q112 — Which exact duplicates and near-duplicates exist, and what content differences matter?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Separates deduplication from substantive version review.

**Evidence to seek:**  
Hash index; text comparison; version inventory.

**Adverse-evidence test:**  
Seek and assess: a near-duplicate containing an adverse sentence omitted from the cited copy.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Hash index; text comparison; version inventory.

**Applicable to:** Universal

### Q113 — What renamed or relocated files retain the same content hash, and what does the name history show?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Prevents filename-based false inferences.

**Evidence to seek:**  
Audit events; hashes; path history.

**Adverse-evidence test:**  
Seek and assess: renaming mistaken for creation of new evidence.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Audit events; hashes; path history.

**Applicable to:** Data

### Q114 — What EXIF or media metadata is available, and which fields are device-generated, editable or stripped?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests media metadata cautiously.

**Evidence to seek:**  
Original media; EXIF; device records.

**Adverse-evidence test:**  
Seek and assess: editable location data contradicted by independent location evidence.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Original media; EXIF; device records.

**Applicable to:** Data

### Q115 — Are there editing, splicing or re-encoding indicators requiring specialist examination?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Avoids equating encoding change with deception.

**Evidence to seek:**  
Original media; codec properties; expert comparison.

**Adverse-evidence test:**  
Seek and assess: a benign export explaining the suspected manipulation.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Original media; codec properties; expert comparison.

**Applicable to:** Universal

### Q116 — What redaction artefacts expose concealed text, layers, comments or identifiers?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests redaction effectiveness and contextual loss.

**Evidence to seek:**  
Redacted PDF; layer inspection; approved originals.

**Adverse-evidence test:**  
Seek and assess: hidden content showing the client's extract is incomplete.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Redacted PDF; layer inspection; approved originals.

**Applicable to:** Data

### Q117 — Have pseudonyms been consistently applied across content, metadata and embedded objects?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Detects identity errors without unnecessary exposure.

**Evidence to seek:**  
Pseudonym map; document properties; embedded files.

**Adverse-evidence test:**  
Seek and assess: identity mismatch linking adverse material to the client.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Pseudonym map; document properties; embedded files.

**Applicable to:** Data

### Q118 — When were disclosure folders created and populated, and how do those dates differ from record creation?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Separates bundle construction from original events.

**Evidence to seek:**  
Folder audit logs; upload times; export manifests.

**Adverse-evidence test:**  
Seek and assess: assembly dates explaining apparently retrospective records.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Folder audit logs; upload times; export manifests.

**Applicable to:** Universal

### Q119 — What recoverable-item, Deleted Items or Purges records exist within authorised access and retention limits?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests deletion through platform records.

**Evidence to seek:**  
Mailbox retention settings; recovery exports; audit logs.

**Adverse-evidence test:**  
Seek and assess: routine retention explaining deletion rather than deliberate suppression.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Mailbox retention settings; recovery exports; audit logs.

**Applicable to:** Data

### Q120 — Which deletion events identify actor, object, time and operation, and what cannot be inferred from them?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Prevents ambiguous deletion data proving intent.

**Evidence to seek:**  
Audit logs; object IDs; retention documentation.

**Adverse-evidence test:**  
Seek and assess: automatic system deletion undermining an allegation against a person.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Audit logs; object IDs; retention documentation.

**Applicable to:** Universal

### Q121 — What database schema, query, filters and timezone govern a disclosed dataset?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Makes data extraction reproducible.

**Evidence to seek:**  
Schema; query text; export parameters; row counts.

**Adverse-evidence test:**  
Seek and assess: a filter excluding adverse rows from the client's analysis.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Schema; query text; export parameters; row counts.

**Applicable to:** Data

### Q122 — Do audit logs have gaps, retention limits or administrator exclusions relevant to the disputed action?

**ORVIA principle:** Visibility

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Distinguishes no log from no event.

**Evidence to seek:**  
Logging configuration; retention settings; audit exports.

**Adverse-evidence test:**  
Seek and assess: no logging coverage for an action the client claims never occurred.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Logging configuration; retention settings; audit exports.

**Applicable to:** Data

### Q123 — Could a file have been recreated legitimately from notes, templates, migration or backup, and what source verifies that explanation?

**ORVIA principle:** Reflection

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Tests benign reconstruction before alleging fabrication.

**Evidence to seek:**  
Original notes; templates; migration logs; backup copies.

**Adverse-evidence test:**  
Seek and assess: verified source material explaining a later-created record.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Original notes; templates; migration logs; backup copies.

**Applicable to:** Universal

### Q124 — What independent copy or server event would distinguish retrospective reconstruction from contemporaneous existence?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Defines a discriminating authenticity test.

**Evidence to seek:**  
Backups; recipient originals; server event history.

**Adverse-evidence test:**  
Seek and assess: an independently dated earlier copy contradicting a fabrication claim.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Backups; recipient originals; server event history.

**Applicable to:** Universal

### Q125 — Which anomalies remain after validated tooling and specialist review, and what findings do they actually support?

**ORVIA principle:** Observation

**Three-Sides focus:** Evidential Position

**Why this matters:**  
Limits conclusions to tested technical significance.

**Evidence to seek:**  
Tool versions; expert notes; anomaly register.

**Adverse-evidence test:**  
Seek and assess: expert validation rejecting the client's interpretation of an anomaly.

**If unanswered:**  
Record the technical uncertainty and seek validated platform or specialist interpretation; an unexplained anomaly alone does not establish fabrication. Target the missing support in: Tool versions; expert notes; anomaly register.

**Applicable to:** Universal
