---
title: Strengthening the Use of Cryptography to Secure Federal Cloud Systems
permalink: /2024-08-09-strengthening-the-use-of-cryptography-to-secure-federal-cloud-systems/
body-class: page-blog
image: /assets/img/blog-images/2024-08-07-cryptographic-module-selection.png
author: FedRAMP
layout: blog-page
---

Today, FedRAMP is asking for public feedback on its <a href="{{site.baseurl}}/cryptographic-module/" target="_blank" rel="noopener noreferrer">proposed policy update to how we apply federal cryptography standards</a> to cloud providers that participate in FedRAMP.

Our goals are to strengthen the security of FedRAMP by clearly encouraging cloud providers to:
- <b>Patch security vulnerabilities</b> as a first priority.
- <b>Consistently use approved cryptography</b> and avoid leaving federal information unencrypted.
- Focus their work on securing the <b>system components that protect federal information</b>.

And critically, our goal is to do these things while driving <b>continued participation with federal cryptographic certification processes</b>, and <b>use of validated cryptographic modules</b> by federal agencies.

<h4>How the federal government oversees cryptographic security</h4>
Broadly, federal standards require that when agencies use cryptography to protect federal information, the software or hardware that implements that cryptography should be validated through a federally overseen certification process. These implementations are called “cryptographic modules,” and the current standard that sets requirements around them is the <a href="https://csrc.nist.gov/pubs/fips/140-3/final" target="_blank" rel="noopener noreferrer">Federal Information Processing Standard (FIPS) 140-3</a>. 

The National Institute of Standards and Technology (NIST) manages this standard and oversees a set of accredited laboratories who can test implementations against this standard. NIST validates the test reports provided by these laboratories to ensure that all test requirements are met. FedRAMP enforces the requirements of FIPS 140-3 as part of its authorization process, so that federal agencies who use authorized cloud providers can have confidence they are using validated cryptography. 

While this may sound conceptually straightforward, agencies and cloud providers have made clear to us over the years that in practice, they continue to face difficult security choices when trying to follow these requirements. 

<h4>Spotlight: Prioritizing the patching of security vulnerabilities</h4>
As an example, one of our animating goals for this policy is to provide guidance around patching. Cloud providers may need to patch security vulnerabilities in software more quickly than the patched software can be fully tested and re-validated. Security vulnerabilities are inevitably found in virtually all widely used software and hardware, including cryptographic modules. In fact, some of the most (in)famous and widespread security vulnerabilities – such as <a href="https://en.wikipedia.org/wiki/Heartbleed" target="_blank" rel="noopener noreferrer">Heartbleed</a> and <a href="https://www.kb.cert.org/vuls/id/583776" target="_blank" rel="noopener noreferrer">DROWN</a> – are in cryptographic software.

It has become only more critical to prioritize rapid patching of security vulnerabilities when they become known. In 2022, the Cybersecurity and Infrastructure Security Agency (CISA) issued a <a href="https://www.cisa.gov/news-events/directives/bod-22-01-reducing-significant-risk-known-exploited-vulnerabilities" target="_blank" rel="noopener noreferrer">binding directive</a> to federal agencies with more aggressive patching timelines for vulnerabilities known to be exploited, and in the accompanying guidance noted that for these known-exploited vulnerabilities,“ 42% are being used \[by threat actors] on day 0 of disclosure; 50% within 2 days; and 75% within 28 days.” 

FedRAMP needs authorized cloud services to consistently prioritize patching so that they can defend federal agencies against these kinds of threats, while also making sure cloud providers continue to prioritize and commit to the use of validated modules as a condition of their authorization. 

Our proposed policy balances these goals by laying out clear priorities, timelines, and requirements for cloud providers, agencies, and assessors so that they each know how to best maintain their security posture in this and other kinds of challenging situations.

<h4>Getting your feedback</h4>
We’ve developed this approach in consultation with NIST, our <a href="https://www.gsa.gov/about-us/newsroom/news-releases/fedramp-launches-technical-advisory-group-to-help-05212024" target="_blank" rel="noopener noreferrer">Technical Advisory Group</a>, and others, and now we’re looking for your feedback on how we can best get this balance right. 

As you review the draft, here are a few questions we’d be especially interested in hearing input on:
- What implications could this policy have on how cloud providers architect and engineer their systems?
- Does this policy address a specific challenge you are facing in applying cryptography in cloud services?
- Could this policy do more or less to address the challenges you face?
- This policy provides requirements for specific stakeholders involved in the FedRAMP process. Are there requirements or guidance that are missing that stakeholders would need in order to effectively execute this policy?

If you have comments, edits, or feedback on the draft, “FedRAMP Policy for Cryptographic Module Selection and Use,” please submit them via the public comment <a href="https://app.smartsheetgov.com/b/form/f9d1986f7c9243c39432f54cd1be0cfc" target="_blank" rel="noopener noreferrer">feedback form</a> by September 20, 2024 and include the specific section of the draft to which your comment refers. To read comments that have already been submitted, you may view the <a href="https://app.smartsheetgov.com/b/publish?EQBCT=be27aa7ed4404614a448e51112f28469" target="_blank" rel="noopener noreferrer">public comments here</a>.

If you have any questions, please email <a href="mailto:info@fedramp.gov">info@fedramp.gov</a>.
