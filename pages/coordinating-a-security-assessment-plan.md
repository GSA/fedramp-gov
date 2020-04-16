---
layout: page
title: Coordinating a Security Assessment Plan (SAP)
permalink: /coordinating-a-security-assessment-plan/
tag: developing-a-security-assessment-plan
---
<p>The SAP contains the test plan to assess the security controls of a system. The test plan functions as a detailed roadmap of the approach and methodology for the assessment of a CSP’s cloud service. Included in a SAP are the Penetration Test Plan - aligned to FedRAMP’s Penetration Test Guidance - and an Inventory Worksheet that coincides with the inventory provided in the SSP. The SAP also serves as a Rules of Engagement (RoE), once signed by the CSP and 3PAO, as it includes all applicable rules of engagement for the assessment. The joint responsibility of the CSP and the 3PAO, the SAP is a customized account of the security assessment methodology and indicates that both the CSP and 3PAO are in full concurrence as to the scope of security assessment testing. Authorizing Officials (AOs) are responsible for reviewing and approving the SAPs (making sure of appropriate scope and methodologies are used) at both the time of the assessment and during ConMon.</p>
<p>A completed SAP includes the following documentation:</p> 
<ul>
<li>FedRAMP Security Assessment Plan</li>
<li>FedRAMP Security Test Case Workbook</li>
<li>Penetration Testing Plan and Methodology</li>
<li>3PAO Supplied Deliverables
<li>Penetration Test Rules of Engagement</li>
<li>Sampling Methodology</li></li>
</ul>


<div class="responsive-table">
<table class="usa-table">
<tr>
<th scope="col">Documents</th>
<th scope="col">Templates</th>
<th scope="col">Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_General_Document_Acceptance_Criteria.pdf">FedRAMP General Document Acceptance Criteria</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Penetration_Test_Guidance.pdf">Penetration Test Guidance</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/3PAO_Obligations_and_Performance_Guide.pdf">3PAO Obligations and Performance Guide</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Annual-SAP-Template.docx">FedRAMP Annual Security Assessment Plan (SAP) Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-SAP-Template.docx">FedRAMP Security Assessment Plan (SAP) Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/SAP-AA-FedRAMP-High-Security-Test-Case-Procedures-Template.xlsx">SAP APPENDIX A - FedRAMP High Security Test Case Procedures Template</a></li>  
<li><a href="{{site.baseurl}}/assets/resources/templates/SAP-AA-FedRAMP-Moderate-Security-Test-Case-Procedures-Template.xlsx">SAP APPENDIX A - FedRAMP Moderate Security Test Case Procedures Template</a></li>   
<li><a href="{{site.baseurl}}/assets/resources/templates/SAP-AA-FedRAMP-Low-Security-Test-Case-Procedures-Template.xlsx">SAP APPENDIX A - FedRAMP Low Security Test Case Procedures Template</a></li>    
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
	</table>
	</div>