---
title: Determining Your FedRAMP Boundary Definition
permalink: /determining-your-fedramp-boundary-definition/
body-class: page-blog
image: /assets/img/blog-images/Blog_12072017.png
author: FedRAMP
layout: blog-page
---
An authorization boundary provides a diagrammatic picture of a system’s internal components to a Cloud Service Provider (CSP) along with connections to external services and systems, accounting for all government data and metadata that flows through a system. As a critical component of all System Security Packages (SSP) submitted to FedRAMP, the PMO has recognized that CSPs have difficulty accurately depicting their system boundary from a FISMA perspective. 

In anticipation of the PMO’s release of detailed guidance on how to conceptualize and depict an authorization boundary, this blog seeks to cover the key considerations CSPs should account for when drafting their boundary, as well as those considerations agencies should heed when reviewing a system package. 

**External Services**

In an effort to efficiently develop a system’s functionality, the cloud market has adopted the common practicing of leveraging of additional third-party cloud services to augmenting functionality and transfer responsibility from the CSP to a vendor. While this makes sense commercially, it raises challenges when understanding a system’s security posture in FedRAMP. When drafting an authorization boundary, CSPs should identify all interconnections to external services as they relate to the flow of government data and metadata through the system.

**Data and Metadata**

Opposed to other control regimes, FedRAMP qualifies a system’s boundary according to wherever federal data is stored, processed, transmitted, or used. The flow of data in and out of a system provides a frame of reference for understanding how to define the boundary. Importantly, the same applies for a system’s metadata, as a system is only as secure as its weakest link. To illustrate this concept, consider the following examples:g five CSPs were ultimately prioritized by the JAB: 

 * **Federal Customer Information in a Customer Relationship Management (CRM) Tool** 
 
   *Should a CSP leverage a CRM solution, the information for federal customers is applicable metadata that should be represented in the boundary.*

* **Vulnerability Scanning Results**

   *Vulnerability Scans are necessary for any continuous monitoring of a FedRAMP system. If a CSP completes a vulnerability scan and sends the results of that scan to an external service, that service is now considered part of a boundary. Note, while the specific system data is not transmitted, sensitive data regarding the system’s vulnerabilities does which, if compromised, would compromise the system.*

Finally, when considering the flow of data, CSPs must account of the FIPS 199 criticality of that data. If government data is considered Moderate impact, it cannot be transmitted to Low systems. The same applies for High impact data to Moderate systems. When drafting the boundary, it is important CSPs understand the authorization levels of leveraged external services and account for the criticality of data within the data flow and across the boundary. 

**Pulling the Thread with SSP Controls**

The SSP provides an end-to-end story of a system, rooted in security control detail and tied together by the diagrams and front matter. When drafting a boundary, the interconnections and service level agreements (SLAs) described in the SSP controls must be depicted. Further those depictions should align with the written descriptions provided in the control language.

**Additional Considerations** 

 * CSPs are responsible for the data flow of federal data. Throughout planning, ask the question: What can impact federal information?
 * A boundary should depict the system access and privileges among all system stakeholders
 * Consider microservices in addition to larger-footprint external services
 * Engage the PMO early and often with questions regarding boundary definition and how to coordinate with agencies and assessors when developing.

The PMO will be releasing collateral in March that provides further guidance on authorization boundaries. In the interim, please direct questions to info@fedramp.gov. 
