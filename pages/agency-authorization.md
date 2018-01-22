---
layout: page
title: Get Authorized- Agency Authorization
permalink: /agency-authorization/
body-class: page-fed-agencies
---


The first step for any Cloud Service Provider (CSP) interested in pursuing a FedRAMP authorization for their cloud service offering (CSO) is to determine their authorization strategy. There are two types of FedRAMP authorizations: a Provisional Authority to Operate (P-ATO) from the Joint Authorization Board (JAB) and an Agency Authority to Operate (ATO).

To decide which type of authorization is right for a particular CSO, the CSP should review Volume 1 of the CSP Playbook: Getting Started with FedRAMP [insert link] and should take into account their system's impact level, deployment model, stack, and market demand.

Below is a high level overview of the Agency Authorization Process. Information on a Agency’s, CSP’s, and 3PAOs role and responsibilities within the Agency Authorization process can be found here [insert link]. 

### Agency Authorization:

![image alt text]({{site.baseurl}}/assets/img/agency-auth.png)

### Phase 1: Partnership Establishment  

In this phase, a CSP formalizes their partnership with an Agency via [FedRAMP’s In Process requirements](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2016/06/FedRAMP-Requirements-for-Obtaining-In-Process-Designation_FINAL.pdf). In some cases, a vendor may be under contract with a CSP already, or an Agency may be working through the acquisition process.

The CSP’s system should be fully built and functional, and the CSP’s leadership team should be committed and fully on board with the FedRAMP process. Additionally, if they have not already done so, a CSP should engage with the FedRAMP office through the intake process by completing a [CSP Information Form](https://docs.google.com/a/theclearing.com/forms/d/e/1FAIpQLScU4_x5UK53d0PUUDsOdqWyzUvAN1-yFJ1NxffT7PkGkCiuPg/viewform?c=0&w=1).

Throughout this phase, the CSP develops their System Security Plan (SSP), which is the security blueprint of their system. The SSP does not need to be completed prior to establishing a partnership with an Agency, but it does need to be completed and fully reviewed by the Agency prior to Phase 2. The Agency partner should approve and sign off on the SSP prior to beginning testing. 

### Phase 2: Full Security Assessment 

Prior to beginning Phase 2, a CSP should ensure that:

* The SSP is complete and has been reviewed and approved by their Agency partner.

* The Security Assessment Plan (SAP) has been developed by their 3PAO with their input.

During this phase, the 3PAO tests the CSP’s system. During testing, it is critical that no changes are made to the system, and that it is frozen from a development perspective.

Once the testing is complete, the 3PAO develops a Security Assessment Report (SAR), which details their findings and includes a recommendation for FedRAMP Authorization. The CSP then develops a POA&M based on the SAR findings, and includes input from the 3PAO, which outlines a plan for addressing the findings from testing.

### Phase 3: Authorization Process 

The Agency then reviews the assessment and associated deliverables and either approves them or requests additional testing. A final review is then conducted, and if the Agency accepts the risk associated with the use of the system, they provide an Authority to Operate (ATO) letter.

Once the Agency provides the ATO letter, the Agency or CSP uploads the entire security package, the FedRAMP checklist, and ATO letter to FedRAMP’s Secure Repository on OMB MAX and informs the FedRAMP PMO. The PMO then conducts a review of the package that is focused on collaboration early on with the Agency, CSP, and 3PAO.

After the PMO has reviewed the package and the CSP has addressed any technical issues, the FedRAMP PMO will make a decision for FedRAMP Authorization.

### Phase 4: Continuous Monitoring 

Once the FedRAMP Authorization is complete, a CSP must provide monthly continuous monitoring (ConMon) deliverables to the Agencies that are using their service. These deliverables may include an updated POA&M, scan results/reports, system change information/requests, as agreed upon between the Agency and the CSP. The monthly continuous monitoring deliverables should be reviewed by each Agency using the service, but do not need to be shared with the FedRAMP PMO. CSPs may use the FedRAMP repository to share monthly ConMon material with Agency representatives. 

The must also CSP must engage a 3PAO to complete an annual security assessment to ensure the risk posture of the system remains acceptable. The annual assessment, along with updated security authorization package documentation, is then uploaded to the FedRAMP secure repository. 

