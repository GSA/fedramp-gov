---
layout: page
title: Frequently Asked Questions
permalink: /faqs/
body-id: page-fed-agencies
---
<ul class="accordion">
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>How does FedRAMP handle TIC requirements in the cloud?</h5>
<p>TIC compliant architectures are required through the FedRAMP security controls baseline. Sample compliant architectures are provided for review within the Guide to Understanding FedRAMP. TIC compliance is a hybrid responsibility with CSPs needing to have an architecture that supports TIC and Agencies enforcing TIC routing and compliance.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Are there specific categories of routine/non-routine changes?</h5>
<p>Significant change is defined by CA-6 in NIST 800-53 Revision 4. The list of the types of changes which will require notification versus updated documentation and/or reauthorization include:</p>
<ul class="sub-items">
<li>Changes to points of contact</li>
<li>Changes in risk posture</li>
<li>Change in system boundary (including new services)</li>
</ul>

<p>Routine changes are generally documented in a CSP’s configuration management plan. Configuration management plans are reviewed and approved by authorizing officials.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>How long does a CSP have to remediate a POA&M and does this apply to all system levels?</h5>
<p>A CSP has 30 days for remediating high POA&M items, and 90 days for remediating moderate POA&M items. There is no specific time frame requirement for low vulnerabilities; however, it is strongly suggested that CSPs remediate lows within 180 days.</p>
</li>

<li>
    <input type="checkbox" checked>
    <i></i>
<h5>For cloud services that are authorized, what happens if the CSP changes the infrastructure of the system?</h5>

<p>A change in infrastructure would be considered a significant change that would need to be evaluated for the severity of the change, impact on the risk posture, and could possibly result in the need for re-authorization.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Are cloud services that are listed as "In-Process" considered FedRAMP compliant?</h5>

<p>Cloud services "In-Process" should not present themselves as FedRAMP compliant to Agencies. A cloud service posted as “In-Process” on fedramp.gov only indicates that they are working with the Joint Authorization Board (JAB) or an Agency to attain a FedRAMP authorization.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>If an Agency purchases an outsourced service (software) that is built on top of a cloud platform, how is that handled within FedRAMP?</h5>

<p>Obtaining a FedRAMP authorization requires all system components be assessed based on the control requirements in the FedRAMP baseline. If a FedRAMP authorized Infrastructure as a Service (IaaS) is leveraged, the Agency only needs to assess controls that are not addressed by the managed IaaS provider. If a SaaS is hosted on a FedRAMP-authorized IaaS, the SaaS vendor would need to have a separate FedRAMP authorization. The IaaS authorization would remain as-is and then the SaaS would leverage/re-use the IaaS authorization and applicable security controls (for the IaaS portion of requirements). If a SaaS or PaaS is leveraging a non-FedRAMP authorized infrastructure, then the entire FedRAMP stack would need to be authorized together. </p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Who is responsible for the cloud security controls?</h5>

<p>The responsibility for the controls will depend on the solution. In summary, the CSP and Agency will be responsible for some specific controls, and both parties will share responsibility for other controls. The CSP develops a Control Implementation Summary (CIS) that contains a matrix outlining which controls are CSP-provided, Agency/customer-provided, and hybrid. The CSP develops a System Security Plan (SSP) that further describes the responsibilities for the controls and how exactly the control is implemented by each responsible entity. Both the CIS template and the SSP template are on the FedRAMP website.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>During an assessment, are "on the spot" fixes acceptable? Or will it still need to be written up?</h5>

<p>"On the spot" fixes are acceptable. However, this should be reported in the Security Assessment Report (SAR) as discovered, addressed, and verified by the independent assessor.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Are third-party vendors required to be FedRAMP authorized?</h5>

<p>Depending on the services being offered, the third-party vendor does not necessarily have to be FedRAMP compliant, but there are security controls you must make sure they adhere to. If there is a connection to the third party vendor, they should be list in the System Security Plan in the Interconnection Table. You can also search through the System Security Plan template and search on "third-party" or “third party” and see all of the security controls that apply to Third Parties. Talk to your Authorizing Official to determine how best to handle third-party vendor offerings.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>If an Agency adds additional security controls, how can other Agencies leverage those additional controls?</h5>

<p>CSPs can include these additional security controls with their FedRAMP Authority to Operate (ATO) packages available for leveraging within the FedRAMP repository.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Our cloud structure is served from a cloud service that is already FedRAMP compliant. Is there is a shorter process to FedRAMP approval since we use an already-approved platform?</h5>

<p>Using a FedRAMP compliant system does not automatically make your service FedRAMP compliant as well. Each system must be evaluated on its on for FedRAMP compliance. Your system can inherit controls from the compliant system and you can explain this in your documentation, but your system is not automatically FedRAMP compliant.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Is continuous monitoring periodically reported or a real-time monitoring of critical metrics?</h5>

<p>Currently, continuous monitoring is periodically reported. It is assumed that cloud service providers (CSPs) are monitoring "continuously" whether it is hourly, daily, or weekly. Cloud systems must provide monthly OS, database, and web application vulnerability scanning reports.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>What are the different types of authorization and how are they issued?</h5>

<p>There are two types of FedRAMP authorizations for cloud services:</p>
<ul class="sub-items">
<li>A Provisional Authority to Operate (P-ATO) through the Joint Authorization Board (JAB)</li>
<li>An Agency Authority to Operate (ATO)</li>
</ul>
<h4>P-ATO Process</h4>

<p>A FedRAMP P-ATO is an initial approval of the CSP authorization package by the JAB that an Agency can leverage to grant an ATO for the acquisition and use of the cloud service within their Agency. The JAB consists of the Chief Information Officers (CIOs) from DOD, DHS, and GSA, supported by designated technical representatives (TRs) from their respective member organizations. A P-ATO means that the JAB has reviewed the cloud service’s authorization package and provided a provisional approval for Federal Agencies to leverage when granting an ATO for a cloud system. For a cloud service to enter the JAB process, it must first be prioritized through FedRAMP Connect. </p>

<h4>Agency ATO Process</h4>

<p>As part of the Agency authorization process, a CSP works directly with the Agency sponsor who reviews the cloud service’s security package. After completing a security assessment, the head of an Agency (or their designee) can grant an ATO. </p>

<p>For more information about these two authorization paths, please visit our Get Authorized page [INSERT LINK]</p>
</li>

<li>
    <input type="checkbox" checked>
    <i></i>
<h5>What is the distinction between "FedRAMP Authorized" and “FedRAMP Ready”? How do Agencies access and approve security authorization packages?</h5>

<p>The main distinction is that FedRAMP Ready systems are not FedRAMP Authorized. In short, FedRAMP Ready systems must still undergo an authorization process, while FedRAMP Authorized systems have completed the process at least once already.</p>

<p>FedRAMP Ready indicates that a Third Party Assessment Organization (3PAO) attests to a cloud service’s readiness for the authorization process, and that a Readiness Assessment Report (RAR) has been reviewed and approved by the FedRAMP PMO. The RAR documents the cloud service’s capability to meet FedRAMP security requirements. The FedRAMP Ready designation is also required for any cloud service to enter the Joint Authorization Board (JAB) Provisional Authority to Operate (P-ATO) process.</p>

<p>FedRAMP Authorized, by comparison, is a designation that is given to systems that have completed the FedRAMP authorization process.</p>

<p>Agencies can review the list of FedRAMP Authorized systems in the Marketplace to determine if they are suitable for their use and can issue Agency ATOs. Agency personnel can request access to FedRAMP Agency Authorization packages in the FedRAMP Secure Repository by completing an access request form.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>What is the relationship between FedRAMP and other security frameworks?</h5>

<p>Both FedRAMP and FISMA use the NIST SP 800-53 security controls. The FedRAMP security controls are based on NIST SP 800-53 R4 baselines and contain NIST controls tailored to the unique elements of cloud computing.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>How does an Agency leverage an existin****g FedRAMP JAB or Agency a****uthorization package?</h5>

<p>In accordance with FISMA, only the head of an Agency or appointed designee, the Authorizing Official (AO), can make the risk-based determination to use IT systems. FedRAMP cannot make decisions for Federal Agencies or accept risk on their behalf. The JAB authorization process helps to establish an initial review and approval that Agencies can leverage during their own authorization process.</p>

<p>With some cloud service offerings, the JAB reviews the risk posture of cloud systems and provides provisional authorizations (P-ATOs) based on the submitted security package. Once a package has been granted a P-ATO, a P-ATO letter is created.</p>

<p>The Agency AO can then leverage a P-ATO or other agency ATO, including all supporting documentation, when making a risk-based decision to grant an Agency Authority to Operate (ATO). Each Agency that is considering using the system should review the P-ATO/ATO letter as well as the package itself before deciding whether or not to use the system. If the Agency wants to use the system, the Agency must create its own ATO letter to show that they are accepting the risk associated with the system. Agencies should provide the FedRAMP PMO copies of the leveraging ATO letters. </p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Why should a CSP use an independent assessment organization and when is it required?</h5>

<p>Independent assessors perform initial and ongoing independent verification and validation of the security controls deployed within the CSP’s information system.  CSPs that go through the FedRAMP JAB P-ATO process must use an approved third-party assessment organization (3PAO) to provide an independent verification and validation of the security implementations required by FedRAMP. A FedRAMP approved 3PAO is optional for FedRAMP Agency Authorization packages.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>How is the continuous monitoring process for an Agency ATO governed?</h5>

<p>Initially, the first Agency to grant an Authority to Operate (ATO) for a cloud service is responsible for ensuring that the CSP fulfills its responsibilities to perform continuous monitoring. It is the responsibility of all leveraging Agencies to review continuous monitoring deliverables from CSPs that have an Agency ATO (as well as to review the continuous monitoring artifacts for those that leveraged a P-ATO issued by the JAB). </p>

<p>The CSP should work with Agencies to determine the best method to distribute continuous monitoring materials, which could be centralized across multiple Agencies. If Agencies have similar continuous monitoring requirements, it may be possible to develop a group of Agency representatives to review continuous monitoring artifacts and develop a "do once, use many times." See the FedRAMP Guide for Multi-Agency Continuous Monitoring [INSERT LINK] for additional guidance. CSPs can use the secure repository to store continuous monitoring artifacts if it is required by an Agency. Agencies are not required to upload continuous monitoring documents to the repository.</p>

<p>FedRAMP provides continuous monitoring templates for CSPs and Agencies to use in support of continuous monitoring. See the Continuous Monitoring Strategy Guide [INSERT LINK] on the FedRAMP website.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>How does a company become a FedRAMP accredited Third Party Assessment Organization (3PAO)? How is the independence and quality of a 3PAO validated? Who pays for the 3PAO’s services?</h5>

<p>Organizations that wish to be an accredited FedRAMP assessor must be assessed, by the American Association for Laboratory Accreditation (A2LA), to the requirements of ISO/IEC 17020:2012 Requirements for the Operation of Various Types of Bodies Performing Inspection. More information on becoming an accredited 3PAO may be found on the [A2LA web page](http://www.a2la.org/appsweb/fedramp.cfm?standpk=131&title=FedRamp&certno=0.68&explain=yes).</p>

<p>The FedRAMP Program Management Office (PMO) assesses the quality of accredited 3PAO’s work by reviewing their CSP assessment reports. If the FedRAMP PMO has concerns about the quality or completeness of a 3PAO’s report, they will work with the FedRAMP accreditation organization, A2LA, to determine whether the 3PAO can still meet the accreditation requirements.</p>

<p>The payment of a 3PAO is a contract issue between a CSP and Federal Agency, though typically a CSP will pay for the 3PAO assessment. CSP’s pursuing a FedRAMP Ready designation are responsible for paying the 3PAO participating in that process. The FedRAMP conformity assessment process ensures independence regardless of who pays for the 3PAO assessment.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Who can access the secure repository to view authorization packages?</h5>

<p>Federal government employees with an OMB MAX account are allowed to review authorization packages in OMB MAX. Federal government contractors can also access authorization packages, provided they have an OMB MAX account and written authorization from a government employee to view a particular CSP’s package.</p>

<p>Unfortunately, state and local government employees are not allowed to review FedRAMP security documentation. State and local government representatives are encouraged to contact any FedRAMP Authorized CSP directly to determine their security package specifications.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Is FedRAMP mandatory?</h5>

<p>Yes, FedRAMP is mandatory for Federal Agency cloud deployments and service models at the low, moderate, and high risk impact levels. Private cloud deployments intended for single organizations and implemented fully within federal facilities are the only exception. Additionally, Agencies must submit a quarterly report in PortfolioStat listing all existing cloud services that do not meet FedRAMP requirements with the appropriate rationale and proposed resolutions for achieving compliance.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>What are the requirements to use the FedRAMP logo on a CSP’s marketing materials?</h5>

<p>Accredited 3PAOs and CSPs who have successfully achieved FedRAMP Ready or FedRAMP Authorized may use the FedRAMP logo. Use of the FedRAMP logo in conjunction with qualified products or services (i.e. an approved 3PAO) does not require approval. The FedRAMP PMO must approve any major educational or promotional campaigns that feature the FedRAMP logo prior to use. The submitted materials will be reviewed for consistency with these guidelines within two (2) weeks of receipt of the materials. Materials should be submitted to the FedRAMP Director at info@fedramp.gov with the following in the subject line: "FedRAMP Branding Review."</p>

<p>Please review the FedRAMP Branding Guidance [INSERT LINK] for more  answers to your FedRAMP logo questions. </p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Do the FedRAMP security controls restrict data to reside only within the United States?</h5>

<p>There are no FedRAMP requirements restricting data to within the United States. There are multiple security controls that detail where data is stored, what the boundary of the system is, and where and how data in transit is protected. Some CSPs with FedRAMP Authorized systems are located globally, although the majority of service providers do restrict their data to the United States. It is up to each individual Agency and Authorizing Official to place restrictions, if needed, on data location.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Who will do the continuous monitoring and ongoing authorization of the cloud systems that have been authorized by an Agency?</h5>

<p>As a part of the FedRAMP requirements, Federal Agencies must implement a continuous monitoring program for any cloud system they deploy. FedRAMP requirements for continuous monitoring work to coordinate ongoing security across CSPs and Agencies in accordance with DHS policies and guidance. However, Agencies have ultimate responsibility for the continuous monitoring and ongoing authorization of the systems they use.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Is a penetration test required for FedRAMP ATO?</h5>

<p>Yes, an independent auditor (i.e., 3PAO) must perform an announced penetration test as part of the assessment/testing process.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>My company is looking to obtain FedRAMP certification for one of our existing cloud products. I have executive support and an Agency sponsor. How do I get started?</h5>

<p>To get started with your authorization, please review the FedRAMP CSP and Agency Playbooks. These documents provide an overview of every aspect of the Agency authorization process, including roles and responsibilities for the CSP and Agency at each step.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Where are all the FedRAMP documentations maintained and will there be a notification system to alert the FedRAMP community of the posting of new documents for public comment?</h5>

<p>FedRAMP documentation is maintained on fedramp.gov. Opportunities for large-scale public comment periods will be messaged via a number of channels and methods, including the fedramp.gov website, blog, and the FedRAMP updates email list.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>How will FedRAMP help make cloud computing more secure for the federal government?</h5>

<p>FedRAMP requirements include additional controls above the standard NIST baseline controls in NIST SP 800-53 rev4. These additional controls address the unique elements of cloud computing to ensure all federal data is secure in cloud environments.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Is the cost of a FedRAMP authorization a barrier to entry for small businesses?</h5>

<p>The FedRAMP model of "do once, use many times" actually removes a barrier to entry for small businesses to work with federal agencies. Instead of CSPs having to expend resources for security authorizations with each federal agency customer, they can complete a FedRAMP authorization once and reuse with subsequent federal agency customers – saving both time and money. For more information about achieving a FedRAMP authorization as a small business, please visit insert link to small business blog post or other resource.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Who published the latest version SP 800-53 Rev 4 and what security risk concerns do the security controls cover?</h5>

<p>The framework for FedRAMP is the SP 800-53 security controls as published by NIST. These security controls holistically cover all major concerns for security risks for information systems and can be tailored to address unique considerations such as those for cloud systems.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Can a non-accredited 3PAO provide readiness assessment services to CSPs prior to an accredited 3PAO assessing them for FedRAMP?</h5>

<p>CSPs are welcome to acquire services from anyone they would like to prepare for the authorization process. Accredited 3PAOs are only required as the independent assessor when working with the Joint Authorization Board (JAB) for a Provisional Authority to Operate (P-ATO), submitting a Readiness Assessment Report (RAR) to be deemed FedRAMP Ready, or if required by an Agency (which is generally recommended by the FedRAMP PMO).</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>What is the role of the 3PAO in continuous monitoring?</h5>

<p>CSPs must use a FedRAMP accredited 3PAO for annual assessments of its cloud system and to evaluate the impact of some changes a CSP makes to its cloud system.</p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>What mechanisms are in place for agencies to manage CSPs that are about to lose their cloud service’s authorization?</h5>

<p>For any Agency using a CSP, they should monitor CSP’s performance through continuous monitoring (regardless of JAB or Agency ATO), and if there are any issues with a CSP’s performance, they should enforce performance requirements via their contracts.The FedRAMP PMO provides guidance on the revocation of ATOs based on CSP performance under continuous monitoring post authorization in the Continuous Monitoring Performance Management Guide [INSERT LINK]. This document explains the actions FedRAMP will take when a CSP fails to maintain an adequate risk management program. It lays out the escalation processes and procedures as well as minimum mandatory escalation actions FedRAMP will take when a CSP fails to meet the requirements of the P-ATO. It also specifically addresses FedRAMP P-ATOs maintained by the JAB and enables FedRAMP to provide effective oversight of the CSP Continuous Monitoring programs. </p>
</li>
<li>
    <input type="checkbox" checked>
    <i></i>
<h5>Who are the Authorized FedRAMP Approvers for Federal Agencies?</h5>

<p>The FedRAMP approver to sign off on your access request form is either your Agency’s CISO or DAA. If the form is signed by a DAA, that person must be at a level that has the authority to grant an ATO for a system.</p>

<p>Unfortunately, FedRAMP does not keep a listing of agency CISOs or DAAs. You will have to get that information from your agency.</p>
</li>
</ul>