---
layout: page
title: Tips & Cues
permalink: /tips-cues/
body-class: page-fed-agencies
---
Many of our Cloud Service Providers (CSPs), Federal Agencies, and Third Party Assessment Organizations (3PAOs) share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we provide bi-weekly tips and address frequently asked questions and concerns. Below you will find our most recent month of Tips & Cues. To receive our bi-weekly email, sign up [here](https://public.govdelivery.com/accounts/USGSA/subscriber/new?qsp=USGSA_2224) for our listserv. 

You can also review and search all of our past Tips & Cues by downloading our compilation document <a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Tips_and_Cues.pdf">here</a>.
<h2>June 2019 Tips & Cues</h2>

<div class="q3">
<h3>TIP: Cloud Service Providers (CSPs) pursuing a JAB P-ATO have asked about how to implement new technologies. New technologies have a minimum control set in the significant change policy and procedures. The assumption is that all the controls will be assessed unless the 3PAO provides a rationale for excluding controls or scoping the assessment of the controls as:</h3>
    <ul>
<li>Not Applicable (N/A) - The nature of the component means it inherently does not contain this capability and will not be tested (e.g. controls that apply to collaborative computing devices only apply if that capability exists in the system)</li>
<li>Not Selected (N/S) - A centralized automated mechanism ensures the implementation of the specific control, and that central automated mechanism has already been assessed to ensure that it is operating as intended and producing the desired result. Therefore, the assessment of the control will be scoped to only verifying/validating that the component is integrated into the centralized automated mechanism. Here are a few examples of centralized and/or automated mechanisms that implement other controls:</li>
  <p>
  - AC-2 (1) - The organization employs automated mechanisms to support the management of information system accounts
  </p>
  <p>
  - AU-7 - The information system provides an audit reduction and report generation capability
  </p>
  <p>
  - CM-6 (1) - The organization employs automated mechanisms to centrally manage, apply, and verify the configuration settings for organization-defined information system components.
  </p>
  <p>
JAB reviewers will review each rationale for excluding controls from assessment or scoping the assessment of the control to determine if they concur.  
  </p>
  
  
<h3>Q: A CSP asked, “What is the process for handling False Positives found during Initial or Annual Assessment when the Security Assessment Report (SAR) is closed but has not yet been approved by the Sponsoring Agency?”</h3>
<p>
A: All of the False Positives found during the Annual Assessment should be added to the Plan of Action and Milestones (POA&M) list. If they are approved before the SAR is closed/signed, they are moved to the Closed Tab of the POA&M list. If they have not been approved, they should remain in the Open Tab of the POA&M list until approved. Then, at least Annually during assessment, the False Positives should be evaluated for continued False Positive status.
For more information on handling the Annual Assessment and scan findings check out the <a href="https://www.fedramp.gov/assets/resources/documents/CSP_Continuous_Monitoring_Strategy_Guide.pdf">CSP Continuous Monitoring Strategy Guide</a>.
  </p>
  
<h3>TIP: IA-5 (1) Control - FedRAMP guidance states if password policies are compliant with NIST SP 800-63B Memorized Secret Guidance (Section 5.1.1), the control may be considered compliant.</h3>
<p>
NIST SP 800-63B specifies that memorized secrets SHALL be at least 8 characters in length if chosen by the subscriber. Memorized secrets chosen randomly by the CSP or verifier SHALL be at least 6 characters in length and MAY be entirely numeric. For guidance on the subject of passwords, refer to <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63b.pdf">NIST SP 800-63B</a>.
  </p>

<h3>TIP: Significant Change Requests (SCR’s) for uplift from Moderate to High baseline require scan and pentest reports to be submitted.</h3>
<p>
Some vulnerability and penetration tests may still be acceptable from a recent Moderate Annual Assessment for the High baseline uplift. However a full analysis needs to be conducted to determine which controls need to be tested. The analysis must consider the additional controls for High, freshness of Annual Assessment testing, and ensuring all controls are tested within the three year time frame. For more on this, please refer to Continuous Monitoring performance documents on the <a href="https://www.fedramp.gov/">FedRAMP Website</a>. 
  </p>
  
 <h3>Q: “I'm a commercial organization that wants to leverage a FedRAMP authorized security package for my service offering. For example, I want to leverage a FedRAMP IaaS to implement my SaaS. How do I get access to their package to review it?”</h3>
A:  Commercial entities wishing to become tenants within a FedRAMP Public Cloud Service that hosts both Federal and Commercial customers should work directly with the Cloud Service Provider for all necessary security documentation and cloud services. At a minimum, this should include the customer responsibilities; however, many service providers provide additional services, such as partially filled out SSP templates and other services that can onboard tenants rapidly. The FedRAMP PMO does not provide any access to commercial customers of the cloud service.
