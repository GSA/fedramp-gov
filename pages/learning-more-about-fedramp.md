---
layout: page
title: Learning More About FedRAMP
permalink: /learning-more-about-fedramp/
tag: learning-more-about-fedramp
---
The FedRAMP Ready designation indicates that a Third Party Assessment Organization (3PAO) attests to a CSP’s readiness for the authorization process, and that a Readiness Assessment Report (RAR) has been reviewed and approved by the FedRAMP PMO. The RAR documents the CSP’s capability to meet FedRAMP security requirements and is intended to help vendors, the Joint Authorization Board (JAB), and Agencies have a snapshot of the security posture of a cloud service without the full investment of going through the full FedRAMP process of testing and documentation.
To achieve the FedRAMP Ready designation, a CSP must partner with an accredited 3PAO to complete a readiness assessment of its service offering. At the conclusion of the assessment, the 3PAO delivers a RAR attesting to the CSO’s readiness for the authorization process. RARs are reviewed by the FedRAMP PMO within one business week of submission. Once the RAR is deemed satisfactory by the PMO, the CSO will be designated FedRAMP Ready and advertised in the FedRAMP Marketplace.
<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="/assets/resources/documents/FedRAMP_Security_Assessment_Framework.pdf">Security Assessment Framework</a></li>
<li><a href="/assets/resources/documents/FedRAMP_Master_Acronym_and_Glossary.pdf">FedRAMP Master Acronym & Glossary</a></li>
<li><a href="/assets/resources/documents/FedRAMP_Branding_Guidance.pdf">Branding Guidance</a></li>
<li><a href="/assets/resources/documents/Agency_Authorization_Playbook.pdf">Agency Authorization Playbook</a></li>
<li><a href="/assets/resources/documents/CSP_Authorization_Playbook_Getting_Started_with_FedRAMP.pdf">CSP Authorization Playbook: Getting Started with FedRAMP</a></li>
<li><a href="/assets/resources/documents/FedRAMP_Accelerated_A_Case_Study_For_Change_Within_Government.pdf">FedRAMP Accelerated: A Case Study for Change Within Government</a></li>	
<li><a href="/assets/resources/documents/3PAO_Obligations_and_Performance_Guide.pdf">3PAO Obligations and Performance Guide</a></li>
</ul>
</td>
<td>
<ul>
<li><a href=" ">FedR</a></li>
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