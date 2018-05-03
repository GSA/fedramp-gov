---
title: ‘Penetration Testing for All FedRAMP Moderate and High Systems’
permalink: /penetration-testing-for-all-fedramp-moderate-and-high-systems/
body-class: page-blog
image: /assets/img/blog-images/Blog_03202018_Cloud_Lock.png
author: FedRAMP
layout: blog-page
---

Penetration testing is a well-recognized way to explore IT system weaknesses. FedRAMP requires penetration testing as part of the initial authorization assessment for all systems pursuing a Moderate or High FedRAMP authorization, as well as for every annual assessment. Vulnerability scanning alone is not sufficient for determining the degree to which a system is susceptible to cyber attack. Penetration testing takes on the perspective of a malicious actor, who is skilled at turning small security flaws into larger opportunities for attack.

While there is no one industry best practice for penetration testing, FedRAMP identifies minimum penetration testing and reporting standards for all FedRAMP required penetration testing in the <a href="https://www.fedramp.gov/assets/resources/documents/CSP_Penetration_Test_Guidance.pdf">FedRAMP Penetration Test Guidance Document</a>. That guide identifies specific attack vectors to include in testing, as well as penetration test reporting requirements. 

To ensure that the penetration testing you undertake is fully acceptable, FedRAMP offers the following recommendations: 

* **Ensure proper scope.** The scope of a penetration test is important. The scope must align with the system’s authorization boundary. If the scope is too small, the testing may be invalid. If the scope is too large, the test team may inadvertently infiltrate a system for which they do not have authorization. Pen test scope is identified and documented in a Penetration Test Plan (PTP)
* **Underlying providers are out of scope.** If your SaaS system resides on a FedRAMP-authorized PaaS or IaaS, only your SaaS components are within scope. There’s no need to perform a pen test on the PaaS or IaaS your system sits on top of - AND (please see below)
* **Some underlying providers have procedures that must be followed.** If your SaaS system resides on an underlying PaaS or IaaS, you may need to notify or obtain approval from the underlying provider before performing activities such as penetration testing or scanning. Always check your service provider’s latest policies and procedures. Engage with your PaaS or IaaS provider early in the acquisition phase to ensure that you will be able to perform the appropriate penetration testing when the time comes
* **Reporting should be comprehensive.** Penetration test assessment activities and results must be organized and compiled into a comprehensive Penetration Test Report (PTR). The PTR includes the actual tests performed and the results of those tests, the access paths utilized, as well as test findings and evidence
* **Ensure all FedRAMP-identified attack vectors are addressed.** At the FedRAMP PMO, we sometimes see vulnerability scans represented as penetration testing. The two are not synonymous. FedRAMP-acceptable penetration tests must include the perspective of internal and external threats - both trusted and untrusted. It should include attempted exploitation of any web applications, mobile applications and the system’s network within the system’s boundary. For multi-tenant systems, penetration testing must include a trusted tenant attempting to cross tenant boundaries
* **Non-production test environments must be configured exactly the same as the production environment.** Penetration testing in a production environment is not always feasible or tenable for a variety of reasons. A test environment that is configured to exactly mimic the production environment can be used in these circumstances to facilitate penetration testing. Similar or like environments are not sufficient. FedRAMP requires that test and production environments to be mirror images to ensure that all findings are applicable to the production environment and minimize the chance of false-negatives. Tenant to tenant testing is a good use-case for performing penetration testing in a non-production environment
* **Social engineering must include a phishing test.** At a minimum, all CSP staff with logical access to the system must be included in the phishing email distribution. Staff should not be warned of a phishing test

Following these tips and the Penetration Test Guidance document helps ensure penetration testing for our authorized vendors happens smoothly and the results are acceptable to FedRAMP. Questions about FedRAMP or this post should be directed to info@fedramp.gov.

Additional resources:
* Microsoft Azure: <a href="https://docs.microsoft.com/en-us/azure/security/azure-security-pen-testing">Pen Testing</a> 
* Amazon Web Services: <a href="https://aws.amazon.com/security/penetration-testing/">Penetration Testing</a> 
* <a href="https://www.whitehouse.gov/presidential-actions/presidential-executive-order-strengthening-cybersecurity-federal-networks-critical-infrastructure/">Cyber EO</a> 
* <a href="https://www.justice.gov/criminal-ccips/page/file/983996/download">A Framework for a Vulnerability Disclosure Program for Online Systems</a> 
* <a href="https://hackerone.com/deptofdefense">DoD Vulnerability Disclosure Program</a> 
* <a href="https://18f.gsa.gov/vulnerability-disclosure-policy/">18F Vulnerability Disclosure Policy</a> 
