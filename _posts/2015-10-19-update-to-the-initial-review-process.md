---
title: 'Lessons Learned: Initial Reviews'
layout: blog-list
permalink: /update-to-the-initial-review-process/
body-class: page-blog
---
Over the past few months, the FedRAMP PMO has conducted nearly 20 [Initial Reviews](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2015/08/FedRAMP-Initial-Review-SOP-v1-3.pdf) of CSP packages. These reviews evaluated twenty-one Critical Controls for readability, relevance, sufficiency, and consistency. FedRAMP’s definition of each criteria is as follows:

**Readable:** Can we understand what was written?

**Relevant:** Did the statement actually address the control requirement?

**Sufficient:** Is there enough detail to fully address all portions of the requirement and meet any security related needs?

  * Tip: This is usually the “how” of a control statement.

**Consistent:** Do the implementation statements and the control template checkboxes match?

  * Tip: Is Implemented checked when a response describes the solution is in place?

The Critical Controls evaluated were:

* Access Control , AC-2, AC-4, AC-17

* Certification Authority , CA-1

* Configuration Management , CM-6

* Contingency Planning , CP-7, CP-9

* Identification and Authentication , IA-2(1), IA-2(2), IA-2(3), IA-2(11), IA-2(12)

* Incident Response Plan , IR-8

* Risk Assessment , RA-5, RA-5(5), RA-5(8)

* System and Services Acquisition , SA-11, SA-11(1)

* System and Communications Protection , SC-4, SC-7, SC-13

The PMO was able to gain some key insights from the analysis of these reviews. While most authorization packages passed the readability and relevancy requirements, many were unable to pass the requirements for sufficiency and consistency.

**Readability:** Nearly all of the packages passed the readability test for all of the evaluated Critical Controls.

* AC-17 was the easiest for vendors , receiving a 100% score on readability for all reviews.

* SA-11, on the other hand, seemed to be the hardest , only receiving a passing readability rating of 47%.

**Relevance:** More than half of the evaluated packages passed the relevance test for all of the Critical Controls.

* Eleven of the twenty-one controls received a 71% or higher relevance rating.

**Sufficiency and Consistency:** Nearly all of the packages were unable to prove sufficiency or consistency for all the of the Critical Controls.

* SC-13 (FIPS-validated or NSA-Approved Cryptography) was the only Critical Control to received passing marks above 70% across the packages for readability, relevance, sufficiency, and consistency.

* Four controls (CA-1, CM-6, CP-9, and RA-5) proved to be the most problematic for our vendors when examining sufficiency and consistency reviews. Only about 10% of the packages reviewed were deemed sufficient for these four controls.

**SO WHAT’S THE TAKEAWAY HERE?**

From the PMO, we’re going to revise some of our guidance to give clearer information and insights on how to appropriately address these critical controls. These initial reviews are also continually being adjusted to include more automation, and where possible we’ll be making these tools publicly available.

However, it’s not all just on us at the PMO. We need our CSPs to review our guidance and come prepared. We’re continually working to provide self-help tools and guidance for CSPs to review in order to be able to provide CSP packages that will pass these reviews the first time. Below is a list of the key tools and documents every CSP should ensure they review prior to submission for an initial review:

* [Training Module on SSP Development](https://www.fedramp.gov/resources/training/)

* [The Guide to Understanding FedRAMP](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2015/03/Guide-to-Understanding-FedRAMP-v2.0-4.docx)

* [FedRAMP General Document Acceptance Criteria](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2015/07/FedRAMP-General-Document-Acceptance-Criteria.pdf)

* [FedRAMP Initial Review Standard Operating Procedure](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2015/08/FedRAMP-Initial-Review-SOP-v1-3.pdf)

* [Checklist](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2015/08/FedRAMP-SAR-Initial-Review-Checklist-Template-v1-0.xlsx)

* [Weekly Tips and Cues](https://www.fedramp.gov/category/tips/)

As always, we also welcome your feedback and would like to see any other suggestions for additional information you feel is missing or would be helpful for FedRAMP to provide. Please don’t hesitate to send any suggestions to info@fedramp.gov!
