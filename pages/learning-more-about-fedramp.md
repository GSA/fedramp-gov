---
layout: page
title: Learning More About FedRAMP
permalink: /learning-more-about-fedramp/
tag: learning-more-about-fedramp
---
The Federal Risk and Authorization Management Program (FedRAMP) is a government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services. FedRAMP enables Agencies to rapidly adapt from old, insecure legacy IT to mission-enabling, secure, and cost effective cloud-based IT. 

FedRAMP created and manages a core set of processes to ensure effective, repeatable cloud security for the government. FedRAMP established a mature marketplace to increase utilization and familiarity with cloud services while facilitating collaboration across government through an open exchange of lessons learned, use cases, and tactical solutions.

The documents, templates, and blogs listed below should help guide  your understanding of FedRAMP at a basic level.
<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Security_Assessment_Framework.pdf">Security Assessment Framework</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Policy_Memo.pdf">FedRAMP Policy Memo</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Master_Acronym_and_Glossary.pdf">FedRAMP Master Acronym & Glossary</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Branding_Guidance.pdf">Branding Guidance</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Authorization_Playbook.pdf">Agency Authorization Playbook</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/CSP_Authorization_Playbook_Getting_Started_with_FedRAMP.pdf">CSP Authorization Playbook: Getting Started with FedRAMP</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Accelerated_A_Case_Study_For_Change_Within_Government.pdf">FedRAMP Accelerated: A Case Study for Change Within Government</a></li>	
<li><a href="{{site.baseurl}}/assets/resources/documents/3PAO_Obligations_and_Performance_Guide.pdf">3PAO Obligations and Performance Guide</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Tips_and_Cues.pdf">FedRAMP Tips & Cues Compilation</a></li>
</ul>
</td>
<td>
<ul>
<li>Please visit our <a href="{{site.baseurl}}/templates">templates</a> page, there are no specific templates for this cateogory at this time.</li>
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
