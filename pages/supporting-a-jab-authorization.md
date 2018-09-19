---
layout: page
title: Supporting a JAB Authorization
permalink: /supporting-a-jab-authorization/
tag: pursuing-a-jab-authorization
---
<p>CSPs that make a business decision to pursue a Joint Authorization Board (JAB) Provisional Authority to Operate (P-ATO) for their CSO are prioritized quarterly. During the prioritization process, the JAB aims to authorize cloud services it believes are most likely to be leveraged government-wide. More information on  the JAB Authorization Process can be found on the <a href="/jab-authorization/">JAB Authorization webpage</a>.</p>
<p>Additionally, the documents, templates, and blogs below all relate to the FedRAMP JAB Authorization Process.</p>
<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_JAB_P-ATO_Prioritization_Criteria_and_Guidance.pdf">JAB P-ATO Prioritization Criteria and Guidance</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/3PAO_Roles_and_Responsibilities.pdf">3PAO JAB P-ATO Roles and Responsibilities</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_JAB_P-ATO_Roles_and_Responsibilites.pdf">CSP JAB P-ATO Roles and Responsibilites</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Accelerated_A_Case_Study_For_Change_Within_Government.pdf">FedRAMP Accelerated: A Case Study for Change Within Government</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Authorization_Playbook_Getting_Started_with_FedRAMP.pdf">CSP Authorization Playbook: Getting Started with FedRAMP</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Timeliness_and_Accuracy_of_Testing_Requirements.pdf">Timeliness and Accuracy of Testing Requirements</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Joint_Authorization_Board_Charter.pdf">Joint Authorization Board Charter</a></li>
</ul>
</td>
<td>
<ul>
<li>Please visit our <a href="{{site.baseurl}}/templates">templates</a> page to see all templates required to develop a Security Package for a JAB Authorization.</li>
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
