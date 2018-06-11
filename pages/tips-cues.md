---
layout: page
title: Tips & Cues
permalink: /tips-cues/
body-class: page-fed-agencies
---
Many of our Cloud Service Providers (CSPs), Federal Agencies, and Third Party Assessment Organizations (3PAOs) share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we provide weekly tips and address frequently asked questions and concerns. Below you will find our most recent month of Tips & Cues. To receive our weekly email, sign up [here](https://public.govdelivery.com/accounts/USGSA/subscriber/new?qsp=USGSA_2224) for our listserv. 

You can also review and search all of our past Tips & Cues by downloading our compilation document <a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Tips_and_Cues.pdf">here</a>.

<h2>May 2018 Tips & Cues</h2>
 
<div class="q3">
<h3>Q: Can we start the annual assessment early?</h3> 
<p><strong>A:</strong> Yes, you can start your annual assessment early as long as you submit your package before the anniversary date of your Provisional Authority to Operate (P-ATO). However, you should work with your Authorizing Official to determine that the schedule is appropriate.
<em>(May 2, 2018)</em>
</p>
</div>

<div class="q3">
<h3>Q: Are there any additional requirements for a Significant Change involving changing a scanning tool?</h3>
<p><strong>A:</strong> In order to change vulnerability scanning tools, you must develop a plan for the transition. The vulnerabilities that are identified in your current scanner must be addressed via the Plan of Action and Milestones (PO&AM) process.
</p>
<p>
Vulnerability scans are often used to show closure of vulnerabilities. If the current scanner is removed, the current vulnerabilities must still be tracked (and evidence of closure should be provided). Many CSPs operate their current scanner in limited capacity (performing targeted scans) in parallel with their new scanner until the existing vulnerabilities are remediated or appropriately mapped to the new scanner. This is will clear the existing vulnerabilities from the old scanner and determine that the new scanner can deliver similar scan results. 
<em>(May 2, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: Effective July 1, 2018, CSPs must complete implementation of TLS version 1.1 for their Federal Agency customers.</h3>
<p>
CSPs must ensure that federal customers are fully authenticated and compliant with TLS version 1.1 or higher (turning off TLS 1.0 and below). 
<em>(May 9, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: When updating the Plan of Action and Milestones (POA&M) to account for findings in the Security Assessment Report (SAR), consider the following:</h3>
<p>
- The POA&M items should be easily traceable to the same finding in the SAR, with matching unique IDs.
 </p>
<p>
- The details of POA&M items should map to the same details of the same findings in the SAR (one for one).
 </p>
<p>
- For findings in the SAR that are already in the POA&M, the original discovery date should remain unchanged.
 </p>
<p>
- For new findings that are not already in the POA&M, the discovery date should be no later than the last day of the assessment noted in the paragraph above SAR Table ES-1.
 <p>
- Unless the findings are operationally required, completion dates should be in line with FedRAMP required timeframes for remediation. From the date of discovery, high risks should be remediated within 30 days, moderate risks within 90 days, and low risks within 180 days.
 </p>
 <p>
- Deviations should be appropriately reflected in the POA&M to match those in the SAR. All pre-existing deviations, prior to the start of the assessment, must be accounted for correctly and consistently across the SAR and POA&M documents.
 </p>
 <p>
- The CSP should monitor changes to the SAR to ensure any changes are carried over to the POA&M.
 </p>
<em>(May 9, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: During Continuous Monitoring, the Agency Authorizing Official (AO) is responsible for ensuring that the security posture of the cloud service their Agency is using continues to be acceptable.</h3>
<p>
The responsibility for the AO (or his/her designated representative) includes reviewing the system security artifacts provided by the Cloud Service Provider (CSP), Third Party Assessment Organization (3PAO), and FedRAMP PMO (in the case of services with a JAB P-ATO) for both granting the authorization and during continuous monitoring. The AO should have confidence that the security posture of the service is maintained in good standing for ongoing authorization. 
<em>(May 16, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: When assessing an Alternative Implementation (AI), the 3PAO is expected to make two determinations:</h3>
1. Does the AI provide protection equivalent to or greater than the defined requirement?
2. Is the control implemented as expected and functioning as intended?
<p>
Alternative security control implementations must be accurately documented and assessed. The Security Assessment Plan (SAP) must clearly outline the 3PAO’s approach to assessing alternative security control implementations. In most cases, the 3PAO must develop alternative assessment steps/methods to complement the assessment steps/methods outlined in NIST 800-53A (as revised) and include the alternative testing steps in the SAP.
</p>
<p>
Some alternative security control implementations have no direct path for identifying insecure alternative implementations. In those cases, the 3PAO must use their expertise and clearly justify the testing methodology for the alternative implementations. The FedRAMP PMO heavily weighs the 3PAO’s professional expertise in assessing the sufficiency of an alternative security control implementation.
<em>(May 16, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: Agencies and CSPs are encouraged to adjust password complexity implementation for memorized secrets to align with NIST 800-63B, Digital Identity Guidelines: Authentication and Lifecycle Management.</h3>
<p>
FedRAMP Moderate and High controls IA-5 (g) and IA-5 (1) (a,d) are known to be more restrictive than the new password requirements in 800-63B, AAL2 and AAL3 respectively. The FedRAMP PMO is working to update our baselines to reflect the changes outlined in NIST 800-63B.
 </p>
 In the meantime, FedRAMP recommends Agency Authorizing Officials (AOs) accept compliance with NIST’s guidance, which is most up-to-date and consistent with current cyber security threats. Until the baselines are updated, this may be done using an implementation status of “Alternative Implementation.” Please refer to the FedRAMP Digital Identity Requirements. 
<em>(May 23, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: Scanners will often identify a vulnerability that has been addressed by a backport. This is a False Positive (FP), and the CSP should submit an FP Deviation Request (DR) in this situation.</h3>
<p>
To ensure accurate completion of this type of DR:
 </p>
<p>
Include the vulnerability ID and the associated Common Vulnerabilities and Exposures (CVEs) reported by the scanner in the DR form.
</p>
<p>
Provide the reference/resource that describes what CVEs the backport addresses.
 </p>
 <p>
Provide screenshots showing the that backport is implemented on each impacted component. Make sure the IP/hostname is visible in the screenshot as evidence for that specific component. 
<em>(May 23, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: Before onboarding new services to your authorized cloud service, make sure that all applicable controls are within the previously authorized controls.</h3>
<p>Any service that introduces new controls to the environment is considered a significant change and may require additional steps to be onboarded. Work with your Authorizing Official to determine the appropriate steps to add new services to your authorization boundary. 
<em>(May 30, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: A deviation request (DR) should assume a reviewer has sufficient general knowledge of the technologies involved, but no specific knowledge of the CSP’s system.  Ensure the DR contains sufficient system detail to give the reviewer appropriate context.</h3>
<p>
 </p>
<p>
DRs should tell the full story of the risk to the system and mitigations in place to address the risk. When preparing deviation requests for operationally required and/or risk adjustment items, address the following:
 </p>
<p>
- What components are impacted by the vulnerability and what is their function in the environment
 </p>
<p>
- What would be required to exploit the vulnerability?
<p>
- What exists or what has been put in place to reduce the risk (reduce the likelihood of exploitation and/or reduce the impact of exploitation)?
 <p>
- Note that the CSP always has the option of putting in place additional security controls to further mitigate a risk to an acceptable level. An example could be setting up additional monitoring to detect specific conditions related to the vulnerability.
<em>(May 30, 2018)</em>
</p>
</div>
