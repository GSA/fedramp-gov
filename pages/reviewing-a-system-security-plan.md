---
layout: page
title: Reviewing a System Security Plan (SSP)
permalink: /reviewing-a-system-security-plan/
tag: developing-a-system-security-plan
---
<p>The System Security Plan (SSP) is the main document of a security package in which a CSP describes all the security controls in use on the information system and their implementation. Once completed, a SSP provides a detailed narrative of a CSP’s security control implementation, a detailed system description including components and services inventory, and detailed depictions of the system’s data flows and authorization boundary. FedRAMP provides an SSP template for each of its baselines: Low, Moderate, and High.</p>
<p>Agency AOs or designees are responsible for reviewing and approving the SSPs ensuring the appropriate level of detail and the implementation of controls is acceptable, both at time of assessment and during ConMon.  Some Agencies may require additional controls on top of the FedRAMP baselines.</p>
<p>In addition to a completed SSP template, CSPs should complete and append the following materials to their security documentation:</p>
<ul>
<li>Information Security Policies and Procedures</li>
<li>User Guide</li>
<li>Digital Identity Worksheet</li>
<li>Privacy Impact Assessment (PIA) Template</li>
<li>Rules of Behavior (RoB) Template</li>
<li>Information System Contingency Plan (ISCP) Template</li>
<li>Configuration Management Plan (CMP)</li>
<li>Incident Response Plan (IRP)</li>
<li>Control Implementation Summary (CIS)</li>
<li>Federal Information Processing Standard (FIPS) 199 Categorization Template*</li>
<li>Separation of Duties Matrix</li>
<li>FedRAMP Laws and Regulations</li>
<li>FedRAMP Integrated Inventory Workbook Template</li>
</ul>

<table class="usa-table">
<tr>
<th scope="col">Documents</th>
<th scope="col">Templates</th>
<th scope="col">Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Security_Controls_Baseline.xlsx">FedRAMP Security Controls Baseline</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Agency_Authorization_Best_Practices_for_CSPs.pdf">Agency Authorization - Best Practices for CSPs</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_A_FedRAMP_Authorization_Boundary_Guidance.pdf">FedRAMP Authorization Boundary Guidance</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Digital_Identity_Requirements.pdf">Digital Identity Requirements</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_TLS_Requirements.pdf">Transport Layer Security (TLS) Requirements</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Incident_Communications_Procedures.pdf">Incident Communications Procedures</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Vulnerability_Scan_Requirements_Using_Sampling.pdf">Guide for Determining Eligibility and Requirements for the Use of Sampling for Vulnerability Scans</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Vulnerability_Scanning_Requirements.pdf">Vulnerability Scanning Requirements</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_General_Document_Acceptance_Criteria.pdf">FedRAMP General Document Acceptance Criteria</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-SSP-High-Baseline-Template.docx">FedRAMP System Security Plan (SSP) High Baseline Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-SSP-Moderate-Baseline-Template.docx">FedRAMP System Security Plan (SSP) Moderate Baseline Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-SSP-Low-Baseline-Template.docx">FedRAMP System Security Plan (SSP) Low Baseline Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A03-FedRAMP-E-Authentication-Plan-Template.docx">SSP ATTACHMENT 3 - FedRAMP Electronic Authentication (E-Authentication) Plan Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A04-FedRAMP-PIA-Template.docx">SSP ATTACHMENT 4 - FedRAMP Privacy Impact Assessment (PIA) Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A05-FedRAMP-RoB-Template.docx">SSP ATTACHMENT 5 - FedRAMP Rules of Behavior (RoB) Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A06-FedRAMP-ISCP-Template.docx">SSP ATTACHMENT 6 - FedRAMP Information System Contingency Plan (ISCP) Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A09-FedRAMP-High-CIS-Workbook-Template.xlsx">SSP ATTACHMENT 9 - FedRAMP High Control Implementation Summary (CIS) Workbook Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A09-FedRAMP-Low-or-Moderate-CIS-Workbook-Template.xlsx">SSP ATTACHMENT 9 - FedRAMP Low or Moderate Control Implementation Summary (CIS) Workbook Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A10-FedRAMP-FIPS-199-Categorization-Template.docx">SSP ATTACHMENT 10 - FedRAMP Federal Information Processing Standard (FIPS) 199 Categorization Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A12-FedRAMP-Laws-and-Regulations-Template.xlsx">SSP ATTACHMENT 12 - FedRAMP Laws and Regulations Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SSP-A13-FedRAMP-Integrated-Inventory-Workbook-Template.xlsx">SSP ATTACHMENT 13 - FedRAMP Integrated Inventory Workbook Template</a></li>
</ul>
</td>
<td>
<ul>
{% for post in site.tags[page.tag] %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%B %-d %Y" }})<br>
    {{ post.description }}
  </li>
{% endfor %}
</ul>
</td>
