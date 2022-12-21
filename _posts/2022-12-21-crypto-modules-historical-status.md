---
title: Status of Crypto Modules in Historical Status
permalink: /blog/2022-12-21-crypto-modules-historical-status/
body-class: page-blog
image: /assets/img/blog-images/2022-10-20-crypto-modules-historical-status.png
author: FedRAMP
layout: blog-page
---
On July 1, 2022, many Federal Information Processing Standards 140 (FIPS 140) validated crypto modules (CMs) were moved to ‘historical status’ by the NIST Cryptographic Module Validation Program (CMVP) due to https://nvlpubs.nist.gov/nistpubs/SpecialPublications/nist.sp.800-56Ar3.pdf

NIST SP 800-56A Rev 3, “Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography” transition. This comes after a 2017 NIST announcement to enhance the secure key establishment algorithm using asymmetric algorithms, and an April 2018 release of the new requirements in SP 800-56A Rev 3.

On July 1, 2022, many FIPS 140 validated crypto modules (CMs) were moved by the NIST Cryptographic Module Validation Program (CMVP) to ‘historical status’ due to NIST SP 800-56A, <b>Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography, Rev 3</b> transition. This comes after a 2017 NIST announcement to enhance the secure key establishment algorithm using asymmetric algorithms, and an April 2018 release of the new requirements in SP 800-56A Rev. 3

<h4>How should CSPs and 3PAOs address cryptographic modules (CMs) in historical status due to the SP 800-56A Rev 3 transition?</h4>

The following PMO guidance on the subject should be applied to <u>each and every</u> CM in use:
<h5>For Initial Authorization and Continuous Monitoring</h5> 
- <b>CSP Actions:</b> for CMs moved to Historical status due to SP 800-56A Rev 3 transition:
    
    1. If a replacement CM is identified as in-process with CMVP, document this as a POA&M. A CM that has been submitted for testing is acceptable, even if not yet listed on the CMVP in-process web site.
    
    2. If CM has not been submitted for testing, but a replacement CM is in development with plans to submit for CMVP testing:
         
         a. Determine that there are no known exploits of the existing CM
         
         b. If there are no exploits, document this in a POA&M as a vendor dependency
          
         c. If there is an exploit, document the exploit, and consider moving to a new CM
         
         d. For a CM where the CSP is waiting for submission to NIST for validation, the CSP must provide a detailed plan with associated implementation dates for approval
    
    3. If a replacement is not planned by the CM author, document a plan to transition to an new CM as a POA&M
       
       <b>a. If # 3 applies, the CSP should redesign around a different CM and submit a project plan to the appropriate authorizing official for approval</b>
       
       <b>b.  If # 3 applies and CSP has not begun their initial assessment, the CSP should redesign their system around a different CM prior to an initial authorization and before submitting to achieve FedRAMP Ready.</b>

- <b>3PAO Action:</b> Review and confirm the status and remediation plan for CMs in historical status due to SP 800-56A Rev 3 transition.

<h5>For Readiness Assessments (to be considered for “FedRAMP Ready” designation)</h5> 
- <b>CSP Actions:</b> for CMs moved to Historical status due to SP 800-56A rev3 transition:
    
    1. If a replacement CM is identified as in-process with CMVP, document this in the Mandates section in the RAR. A CM that has been submitted for testing is acceptable, even if not yet listed on the CMVP in-process web site.
    
    2. If CM has not been submitted for testing, but a replacement CM is in development with plans to submit for CMVP testing: 
          
          a. Determine that there are no known exploits of the existing CM
          
          b. If no exploits, provide evidence to the 3PAO for documenting in the RAR
         
         c. If there is an exploit, plan to replace the CM
   
   3. If a replacement cannot be identified or is otherwise not planned by the CM author, the CSP must redesign their system to use a different CM

- <b>3PAO Action:</b> Review and confirm the status and remediation plan for CMs in historical status due to SP 800-56A Rev 3 transition. 
    1. The 3PAO should document historical status of CMs in the RAR with respect to #1 and #2, above. Add this to the RAR at the end of the mandates section.
    2. <b>If # 3 applies, the 3PAO should not submit the RAR to FedRAMP PMO.</b> The CSP needs to redesign around a different CM, and complete the implementation before a RAR will be considered.

*As a reminder, this guidance only applies to CMs that have become historical due to the NIST SP‌‌ 800-56A Rev 3 transition.*
