---
layout: page
title: Acquiring a Cloud Service
permalink: /acquiring-a-cloud-service/
tag: acquiring-a-cloud-service
---
Agencies interested in acquiring a cloud service should begin by defining their mission needs and specific requirements for a Cloud Services Offering (CSO). Where applicable, Agencies should align their cloud acquisition approach to broader departmental cloud adoption / migration strategies. When researching cloud service providers, we advise that Agencies first check the [FedRAMP Marketplace](https://marketplace.fedramp.gov/#/products). The FedRAMP Marketplace lists all CSOs that have either begun the process of, or have achieved, a FedRAMP authorization. 

Additionally, Agencies can use the FedRAMP Marketplace to find CSOs who have demonstrated they are interested in working with the Federal Government by achieving a FedRAMP Ready designation, which is a mini-gap analysis done by an accredited Third Party Assessment Organization (3PAO).

The documents, templates, and blogs listed below all pertain to the research / acquisition phase when looking to procure a new Cloud Service Offering (CSO).
<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Acquisition_FAQs.pdf">Acquisition FAQS</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Standard_Contract_Clauses.pdf">Standard Contract Clauses</a></li>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Control_Specific_Contract_Clauses.pdf">Control Specific Clauses</a>
</li>
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
