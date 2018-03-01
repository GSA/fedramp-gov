---
title: Determining Your FedRAMP Boundary Definition
permalink: /determining-your-fedramp-boundary-definition/
body-class: page-blog
image: /assets/img/blog-images/Blog_03052018 (1).png
author: FedRAMP
layout: blog-page
---
An authorization boundary provides a diagrammatic picture of a system’s internal components to a Cloud Service Provider (CSP) along with connections to external services and systems, accounting for all Federal information and metadata that flows through a system. As a critical component of all System Security Plans (SSPs) and Readiness Assessment Reports (RARs) submitted to FedRAMP, the PMO recognizes that CSPs have difficulty accurately depicting their system authorization boundary from a FISMA perspective. 

The FedRAMP PMO will be releasing more formal authorization boundary guidance within the next month, but wanted to provide a sneak peek of our internal conversations of what CSPs should account for when drafting their boundary, as well as those considerations agencies should heed when reviewing a system package.  

**External Services**

There are many cloud technologies that utilize third-party cloud services to augment functionality, this raises challenges when developing an “authorization boundary”. Each Federal Agency must understand where their data is going and the associated protection mechanisms in place, as this presents risk each Agency will have to consider when using any given cloud service offering. When drafting an authorization boundary, CSPs must be transparent and identify all interconnections to external services as they relate to the flow of government data and metadata through the system.

**Data and Metadata**

As opposed to other control regimes like ISO, PCI, SOC II, etc., FedRAMP qualifies a system’s boundary according to wherever Federal data and/or information is stored, processed, transmitted, or used. The flow of data in and out of a system provides a frame of reference for understanding how to define the boundary. Importantly, the same applies to a system’s metadata, as a system is only as secure as its weakest link. To illustrate this concept, consider the following two examples:

 * **Federal Customer Information in a Customer Relationship Management (CRM) Tool** 
 
   *CRM system toolsets are normally used to manage the business application-customer relationship. However, CRM systems also manage aspects of the business contacts, employees (privileged and non-privileged administrators), contractual requirements, and tracking potential customers. Data and information stored, processed, transmitted, and used within a CRM system provides the system stakeholders with valuable information pertaining to their business and their customers. When the customers are Federal customers, this system then contains federal information and should be acknowledged within the CSP’s SSP, boundary diagram and data-flow diagram.*

* **Vulnerability Scanning Results**

   *Vulnerability Scans are necessary for the continuous monitoring of any FedRAMP system. If a CSP completes a vulnerability scan and sends the results of that scan to an external service (such as a cloud hosted version of a scan tool/suite, or a ticketing system to track closures of vulnerabilities), those results are considered metadata about Federal information. This would mean that the scan service or ticketing service should be pulled into the system boundary. Note, while the specific system data maynot be transmitted, sensitive data regarding the system’s vulnerabilities is transmitted. If the transmitted vulnerabilities are exploited,the system is compromised. This is why this type of data is considered sensitive and must be pulled into the boundary.*

It is also important for Agencies and CSPs understand the authorization levels (security categorization levels: Low, Moderate, High) of leveraged external services and account for the criticality of data within the data flow and across the boundary. If Federal information is considered Moderate impact, it cannot be transmitted to a Low system. The same applies for transmitting High impact information to Moderate systems. 

Additionally, we have put together a quick (not comprehensive) list of few considerations when developing and reviewing an authorization boundary diagram: 

 * CSPs are responsible for the data flow of Federal information. Throughout planning, ask the question: What can impact Federal information?
 * A boundary should depict the system access and privileges among all system stakeholders: Who can access the system and how?
 * Microservices many times are just as important as larger-footprint external services, again, a system is only as strong as its weakest link: What systems do we use that help make the system work?
 * Engage the FedRAMP PMO early and often with questions regarding boundary definition and how to coordinate with agencies and assessors when developing: Schedule a meeting with the PMO.

The PMO will be releasing collateral in March that provides further guidance on authorization boundaries. In the interim, please direct questions to info@fedramp.gov. 
