---
layout: page
title: Policy & Guidance
permalink: /policy-guidance/
---


<div class="flowers-wrap">

  <h3 style="font-size:14px; font-weight:normal;">Partners</h3>
  <p style="font-size:12px;"><strong>Filter flowers by colour:</strong></p>
  <form>
    <label style="font-size:12px;">
      <input type="checkbox" name="fl-colour" value="agencies" id="agencies" /> Agencies</label>
    <br>
    <label style="font-size:12px;">
      <input type="checkbox" name="fl-colour" value="assessors" id="assessors" /> Assessors</label>
    <br>
    <label style="font-size:12px;">
      <input type="checkbox" name="fl-colour" value="csp" id="csp" /> Cloud Service Providers</label>
  </form>

</div>

<div class="continents-wrap">

  <h3 style="font-size:14px; font-weight:normal;">Document Type</h3>

  <div class="continents" style="font-size:12px;">
    <div>FAQs
      <input type="checkbox" name="fl-cont" value="faqs" id="faqs" />
    </div>
    <div>Forms
      <input type="checkbox" name="fl-cont" value="forms" id="forms" />
    </div>
    <div>Guidance
      <input type="checkbox" name="fl-cont" value="guidance" id="guidance" />
    </div>
    <div>Policy
      <input type="checkbox" name="fl-cont" value="policy" id="policy" />
    </div>
    <div>Worksheets
      <input type="checkbox" name="fl-cont" value="worksheets" id="worksheets" />
    </div>
  </div>

</div>

<ul class="flowers">
  {% for document in site.documents %}
  <li class="flower" data-id="aloe" data-category="{{ document.tags }}">{{ document.title }}</li>
  {% endfor %}
</ul>
