---
title: Understanding Baselines and Impact Levels in FedRAMP
layout: blog-page
permalink: /understanding-baselines-and-impact-levels/
body-class: page-blog
image: /assets/img/blog_placementimg.png
author: FedRAMP
---
The FedRAMP PMO fields a number of questions about impact levels and the security categorization of cloud services. [Federal Information Processing Standard (FIPS) 199](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf) provides the standards for categorizing information and information systems, which is the process CSPs use to ensure their services meet the minimum security requirements for the data processed, stored, and transmitted on them. The security categories are based on the potential impact that certain events would have on an organization’s ability to accomplish its assigned mission, protect its assets, fulfill its legal responsibilities, maintain its day-to-day functions, and protect individuals.

It is important that Cloud Service Providers (CSPs) understand the impact level of their offering(s) and correlated security categorization when developing their authorization strategy. In service of making this information more accessible and straightforward, we’ve provided a high level overview of the FIPS 199 security categories.

Cloud Service Offerings (CSOs) are categorized into one of three impact levels: Low, Moderate, and High; and across three security objectives: Confidentiality, Integrity, and Availability.

  * **Confidentiality:** Information access and disclosure includes means for protecting personal privacy and proprietary information.

  * **Integrity:** Stored information is sufficiently guarded against modification or destruction.

  * **Availability:** Ensuring timely and reliable access to information.

FedRAMP currently authorizes CSOs at the: Low, Moderate, and High impact levels.

### Low Impact Level

Low Impact is most appropriate for CSOs where the loss of confidentiality, integrity, and availability would result in limited adverse effects on an agency’s operations, assets, or individuals. FedRAMP currently has two baselines for systems with Low Impact data: LI-SaaS Baseline and Low Baseline. The LI-SaaS Baseline accounts for Low-Impact SaaS applications that do not store personal identifiable information (PII) beyond that generally required for login capability (i.e. username, password, and email address). Required security documentation is consolidated and the requisite number of security controls needing testing and verification are lowered relative to a standard Low Baseline authorization. Additional information on requirements for the LI-SaaS baseline can be found on the [FedRAMP Tailored](https://tailored.fedramp.gov/) website. Additionally, information on the security controls involved in FedRAMP’s Low Baseline can be found [here](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2016/07/FedRAMP-Low-HHH-Baseline-Controls-2016-05-18.xlsx).

### Moderate Impact Level

<img class="wp-image-67353 alignright" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2017/11/Screen-Shot-2017-11-16-at-3.14.49-PM.png" alt="" width="400" height="300" />

Moderate Impact systems accounts for nearly 80% of CSP applications that receive FedRAMP authorization and is most appropriate for CSOs where the loss of confidentiality, integrity, and availability would result in serious adverse effects on an agency’s operations, assets, or individuals. Serious adverse effects could include significant operational damage to agency assets, financial loss, or individual harm that is not loss of life or physical. Information on the security controls involved in FedRAMP’s Moderate Baseline can be found [here](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2016/07/FedRAMP-Moderate-HHH-Baseline-Controls-2016-05-18.xlsx).

### High Impact Level

High Impact data is usually in Law Enforcement and Emergency Services systems, Financial systems, Health systems, and any other system where loss of confidentiality, integrity, or availability could be expected to have a severe or catastrophic adverse effect on organizational operations, organizational assets, or individuals. FedRAMP introduced their High Baseline to account for the government’s most sensitive, unclassified data in cloud computing environments, including data that involves the protection of life and financial ruin. Graphic I illustrates the distribution of High Baseline cloud services across the federal government. Information on the security controls involved in FedRAMP’s High Baseline can be found [here](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2016/07/FedRAMP-High-HHH-Baseline-Controls-2016-05-18.xlsx).

CSPs must correctly align their CSOs to an impact level in order to pursue the correct authorization baseline. For example, it would not be appropriate for CSPs that qualify for LI-SaaS or align with Low Baseline to pursue a JAB P-ATO. Rather, a JAB P-ATO would be better suited for cloud services that are Moderate and High Impact. CSPs should use the [FedRAMP FIPS 199 Categorization Template](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2016/04/SSP-A10-FedRAMP-FIPS-199-Categorization-Template-v2.1-2.docx) along with the guidance of [NIST Special Publication 800-60 volume 2 Revision 1](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-60v2r1.pdf) to correctly categorize their system based on the types of information processed, stored, and transmitted on their systems.
We hope you find this useful in delineating the differences between the Low, Moderate, and High Impact Levels. If you have additional questions, please don’t hesitate to reach out to [info@fedramp.gov](mailto:info@fedramp.gov).
