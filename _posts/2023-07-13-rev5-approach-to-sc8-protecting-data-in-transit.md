---
title: The Rev. 5 Approach to SC-8, and Protecting Data-in-Transit
permalink: /2023-07-13-rev5-approach-to-sc8-protecting-data-in-transit/
body-class: page-blog
image: /assets/img/blog-images/2021-05-06-Rev5-Update_v2.png
author: FedRAMP
layout: blog-page
---
The FedRAMP Program Management Office is driven to ensure the community understands the details and specifics related to the transition from Rev. 4 to Rev. 5 baselines. Important questions have risen regarding the Rev. 5 baseline for SC-8 and its enhancements.. Outlined below are clarifications for SC-8 and its enhancements for protecting data in transit (DIT). 

It is helpful to understand that in the FedRAMP Rev. 4 baseline, SC-8(1) addressed both **encryption** and **physical** means for protection of DIT. In Rev. 5, the National Institute of Standards and Technology divided the concepts with encryption remaining in SC-8(1), and physical protection moving to the new SC-8(5). Specific to physical protection, the Rev. 4 FedRAMP requirement was for a Protective Distribution System (PDS). Within Rev 5, FedRAMP has modified the requirement to implement a Controlled Access Area (CAA). The changes in Rev 5 make compliance with the physical protection requirements considerably easier to attain.

Data will be considered physically protected in a CAA if it meets Section 2.3 of the Department of Homeland Security’s (DHS’s) Recommended Practice: Improving Industrial Control System Cybersecurity with Defense-in-Depth Strategies. For the purposes of FedRAMP, cloud service providers (CSPs) can meet Section 2.3 of the DHS recommended practice through satisfactory implementation of the following controls: PE-2(1), PE-2(2), PE-2(3), PE-3(2), PE-3(3), PE-6(2), and PE-6(3).  Outlined below are key questions and answers to further explain the nuances of SC-8(5) and CAA. 

While it is available to any CSP, it is anticipated that this change would be implemented by infrastructure as a service (IaaS)/platform as a service (PaaS) to be made inheritable by customers. For any implementation, keep in mind the following:
- For DIT **guaranteed** to stay within a single CAA, typically a data center, physical protection via SC-8(5) will be sufficient
- More typically, for DIT that traverses from one CAA/data center to another:
  - Physical protection from a sending component can extend from the component to the data center edge
  - Encryption protection via SC-8(1) must be in place between the data centers
  - Physical protection picks up again from the second data center’s edge to the receiving component 
- All of the above must be validated by your independent assessor. For customers of IaaS/PaaS CSOs, all of the above must be declared as inheritable in the IaaS/PaaS customer responsibility matrix before customers can leverage these controls for DIT protection

For all CSPs, note that SC-8(5) CAA protection only applies to data in transit (DIT) inside a data center. Data at rest (DAR) must still be encrypted. CSPs also need to apply SC-13 to encrypted traffic.

<section class="fedramp-page-container lightest-gray-bkg" style="margin-top:15px">
	<div class="grid-container " style="padding: 2rem 0" >
		<div class="full-row grid-row">
			<div class="full-col desktop:grid-col-12">
<p><b>Question:</b> If an IaaS complies with the requirements of the CAA, how can a platform as a service (PaaS)/ software as a service (SaaS) leverage that compliance for confidentiality of their data, assuming they would? What are the limits?</p>

<p><b>Answer:</b> A PaaS/SaaS can leverage the CAA as follows:</p>
<ul>
	<li>The CAA, and encryption between data centers, as necessary, must be authorized by the IaaS/PaaS CSPs before it can be leveraged as inherited by customers</li>
	<li>As described above, the IaaS CSO documentation must document that SC-8, SC-8(1), and SC-8(5) are inheritable “as a set” for DIT protection, that is, all three must be in place.</li> 
	<li>The documentation must clearly state that the following is in place:
		<ul>
			<li>CAA per SC-8(5) for all data centers where DIT may traverse</li>
			<li>DIT encryption is in place between data centers where:</li>
				<ul>
					<li>The encryption is FIPS 140 validated</li> 
					<li>The encryption termination points are inside the CAA envelope in all data centers</li>
				</ul>
			<li>Independent assessor validates all of the above</li>
   		</ul>
	</li>
</ul>
			</div>
		</div>
	</div>
</section>

<section class="fedramp-page-container lightest-gray-bkg" style="margin-top:30px">
	<div class="grid-container " style="padding: 2rem 0" >
		<div class="full-row grid-row">
			<div class="full-col desktop:grid-col-12">
<p></p><b>Question:</b> What is the IaaS/PaaS authorization process for SC-8, SC-8(1), and SC-8(5) as a set?</p>

<p><b>Answer:</b>  IaaS/PaaS CSPs must complete the following steps:</p>
<ul>
	<li>Add SC-8(5), and the applicable PE control enhancements to the SSP template, and document the implementation</li>
	<li>Implement all the PE controls referenced in SC-8(5) to protect DIT from internal components to the edge of the data centers</li>
	<li>Implement FIPS 140 validated encryption from the data center edge to every other data center edge terminating inside the CAA envelope</li>
	<li>The CSP’s independent assessor must validate all of the above</li>
	<li>Submit the above to FedRAMP for authorization - most often as a significant change</li>
	<li>Once authorized, all DIT connections that both originate and terminate inside the IaaS/PaaS boundary will then meet SC-8, SC-8(1), and SC-8(5) requirements, and can be leveraged by customers</li>
</ul>
			</div>
		</div>
	</div>
</section>

As mentioned above, while it is anticipated that this will primarily be implemented by IaaS/PaaS CSPs, the above process can be followed for any CSO.

As the above protections are rolled out by IaaS/PaaS CSPs, the burden of adequately protecting DIT should be greatly relieved as these controls become fully inheritable by customers.

Please see the <a href="https://www.fedramp.gov/faqs/" target="_blank" rel="noopener noreferrer">FedRAMP FAQs</a> for additional questions, and please email <a href="mailto:info@fedramp.gov">info@fedramp.gov</a> regarding SC-8 (5) and CAA.
