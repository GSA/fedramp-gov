---
layout: page
title: Tips & Cues
permalink: /tips-cues/
body-class: page-fed-agencies
---
Many of our Cloud Service Providers (CSPs), Federal Agencies, and Third Party Assessment Organizations (3PAOs) share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we provide weekly tips and address frequently asked questions and concerns. Below you will find our most recent month of Tips & Cues. To receive our weekly email, sign up [here](https://public.govdelivery.com/accounts/USGSA/subscriber/new?qsp=USGSA_2224) for our listserv. 

You can also review and search all of our past Tips & Cues by downloading our compilation document <a href="{{site.baseurl}}/assets/resources/documents/FedRAMP_Tips_and_Cues.pdf">here</a>.
<h2>April 2019 Tips & Cues</h2>

<div class="q3">
<h3>TIP: All FedRAMP Baselines require the CSP information system to accept and electronically verify Personal Identity Verification (PIV) and Common Access Card (CAC) credentials according to IA-2(12).</h3>
<p>
Many CSP's assign the responsibility of PIV/CAC implementation to the Federal Agency customer for on-premise authentication. Then, they employ federation methods described in the Digital Identity Guidelines such as SAML/ADFS to authenticate to the CSP environment. While this is an acceptable method, the CSP must still demonstrate the capability of accepting and verifying PIV/CAC credentials in the Cloud Service Offering. Understanding that CSP personnel may not have been issued PIV/CAC credentials, NIST has developed a set of test PIV cards that can be purchased to test the PIV/CAC capability which is available here.
  </P>
  <p>
The 3PAO is expected to assess the PIV/CAC implementation by the CSP even if the responsibility is ultimately assigned to the Federal Agency Customer.  Also, of course, proper implementation of federated authentication is also assessed by the 3PAO.
</p>
</div>

<div class="q3">
<h3>Q: What are FedRAMP baseline requirements for a Cloud Service Offering (CSO) to become a High Baseline System?</h3>
<p>
  
1) There should be no interconnections to systems or services lacking FedRAMP Authorization. For JAB P-ATOs, interconnections must be to systems with other JAB P-ATOs.
  
2) “Corporate” services that impact the service/system must be in the authorization boundary.

3) Software, firmware, hardware that performs a security function (e.g., Security Incident and Event Management [SIEM], System and the Intrusion Detection System [IDS]/Intrusion Prevention System [IPS], security scanners, logging tools, etc.) must be included in the boundary and tested against the high baseline requirements. The decision to include components inside or outside of the authorization boundary is dependent on the type of data processed in the system or asset.

4) The system may have no high or critical findings.

5) All encryption must use FIPS 140-2-validated cryptographic modules for data in use, data in transit, and data at rest, as well as for Multi-factor Authentication (MFA). MFA Encryption must use FIPS 140-2-validated cryptographic modules in both authenticators AND verifiers.

6) If the Cloud Service Offering (CSO) has strong configuration management and change management built into the system development life cycle, the development environment can be outside the CSO boundary. This means that there is a 3PAO validated, reproducible and effective way to make service changes without impacting the production environment.
</p>
</div>

<div class="q3">
<h3>Q: My Agency is moving some of our systems and applications to the cloud and we are told we must use FedRAMP. Do these Agency systems and applications need to be FedRAMP Authorized?</h3>
<p>
A: The OMB memo directs Federal Agencies to use FedRAMP Authorized Cloud Services to meet cloud computing needs. Federal Agencies routinely issue Authority to Operate (ATOs) that leverage FedRAMP Infrastructures (IaaS), Platforms (PaaS) and Software (SaaS) - as a Service. In fact, there have been over 1,000 Federal ATO's issued leveraging the cloud products.
When Federal Agencies migrate Agency specific systems, applications, and data for processing to a FedRAMP Authorized IaaS for the exclusive use of the Agency, this becomes an Agency's Private Cloud. This is a Private cloud computing environment for the Agency is similar to traditional federal data center processing, except the processing is hosted by a FedRAMP Authorized IaaS as intended by the OMB mandate. Under this scenario, the Agency systems and applications are not shared with other Agencies as it would for a SaaS in a multi-tenant environment. So, there is no leverageable FedRAMP Authorization on our marketplace of the Private Cloud.  
  
Private Cloud System Security Plans (SSPs) show the IaaS (and associated security controls) as leveraged/inherited and include other Agency components (i.e. COTS software, Agency developed systems and applications, hardware, data etc.) as ATO’d under Risk Management Framework (RMF). Agencies typically build their Private Clouds in FedRAMP Authorized Government Community Cloud Services.
  
To be in-scope for FedRAMP Authorization re-use, the cloud environment would be assessed "once and used many" as is the case with the IaaS, but not the Private Cloud.
</p>
</div>
