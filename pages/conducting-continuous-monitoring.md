---
layout: page
title: Conducting Continuous Monitoring (ConMon)
permalink: /conducting-continuous-monitoring/
tag: conducting-continuous-monitoring
---
Once a FedRAMP authorization has been granted, the security posture of a CSO is monitored according to the assessment and authorization process. Performing ongoing security assessments determines whether the set of deployed security controls in a CSO remains effective in lieu of new exploits and attacks, as well as planned and unplanned changes that occur in the system environment over the life of the system. To maintain a FedRAMP authorization, the CSP must monitor their security control environment, assess that control environment on a regular basis, and demonstrate that the security posture of their service offering is continuously acceptable.
<p>Ongoing assessment of security controls results in greater control over the security posture of the CSO and enables timely risk-management decisions. Security-related information collected through continuous monitoring is used to make recurring updates to the system security package. Ongoing due diligence and review of security controls enables the security authorization package to remain current, allowing agencies to make informed risk-based decisions as they use cloud services.</p>

<table>
<tr>
<th>Documents</th>
<th>Templates</th>
<th>Blogs</th>
</tr>
<td>
<ul>
<li><a href="/assets/resources/documents/CSP_Continuous_Monitoring_Strategy_Guide.pdf">Continuous Monitoring Guide</a></li>
<li><a href="/assets/resources/documents/CSP_Incident_Communications_Procedures.pdf">Incident Communications Procedures</a></li>
<li><a href="/assets/resources/documents/Agency_Guide_for_Multi-Agency_Continuous_Monitoring.pdf">FedRAMP Guide for Multi-Agency Continuous Monitoring</a></li>
<li><a href="/assets/resources/documents/CSP_Automated_Vulnerability_Risk_Adjustment_Framework.pdf">Automated Vulnerability Risk Adjustment Framework Guidance</a></li>
<li><a href="/assets/resources/documents/CSP_Vulnerability_Scan_Requirements_Using_Sampling.pdf">Guide for Determining Eligibility and Requirements for the Use of Sampling for Vulnerability Scans</a></li>
<li><a href="/assets/resources/documents/CSP_Vulnerability_Scanning_Requirements.pdf">Vulnerability Scanning Requirements</a></li>

</ul>
</td>
<td>
<ul>
<li><a href=" ">Fed</a></li>
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