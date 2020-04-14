---
layout: page
title: Completing an Annual Assessment
permalink: /completing-an-annual-assessment/
tag: completing-an-annual-assessment
---
Completing an annual assessment for a FedRAMP authorized CSO includes: 
<ul>
<li>Review and update, as required, of the System Security Plan (SSP) and attachments</li>
<li>Completion of a Incident Response Plan Test and provision of the Incident Response Plan Test Report</li>
<li>Completion of a Contingency Plan functional test and provision of the Contingency Plan Test Report</li>
<li>Completion of the Annual Assessment Security Assessment Plan (SAP)</li>
<li>Completion of Annual Assessment testing</li>
<li>Completion of the Annual Assessment Security Assessment Report (SAR)</li>
<li>Update of the CSOs Plan of Action and Milestones (POA&amp;M)</li>
<li>Submission of the completed Annual Assessment package, including the SAR and attachments, updated SSP and attachments, updated SAP, and POA&amp;M to FedRAMP PMO or Agency AO</li>
</ul>
<p>CSPs are required to engage a 3PAO to complete Annual Assessment testing. All documentation that results from an Annual Assessment should be uploaded to the FedRAMP secure repository, OMB MAX, by the CSP’s ATO date. The Annual Assessment should be reviewed by their agency customer(s) Authorizing Official and approved before being uploaded to OMB MAX. Any updates to an offering’s Impact Level should be reported to the PMO, via info@fedramp.gov, before being uploaded to OMB MAX.  </p>

<table>
<tr>
<th scope="col">Documents</th>
<th scope="col">Templates</th>
<th scope="col">Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Annual_Assessment_Guidance.pdf">Annual Assessment Guidance</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Annual_Assessment_Controls_Selection_Worksheet.xlsx">Annual Assessment Controls Selection Worksheet</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/3PAO_Roles_and_Responsibilities.pdf">3PAO JAB P-ATO Roles and Responsibilities</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/3PAO_Obligations_and_Performance_Guide.pdf">3PAO Obligations and Performance Guide</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Annual-SAP-Template.docx">FedRAMP Annual Security Assessment Plan (SAP) Template</a></li>
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
