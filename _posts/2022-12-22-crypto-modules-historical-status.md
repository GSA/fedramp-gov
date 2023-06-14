---
title: Status of Crypto Modules in Historical Status
permalink: /blog/2022-12-22-crypto-modules-historical-status/
body-class: page-blog
image: /assets/img/blog-images/2022-10-20-crypto-modules-historical-status.png
author: FedRAMP
layout: blog-page
---
On July 1, 2022, many Federal Information Processing Standards 140 (FIPS 140) validated crypto modules (CMs) were moved to ‘historical status’ by the NIST Cryptographic Module Validation Program (CMVP) due to <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/nist.sp.800-56Ar3.pdf" target="_blank" rel="noopener noreferrer">NIST SP 800-56A Rev 3</a>, “Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography” transition. This comes after a 2017 NIST announcement to enhance the secure key establishment algorithm using asymmetric algorithms and an April 2018 release of the new requirements in SP 800-56A Rev 3.

<h3>How should Cloud Service Providers (CSPs) and Third-Party Assessment Organizations (3PAOs) address cryptographic modules (CMs) in historical status due to the SP 800-56A Rev 3 transition?</h3>

The following PMO guidance on the subject should be applied to <u>each and every</u> CM in use:
<h4>For initial authorization and continuous monitoring</h4> 
<h5>CSP Actions:</h5>
<ol type="1">
  <li><b>If a replacement CM has been submitted for testing or is listed as in-process with CMVP:</b></li> 
  <ol type="a">
    <li>Capture in the Plan of Action & Milestones (POA&M) as a vendor dependency. A CM that has been submitted for testing is acceptable, even if not yet listed on the CMVP in-process web site.</li>
  </ol>          
  <li><b>If a replacement CM has not been submitted for testing, but is in development with plans to submit for CMVP testing:</b></li>
  <ol type="a">
    <li>Determine that there are no known exploits of the existing CM.</li>
      <ol type="i">
        <li>If there are <u>no exploits</u>:</li>
    		  <ol type="1">
              <li>Capture it in the POA&M as a vendor dependency.</li>
              <li>Provide a replacement CM implementation plan and timeline to the Authorizing Official (JAB or Agency AO) for approval.</li>
    		  </ol>
        <li>If there is <u>an exploit</u>:</li>
    		  <ol type="1">
              <li>Capture it in the POA&M as an open risk.</li>
              <li>Consider moving to a new CM.</li>
    		  </ol>
     </ol> 
  </ol>            
  <li><b>If a replacement cannot be identified or is otherwise not planned by the CM author:</b></li>
  <ol type="a">
    <li>For systems in continuous monitoring, document a plan to transition to a new CM as an open POA&M and submit it to the Authorizing Official (JAB or Agency AO) for approval.</li>
   <li>For systems pursuing an initial authorization:
      <ol type="i">
       <li>If the 3PAO’s initial assessment is <u>complete</u>, redesign around a different CM and submit a project plan to the Authorizing Official (JAB or Agency AO) for approval.</li>  
        <li>If the 3PAO’s initial assessment is <u>not complete</u>, redesign around a different CM, and complete the implementation, prior to the 3PAO assessment for an initial authorization.</li>
     </ol>      
    </li>  
  </ol>
</ol>  
<h5>3PAO Action:</h5> 
<ol type="1">
  <li><b>Review and confirm the status and remediation plan for CMs in historical status due to SP 800-56A Rev 3 transition.</b></li>
</ol>  
<h4>For readiness assessments (to be considered for “FedRAMP Ready” designation)</h4> 
<h5>CSP Actions:</h5>
<ol type="1">
  <li><b>If a replacement CM has been submitted for testing or is listed as in-process with CMVP:</b></li>
    <ol type="a">
    <li>Document this in the Mandates section in the Readiness Assessment Report (RAR). A CM that has been submitted for testing is acceptable, even if not yet listed on the CMVP in-process web site.</li>
    </ol>     
  <li><b>If a replacement CM has not been submitted for testing, but is in development with plans to submit for CMVP testing:</b></li>
    <ol type="a">
     <li>Determine that there are no known exploits of the existing CM.</li>
       <ol type="i">
         <li>If there are <u>no exploits</u>:</li>
    	    	<ol type="1"> 
              <li>Provide evidence to the 3PAO for documenting in the RAR.</li>
    	    	</ol>
         <li>If there is an <u>exploit</u>:</li>
    		    <ol type="1"> 
              <li>Plan to replace the CM before pursuing FedRAMP Ready.</li>
    		    </ol>      
        </ol>
    </ol>              
  <li><b>If a replacement cannot be identified or is otherwise not planned by the CM author:</b></li>
    <ol type="a">
      <li>Redesign around a different CM, and complete the implementation, prior to pursuing FedRAMP Ready.</li>
    </ol>
</ol>        
<h5>3PAO Action:</h5>
<ol type="1">
  <li><b>Review and confirm the status and remediation plan for CMs in historical status due to SP 800-56A Rev 3 transition.</b></li>  
    <ol type="a">
     <li>If a replacement CM has been submitted for testing, or is in development with plans to submit for testing:</li> 
       <ol type="i">
         <li>Document the status of CMs in the RAR at the end of the Mandates section.</li>
       </ol>
    <li>If a replacement cannot be identified or is otherwise not planned by the CM author:</li>
       <ol type="i">
         <li>Do not submit the RAR to FedRAMP PMO. The CSP needs to redesign around a different CM, and complete the implementation before a RAR will be considered.</li>
       </ol>
    </ol> 
 </ol>  
 
*As a reminder, this guidance only applies to CMs that have become historical due to the NIST SP 800-56A Rev 3 transition.*

Please contact <a href="mailto:info@fedramp.gov">info@fedramp.gov</a> if you have any questions about these updates.
