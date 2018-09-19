---
layout: page
title: Preparing for an Agency Authorization
permalink: /preparing-for-an-agency-authorization/
tag: preparing-for-an-agency-authorization
---
<p>CSPs that make a business decision to work directly with an Agency to pursue an Authority to Operate (ATO) will partner with the Agency throughout the acquisition and FedRAMP authorization process. Within the authorization process, Agencies define their specific policies and procedures, in addition to FedRAMP requirements, and are responsible for reviewing CSP-developed security packages. Ultimately, an Agency’s Authorizing Official (AO) must accept the risk associated with the use of a cloud system through the issuance of an ATO for their Agency. Agencies must also conduct continuous monitoring of each authorized system, reviewing monthly and annual deliverables provided by CSPs. More information on  the Agency Authorization Process can be found on our <a href="agency-authorization">Agency Authorization</a> webpage.</p>
<p>Additionally, the documents, templates, and blogs below all relate to the Agency Authorization Process. </p>
<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Authorization_Playbook_Getting_Started_with_FedRAMP.pdf">CSP Authorization Playbook: Getting Started with FedRAMP</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Agency_Authorization_Best_Practices_for_CSPs.pdf">CSP Agency Authorization Best Practices for CSPs </a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Package_Request_Form.pdf">Agency Package Request Form</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Authorization_Playbook.pdf">Agency Authorization Playbook</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Authorization_Obtaining_In_Process_Designation.pdf">Agency Authorization Obtaining In Process Designation</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Authorization_Roles_and_Responsibilities_for_FedRAMP_CSPs_and_Agencies.pdf">Agency Authorization Roles and Responsibilities for FedRAMP CSPs and Agencies</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Authorization_Best_Practices_for_Agencies.pdf">Agency Authorization Best Practices for Agencies</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Guide_for_Reuse_of_FedRAMP_Authorizations.pdf">Agency Guide for Reuse of FedRAMP Authorizations</a></li>
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
