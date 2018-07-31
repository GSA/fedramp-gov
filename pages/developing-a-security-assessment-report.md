---
layout: page
title: Developing a Security Assessment Report (SAR)
permalink: /developing-a-security-assessment-report/
tag: developing-a-security-assessment-report
---
<p>The Security Assessment Report (SAR) contains the results of the comprehensive security assessment of a CSP’s cloud service offering, including a summary of the risks associated with vulnerabilities of the system identified during testing. The purpose of a SAR is to evaluate the system’s implementation of, and compliance with, the FedRAMP baseline security controls, and thus the system’s compliance with FISMA security mandates.</p>
<p>A CSP’s Independent Assessor (IA) Third Party Assessment Organization (3PAO) is responsible for generating the SAR following assessment and the document must align with the assessment methodology described in the Security Assessment Plan (SAP) and address the control detail described in the System Security Plan (SSP). An effective SAR should inform a CSP’s Plan of Action & Milestones (POA&M) and reflect the true risk posture of the system.
</p>
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

<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href=" ">Fed</a></li>
</ul>
</td>
<td>
<ul>
<li><a href=" ">AP</a></li>
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