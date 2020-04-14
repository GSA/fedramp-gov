---
layout: page
title: Issuing an Authority to Operate (ATO)
permalink: /issuing-an-authority-to-operate/
tag: issuing-an-authority-to-operate
---
<p>An Agency’s Authorizing Official (AO) is responsible for making a risk-based decision to grant a CSP’s cloud service an Authority to Operate (ATO) for use of the system. That decision is formalized in an ATO letter provided to the CSP system owner and FedRAMP PMO. A complete ATO letter should explicitly state the AO’s acceptance of:</p>
<ul>
<li>Use of the system at the Agency at the determined FIPS 199 impact level </li>
<li>All leveraged external services (to be listed in the ATO) supporting the system</li>
<li>Any exceptions or exclusions of the CSO to be considered for use at the Agency</li>
</ul>
<p>Once a CSO is deemed FedRAMP Authorized, the CSO is reflected as such on the <a href="https://marketplace.fedramp.gov/">FedRAMP Marketplace</a>. Subsequent Agency customers can utilize FedRAMP’s reuse model to issue their own ATO for the use the CSO. That model allows Agencies to review the CSO’s security package, make a risk-based decision on the use of that system, and issue their own ATO. Agencies can rely on the PMO to support any discussions for the reuse of a FedRAMP authorized system. </p>
<p>All ATO letters should be provided to FedRAMP. </p>

<table class="usa-table">
<tr>
<th scope="col">Documents</th>
<th scope="col">Templates</th>
<th scope="col">Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/documents/Agency_Authorization_Playbook.pdf">Agency Authorization Playbook</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/Agency-ATO-Report-Template-Version.pdf">FedRAMP Agency ATO Review Template</a></li>	
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-ATO-Letter-Template.docx">FedRAMP ATO Letter Temp</a></li>
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
