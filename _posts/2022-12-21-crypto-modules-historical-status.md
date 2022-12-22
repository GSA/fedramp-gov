---
title: Status of Crypto Modules in Historical Status
permalink: /blog/2022-12-21-crypto-modules-historical-status/
body-class: page-blog
image: /assets/img/blog-images/2022-10-20-crypto-modules-historical-status.png
author: FedRAMP
layout: blog-page
---
On July 1, 2022, many Federal Information Processing Standards 140 (FIPS 140) validated crypto modules (CMs) were moved to ‘historical status’ by the NIST Cryptographic Module Validation Program (CMVP) due to <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/nist.sp.800-56Ar3.pdf" target="_blank" rel="noopener noreferrer">NIST SP 800-56A Rev 3</a>, “Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography” transition. This comes after a 2017 NIST announcement to enhance the secure key establishment algorithm using asymmetric algorithms, and an April 2018 release of the new requirements in SP 800-56A Rev 3.

<h4>How should Cloud Service Providers (CSPs) and Third-Party Assessment Organizations (3PAOs) address cryptographic modules (CMs) in historical status due to the SP 800-56A Rev 3 transition?</h4>

The following PMO guidance on the subject should be applied to <u>each and every</u> CM in use:
<h5>For initial authorization and continuous monitoring</h5> 
- <b>CSP Actions:</b> for CMs moved to Historical status due to SP 800-56A Rev 3 transition:
    1. If a replacement CM has been submitted for testing or is listed as in-process with CMVP:
    
        a. Capture in the POA&M as a vendor dependency. A CM that has been submitted for testing is acceptable, even if not yet listed on the CMVP in-process web site.
    
    2. If a replacement CM has not been submitted for testing, but is in development with plans to submit for CMVP testing:
         
        a. Determine that there are no known exploits of the existing CM.
            
        <b>i. If there are no exploits:</b>
               
        1. Capture it in the POA&M as a vendor dependency
               
        2. Provide a replacement CM implementation plan and timeline to the Authorizing Official (JAB or Agency AO) for approval.
            
        <b>ii. If there is an exploit:</b>
               
        1. Capture it in the POA&M as an open risk
               
        2. Consider moving to a new CM
    
    3. If a replacement cannot be identified or is otherwise not planned by the CM author:

        a. For systems in continuous monitoring, document a plan to transition to a new CM as an open POA&M and submit it to the Authorizing Official (JAB or Agency AO) for approval.
         
        b. For systems pursuing an initial authorization:
             
        i. If the 3PAO’s initial assessment is complete, redesign around a different CM and submit a project plan to the Authorizing Official (JAB or Agency AO) for approval
             
        ii. If the 3PAO’s initial assessment is not complete, redesign around a different CM, and complete the implementation, prior to the 3PAO assessment for an initial authorization

- <b>3PAO Action:</b> Review and confirm the status and remediation plan for CMs in historical status due to SP 800-56A Rev 3 transition.

<h5>For readiness assessments (to be considered for “FedRAMP Ready” designation)</h5> 
- <b>CSP Actions:</b>
    
    1. If a replacement CM has been submitted for testing or is listed as in-process with CMVP:

        a. Document this in the Mandates section in the Readiness Assessment Report (RAR). A CM that has been submitted for testing is acceptable, even if not yet listed on the CMVP in-process web site.
    
    2. If a replacement CM has not been submitted for testing, but is in development with plans to submit for CMVP testing: 
          
        a. Determine that there are no known exploits of the existing CM
          
        i. If there are no exploits, provide evidence to the 3PAO for documenting in the RAR.
         
        ii. If there is an exploit, plan to replace the CM before pursuing FedRAMP Ready. 
              
    3. If a replacement cannot be identified or is otherwise not planned by the CM author:
  
        a. Redesign around a different CM, and complete the implementation, prior to pursuing FedRAMP Ready.
          
- <b>3PAO Action:</b> Review and confirm the status and remediation plan for CMs in historical status due to SP 800-56A Rev 3 transition.
    
    1. If a replacement CM has been submitted for testing, or is in development with plans to submit for testing, document the status of CMs in the RAR at the end of the Mandates section.
    
    2. If a replacement cannot be identified or is otherwise not planned by the CM author, do not submit the RAR to FedRAMP PMO. The CSP needs to redesign around a different CM, and complete the implementation before a RAR will be considered.

*As a reminder, this guidance only applies to CMs that have become historical due to the NIST SP‌‌ 800-56A Rev 3 transition.*

Please contact <a href="mailto:info@fedramp.gov">info@fedramp.gov</a> if you have any questions about these updates.
