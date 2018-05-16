---
layout: page
title: Tips & Cues
permalink: /tips-cues/
body-class: page-fed-agencies
---
Many of our Cloud Service Providers (CSPs), Federal Agencies, and Third Party Assessment Organizations (3PAOs) share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we provide weekly tips and address frequently asked questions and concerns. Below you will find our most recent month of Tips & Cues. To receive our weekly email, sign up [here](https://public.govdelivery.com/accounts/USGSA/subscriber/new?qsp=USGSA_2224) for our listserv. 

You can also review and search all of our past Tips & Cues by downloading our compilation document <a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Tips_and_Cues.pdf">here</a>.

<h2>April 2018 Tips & Cues</h2>
<div class="q1">
 
<div class="q3">
<h3>Q: What happens during an Agency Authorization kick-off meeting with the FedRAMP PMO?</h3> 
<p><strong>A:</strong>  As described in the Agency Authorization Playbook, the FedRAMP PMO considers a kick-off meeting to be an integral step of the authorization process. Kick-off meetings provide the Agency, Cloud Service Provider (CSP), Third Party Assessment Organization (3PAO), and FedRAMP PMO the opportunity to convene at the outset of an authorization effort. During a kick-off meeting, the following topics should be addressed:
Roles and responsibilities for the Agency, CSP, and 3PAO
Applicable project milestones, especially with respect to CSP package documentation for the System Security Plan (SSP), Security Assessment Plan (SAP), and Security Assessment Report (SAR)
Review of Agency-specific system or control requirements and concerns
Review of the authorization boundary
Kick-off meetings are designed to enable effective partnership among all stakeholders within an authorization effort, allowing for clear communication of requirements and providing a forum for answering questions.
(April 25, 2018) 
</p>
</div>

<div class="q3">
<h3>TIP: CSPs should remember to consider alerts sent from the system (e.g., via email or text messages) and assess the needed protections of data in the alerts.</h3>
<p> Consult NIST 800-60 Volume II for datatypes and the categorization of the data. The categorization (Low, Moderate, or High) corresponds to the FedRAMP baseline of security controls (Low, Moderate, or High) that need to be applied to protect that data. The CSP may determine that changes need to be made to the alerts. For example, they may need to modify the contents of the alerts and keep the sensitive data within the boundary where the full set of security controls are being applied.
(April 25, 2018) 
</p>
</div>

<div class="q3">
<h3>Q: How can my Agency support Cloud Service Providers (CSPs) that need to demonstrate federal demand as part of FedRAMP Connect? </h3>
<p><strong>A:</strong>  FedRAMP Connect was developed to ensure that CSPs that are prioritized to pursue a Joint Authorization Board (JAB) Provisional Authority to Operate (P-ATO) have demand from Federal Agencies for their cloud offering and that they are well prepared to begin the authorization process. FedRAMP’s Prioritization Criteria outlines the criteria that is used to evaluate and select CSPs to partner with the JAB on a semi-annual basis.
Any CSP looking to pursue a JAB P-ATO must prove federal demand for their cloud offering. Agencies partnered with CSPs pursuing a JAB P-ATO can assist those CSPs by providing them with the following types of documentation that can be included in the CSPs’ applications to FedRAMP Connect:
ATO(s) demonstrating current use of the cloud service offering (CSO) in a FISMA on-premise environment
ATO(s) demonstrating current use of the CSO in a FedRAMP cloud environment
ATO(s) demonstrating current use of the CSO
RFI/RFQ/RFP demonstrating demand for the individual CSO
Attestation from the Agency OCIO/OCISO, or other representative IT leadership, indicating demand and prospective utilization of the CSO
Attestation or identification of shared demand with partner Agencies’ OCIO/OCISO, or other representative IT leadership
(April 18, 2018) 
 </p>
</div>

<div class="q3">
<h3>Q: Can I use the FedRAMP Significant Change Request (SCR) form for multiple significant changes?</h3>
<p><strong>A:</strong> Yes, you can include multiple significant changes as long as all changes will be implemented for assessment at the same time.  We often see SCR’s for multiple changes where the CSP is on-boarding multiple new services, tech-refresh of multiple component types and others.  The assumption is that testing for all of the new services and components will be performed under a single Security Assessment Plan (SAP) and the results will be reflected in a single Security Assessment Report (SAR).
(April 18, 2018) 

<div class="q3">
<h3>Q: My Agency is pursuing an authorization for a Software-as-a-Service (SaaS) solution. Does the underlying layer of the system stack also need to be authorized?</h3>
<p><strong>A:</strong> The “system stack” generally refers to the layers of services in the data center that are included in the cloud service offering, typically defined as a Platform-as-a-Service (PaaS) and Infrastructure-as-a-Service (IaaS). When authorizing a SaaS solution, the underlying stack of services that support it must also be authorized according to the appropriate FedRAMP baseline. As an example, for a SaaS being authorized at the Moderate baseline, the underlying PaaS and IaaS layers must also be authorized at Moderate (or High), and each component (SaaS, PaaS, IaaS) must have its own authorization boundary and its own ATO letter.
(April 11, 2018) 
</p>
</div>
 
<div class="q3">

<h3>Q: In the FedRAMP Continuous Monitoring Monthly Executive Summary, what information should I include in the “Items of Note” and “Issue Remediation” sections?</h3>
<p><strong>A:</strong> Use the “Issue Remediation” section to provide an explanation and remediation evidence for issues that the you or the FedRAMP PMO identified (e.g., un-authenticated scans threshold exceeded, unique vulnerability, etc.).
In the “Items of Note” section, include the following information:
Status of Annual Assessment - Provide the status from your perspective.
Details of vulnerability spike if present (see Continuous Monitoring Performance Management Guide) - Explain why the FedRAMP PMO would be seeing a unique or raw vulnerability spike this month if applicable.
Details of Plan of Action and Milestones (POA&M) issues if present - Use this section to explain if you made changes to the POA&M, were unable to fill out certain columns, etc. If the FedRAMP PMO identifies POA&M issues, you can respond to those in this section.
Late High Items (note pending deviations) - List all late items by POA&M ID and include Deviation Request (DR) status, remediation plan, explanation, etc. for each item.
Late Moderate Items (note pending deviations) - List all late items by POA&M ID and include Deviation Request (DR) status, remediation plan, explanation, etc. for each item.
(April 11, 2018)
</p>
</div>

<div class="q3">

<h3>Q: What is a security architecture diagram and what should it include?</h3>
<p><strong>A:</strong>  A security architecture diagram is a component of the System Security Plan (SSP) that illustrates how technical security controls are implemented in the environment.
Architectural and network diagrams must include all possible communication links between the CSP and Federal Agencies, as well as paths into the system boundary. If customers are not yet connecting directly, a CSP can identify all planned connection points in the SSP. The diagrams should be completed prior to writing control implementation statements.
Security architecture diagrams help to illustrate the key elements of the larger information security architecture. The information security architecture articulates the overall security program strategy in alignment with the position and selection of security control implementations. The information security architecture should be a stand-alone document(s) and address the requirements outlined in the control supplemental guidance in PL-8. It is not sufficient to simply reference other sections of the SSP.
(April 4, 2018) 
</p>
</div>

<div class="q3">
<h3>Q: How do I become “In Process” with a vendor?</h3>
<p><strong>A:</strong> The “In Process” designation signifies that a Cloud Service Provider (CSP) and an Agency are actively working toward achieving a FedRAMP Authorization. The FedRAMP PMO recently updated our requirements for a CSP to become In Process with an Agency. The Agency Authorizing Official (AO) or FedRAMP PMO approved designee must send an email to the FedRAMP PMO (info@fedramp.gov) stating that they are actively working with the CSP and plan to grant an Authority to Operate (ATO) that meets the FedRAMP requirements within 12 months.
In addition, one of the following must be met:
1. The Agency provides proof of a contract award for the use of the cloud service offering (CSO), and the contract specifies when an ATO that meets FedRAMP requirements must be achieved.
2. The Agency is using or testing the CSO and the Agency AO or approved designee sends an email to the FedRAMP PMO (info@fedramp.gov) stating that.
3. The CSO achieves “FedRAMP Ready” designation from the FedRAMP PMO.
4. The Agency, CSP, and FedRAMP PMO complete a formal kick-off meeting with agreement on:
A project plan from the CSP that outlines project milestones and schedule associated with the delivery of the authorization deliverables to the Agency and anticipated ATO date.
An authorization boundary diagram of all services/capabilities that are included within the security authorization package.
Resources available to support the FedRAMP authorization from the CSP and Agency. Personnel identified as critical to the authorization must to be present at the kick-off meeting.
(April 4, 2018) 
</p>
</div>
 
<div class="q3">
<h3>Q: Do the tools used for the penetration test need to be listed anywhere else besides in the Penetration Test Plan document?</h3>
<p><strong>A:</strong> Yes, the tools used for the penetration test must also be listed in the Security Assessment Plan (SAP) and match those listed in the Penetration Test Plan document. When completing Table 5-3 in the SAP, be sure to include each tool used for the security controls assessment, vulnerability scanning, and penetration test.
(April 4, 2018) 
</p>
</div>
