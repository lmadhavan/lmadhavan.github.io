---
layout: default
title: Fotografix
description: "Fotografix is a modern photo editor for Windows with a non-destructive workflow, selective color adjustments and hardware accelerated rendering."
permalink: /fotografix/
image: /fotografix/fotografix.jpg
---

<style>
main h1 {
    font-size: 48px;
    text-align: center;
}

main h2 {
    font-size: 24px;
    text-align: center;
    margin-top: 1em;
}

h2.tagline {
    font-weight: 200;
    margin-top: -0.25em;
}

.hero {
    text-align: center;
    margin-top: 1.5em;
}

.hero a.button {
    font-size: 16px;
}

.hero img {
    border: 3px solid #eee;
    border-radius: 4px;
}

#comparison {
    border-radius: 8px;
    overflow: hidden;
    border: none;
}

#comparison th, #comparison td {
    text-align: center;
    border: none;
}

#comparison th {
    vertical-align: top;
    font-weight: 600;
}

#comparison th img {
    margin-bottom: 0.25em;
}

#comparison td:nth-child(1) {
    text-align: left;
}
</style>

<h1>Fotografix</h1>
<h2 class="tagline">Modern photo editor for Windows</h2>

<div class="hero">
    <a href="https://www.microsoft.com/store/apps/9NBZQK3WVN38?cid=website" class="button">Get it from the Microsoft Store</a>
    <br><br>
    <img src="fotografix.jpg">
</div>

<div class="tabs-container">
<div class="tabs-block">
<div class="tabs">
    <input type="radio" name="tabs" id="tab1" checked="checked" />
    <label for="tab1">Non-destructive editing</label>
    <div class="tab">
        <p>Your original photos are never modified directly. Instead, Fotografix keeps track of your individual adjustments so you can come back at any time to tweak or revert your changes.</p>
    </div>
    <input type="radio" name="tabs" id="tab2" />
    <label for="tab2">Selective color adjustments</label>
    <div class="tab">
        <p>HSL sliders allow you to make independent adjustments to different color ranges. You can enhance, mute or even completely change specific colors in your photo.</p>
    </div>
    <input type="radio" name="tabs" id="tab3" />
    <label for="tab3">Hardware accelerated rendering</label>
    <div class="tab">
        <p>Fotografix makes full use of your computer's graphics hardware to display real-time previews. The rendering pipeline is optimized to perform well even on modest hardware.</p>
    </div>
</div>
</div>
</div>

<h2>Feature comparison</h2>
<table id="comparison">
    <tr>
        <th></th>
        <th width="20%"><img src="fotografix-icon.png" width="32"><br>Fotografix</th>
        <th width="20%"><img src="lightroom-icon.png" width="32"><br>Adobe Lightroom</th>
        <th width="20%"><img src="microsoft-photos-icon.png" width="32"><br>Microsoft Photos</th>
    </tr>
    <tr>
        <td></td>
        <td>Free and open source</td>
        <td>Creative Cloud subscription</td>
        <td>Included with Windows</td>
    </tr>
    <tr>
        <td>Basic adjustments</td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-yes.png"></td>
    </tr>
    <tr>
        <td>Non-destructive editing</td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-no.png"></td>
    </tr>
    <tr>
        <td>Batch export/resize</td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-no.png"></td>
    </tr>
    <tr>
        <td>Selective color adjustments</td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-no.png"></td>
    </tr>
    <tr>
        <td>Local adjustments</td>
        <td><img src="comparison-no.png"></td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-no.png"></td>
    </tr>
    <tr>
        <td>Photo organization</td>
        <td><img src="comparison-no.png"></td>
        <td><img src="comparison-yes.png"></td>
        <td><img src="comparison-yes.png"></td>
    </tr>
</table>

<h2>Frequently asked questions</h2>

<div id="faq">

<details>
    <summary>What are the system requirements for Fotografix?</summary>
    <p>Fotografix requires a device running Windows 10 or 11. While Fotografix should run just fine on any modern hardware, a dedicated graphics card can help improve editing performance.</p>
</details>

<details>
    <summary>How can I report a problem or suggest a feature?</summary>
    <p>Issues are tracked on <a href="https://github.com/lmadhavan/fotografix/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc">GitHub</a>. Please check to see if your problem or feature request already has an open issue before creating a new one.</p>
</details>

<details>
    <summary>Where can I find the old version of Fotografix?</summary>
    <p>Version 1.5 was the final release of the old Fotografix that offered general-purpose image editing features. If you are still interested in this version, it is available on the <a href="https://github.com/lmadhavan/fotografix/releases/tag/v1.5">GitHub releases page</a>.</p>
</details>

</div>
