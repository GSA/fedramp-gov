---
layout: page
title: Tips & Cues
permalink: /tips-cues/
body-class: page-fed-agencies
---
Many of our Cloud Service Providers (CSPs), Federal Agencies, and Third Party Assessment Organizations (3PAOs) share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we provide weekly tips and address frequently asked questions and concerns. Below you will find our most recent month of Tips & Cues. To receive our weekly email, sign up [here](https://public.govdelivery.com/accounts/USGSA/subscriber/new?qsp=USGSA_2224) for our listserv. 

You can also review and search all of our past Tips & Cues by downloading our compilation document <a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Tips_and_Cues.pdf">here</a>.

<h2>August 2018 Tips & Cues</h2>

<div class="q3">
<h3>Q: What is the distinction between an Operational Requirement (OR) and a Vendor Dependency (VD)? </h3>
<p>
A: An OR is a weakness that has a fix available but the fix cannot be applied without impacting the full operation of the system. A VD is a weakness that must be corrected by an upstream vendor but the fix has not been made available. In other words, an OR is something that could be fixed, but the fix would cause bigger issues or reduce functionality in the system so the risk of not fixing the weakness will be accepted. A VD does not have a fix available yet, and the fix must come from another vendor. A VD will be fixed as soon as possible, while an OR will be assessed at least annually to determine whether there is a fix, but often stands as an OR.
For agency ATO packages, work with your agency to determine the appropriate POCs.
<em>(August 1, 2018)</em>
</p>
</div>

<div class="q3">
<h3>Q: What is the best approach to assigning ownership, managing vulnerabilities, and applying patches in an IaaS platform?</h3>
<p>
A: If management services are being provided by an IaaS provider, managing vulnerabilities and application of patches in IaaS requires a carefully thought-out service level agreement (SLA) between CSPs and the potential customer. It is important to define not only the scope of responsibility, but also the allotted remediation timeframe for each type of finding. This will prevent non compliance of FedRAMP’s vulnerability management policy and procedure. 
<em>(August 1, 2018)</em>
</p>
</div>

** <div class="q3">
<h3>TIP: Boundaries for FedRAMP Cloud Service Offerings (CSOs) must have established demarcation points.</h3>
<p>
This means that entry and exit points must be limited, centralized, and well controlled and applies even for a Platform as a Service (PaaS).  
<em>(August 8, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: Ensure that any FIPS 140-2 modules in use have an active, current, and valid certification.</h3>
<p>
Document FIPS 140-2 certification/validation numbers and dates in the SSP and that the certification is relevant. Ensure that the modules remain active and unchanged during the initial P-ATO testing period.  
<em>(August 8, 2018)</em>
</p>
</div> **

<div class="q3">
<h3>TIP: The <a href="{{site.baseurl}}/assets/resources/documents/Plan of Action and MIlestones"> Plan of Action and Milestones (POA&M)</a> is for reporting and tracking security vulnerabilities and weaknesses.</h3>
<p>
Vulnerabilities are found through monthly scanning and annual 3PAO assessment and reported in the POA&M. Any security vulnerability found, regardless of its source, should be reported in the POA&M in accordance with FedRAMP guidelines. Even vulnerabilities found by the CSP itself or sources other than a 3PAO should be reported in the POA&M in accordance with FedRAMP guidelines. For vulnerabilities detected by scanners, FedRAMP only requires them to be reported in the POA&M if the rememation is delayed beyond FedRAMP required timeframes.
 </p>
<em>(August 15, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: When possible, upload embedded documents as System Security Plan (SSP) attachments as an additional method for document retrieval.</h3>
<p>
This is helpful for when embedded links are broken. For example, if a document is converted to PDF, embedded documents will no longer be accessible. 
<em>(August 22, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: ALL non-scan findings need to be addressed in the <a href="{{site.baseurl}}/assets/resources/documents/Plan of Action and Milestones"> Plan of Action and Milestones (POA&M)</a>.</h3>
<p>
However, all scan findings, including those found in the <a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-SAR-Template"> Security Assessment Report (SAR)</a> scans only need to be converted over to the monthly POA&M when late, unless they are related to a Deviation Request (DR).
<em>(August 22, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: A CSP is required to submit a <a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Significant-Change-Form-Template"> Significant Change Request (SCR)</a> when they intend to change their vulnerability scan tool. While the requirement for notification is a minimum of 30 days before implementing a significant change, in order to allow enough time for full transition, CSPs should submit the SCR with enough time to properly transition to the new scan tool.</h3>
<p>
CSPs are required to generate parallel vulnerability reports from the old and new scan tools, or provide direct mapping to all currently open vulnerabilities (from the “old” tool) to ensure all previously identified vulnerabilities are closed. CSPs may fully transition to the new tool when the ConMon team approves the new report and the JAB TR-Rs review and approve the SCR. 
<em>(August 29, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: Acceptable False Positive evidence doesn't necessarily have to include a screenshot of the configuration settings for each vulnerable host.</h3>
<p>
For instance, a text file (with a hash to validate authenticity) that indicates that a specific configuration, intended to remediate a vulnerability, was successfully applied to vulnerable hosts should be sufficient evidence. 
<em>(August 29, 2018)</em>
</p>
</div>
