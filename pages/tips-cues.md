---
layout: page
title: Tips & Cues
permalink: /tips-cues/
body-class: page-fed-agencies
---
Many of our Cloud Service Providers (CSPs), Federal Agencies, and Third Party Assessment Organizations (3PAOs) share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we provide weekly tips and address frequently asked questions and concerns. Below you will find our most recent month of Tips & Cues. To receive our weekly email, sign up [here](https://public.govdelivery.com/accounts/USGSA/subscriber/new?qsp=USGSA_2224) for our listserv. 

You can also review and search all of our past Tips & Cues by downloading our compilation document <a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Tips_and_Cues.pdf">here</a>.
<h2>November 2018 Tips & Cues</h2>

<div class="q3">
<h3>TIP: Using graphic to depict a security accreditation boundary is crucial for assessor to fully understand the security enclave that is being addressed by the CSP.</h3>
<p>
The Boundary Diagram is essential in that it provides a depiction and understanding of the components managed within the boundary as well as systems that are leveraged external to the boundary (such as the hosting IaaS) and interconnections. Further guidance on preparing the Boundary diagram can be found on our FedRAMP Documents Page in a document titled <a href="{{site.baseurl}}/assets/resources/documents/CSP_A_FedRAMP_Authorization_Boundary_Guidance.pdf">"FedRAMP Authorization Boundary Guidance"</a>
<em>(November 7, 2018)</em>
</p>
</div>

<div class="q3">
<h3>Q: The new <a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Vulnerability-Deviation-Request-Form.pdf">Vulnerability Deviation Request Form"</a> has changed from a PDF to Excel format. Can we add all Deviation Requests (DRs) to one spreadsheet, or do we have to submit a new spreadsheet for each DR?</h3>
<p>
A: You can add all DRs to one spreadsheet so each row on the excel file can be a new DR.
<em>(November 7, 2018)</em>
</p>
</div>

<div class="q3">
<h3>Q: Do the FedRAMP security controls restrict data to reside only within the United States?</h3>
<p>
A: There are no FedRAMP requirements restricting data to within the United States. There are multiple security controls that detail where data is stored, what the boundary of the system is, and where and how data in transit is protected. We have some providers that are authorized through FedRAMP that are located globally, although a majority of service providers do restrict their data to the United States. It is up to each individual Agency and Authorizing Official to place restrictions, if needed, on data location. Cloud service providers should work with current and potential customers to determine data location requirements.
<em>(November 14, 2018)</em>
</p>
</div>

<div class="q3">
<h3>Q: How can an Agency ensure it maintains reasonable investigation capabilities, auditability, and traceability of data within the cloud?</h3>
<p>
A: Agencies can ensure they maintain reasonable investigation capabilities, auditability, and traceability of data by logging and monitoring the following application events:
<ul>
<li> Management of network connections</li>
<li> Addition or removal of users</li>
<li> Management of changes to privileges</li>
<li> Assignment of users to tokens</li>
<li> Addition or removal of tokens</li>
<li> Management of system administrative privileges access</li>
<li> Actions by users with administrative privileges</li>
<li> Use of data encrypting keys</li>
<li> Management of key changes</li>
<li> Creation and removal of system level objects</li>
<li> Import and export of data, including screen based reports</li>
<li> Submission of user-generated content, especially file uploads</li>
<em>(November 14, 2018)</em>
 </ul>
</p>
</div>

<div class="q3">
<h3>Q: Could you explain the purpose and process behind requiring a CSP to complete an incident response test and contingency plan test before their 3PAO assessment?</h3>
<p>
A: It is important that the incident response test and the contingency plan test are done before a 3PAO assessment in order to ensure that the processes are functioning as intended and that lessons learned can be integrated into the plan. If a CSP does not complete an incident response test and contingency plan test before the 3PAO assessment, the Joint Authorization Board (JAB) will not issue the cloud offering a Provisional Authorization to Operate (P-ATO). These tests must be conducted in accordance with NIST SP 800-53, and the results should be made available to the 3PAO for evaluation. Once a P-ATO is granted, the tests should continue to be completed prior to the annual assessment so that the 3PAO can evaluate the results as part of that assessment. 
<em>(November 21, 2018)</em>
</p>
</div>

<div class="q3">
<h3>TIP: Your FedRAMP or government liaison is here to help guide you through the FedRAMP process. Communication is imperative to get through the FedRAMP process! The better communication you have, the smoother the process will go. </h3>
<p>
If you have any questions or concerns, or just want to brainstorm ideas, your FedRAMP liason can share potential impacts of any proposal you have. If you’re not sure a control implementation should be “Not Applicable” or an “Alternative Implementation,” your liason can help! And if you’re unclear on how to describe your PIV/CAC implementation, your government liaison can point you in the right direction! 
<em>(November 21, 2018)</em>
</p>
</div>

<div class="q3">
<h3>Q: If a FedRAMP-Authorized service offers several multi-factor authentication (MFA) methods to remotely access that service, may I use any of those forms of multifactor authentication to access the service?</h3>
<p>
A: Cryptographic functions are used in many levels in the cloud stack. Agency customers must ask the CSP questions regarding the depth of cryptography used.
FedRAMP asks CSPs that offer multiple MFA methods to customers, clearly document within their SSP those methods and the cryptographic modules along the authentication pathway that ARE FIPS-validated versus those methods that lack FIPS validation.
You should ensure that you use, and the CSP uses a FIPS 140-2 validated, National Information Assurance partnership (NIAP)-certified, or NSA-approved MFA device for access to the service, or access to any FedRAMP Cloud Service, in accordance with the FedRAMP-specified parameters and guidance in Security Control IA-2(11) within the System Security Plan (SSP) templates. 
 <em>(November 28, 2018)</em>
</p>
</div>

<div class="q3">
<h3>Q: Should I repeat the control requirement?</h3>
<p>
Do not repeat the control requirement. Feel free to use the control requirement as a jumping off point to write a detailed, specific implementation. Additionally, use the same action and key words within the control requirement when describing your implementation so it is clear exactly how the implementation meets the stated requirements. 
 <em>(November 28, 2018)</em>
</p>
</div>
