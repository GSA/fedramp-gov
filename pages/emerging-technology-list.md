---
layout: leftnav-rightlink
title: Emerging Technology (ET) List
tab-title: Emerging Technology (ET) List
permalink: /et-framework/emerging-technology-list/
body-class: page-training
summary: 
tags: 
navigation:
  - id: ai
    title: Artificial Intelligence
  - id: definitions
    title: Definitions
  - id: criteria-for-all-capabilities
    title: Criteria for All Capabilities
  - id: et-criteria-for-prioritization
    title: ET Criteria for Prioritization
  - id: et-cso
    title: ET CSO - FedRAMP Model Card guidance
quick_links:
  - title: ET CSO Request Form
    url: https://app.smartsheetgov.com/b/form/4a8391a923da4c4bb95fbbc2d1d54c03
    external: true
  - title: ET Demand Form
    url: https://app.smartsheetgov.com/b/form/d08f3afe5e8142f9b76f595ef42e9580
    external: true
  - title: Emerging Technologies Prioritization Criteria and Guidance document
    url: /assets/resources/documents/Emerging-Technologies-Prioritization-Criteria-and-Guidance-V3.pdf
    external: true
  - title: CSP Information Form
    url: https://docs.google.com/forms/d/e/1FAIpQLScU4_x5UK53d0PUUDsOdqWyzUvAN1-yFJ1NxffT7PkGkCiuPg/viewform?c=0&w=1
    external: true
  - title: RACI Matrix
    url: /et-framework/raci-matrix/
  - title: FAQs
    url: /faqs/#faq-et-prioritization-framework 

---

## Artificial Intelligence {#ai}

FedRAMP<sup>®</sup> is prioritizing Generative AI, specifically when used for **chat interfaces and code generation and debugging tools** that use Large Language Models (LLMs), and **prompt-based image generation**. This applies both to use cases where a human is directly interfacing with the service, and when the service is accessed using associated application programming interfaces (APIs).

To ensure that FedRAMP is appropriately focused on CSOs that offer these services, FedRAMP will request that CSPs include service-related documentation in the form of a model card that provides agencies easily understandable information about the models provided by a vendor, as well as potential uses and limitations. The template model card that FedRAMP requests is included in this [GitHub repository](https://github.com/GSA/fedramp-ai) for Artificial Intelligence. FedRAMP will perform a qualitative review of this CSP provided model card(s) to ensure necessary fields are completed, responses are relevant to the field, and clearly presented. 

## Definitions {#definitions}

**Artificial intelligence (AI)** (as defined in 15 U.S.C. 9401(3)): A machine-based system that can, for a given set of human-defined objectives, make predictions, recommendations, or decisions influencing real or virtual environments. Artificial intelligence systems use machine- and human-based inputs to perceive real and virtual environments; abstract such perceptions into models through analysis in an automated manner; and use model inference to formulate options for information or action.

**AI model:** A component of an information system that implements AI technology and uses computational, statistical, or machine-learning techniques to produce outputs from a given set of inputs.

**AI model card:** Model cards are short documents accompanying trained machine learning models that provide benchmarked evaluation in a variety of conditions, such as across different cultural, demographic, or phenotypic groups (e.g., race, geographic location, sex, Fitzpatrick skin type [15]) and intersectional groups (e.g., age and race, or sex and Fitzpatrick skin type) that are relevant to the intended application domains. Model cards also disclose the context in which models are intended to be used, details of the performance evaluation procedures, and other relevant information.

**Foundation model:** An AI model that is trained on broad data, generally uses self-supervision, contains at least tens of billions of parameters, and is applicable across a wide range of contexts.

**Generative AI:** The class of AI models that emulate the structure and characteristics of input data in order to generate derived synthetic content. This can include images, videos, audio, text, and other digital content.

## Criteria for All Capabilities {#criteria-for-all-capabilities}

**Primary Purpose:** The core features of the CSP’s offering are to allow end-users or developers to interact with generative AI capabilities. CSPs with generative AI capabilities embedded within a broader product may not receive prioritization.

**Use of Algorithms:** The offering utilizes a foundation model as an underlying technology for its generative AI capabilities. These models will generally have been released after September 2022. Use of a particular algorithm or technical approach is not as important as the performance of the generative AI to produce accurate, valid, and reliable outputs.

**Features align to capabilities:** The CSO meets one or more of the following capabilities: 1) large language model-based chat interfaces, 2) code-generation and debugging tools, and 3) prompt-based image generators. Specifically, as stated in Executive Order 14110, “…generative AI offerings that have the primary purpose of providing large language model-based chat interfaces, code-generation and debugging tools, and associated application programming interfaces, as well as prompt-based image generators…”. 

**CSO Prioritization Target:** The number of CSOs that will be targeted for prioritized review process for each emerging technology capability.

**Opt-in for usage of government data:** Use of government data shall not be used for the development, enrichment or improvement (e.g. data mining, machine learning, training) of service, products, or offerings made generally available to other government or non-government customers without explicit opt-in consent.            

## ET Criteria for Prioritization- Artificial Intelligence {#et-criteria-for-prioritization}

### 1. Chat interfaces 

**Description:** Products that deliver conversational chat interfaces to provide text prompts to the user and then use information consumed by the large language model (LLM) to produce aggregate text-based content on behalf of the user.

**Technical Characteristics:** The offering should be capable of discerning meaning from open-ended user inputs and provide an appropriate response. The interface may provide an externally accessible API facilitating integration and use by other systems.

**Capability Prioritization Target:** Three cloud service offerings.

### 2. Code generation and debugging tools 

**Description:** A tool used by software developers to help them with creating and debugging software. 

**Technical Characteristics:** The offering should be capable of auto-detecting relevant programming language based off of submitted code snippets or direct prompts. The offering should be able to generate complete methods, subroutines or functions based on input prompts. The offering can refine responses if requested by the user and can debug code inputs. The offering may be able to provide links to additional documentation or directly explain output with appropriate attribution or citation. The offering may be able to translate code into a newer version or into another programming language. The offering may be able to generate code off of describing a potential problem or use-case and generate suggested code. The interface may provide an externally accessible API facilitating integration and use by other systems.

**Capability Prioritization Target:** Three cloud service offerings.

### 3. Prompt-based image generators

**Description:** A product that takes text or photographic input and generates new images or videos based on those inputs. 

**Technical Characteristics:** The offering should generate new visual content by recapitulating pixels based on patterns in the training data. The offering may be able to modify an input image based on accompanying text. The offering may be able to generate the output’s subject in multiple graphical or artistic styles. The interface may provide an externally accessible API facilitating integration and use by other systems.

**Capability Prioritization Target:** Three cloud service offerings.

### 4. General Purpose API offerings that facilitate the integration of chat interface, code generation and debugging tools, or prompt-based image generation capabilities into new or existing systems.

**Description:** A general purpose API-based solution available to developers and system integrators to incorporate chat, code generation, or image generation capabilities into their new or existing products and services.

**Technical Characteristics:** The offering should meet the requirements for chat interfaces, code generation, or prompt-based image generation above. The solution must provide a general purpose model(s). APIs must allow external integration and use by both government and commercial systems. The offering must include well-formed documentation with examples for system integrations. The leveraged APIs must support either REST (representational state transfer) or RPC (Remote Procedure Call). The API-based solution may allow for further refinement, training, or fine tuning by the consuming system. 

Note: Offerings that only do not make the API externally available, and only leverage or utilize the API from within their offering are not considered for this prioritization capability.

**Capability Prioritization Target:** Three cloud service offerings.

## ET CSO - FedRAMP Model Card guidance {#et-cso}

### FedRAMP model card template

FedRAMP is adopting the Hugging Face model card template with a few adjustments as a standard way to provide agencies with easily consumable information about the models provided by a vendor, potential uses, limitations, as well as relevant benchmarks.

The FedRAMP provided model card template can be located here in [GitHub](https://github.com/GSA/fedramp-ai). FedRAMP will be doing a qualitative review of the provided model card and will use this assessment in contributing to the prioritization decision. FedRAMP will verify completeness of data provided to the Mandatory fields below. Optional Fields will not be considered as part of the review.

The following areas and fields are required to be completed:

*   Model Details
    *   Model Description & non-optional subfields
*   Uses
    *   Direct Use
    *   Out-of-Scope Use
*   Bias, Risks, and Limitations
    *   Recommendations
*   How to get started with the model
*   Training Details
    *   Training Data
    *   Training Procedure
    *   Training Hyperparameters
*   Evaluation
    *   Testing Data, Factors, & Metrics
    *   Testing Data
    *   Factors
    *   Metrics
    *   Results
    *   Summary
*   Model Architecture and Objective
*   Compute Infrastructure
    *   Hardware
    *   Software
*   Model Card contact

