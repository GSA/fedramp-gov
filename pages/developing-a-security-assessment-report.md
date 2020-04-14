---
layout: page
title: Developing a Security Assessment Report (SAR)
permalink: /developing-a-security-assessment-report/
tag: developing-a-security-assessment-report
---
<p>The Security Assessment Report (SAR) contains the results of the comprehensive security assessment of a CSP’s cloud service offering, including a summary of the risks associated with vulnerabilities of the system identified during testing. The purpose of a SAR is to evaluate the system’s implementation of, and compliance with, the FedRAMP baseline security controls, and thus the system’s compliance with FISMA security mandates.</p>
<p>A CSP’s Independent Assessor (IA) Third Party Assessment Organization (3PAO) is responsible for generating the SAR following assessment and the document must align with the assessment methodology described in the Security Assessment Plan (SAP) and address the control detail described in the System Security Plan (SSP). An effective SAR should inform a CSP’s Plan of Action &amp; Milestones (POA&amp;M) and reflect the true risk posture of the system.
</p>
<p>Like SSPs, Agency AOs or designees are responsible for reviewing and approving the SARs ensuring the appropriate level of testing was done and that they risk posture associated with the system is acceptable to that Agency, both at time of assessment and during ConMon.</p>
<p>In addition to a completed SAR template, 3PAOs should complete and append the following materials to their assessment report.
</p> 
<ul>
<li>FedRAMP Security Assessment Report</li>
<li>Risk Exposure Table</li>
<li>FedRAMP Security Test Case Workbook</li>
<li>Infrastructure Scan Results</li>
<li>Database Scan Results</li>
<li>Web Application Scan Results</li>
<li>Assessment Results</li>
<li>Manual Test Results</li>
<li>Documentation Review Findings</li>
<li>SAR Auxiliary Documents</li>
<li>Penetration Test Repor</li>
</ul>

<table class="usa-table">
<tr>
<th scope="col">Documents</th>
<th scope="col">Templates</th>
<th scope="col">Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Timeliness_and_Accuracy_of_Testing_Requirements.pdf">Timeliness and Accuracy of Testing Requirements</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_General_Document_Acceptance_Criteria.pdf">FedRAMP General Document Acceptance Criteria</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/3PAO_Obligations_and_Performance_Guide.pdf">3PAO Obligations and Performance Guide</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-SAR-Template.docx">FedRAMP Security Assessment Report (SAR) Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Vulnerability-Deviation-Request-Form.pdf">FedRAMP Vulnerability Deviation Request Form</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SAR-AA-FedRAMP-Risk-Exposure-Table-Template.xlsx">SAR APPENDIX A - FedRAMP Risk Exposure Table Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Annual-SAR-Template.docx">FedRAMP Annual Security Assessment Report (SAR) Template</a></li>
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
