---
title: JAB Guidance on CentOS Linux End of Life
permalink: /2021-03-30-CentOS-Linux-End-of-Life/
body-class: page-blog
image: /assets/img/blog-images/-general-blog-banners/general-JAB-Guidance.png
author: FedRAMP
layout: blog-page
---
Red Hat, the parent company of Community ENTerprise Linux Operating System (CentOS), has announced that “over the next year [they’ll] be shifting focus from CentOS Linux, the rebuild of Red Hat Enterprise Linux (RHEL), to CentOS Stream, which tracks just ahead of a current RHEL release.” This makes CentOS Stream essentially the beta version of future releases of the RHEL operating system. For those using CentOS 7, Red Hat will continue to support and update this offering throughout the rest of the RHEL 7 life cycle, ending on June 30, 2024. However, CentOS 8 support will end on December 31, 2021.

The Joint Authorization Board (JAB) has reviewed these changes and provides the following guidance for Federal Risk and Authorization Management Program (FedRAMP) Authorized Cloud Service Offerings.

Cloud Service Providers (CSPs) running CentOS will need to migrate to licensed RHEL or another supported OS, based on the schedule provided by Red Hat. CSPs should work with their Authorizing Officials (JAB and/or agency customers) to develop a migration plan following the significant change process to migrate off of CentOS prior to Red Hat’s end of support for the product.

Additionally, Red Hat cryptographic modules running on any version of CentOS lack FIPS-140 validation, and FedRAMP cannot accept FIPS-140 validation assertions of these modules on the CentOS platform, including CentOS 7.

For CSPs with continuing questions regarding this transition, Red Hat has posted <a href="https://centos.org/distro-faq/" target="_blank">Frequently Asked Questions</a> on their website. 

If you have any questions on this guidance document, please reach out to <a href="mailto:info@fedramp.gov">info@fedramp.gov</a>.
