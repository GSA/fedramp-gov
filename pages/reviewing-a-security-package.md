---
layout: page
title: Reviewing a Security Package 
permalink: /reviewing-a-security-package/
tag: starting-security-package-development
---
<p>A FedRAMP security package is a comprehensive documentation of a cloud service offering’s (CSO) system security. A FedRAMP security package provides a: </p>
<ul>
<li>Complete system description</li>
<li>Complete detail of the system’s security control implementation</li>
<li>Overview of the system’s assessment and assessment methodology, and</li>
<li>Risk assessment that qualifies whether the system should be used by a Federal customer</li>
</ul>
<p>There are two approaches to reviewing a FedRAMP security package: (1) <em>Just-in-Time</em>, and (2) 
  <em>All Deliverables Simultaneously</em>.</p> 
<p><em>Approach I: Just-In-Time</em></p>
The CSP / 3PAO provide the Agency security documents for review and approval as they are prepared, creating an agile workflow for the evaluation of a system’s security and assessment. A Just-In-Time approach is recommended for Agencies and CSPs new to the FedRAMP process or new working with the government. 
<p><em>Approach II: All Deliverable Simultaneously</em></p>
<p>The CSP / 3PAO provide the Agency a complete security package - including the SSP, SAP, and SAR -  at once upon completion. This approach entails that the CSP / 3PAO complete all documentation and conduct the assessment prior to delivery of any materials to the Agency for review. Relative to Just-In-Time, this approach is most appropriate for CSPs and Agencies that have mature cloud security programs in place and have developed collaborative prior working relationships for the purpose of achieving FedRAMP authorization.
In either approach, FedRAMP encourages Agencies to establish a cadence of frequent touchpoints with their partnered CSP(s) to understand progress against milestones and iteratively review documentation.</p> 
<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Security_Assessment_Framework.pdf">Security Assessment Framework</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_General_Document_Acceptance_Criteria.pdf">FedRAMP General Document Acceptance Criteria</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Agency_Authorization_Best_Practices_for_CSPs.pdf">Agency Authorization Best Practices for CSPs</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_A_FedRAMP_Authorization_Boundary_Guidance.pdf">FedRAMP Authorization Boundary Guidance</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Digital_Identity_Requirements.pdf">Digital Identity Requirements</a></li>	
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Penetration_Test_Guidance.pdf">Penetration Test Guidance</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_TLS_Requirements.pdf">Transport Layer Security (TLS) Requirements</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Timeliness_and_Accuracy_of_Testing_Requirements.pdf">Timeliness and Accuracy of Testing Requirements</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Initial-Authorization-Package-Checklist.xls">FedRAMP Initial Authorization Package Checklist</a></li>
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
