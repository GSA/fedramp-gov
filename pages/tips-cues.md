---
layout: page
title: Tips & Cues
permalink: /tips-cues/
body-class: page-fed-agencies
---
Many of our Cloud Service Providers (CSPs), Federal Agencies, and Third Party Assessment Organizations (3PAOs) share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we provide bi-weekly tips and address frequently asked questions and concerns. Below you will find our most recent month of Tips & Cues. To receive our bi-weekly email, sign up [here](https://public.govdelivery.com/accounts/USGSA/subscriber/new?qsp=USGSA_2224) for our listserv. 

You can also review and search all of our past Tips & Cues by downloading our compilation document <a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Tips_and_Cues.pdf">here</a>.
<h2>May 2019 Tips & Cues</h2>

<div class="q3">
<h3>TIP: Cloud Service Providers (CSPs) should ensure that the Vulnerability Scanning Tool is set to score vulnerabilities in accordance with Common Vulnerability Scoring System (CVSS) Version 3, not Version 2.</h3>
<p>
  In March 2018, the FedRAMP PMO published new <a href="https://www.fedramp.gov/assets/resources/documents/CSP_Vulnerability_Scanning_Requirements.pdf">Vulnerability Scanning Guidance</a> that requires CSPs to score National Vulnerabilities Database (NVD) Vulnerabilities using the NIST Common Vulnerability Scoring System (CVSS) Version 3. CSPs must ensure that the Vulnerability Scanning tool is set to score vulnerabilities at CVSS Version 3 and list these in the Plan of Actions and Milestones (POAM) as Version 3.
Many Vulnerability Scanners are set to score vulnerabilities to CVSS Version 2. This tracks vulnerabilities in the POAM at the outdated scores of Version 2, with longer remediation time frames than required for CVSS Version 3.
  </p>
  <p>
There may be cases where there is only a CVSS Version 2 score available for a vulnerability. In this case, it is permissible to use the Version 2 score. There are, of course, situations where there is no score available for a vulnerability in the NVD. In this case, the scanner tool scoring can be used. For more on the impact of the change from CVSS Version 2 to Version 3, please read the NIST guidelines: https://nvd.nist.gov/vuln-metrics/cvss.
  </p>
</div>

<div class="q3">
<h3>Q: If the effort and/or costs are too great to remediate a vulnerability within the required time period, is it acceptable to submit a risk adjustment?</h3>
<p>
A: Generally, the level of effort and/or cost of implementing a remediation are not acceptable justifications for leaving a system that is authorized for processing federal data in a vulnerable state.
During the initial assessment of the system, the CSP is assessed to determine its ability to perform continuous monitoring successfully, which includes timely remediation of vulnerabilities. This also includes an assessment of the CSP’s equipment acquisition and life-cycle management plan to ensure vendor products can be maintained and/or replaced to stay on top of security. The CSP, therefore, should be aware of equipment end-of-life/end-of-support.
In the rare event that timely remediations need to be postponed, it is incumbent upon the CSP to employ mitigations that reduce the risk of the vulnerability. This risk mitigation and adjustment should be described in detail in the Deviation Request, and a plan for ultimate remediation and compliance should be included.
  </p>
</div>

<div class="q3">
<h3>Q: Can a CSP close out Operational Requirements (ORs) in the Plan of Action and Milestones (POA&M)?</h3>
<p>
A: Operational Requirements (OR’s) occur when a vulnerability is found within the Information System, but the remediation (ie patch, parameter setting, etc.) cannot be implemented without adverse impact on the system. OR’s are accepted by the Joint Authorization Board (JAB) or Sponsoring Agency when strong mitigations are implemented to adjust the risk as low as possible. ORs remain in the Open Tab of the POA&M spreadsheet until the vulnerability is eliminated. The OR is reviewed at least yearly during Annual Assessments to confirm continued need with a view toward closing out the vulnerability.
</p>
</div>

<div class="q3">
  <h3>TIP: Here are some basic questions our FedRAMP SMEs get about FIPS 140-2 validation compliance for Multi Factor Authentication (MFA).</h3>
<p>
Question: I hear FIPS-validation does not apply to One-Time-Password (OTP) authentication. Is this true or false?
  </p>
<p>
Answer: This is FALSE! You need both a FIPS-validated authenticator (and OTP authenticator) and a Verifier! However, there is a minor exception - low baseline systems can skip FIPS 140 on authenticators. FIPS 140 is still required for the verifier.
</p>
  <p>
Question: If I use a PIV for authentication do I need a FIPS-validated verifier?
</p>
  <p>
Answer: Nope! Verifiers are only required for OTP MFA (tokens).
</p>
  <p>
Question: If several MFA solution choices (both FIPS-validated and non-FIPS validated) are provided for use by an underlying service vendor, may I select any MFA solution? Are there any out-of-band authenticators that I may not use?
</p>
  <p>
Answer: Nope! You are responsible for choosing a MFA solution that is FIPS-validated. You may not use email, voice, or SMS. If you need any help with understanding anything related to MFA solutions, you can get technical details from  <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf">NIST SP 800-63B</a>.
</p>
  <p>
Question: How can a vendor meet the requirements of FIPS 140?
</p>
  <p>
Answer: In order to meet the requirements of FIPS 140, a vendor must do one of two things:
</p>
1) Submit to the NIST Cryptographic Module Validation Program (CMVP) and get their own certificate

or

2) Self-attest that their product meets the following criteria: Includes an existing CMVP validated Cryptographic Module (CM); The CM is deployed according to the Security Policy that comes with it; All cryptographic functions are performed inside the validated CM.
</div>

<div class="q3">
<h3>Q: Do I need to implement DHS <a href="https://cyber.dhs.gov/assets/report/bod-18-01.pdf">Binding Operational Directive </a>(BOD-18-01/Subj: Enhance Email and Web Security) regarding Domain-based Message Authentication, Reporting & Conformance (DMARC)?</h3>
<p>
A: Like all things with Security, it depends. If your Cloud Service Offering (CSO) includes a service or function that sends email for/on behalf of the Government - regardless of the actual sender - it does apply, and you must implement the Directive requirements. However, if you just use email to send notifications about internal CSO system events or issues (e.g., the system is down, announcing a system maintenance window, or maybe disk full) to the Government or CSP administrators, compliance with the Directive is not required, though would be considered a best practice.
</p>
</div>

<div class="q3">
  <h3>TIP: Recently, we’ve received inquiries about the SAR review process for CSPs pursuing a JAB Provisional Authorization to Operate (P-ATO). There are a number of things that JAB Reviewers need in order to properly assess risks noted in the SAR:</h3>
  <p>
1) Each finding should be identified as externally or internally facing.  
- 3PAOs can explicitly label the findings that are “externally facing” in Table 4-1.
- Once findings are labeled, 3PAOs can include a general statement above Table 4-1 stating "findings in Table 4-1 are internally facing unless they are explicitly identified as externally facing.”
  </p>
  <p>
2) The assets impacted in a finding should have some descriptive information to indicate, such as OS type and function (e.g. OS=Juniper Function=Firewall).
</p>
  
**Controls Findings:**
- Identify everything the 3PAO is considering when applying a risk rating.
- Enough explanation should be provided for the reviewer to follow the 3PAO's thought process. For example, a moderate risk that only discusses a problem resulting from the lack of a control’s implementation (and does not discuss the positive factors that resulted in a moderate rating rather than high risk rating) might actually give the impression that a higher risk rating should have been applied.
</div>


<div class="q3">
  <h3>Q: Can a service that is installed but disabled in an asset be a False Positive finding when a scan is conducted?</h3>

A: Technically, if the service is not enabled, it is a false positive. Some may argue, “why not uninstall it?” This is dependent on how the code is packaged. Uninstalling might sometimes identify and expose other weaknesses.

A screenshot of the configuration file from the asset in question should be enough to confirm the status of the service.

</div>
