---
title: FedRAMP Guidance for M-21-31 and M-22-09
permalink: /2023-07-14-fedramp-guidance-for-m-21-31-and-m-22-09/
body-class: page-blog
image: /assets/img/blog-images/2023-07-28-fedramp-guidance-for-m-21-31-and-m-22-09.png
author: FedRAMP
layout: blog-page
---
In accordance with Section 8 of <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/" target="_blank" rel="noopener noreferrer">Executive Order (EO) 14028 “Improving the Nation’s Cybersecurity”</a>, the U.S. Office of Management and Budget (OMB) released <a href="https://www.whitehouse.gov/wp-content/uploads/2021/08/M-21-31-Improving-the-Federal-Governments-Investigative-and-Remediation-Capabilities-Related-to-Cybersecurity-Incidents.pdf" target="_blank" rel="noopener noreferrer">Memorandum 21-31 “Improving the Federal Government’s Investigative and Remediation Capabilities Related to Cybersecurity Incidents”</a> (M-21-31). The EO directs agencies to improve their cybersecurity practices through the identification of existing or development of new standards, tools, best practices, and other guidelines. Section 8 focuses primarily on the system logs for both services implemented on servers within the authorization boundary and services deployed on Cloud Service Offerings (CSOs).

Section 8 of the EO also directs federal agencies to offer more specific instructions for all service providers. M-21-31 fulfills that requirement, and offers additional guidance to agencies around logging, log retention, and log management. Within this guidance, there are four maturity tiers identified, as well as timelines for agencies to mature to certain tiers by certain dates. 

<h4>FedRAMP Applicability</h4>
FedRAMP, in consultation with OMB, assessed that M-21-31 does not apply directly to CSP offerings (unless that CSP is a government system); however, FedRAMP authorized CSOs must comply with M-21-31 by supporting agency implementations within the cloud offering. These requirements are reflected in the FedRAMP Rev. 5 baselines (specifically AC-4 (4), AU-11, and SI-4 (10)).

<h4>Additional Guidance</h4>
Further guidance for agencies is included in the bullets below extracted from Section 3 of <a href="https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf" target="_blank" rel="noopener noreferrer">OMB Memorandum 22-09, “Moving the U.S. Government Toward Zero Trust Cybersecurity Principles”</a>,  which is related to and references M-19-26 and M-21-31.

<b>OMB M-19-26 and OMB M-21-31 – Alternatives to network inspection</b>
- Current OMB policies neither require nor prohibit inline decryption of enterprise network traffic. Agencies are expected to balance the depth of visibility they need with the risks presented by broadly trusted network inspection devices.
- Network traffic that is not decrypted can and should still be analyzed using visible or logged metadata, machine learning techniques, and other heuristics for detecting anomalous activity. This is consistent with the Trusted Internet Connection (TIC) initiative, as updated in OMB Memorandum M-19-26, which gives agencies the flexibility to maintain appropriate visibility without needing to perform inline traffic decryption.
- OMB Memorandum M-21-31, “Improving the Federal Government’s Investigative and Remediation Capabilities Related to Cybersecurity Incidents”, describes required fields that agencies must log consistently throughout their enterprise, including packet capture logs. M-21-31 does not require full traffic inspection, but specifies fields that should be captured when such inspection is in place. M-21-31 describes this conditional requirement:
  - If agencies perform full traffic inspection through active proxies, they should log additional available fields as described in Appendix C and can work with CISA to implement these capabilities. If agencies do not perform full traffic inspection, they should log the metadata available to them.”

Please email <a href="mailto:info@fedramp.gov">info@fedramp.gov</a> if you have any questions.
