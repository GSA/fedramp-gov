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
<li>Update of the CSOs Plan of Action and Milestones (POA&M)</li>
<li>Submission of the completed Annual Assessment package, including the SAR and attachments, updated SSP and attachments, updated SAP, and POA&M to FedRAMP PMO or Agency AO</li>
</ul>
<p>CSPs are required to engage a 3PAO to complete Annual Assessment testing. All documentation that results from an Annual Assessment should be uploaded to the FedRAMP secure repository, OMB MAX. </p>

<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="/assets/resources/documents/CSP_Annual_Assessment_Guidance.pdf">Annual Assessment Guidance</a></li>
<li><a href="/assets/resources/documents/CSP_Annual_Assessment_Controls_Selection_Worksheet.xlsx">Annual Assessment Controls Selection Worksheet</a></li>
</ul>
</td>
<td>
<ul>
<li><a href=" ">Fed</a></li>
</ul>
</td>
<td>
<ul>
{% for post in site.tags[page.tag] %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
  </li>
{% endfor %}
</ul>
</td>