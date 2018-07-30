---
layout: page
title: Developing a System Security Plan (SSP)
permalink: /developing-a-system-security-plan/
tag: developing-a-system-security-plan
---
<p>The System Security Plan (SSP) is the main document of a security package in which a CSP describes all the security controls in use on the information system and their implementation. Once completed, a SSP provides a detailed narrative of a CSP’s security control implementation, a detailed system description including components and services inventory, and detailed depictions of the system’s data flows and authorization boundary. FedRAMP provides an SSP template for each of its baselines: Low, Moderate, and High. In addition to a completed SSP template, CSPs should complete and append the following materials to their security documentation.</p>
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
  <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
  </li>
{% endfor %}
</ul>
</td>