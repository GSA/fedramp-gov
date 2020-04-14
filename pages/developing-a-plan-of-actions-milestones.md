---
layout: page
title: Developing a Plan of Actions & Milestones (POA&M)
permalink: /developing-a-plan-of-actions-milestones/
tag: developing-a-plan-of-actions-milestones
---
<p>The Plan of Actions &amp; Milestones (POA&amp;M) is a key document in the security authorization package and for continuous monitoring activities. The POA&amp;M facilitates a disciplined and structured approach to tracking risk mitigation activities. The POA&amp;M includes security findings for the system from continuous monitoring activities and periodic security assessments such as the Annual Assessment. A POA&amp;M describes the current disposition of any discovered vulnerabilities and system findings, and includes a CSP’s intended corrective actions for those findings. Agency AOs or designees are responsible for reviewing and approving POA&amp;Ms, making their own risk-based decision both at the time of the initial assessment and during ConMon.  </p>
<p>FedRAMP uses the POA&amp;M to monitor the CSP’s progress in correcting these findings. A CSP applying for a FedRAMP JAB P-ATO, or a FedRAMP Agency ATO, must establish and maintain a POA&amp;M for their system in accordance with the POA&amp;M Template Completion Guide using the FedRAMP POA&amp;M Template.  The POA&amp;M includes the:</p>
<ul>
<li>Specific weaknesses or deficiencies in deployed security controls and the source of the identified weakness</li>
<li>Severity of the identified security control weaknesses or deficiencies</li>
<li>Scope or affected assets of the weakness in components within the environment</li>
<li>Proposed risk mitigation approach to address the identified weaknesses or deficiencies in the security control implementations (e.g., prioritization of risk mitigation actions and allocation of risk mitigation resources)</li>
<li>Any deviation request status</li>
</ul>

<table class="usa-table">
<tr>
<th scope="col">Documents</th>
<th scope="col">Templates</th>
<th scope="col">Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_POAM_Template_Completion_Guide.pdf">Plan of Action and Milestones (POA&amp;M) Template Completion Guide</a></li>
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
