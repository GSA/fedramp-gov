---
layout: page
title: Tips & Cues
permalink: /tips-cues/
body-class: page-fed-agencies
---

Many of our Cloud Service Providers (CSPs), Federal Agencies, and Third Party Assessment Organizations (3PAOs) share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we provide weekly tips and address frequently asked questions and concerns. Below you will find our most recent month of Tips & Cues. To receive our weekly email, sign up [here](https://public.govdelivery.com/accounts/USGSA/subscriber/new?qsp=USGSA_2224) for our listserv. 

**You can also review and search all of our past Tips & Cues by downloading our compilation document ****[insert link to compilation document]. **
<h2>January 2018 Tips & Cues</h2>
<div class="q1">
<h3>Q: What is the relationship between continuous monitoring and continuous diagnostics & mitigation (CDM) and ongoing authorization?</h3>

<p><strong>A:</strong> The FedRAMP and CDM monitoring requirements are both based on NIST Special Publication 800-137 guidance for implementing an Information Security Continuous Monitoring program. The CDM program has initially focused on providing tools to Federal Agencies to ensure that they can fulfill vulnerability management, malware detection, asset management, and configuration management program responsibilities and aggregate data from those tools into a central console or dashboard to facilitate a more robust awareness of one’s risk posture. Agencies would also provide aggregate output from this dashboard to DHS to facilitate a government-wide view of vulnerabilities and associated risks. FedRAMP security controls also require that these elements (vulnerability management, malware detection, asset management, and configuration management) be in place at the CSP to support visibility into the operational status of a system, much like the CDM program. However, FedRAMP does not prescribe the exact tools and dashboards nor does it require real-time or near real-time uploading of all tool output to FedRAMP.
</p>
<p>
There is no planned integration of CDM and FedRAMP continuous monitoring at this time as CDM is focused on government assets and not external providers. FedRAMP is interested in evolving its continuous monitoring program to facilitate a shift from a compliance-based to a more risk-based approach and is preparing to solicit feedback from agencies and industry. <em>(January 17th, 2018) </em>
</p>
</div>

<div class="q2">
<h3>Q: My system uses various platforms and operating systems, so how do I relate technical control implementation statements?
</h3>

<p><strong>A:</strong> The security control implementation statements for technical controls (AC, AU, IA, SC, etc) must be developed to include all of the applicable platforms/operating systems (e.g., Windows, Linux, Solaris, VMware) that comprise the cloud service architecture.</p>
<p>It is critical for reviewers (either Joint Authorization Board (JAB) or Agency) to delineate each platform/operating system against the applicable security control requirement to ensure compliance is adequately being met. <em>(January 17th, 2018)</em> 
</p>
</div>

<div class="tip-1">
<h3>TIP: CSPs must address every vulnerability they submit as part of their continuous monitoring data. There are a few different options for managing those vulnerabilities.</h3>
<ol>
<li>Remediate the finding within the required timeframe. This should be the default approach to vulnerability management.</li>
<li>As part of the Deviation Request process:
<ul>
<li>Implement mitigations and request a risk adjustment, if appropriate.</li>
<li>Seek approval for any False Positive (FP) findings. Be sure to provide evidence that proves the finding was an FP. An FP would not be appropriate in instances where the system setting is not active and, therefore, not vulnerable, but if it were active, the vulnerability would exist. This type of finding should be submitted as a Risk Adjustment with layers of mitigations that prevent exposure if the system setting is activated.</li>
<li>Seek approval as an Operational Requirement (OR). OR requests should be infrequent since it means the vulnerability remains in production until it is eventually remediated. High findings must be mitigated and Risk Adjusted to at least Moderate for acceptance as an OR.</li></ul></li>
<li>Justify the finding as a Vendor Dependency and check in with the vendor every 30 days. In this case, the vulnerability will not be considered late. The CSP should seek vendor components that are FedRAMP compliant when possible to avoid any Vendor Dependencies. <em>(January 10th, 2017)</em></li>
</ol>
</div>

<div class="tip-1">
<h3>TIP: Select your monthly continuous monitoring scan and Plan of Action & Milestones (POA&M) delivery date wisely.
</h3>

<p>Consider vendor patch release schedules and your typical duration between the release of a vendor patch and its application within your environment. Plan your scans as soon as possible after patches are typically applied each month. If your monthly scans are out-of-sync with your patch cycle, the number of vulnerabilities reported can be artificially inflated.</p>
<p>For example, if you have Microsoft-based hosts and a two week patch cycle, running scans just one week after “patch Tuesday” will report all of the newly released patches as new vulnerabilities on those hosts and inflate your vulnerability count. Scanning shortly after your patch cycle gives your admins time to remediate all of those new vulnerabilities. Therefore, only the exceptions – if any – are reported. <em>(January 10th, 2017)</em></p>
</div>

<div class="q3">

<h3>Q: What is the purpose of an Information System Contingency Plan (ISCP)?</h3>

<p><strong>A:</strong> Each CSP must develop and maintain contingency plans to address operational disruptions. The contingency plan (and test results) provides management with an evaluation of the preparedness of the CSP's cloud service offering in the event of a major disruption and/or a catastrophic event. The contingency plan ensures that operations resume and are eventually restored to a known state. The ISCP and Service Level Agreements drive the recovery test frequency and complexity and recovery time frames. These contingency plans are a component of an effective security operations implementation. <em>(January 4th, 2018) </em>
</p>
</div>
<div class="q5">

<h3>Q: What can a CSP do to prepare for penetration testing and what risks are involved?</h3>

<p><strong>A:</strong> The FedRAMP Penetration Testing Methodology is comprehensive and follows NIST SP 800-115. Before considering this activity, a CSP should work with a third party assessment organization (3PAO) assessment team to discuss the ramifications of utilizing the FedRAMP Penetration Testing Methodology. Both the 3PAO assessment team and the CSP must determine, in writing and prior to the onset of the testing, the level of risk they are willing to accept for the assessment and tailor the approach accordingly.</p>
<p>Once the parameters have been tentatively agreed upon, the 3PAO penetration tester and assessment team should begin the security assessment activities with a planning phase that includes gathering information about the CSP environment and developing the test procedures. Only after completing the planning phase should the 3PAO assessment team proceed to the execution phase.</p>
<p>During execution phase, the assessment team identifies vulnerabilities and validates that the vulnerabilities are not false positives. At the conclusion of the execution phase, the assessment team has a list of technical and process vulnerabilities. This list is used during the post-execution phase to determine root causes of vulnerabilities, recommend remediation actions, and document the test results in the Security Assessment Report (SAR).</p>
<p>Penetration testing risks can range from not gathering sufficient information on the organization’s security posture for fear of impacting system functionality to affecting the system or network availability by executing techniques without the proper safeguards in place. Communication and thorough understanding is key. <em>(January 4th, 2018)</em> </p>
</div>
