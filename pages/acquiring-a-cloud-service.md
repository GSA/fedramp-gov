---
layout: page
title: Acquiring a Cloud Service
permalink: /acquiring-a-cloud-service/
tag: acquiring-a-cloud-service
---
Agencies interested in acquiring a cloud service should begin by defining their mission needs and specific requirements for a Cloud Services Offering (CSO). Where applicable, Agencies should align their cloud acquisition approach to broader departmental cloud adoption / migration strategies. When researching cloud service providers, we advise that Agencies first check the FedRAMP Marketplace. The FedRAMP Marketplace lists all CSOs that have either begun the process of, or have achieved, a FedRAMP authorization.

<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="/assets/resources/documents/Agency_Acquisition_FAQs.pdf">Acquisition FAQS</a></li>
<li><a href="/assets/resources/documents/Agency_Control_Specific_Contract_Clauses.pdf">Control Specific Clauses</a></li>
<li><a href="/assets/resources/documents/Agency_Cloud_Procurement_Best_Practices.pdf">Cloud Procurement Best Practices</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="">FedR</a></li>
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