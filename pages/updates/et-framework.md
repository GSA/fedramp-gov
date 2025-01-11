---
layout: leftnav-rightlink
title: Emerging Technology Prioritization Framework
tab-title: Emerging Technology Prioritization Framework
permalink: /updates/et-framework/
redirect_from: /et-framework/
body-class: page-training
summary: 
tags: 
navigation:
  - id: status
    title: Status
  - id: executive-summary
    title: Executive Summary
  - id: purpose-and-scope
    title: Purpose and Scope
  - id: framework-elements
    title: Framework Elements
  - id: ET-prioritization-framework
    title: ET Prioritization Framework
    children:
      - id: overview
        title: Overview
      - id: governance-process
        title: Governance Process
      - id: evaluation-process
        title: Evaluation Process
  - id: supporting-resources
    title: Supporting Resources
    children:
      - id: et-list
        title: ET List
      - id: et-cso-request-form
        title: ET CSO Request Form
      - id: et-demand-form
        title: ET Demand Form
      - id: ET-prioritization-criteria-and-guidance
        title: ET Prioritization Criteria and
            Guidance
quick_links:
  - title: ET CSO Request Form
    url: https://app.smartsheetgov.com/b/form/4a8391a923da4c4bb95fbbc2d1d54c03
    external: true
  - title: ET Demand Form
    url: https://app.smartsheetgov.com/b/form/d08f3afe5e8142f9b76f595ef42e9580
    external: true
  - title: Emerging Technologies Prioritization Criteria and Guidance document
    url: /assets/resources/documents/Emerging-Technologies-Prioritization-Criteria-and-Guidance-V3.pdf
    external: true
  - title: CSP Information Form
    url: https://docs.google.com/forms/d/e/1FAIpQLScU4_x5UK53d0PUUDsOdqWyzUvAN1-yFJ1NxffT7PkGkCiuPg/viewform?c=0&w=1
    external: true
  - title: RACI Matrix
    url: /et-framework/raci-matrix/
  - title: FAQs
    url: /faqs/#faq-et-prioritization-framework 

---

## Status {#status}

FedRAMP is changing its approach of defined application windows in the ET framework and will shift to making prioritization decisions on a rolling basis when a cloud provider’s package is starting assessment. This change is to better align to the varying readiness statuses we saw during the first application window, with cloud providers either already being under active review, or in many cases just beginning the development of their package. This change does not alter the framework itself, the list of prioritized technologies, qualifying and demand criteria, or the need for a cloud provider to be in process with an agency willing to perform an initial authorization.  

In order to be considered for prioritization, a cloud service provider must be both in process with an agency and minimally be in the process of preparing a security assessment plan (SAP) with their assessment organization. Going forward, cloud providers should contact FedRAMP via email at [etprioritization@gsa.gov](mailto:etprioritization@gsa.gov){:target="_blank" rel="nofollow"} and request a prioritization determination once they are ready for an ET prioritization review, having begun preparing a security assessment plan and are working with a sponsoring agency. FedRAMP will then review the cloud provider’s cloud service offering [ET CSO Request Form](https://app.smartsheetgov.com/b/form/4a8391a923da4c4bb95fbbc2d1d54c03){:target="_blank" rel="nofollow"} and [ET Demand Form](https://app.smartsheetgov.com/b/form/d08f3afe5e8142f9b76f595ef42e9580){:target="_blank" rel="nofollow"} submissions and will make a prioritization decision at that time. 

*   If you have any questions about the Emerging Technology Prioritization Framework, or the application process, please reach out to [etprioritization@gsa.gov](mailto:etprioritization@gsa.gov){:target="_blank" rel="nofollow"}.

## Executive Summary {#executive-summary}

In response to the President’s [Executive Order 14110 on Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence (AI)](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/){:target="_blank" rel="nofollow"}, FedRAMP<sup>®</sup> is establishing a framework for prioritizing emerging technologies (ETs) for FedRAMP authorization. The term “emerging technology” means those technologies listed in the Office of Science and Technology Policy Critical and Emerging Technologies. This framework will enable routine and consistent prioritization of the most critical cloud-relevant ETs needed for use by federal agencies. This prioritization will control how FedRAMP prioritizes its own work and review processes, and will not address how sponsoring agencies manage their own internal priorities.

This page describes the operational framework to prioritize certain cloud service providers (CSPs) during the FedRAMP authorization process whose cloud service offerings (CSOs) provide certain ET capabilities; how FedRAMP will govern and evaluate this new process; detail the first prioritized technology, generative AI. Importantly, the prioritization process will be integrated on top of existing FedRAMP Authorization paths and will not create new pathways for authorization.

Not all ETs will be prioritized. The initial ET prioritization list includes three generative AI capabilities: chat interfaces, code-generation and debugging tools,  and prompt-based image generators, as required by Executive Order 14110. FedRAMP will also prioritize a fourth capability target, which are general purpose API offerings that facilitate the integration of these three generative AI capabilities into new or existing systems.  FedRAMP will update and maintain an evolving list of prioritized ETs at least annually with input from agencies and industry followed by approval from the FedRAMP Board (the Board). Technologies will be removed from prioritization either by decision of the Board, or when the target number of CSOs with the desired capabilities are available within the marketplace.

FedRAMP will determine initial CSO prioritization targets, which will begin at three per ET capability, and qualification criteria when publishing or updating the ET List. This means that initially, FedRAMP expects up to twelve (12) CSOs with AI-based offerings to be prioritized using this framework: up to three CSOs that implement each of the three generative AI capabilities listed in EO 14110, and up to three CSOs that offer API-based services that implement any of those three capabilities.

The selected CSOs meeting the qualifying criteria will move to the front of the authorization review process. After the ET capability prioritization target is reached, additional offerings of the same ET capability will not be prioritized. Initially, the FedRAMP ET prioritization framework is designed to facilitate rapid authorization of commercial AI capabilities for agency use. Prioritized CSOs that fail to make consistent progress on authorization will be returned to their former place in the queue opening up an opportunity for additional CSOs.

Because this is a new paradigm for the program, FedRAMP will continually evaluate the process and make revisions as needed. Additionally, the Board may approve another round of prioritization for some or all the ET capabilities based on demand.

## Purpose and Scope {#purpose-and-scope}

This page describes the prioritization framework for ETs for FedRAMP. The intent is to ensure ET CSOs are prioritized during the FedRAMP authorization review and available for agency reuse.

Agencies will need to prioritize CSO sponsorship and authorization prior to FedRAMP’s prioritized authorization. Additionally, cloud service providers (CSPs) need to prioritize their remediation of any findings identified by the 3PAO, agency, and FedRAMP in order to accelerate the complete authorization process.

Existing CSPs who wish to incorporate ET CSOs into their offerings via the significant change process must work with their authorizing official for prioritized review and approval.

This framework will initially be applied to artificial intelligence (AI), specifically the three generative AI capabilities discussed in Executive Order 14110: chat interfaces, code generators and debugging tools, image generators, and associated application program interfaces.

FedRAMP will update this page, and update the list of prioritized emerging technology as necessary to meet the goals of the executive order and agency mission needs. While this page has an initial focus on the generative AI technologies outlined in the executive order, FedRAMP anticipates the prioritized ET list to continually evolve and will publish updates to our website. The [Emerging Technology List page](/et-framework/emerging-technology-list/) details the initial prioritized Generative AI capabilities, prioritization targets, and related criteria.

The FedRAMP authorization process will validate an ET CSO against existing FedRAMP security controls. Agencies must consider their specific use, including data and privacy risks, and follow appropriate  authorization and governance processes when deploying any ETs. In the case of generative AI, agencies should consult closely with their Chief AI Officer.

## Framework Elements {#framework-elements}

The prioritization framework has been developed to accommodate many different types of technologies and capabilities. The initial focus is to accommodate growing demand for AI-enabled systems across the federal enterprise (an initial set of AI-specific concerns are included on the [Emerging Technology List page](/et-framework/emerging-technology-list/) but the ET prioritization framework we propose is broader than just AI):

1.  **This prioritization allows a CSP to move near the front of the authorization review process.** This prioritization will reduce the waiting time before the review process begins. The review itself will take a similar amount of time as it would for other similar offerings at the same level and type of authorization, as well as time spent during remediation.
2.  **Limit access to prioritization based on type of technology and capability.** By definition, a prioritization process should exclude more candidates than it includes. As a starting point, FedRAMP will evaluate no more than three ET capabilities for prioritization at any time.
3.  **Automatically stop prioritizing CSOs when the capability target has been reached.** For each ET capability target, when the number of CSOs whose primary purpose is to offer that capability have achieved FedRAMP authorization, then prioritization for that capability will be paused. Additional CSOs that provide that capability will not be prioritized and will follow the normal authorization review queue process.
4.  **Accessing the ET track should be fast.** FedRAMP will keep any additional steps in the application process simple and focused on speeding agency use and adoption of the prioritized ET capability.
5.  **Agencies maintain responsibility for evaluating system functionality.** As is true for all other FedRAMP authorizations, the authorization process considers the confidentiality, integrity, and availability of system data protected by the CSP. It does not certify the nature or quality of the functionality of CSO, or that it is a best fit for an agency’s specific technology needs. Agencies drive their own acquisition, evaluation, and authorization processes using a far broader set of criteria. FedRAMP may include requirements for additional information relevant to the specific ET (such as technology requirements, performance metrics, or responsible use policies). FedRAMP is committed to giving agencies the information to protect the confidentiality, integrity, and availability of the data they process in these systems.

## ET Prioritization Framework {#et-prioritization-framework}

### Overview {#overview}

The ET Prioritization Framework provides a process that is integrated across all of the program’s available authorization paths. There are two primary parts to the ET Prioritization Framework (seen in Figure 1):

**Figure 1:** ET Prioritization Framework

![Process graphic showing the flow of the emerging technology prioritization framework and its two significant parts. Part 1 of the process and its substeps are described under the heading Governance Process - Establish Prioritization Capabilities.  Part 2 of the process and its substeps are described under the heading Evaluation Process - CSP Submissions and Review.]({{site.baseurl}}/assets/img/et-framework-process.png)

The **Governance Process** defines how up to three capabilities will be prioritized for “skip the line” access to FedRAMP at any given time, and the amount of CSOs with a given capability that will be prioritized.

The CSP **Evaluation Process** outlines how new cloud service providers will have their CSOs qualified to access an accelerated review.

Existing cloud service providers must work with their authorizing official and will follow the significant change request(SCR) process to include new ET CSOs in their authorization.

### Governance Process - Establish Prioritization Capabilities {#governance-process}

![Process graphic showing the flow of the emerging technology prioritization framework and its two significant parts. Part 1 of the process and its substeps are described under the heading Governance Process - Establish Prioritization Capabilities.  Part 2 of the process and its substeps are described under the heading Evaluation Process - CSP Submissions and Review.]({{site.baseurl}}/assets/img/et-framework-process-governance.png)

The goal of the governance process is to identify appropriate ETs and respective capabilities for prioritization and accelerated authorization. Agencies and Industry will be able to submit ideas for additional capabilities to be authorized for future revisions. An electronic submission form will be prepared and made available as the time approaches for new capabilities to be identified.

To maintain the benefit of prioritization, up to three ET capabilities may be identified at any given time. These may be in a singular ET category, such as generative AI, or may span multiple ET categories. These will be **updated annually at minimum** – regardless of whether authorizations have been completed – and can also be updated as needed, either at the request of the Board or based on stakeholder demand.

#### 1. Nominate ETs for Prioritization

**Responsible:** Chief Information Officer (CIO) Council and Federal Councils including Federal Chief Information Security Officer (CISO) Council, Chief AI Officer, Chief Data Officer or others

**Accountable:** FedRAMP

**Consult:** FSCAC Chair, NIST, TAG, 3PAOs, Agencies, CSPs

**Informed:** FedRAMP Board

**What:** FedRAMP will coordinate nominations for new emerging technologies from Agencies and Industry partners including CSPs and 3PAOs. FedRAMP will consult with NIST and the TAG to help define definitions and technical characteristics for the nominated ET. FedRAMP may consult with the Federal Secure Cloud Advisory Committee (FSCAC) Chair, who may determine whether or not FSCAC would like to further deliberate the issue. Nominations will be validated with and confirmed by the CIO Council, in coordination with other councils or bodies (such as Federal CISO Council, Chief AI Officer Council or Chief Data Officer and others as appropriate). Nominations will include emerging technologies and capabilities that address agencies mission needs.

**Output:** Recommendation from federal CIOs or CISOs to FedRAMP regarding their ET needs.

**Estimated Duration:** Variable depending on inputs from CIO and federal councils, Agencies, and Industry.

#### 2. Propose ET List

**Responsible / Accountable:** FedRAMP

**Consult:** Office of Management and Budget (OMB)

**Informed:** CIO and CISO Federal Councils, FSCAC

**What:** FedRAMP proposes an updated list of up to three ET capabilities for prioritization for the Board’s approval. This will include an analysis of FedRAMP’s ability to process authorizations for these capabilities, including:

*   Maturity of global understanding (including understanding of the technology industry, 3PAO community, and current security best practices) for the ET
*   The target number of CSOs for the prioritized review process for each emerging technology capability (in the case of generative AI, this is initially set to three)
*   Resources and expertise necessary to support the target number of prioritized capabilities

Insights from the analysis will be discussed with OMB.  They will be compiled into a briefing that provides an estimate of FedRAMPs ability to authorize and communicate a given area of ET services, considering maturity across FedRAMP staff, Agencies, 3PAOs, CSPs, and the broader technology and cybersecurity community. The briefing will outline potential activities necessary to support the prioritized authorization of a given ET if approved.

**Input:** Nominations from the Federal CIO and CISO Councils, Agencies, and Industry to FedRAMP, as described above.

**Output:** Proposed ET List, FedRAMP ET Impact Assessment

**Service Level Agreement Target:** 1 Month

**Service Level Agreement Threshold:** 2 Months

#### 3. FedRAMP Board Decision on the ET List

**Responsible / Accountable:** FedRAMP Board

**Consult:** FedRAMP, OMB

**Informed:** CIO and CISO Federal Councils

**What:** FedRAMP will brief the Board on its ET prioritization recommendation. FedRAMP will send all materials in advance of the Board meeting when the ET is on the agenda. The Board will approve a final list of ET capabilities.

EO 14110 specifies the high-level capabilities for the initial [List of ETs](/et-framework/emerging-technology-list/). This initial list of capabilities is considered adopted once this framework is finalized. Future capabilities will receive review and approval by the Board.

**Input:** Proposed ET List, FedRAMP ET Impact Assessment

**Outputs:** Approved ET capability list

**Estimated Duration:** Variable depending on Board discussion and feedback to FedRAMP.

#### 4. Update ET Capability List and Criteria

**Responsible / Accountable:** FedRAMP

**Consult:** Agency Partners and Liaisons, CSPs

**Informed:** None

**What:** FedRAMP will update its process documentation, website, and all necessary systems to align changes to the approved ET list. Updated criteria and resources will be developed and published on the FedRAMP website and communicated to stakeholders.  The FedRAMP blog and email notification will be used to communicate prioritization application windows.

**Input:** Approved ET List

**Outputs:** ET Criteria for Prioritization, ET capability targets, ET CSO Request Form , ET Demand Form

**Service Level Agreement Target:** 2 weeks

**Service Level Agreement Threshold:** 4 weeks

#### 5. Shifting Prioritization of CSOs with ET

**Responsible / Accountable:** FedRAMP

**Consult:** FedRAMP Board, CIO Council and Federal CISO Council, Agency Partners and Liaisons

**Informed:** None

**What:** When FedRAMP authorizes the defined target of CSOs in a given ET capability, the ET will be automatically removed from the prioritization list. FedRAMP will repeat step “Update ET Capability List and Criteria” to reflect the removal. These updates will not impact any CSOs who have already been prioritized for another ET capability. FedRAMP will notify the Board and other relevant stakeholders that the target CSO count has been achieved and may begin step “Nominate ETs for Prioritization.”

**Input:** Metrics Report on # of CSPs Prioritized for ET Capabilities

**Output:** Updated ET List

**Service Level Agreement Target:** 2 weeks

**Service Level Agreement Threshold:** 4 weeks

### Evaluation Process - CSP Submissions and Review {#evaluation-process}

![Process graphic showing the flow of the emerging technology prioritization framework and its two significant parts. Part 1 of the process and its substeps are described under the heading Governance Process - Establish Prioritization Capabilities.  Part 2 of the process and its substeps are described under the heading Evaluation Process - CSP Submissions and Review.]({{site.baseurl}}/assets/img/et-framework-process-evaluation.png)

The Evaluation Process determines if a CSO meets the ET definition and qualifying criteria. Once identified and verified, then the CSP will be placed in an accelerated position in the FedRAMP authorization queue. These steps take place during the current Preparation phase of the FedRAMP authorization process.

The evaluation process kicks off after a CSP has:

*   Completed the [CSP Information Form](https://docs.google.com/forms/d/e/1FAIpQLScU4_x5UK53d0PUUDsOdqWyzUvAN1-yFJ1NxffT7PkGkCiuPg/viewform?c=0&w=1){:target="_blank" rel="nofollow"}
*   Reached an agreement with FedRAMP on the appropriate authorization path
*   Completed their 3PAO security assessment and has a security authorization package, including (SSP, SAP, SAR, and POA&M) and is ready for FedRAMP review
*   Prepared and submitted their security package and business case for a CSO, following FedRAMP’s [regular authorization processes]({{site.baseurl}}/assets/resources/documents/CSP_Authorization_Playbook.pdf)

CSPs can submit their [ET CSO Request Forms](https://app.smartsheetgov.com/b/form/4a8391a923da4c4bb95fbbc2d1d54c03) at any point in this process, though as described above, a CSP will not be evaluated for prioritization until completing their 3PAO security assessment. As part of the intake process, FedRAMP will review the ET criteria for prioritization with the CSP. Initially, there will be two open prioritization application windows during each fiscal year. ET CSO Request Forms submitted outside these active windows will be held until the next application window opens and then evaluated with other CSPs submitting in the application window.

#### 1. Submit the ET CSO Request Form & ET Demand Forms

**Responsible / Accountable:** CSP

**Consult:** Agency Partner and Liaison

**Informed:** None

**What:** CSPs in consultation with their agency partner will submit the [ET CSO Request Form](https://app.smartsheetgov.com/b/form/4a8391a923da4c4bb95fbbc2d1d54c03){:target="_blank" rel="nofollow"} and [ET Demand Form](https://app.smartsheetgov.com/b/form/d08f3afe5e8142f9b76f595ef42e9580){:target="_blank" rel="nofollow"} which includes demand justification and attestation to the ET prioritization qualifying criteria for FedRAMP review. Detailed instructions on how to fill out the forms can be found in the [Emerging Technologies Prioritization Criteria and Guidance document]({{site.baseurl}}/assets/resources/documents/Emerging-Technologies-Prioritization-Criteria-and-Guidance-V3.pdf){:target="_blank" rel="nofollow"}.

**Input:** Justification of how CSP meets ET criteria, and a decision to complete the ET prioritization process with FedRAMP.

**Outputs:** Completed ET CSO Request and Demand Forms submitted to FedRAMP for consideration.

**Estimated Duration:** Variable depending on type of ET, complexity of CSO and qualifying criteria, availability of demand data.

#### 2. Qualification Determination and Queue Placement

**Responsible / Accountable:** FedRAMP

**Consult:** Agency Partner and Liaison, CSP

**Informed:** None

**What:** FedRAMP determines if the CSO meets the ET prioritization qualifying criteria in consultation with the agency partner. If the criteria are met, FedRAMP will review the ET demand forms and calculate the total demand score. FedRAMP will select qualifying CSOs based on their demand score up to the ET capability target.

If the criteria are not met, or if other offerings have the demand score, the CSO will still be placed in queue to be reviewed following the standard process.

**Input:** ET CSO Request Form, ET Demand Forms

**Output:** Approve or deny that the CSO meets the ET criteria, ET CSO Prioritization Decision Justification, Process CSO accordingly

**Service Level Agreement Target:** 2 weeks

**Service Level Agreement Threshold:** 4 weeks

#### 3. Monitor ET Approvals

**Responsible / Accountable:** FedRAMP

**Consult:** FedRAMP Board

**Informed:** CIO Federal and CISO council

**What:** FedRAMP will monitor the prioritized CSOs throughout the lifecycle of the ET prioritization process. FedRAMP Security Review Team regularly tracks and communicates the progress of prioritized CSOs towards authorization.

Notification will be sent to the Board and the CIO and Federal Councils when the ET capability target is reached. Subsequently, the Board may initiate a request to do an off-cycle round of the ET governance process.

**Input:** Authorization Packages

**Outputs:** Metrics Dashboard and Reports, Report on Prioritized and Non-Prioritized CSOs

**Service Level Agreement Target:** 2 weeks

**Service Level Agreement Threshold:** 4 weeks


## Supporting Resources {#supporting-resources}
All documents and forms below are authored by FedRAMP, and will be published on the FedRAMP.gov website.
### ET List {#et-list}

[List of ETs]({{site.baseurl}}/et-framework/emerging-technology-list/) will be updated annually at a minimum and on-demand based on stakeholder feedback. This list is further refined by FedRAMP after inputs from the CIO Council, the Federal CISO Council, and other industry inputs as described by the governance process. The updated list must be approved by the Board.

### ET CSO Request Form {#et-cso-request-form}

The [ET CSO Request Form](https://app.smartsheetgov.com/b/form/4a8391a923da4c4bb95fbbc2d1d54c03){:target="_blank" rel="nofollow"} serves to identify whether the CSP or CSO meets the ET criteria for prioritization, and collects information about the CSO.

### ET Demand Form {#et-demand-form}

The [ET Demand Form](https://app.smartsheetgov.com/b/form/d08f3afe5e8142f9b76f595ef42e9580){:target="_blank" rel="nofollow"} serves to identify the CSO's demand.

### ET Prioritization Criteria and Guidance {#ET-prioritization-criteria-and-guidance}

A detailed instruction manual on how to fill out the ET CSO Request Form and the ET Demand Form is located electronically here: [Emerging Technologies Prioritization Criteria and Guidance]({{site.baseurl}}/assets/resources/documents/Emerging-Technologies-Prioritization-Criteria-and-Guidance-V3.pdf){:target="_blank" rel="nofollow"}.