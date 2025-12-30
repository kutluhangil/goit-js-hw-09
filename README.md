<h1>📘 JavaScript Homework 9 — Code Modularity & Vite Bundler</h1>

<p>
This repository contains a complete implementation of <strong>Homework 9</strong>, focused on
<strong>code modularity</strong>, <strong>modern build tools</strong>, and <strong>working with local storage</strong>
using <strong>Vite</strong> as a bundler.
</p>

<hr />

<h2>🚀 Overview</h2>

<p>
Wow — you are already in <strong>Module 9</strong>! 💪  
At this stage of the JavaScript course, the focus shifts toward professional project structure,
modular code organization, and real-world tooling.
</p>

<p>This homework reinforces your understanding of:</p>

<ul>
  <li>JSON format and its characteristics</li>
  <li>JSON object methods (<code>stringify</code>, <code>parse</code>)</li>
  <li>Web Storage vs Local Storage</li>
  <li>Node.js installation and NPM usage</li>
  <li>Code modularity concepts</li>
  <li>ECMAScript Modules (ESM) syntax</li>
  <li>Installing, removing, and using packages via NPM</li>
</ul>

<p>
It’s time to put theory into practice by building an image gallery and a feedback form with
persistent state.
</p>

<hr />

<h2>📂 Project Structure</h2>

<pre>
goit-js-hw-09/
├─ src/
│  ├─ css/
│  ├─ img/
│  ├─ js/
│  │  ├─ 01-gallery.js
│  │  └─ 02-form.js
├─ public/
│  ├─ 01-gallery.html
│  └─ 02-form.html
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
</pre>

<p>
The project is built using <strong>Vite</strong> with ES Modules and follows a clean,
scalable folder structure.
</p>

<hr />

<h2>🧩 Task 1 — Image Gallery</h2>

<p>
Implemented in <strong>01-gallery.html</strong> and <strong>01-gallery.js</strong>.
</p>

<p>
The goal of this task is to create an image gallery using the
<strong>SimpleLightbox</strong> library instead of manual event delegation and modal logic.
</p>

<h3>Key Features</h3>

<ul>
  <li>Gallery items are generated dynamically from an images data array</li>
  <li>No manual event listeners for opening or closing the modal</li>
  <li>SimpleLightbox handles:
    <ul>
      <li>Image clicks</li>
      <li>Modal opening and closing</li>
      <li>Keyboard navigation</li>
    </ul>
  </li>
</ul>

<h3>Library Integration</h3>

<pre>
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
</pre>

<h3>Gallery Markup</h3>

<pre>
&lt;li class="gallery-item"&gt;
  &lt;a class="gallery-link" href="large-image.jpg"&gt;
    &lt;img
      class="gallery-image"
      src="small-image.jpg"
      alt="Image description"
    /&gt;
  &lt;/a&gt;
&lt;/li&gt;
</pre>

<h3>Additional Configuration</h3>

<ul>
  <li>Image captions are taken from the <code>alt</code> attribute</li>
  <li>Captions appear below the image</li>
  <li>Caption delay is set to <strong>250ms</strong></li>
</ul>

<h3>Mentor Checklist</h3>

<ul>
  <li>Gallery is rendered dynamically from JS data</li>
  <li>Layout matches the provided template</li>
  <li>No custom event listeners are used</li>
  <li>SimpleLightbox is installed via NPM</li>
  <li>Library is initialized after DOM elements are added</li>
  <li>Modal opens with the correct large image</li>
  <li>Image caption appears after 250ms</li>
</ul>

<hr />

<h2>🧩 Task 2 — Feedback Form</h2>

<p>
Implemented in <strong>02-form.html</strong> and <strong>02-form.js</strong>.
</p>

<p>
This task focuses on working with <strong>localStorage</strong> to preserve form state
between page reloads.
</p>

<h3>Form Markup</h3>

<pre>
&lt;form class="feedback-form" autocomplete="off"&gt;
  &lt;label&gt;
    Email
    &lt;input type="email" name="email" autofocus /&gt;
  &lt;/label&gt;
  &lt;label&gt;
    Message
    &lt;textarea name="message" rows="8"&gt;&lt;/textarea&gt;
  &lt;/label&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</pre>

<h3>Logic Breakdown</h3>

<ul>
  <li>Form input events are listened using delegation</li>
  <li>Form state is saved under the key <code>"feedback-form-state"</code></li>
  <li>Whitespace is trimmed before saving</li>
  <li>Data persists after page reload</li>
  <li>On submit:
    <ul>
      <li>Both fields are validated</li>
      <li>Form data is logged to the console</li>
      <li>localStorage is cleared</li>
      <li>Form fields are reset</li>
    </ul>
  </li>
</ul>

<h3>Mentor Checklist</h3>

<ul>
  <li>Form contains email, message, and submit button</li>
  <li>Form is styled according to layout</li>
  <li>Input and submit events are handled</li>
  <li>localStorage updates without overwriting other fields</li>
  <li>No <code>undefined</code> values appear in inputs</li>
  <li>Form state restores correctly on reload</li>
  <li>Console logs correct data object on submit</li>
</ul>

<hr />

<h2>📌 Final Notes</h2>

<p>
This homework demonstrates a modern JavaScript workflow using:
</p>

<ul>
  <li>ES Modules</li>
  <li>Vite bundler</li>
  <li>NPM package management</li>
  <li>Third-party libraries</li>
  <li>Persistent browser storage</li>
</ul>

<p>
The project follows best practices for scalability, readability, and maintainability.
</p>

<hr />

<h2>🔗 Links</h2>

<ul>
  <li>
    <strong>GitHub Repository:</strong>
    <a href="https://github.com/kutluhangil/goit-js-hw-09">
      https://github.com/kutluhangil/goit-js-hw-09
    </a>
  </li>
  <li>
    <strong>Live Demo (GitHub Pages):</strong>
    <a href="https://kutluhangil.github.io/goit-js-hw-09/">
      https://kutluhangil.github.io/goit-js-hw-09/
    </a>
  </li>
</ul>
