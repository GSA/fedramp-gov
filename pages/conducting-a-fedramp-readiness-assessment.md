---
layout: page
title: Conducting a FedRAMP Readiness Assessment
permalink: /conducting-a-fedramp-readiness-assessment/
tag: pursuing-a-fedramp-ready-designation
---
<p>The FedRAMP Ready designation indicates that a Third Party Assessment Organization (3PAO) attests to a CSP’s readiness for the authorization process, and that a Readiness Assessment Report (RAR) has been reviewed and approved by the FedRAMP PMO. The RAR documents the CSP’s capability to meet FedRAMP security requirements and is intended to help vendors, the Joint Authorization Board (JAB), and Agencies have a snapshot of the security posture of a cloud service without the full investment of going through the full FedRAMP process of testing and documentation.</p>
<p>To achieve the FedRAMP Ready designation, a CSP must partner with an accredited 3PAO to complete a readiness assessment of its service offering. At the conclusion of the assessment, the 3PAO delivers a RAR attesting to the CSO’s readiness for the authorization process. RARs are reviewed by the FedRAMP PMO within one business week of submission. Once the RAR is deemed satisfactory by the PMO, the CSO will be designated FedRAMP Ready and advertised in the FedRAMP Marketplace.
<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/3PAO_Readiness_Assessment_Report_Guide.pdf">3PAO Readiness Assessment Report Guide</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_A_FedRAMP_Authorization_Boundary_Guidance.pdf">FedRAMP Authorization Boundary Guidance</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-High-RAR-Template.docx">FedRAMP High Readiness Assessment Report (RAR) Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Moderate-RAR-Template.docx">FedRAMP Moderate Readiness Assessment Report (RAR) Template</a></li>

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
