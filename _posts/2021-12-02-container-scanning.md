---
title: Unique Vulnerability Counts with Container Scanning
permalink: /2021-12-02-container-scanning/
body-class: page-blog
image: /assets/img/blog-images/2021-12-02-Container-Scanning.png
author: FedRAMP
layout: blog-page
---
As Cloud Service Providers (CSPs) start to submit their container vulnerability scans in order to meet <a href="https://www.fedramp.gov/assets/resources/documents/Vulnerability_Scanning_Requirements_for_Containers.pdf">Container Scanning Guidance</a> requirements, stakeholders monitoring submissions should expect to see large increases in the number of unique vulnerabilities. 

**What’s Different?**

Traditional vulnerability scanning tools use an overarching PluginID or Vulnerability ID that wraps multiple  Common Vulnerabilities and Exposures (CVE) under one ID. Container scanning solutions typically track unique vulnerabilities at the Common Vulnerabilities and Exposures (CVE) level, which is much more granular. This means that you could have an increased number of unique vulnerabilities in CSPs monitoring submissions.

**What's the Impact?**

Those monitoring these new submissions could possibly see a jump of hundreds of unique vulnerabilities within the container scans. 
- **If you are an agency:** Please reach out to your CSPs early and discuss what they are seeing and what they will be submitting to you prior to the actual scan submission. This will ensure everyone is prepared and understands the new counts. 
- **If you are a CSP:** Please make sure your clients are briefed on this so that your clients understand the reason for the sudden increase in unique findings. This will help avoid an unwelcome surprise  because of these new numbers. 
