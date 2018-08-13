---
layout: page
title: Developing a Plan of Actions & Milestones (POA&M)
permalink: /developing-a-plan-of-actions-milestones/
tag: developing-a-plan-of-actions-milestones
---
<p>The Plan of Actions & Milestones (POA&M) is a key document in the security authorization package and for continuous monitoring activities. The POA&M facilitates a disciplined and structured approach to tracking risk mitigation activities. The POA&M includes security findings for the system from continuous monitoring activities and periodic security assessments such as the Annual Assessment. A POA&M describes the current disposition of any discovered vulnerabilities and system findings, and includes a CSP’s intended corrective actions for those findings. </p>
<p>FedRAMP uses the POA&M to monitor the CSP’s progress in correcting these findings. A CSP applying for a FedRAMP JAB P-ATO, or a FedRAMP Agency ATO, must establish and maintain a POA&M for their system in accordance with the POA&M Template Completion Guide using the FedRAMP POA&M Template.  The POA&M includes the:</p>
<ul>
<li>Security categorization of the cloud information system</li>
<li>Specific weaknesses or deficiencies in deployed security controls</li>
<li>Importance of the identified security control weaknesses or deficiencies</li>
<li>Scope of the weakness in components within the environment</li>
<li>Proposed risk mitigation approach to address the identified weaknesses or deficiencies in the security control implementations (e.g., prioritization of risk mitigation actions and allocation of risk mitigation resources)</li>
</ul>

<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_POAM_Template_Completion_Guide.pdf">Plan of Action and Milestones (POA&M) Template Completion Guide</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-POAM-Template.xlsm">Plan of Action and Milestones (POA&M) Template</a></li>
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
