---
layout: page
title: Pursuing a FedRAMP Tailored Authorization
permalink: /pursuing-a-fedramp-tailored-authorization/
tag: pursuing-a-fedramp-tailored-authorization
---
<p>The FedRAMP Tailored Baseline for Cloud Service Providers (CSPs) with Low-Impact Software-as-a-Service (LI-SaaS) Systems was developed to support industry solutions that are deemed as low risk by the Agencies who are using these services. FedRAMP Tailored:
</p>
<ul>
<li>Creates a faster, streamlined process for systems that are low risk for use such as collaboration tools, project management applications, and tools that help develop open-source code</li>
<li>Supports government Authorizing Officials’ (AO) need for a standardized approach to determining the risks associated low-impact cloud applications</li>
<li>Incorporates industry input in order to provide the government with the agility to leverage valuable industry services while maintaining appropriate security levels</li>
</ul>
<p>More information on FedRAMP Tailored can also be found on the <a href="https://tailored.fedramp.gov/">FedRAMP Tailored webpage</a> as well as within the documents, templates, and blogs listed below.</p>
<table>
<tr>
<th scope="col">Documents</th>
<th scope="col">Templates</th>
<th scope="col">Blogs</th>
</tr>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/FedRAMP-Tailored-LI-SaaS-Requirements.docx">FedRAMP Tailored LI-SaaS Requirements</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/APPENDIX-A-FedRAMP-Tailored-Security-Controls-Baseline.xlsx">APPENDIX A: FedRAMP Tailored Security Controls Baseline</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/APPENDIX-D-FedRAMP-Tailored-LI-SaaS-Continuous-Monitoring-Guide.docx">APPENDIX D: FedRAMP Tailored LI-SaaS Continuous Monitoring Guide</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/APPENDIX-E-FedRAMP-Tailored-LI-SaaS-Self-Attestation-Requirements.docx">APPENDIX E: FedRAMP Tailored LI-SaaS Self-Attestation Requirements</a></li>
</ul>
</td>
<td>
<ul>
<li><a href="{{site.baseurl}}/assets/resources/templates/APPENDIX-B-FedRAMP-Tailored-LI-SaaS-Template.docx">APPENDIX B: FedRAMP Tailored LI-SaaS Template</a></li>
<li><a href="{{site.baseurl}}/assets/resources/templates/APPENDIX-C-FedRAMP-Tailored-LI-SaaS-ATO-Letter-Template.docx">APPENDIX C: FedRAMP Tailored LI-SaaS ATO Letter Template</a></li>
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
