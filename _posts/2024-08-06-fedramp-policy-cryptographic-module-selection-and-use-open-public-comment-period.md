---
title: FedRAMP Policy for Cryptographic Module Selection and Use Open for Public Comment Period
permalink: /2024-08-06-fedramp-policy-cryptographic-module-selection-and-use-open-public-comment-period/
body-class: page-blog
image: /assets/img/blog-images/2024-08-07-cryptographic-module-selection.png
author: FedRAMP
layout: blog-page
---
By Dave Waltermire

The FedRAMP Policy for Cryptographic Module Selection and Use is a critical component of FedRAMP’s information security framework. This policy defines requirements for cloud service providers (CSPs), third-party assessors, FedRAMP package reviewers, and FedRAMP-designated lead agencies regarding protection of federal systems and data. These requirements are related to selecting and using cryptographic modules for cloud-based systems in a way that is informed by risk and focused on strengthening federal security overall. 

FedRAMP expects this policy to facilitate the necessary decision making needed to keep systems and data secure on an ongoing basis. It may not be possible to meet requirements for both using Federal Information Processing Standard (FIPS) validated modules and using software without known vulnerabilities at the same time. In such situations, FedRAMP generally prefers the elimination of known vulnerabilities through patches or updates over continuing to use known-vulnerable software that is FIPS-validated, since the presence of known vulnerabilities can create risks that outweigh the assurance value provided through validation. Cryptography should still be used when and where it is needed. 

Today, FedRAMP is seeking feedback from our stakeholders on the draft FedRAMP Policy for Cryptographic Module Selection and Use to ensure the policy is effective and aligns with industry best practices. 

<h4>What problem is this policy addressing?</h4>

Encryption, digital signatures, and other forms of cryptography are critical for protecting cloud-based systems and their data. A cryptographic module is hardware and software that implements cryptography and other security functions which are contained within a boundary. When protecting federal systems and data, federal agencies are required to use cryptographic modules that have been validated by an accredited laboratory as meeting Federal Information Processing Standard (FIPS) 140. This laboratory testing helps to identify many types of cryptographic errors in modules. 

However, this does not mean that products and services using FIPS-validated cryptography are free of vulnerabilities. New vulnerabilities may be discovered in the cryptographic module. Federal agencies and cloud service providers are required to patch or update their software in order to protect federal systems and data. This often poses a risk decision for CSPs: use software containing validated modules with known vulnerabilities, or updated software containing unvalidated modules without known vulnerabilities? Both use of validated FIPS 140 cryptography and patching software is required, but it is often impossible to meet both requirements while maintaining strong security outcomes.

<h4>What are the benefits of this new policy?</h4>

This policy enables cloud service providers (CSPs) to make risk-based decisions that take into consideration the relevant factors, such as the risk inherent in the use of vulnerable software and the potential impact to agency missions, and the maturity of each piece of software and its vendor’s history of getting its modules validated. This policy enables CSPs to make such decisions while also ensuring that they can use patched modules with no known vulnerabilities as they become available and that incentives exist to ensure that modules continue to be validated through the NIST process. This policy also ensures that processes related to patching modules and use of unvalidated modules, when justified by risk decisions, are documented and assessed, and are clearly visible to relying agencies, other CSPs, and other stakeholders.

<h4>What are the intended outcomes of this policy?</h4>

FedRAMP’s goals for the policy include the following:
- Promote the ongoing validation of cryptographic modules through the CMVP to maintain a high degree of confidence in cryptographic module function.
- Ensure that approved cryptographic algorithms and functions are used to protect the integrity or confidentiality of federal systems and data.
- Promote the use of cryptographic modules that are free of known vulnerabilities over the use of validated modules with known vulnerabilities, except in cases where the unvalidated module’s use would clearly increase security risk over the use of a validated module.
- Ensure that CSPs using unvalidated cryptographic modules document the rationale for doing so and a process for the ongoing assessment of their use in a way that is clearly visible to relying agencies, CSPs, and other stakeholders. Ensure that use of unvalidated modules is periodically reevaluated.

Together these goals work to maximize security outcomes and transparency in the use of cryptography in cloud services.

Let’s work together. If you have comments, edits, or feedback on the draft FedRAMP Policy for Cryptographic Module Selection and Use, submit them via the <a href="https://app.smartsheetgov.com/b/form/f9d1986f7c9243c39432f54cd1be0cfc" target="_blank" rel="noopener noreferrer">Public Comments_Draft FIPS 140 Guidance form</a> by <b>September 20, 2024</b>. Please be sure to include the specific draft section to which your question or comment refers. To read comments that have already been submitted, you may view the <a href="https://app.smartsheetgov.com/b/publish?EQBCT=be27aa7ed4404614a448e51112f28469" target="_blank" rel="noopener noreferrer">Public Comments Draft FIPS 140 Guidance read-only version</a>.

If you have any questions please email <a href="mailto:info@fedramp.gov">info@fedramp.gov</a>.
