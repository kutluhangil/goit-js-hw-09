# GOIT-JS-HW-09 🚀

Wow, you're already on Module 9!

Shall we recap the intermediate results? You now:

- ✅ Understand the features of the JSON format.
- ✅ Know and use the methods of the JSON object.
- ✅ Know the difference between web storage and local storage.
- ✅ Have installed Node.js and are using NPM (node package manager).
- ✅ Understand the concept of code modularity.
- ✅ Use the syntax of ECMAScript Modules.
- ✅ Know how to install, remove, and use packages in your code.

It's time to practice! Interesting tasks await you — creating an image gallery and saving form data.

## Homework 9

- Create a repository named `goit-js-hw-09`.
- Build the project with [Vite](https://vitejs.dev/). We have prepared and recommend using this [template](https://github.com/goitacademy/vanilla-app-template/blob/main/README.md) for a pre-configured build with additional settings.
- Read the task and implement it in your code editor.
- Ensure your code is formatted with `Prettier` and that there are no errors or warnings in the console when you open the task page.
- Submit your homework for review.

**Submission Format:** The homework must include a link to the source files and a link to the live page on `GitHub Pages`.

#### :bangbang: Use this layout for the styling of your tasks.

The file and folder structure in your project's `src` folder should be as follows. You can see how to include the files in `index.html` from the previous homework.

![Project Structure](./src/assets/images/assignment-image-1.png)

---

## Task 1 - Image Gallery 🖼️

Complete this task in the `01-gallery.html` and `01-gallery.js` files.

In the previous assignment, you created an image gallery on your own, using event delegation and a modal window from a CDN to display the full-size image.
Creating a gallery is a common task for developers, but writing it manually every time is quite tedious. There are libraries that handle this functionality.
Create the same gallery using the **SimpleLightbox** library, which will handle all the functionality of clicking on images, opening and closing the modal window, and navigating through images with the keyboard.

Watch the demo video of the gallery in action.

![Gallery Demo](./src/assets/images/assignment-1.gif)

Here are the key details to pay attention to:

- You no longer need to handle event delegation; the [SimpleLightbox](https://www.npmjs.com/package/simplelightbox) library will automatically track click events on the gallery cards.
- A separate library is not required to create the modal window; this feature is integrated into [SimpleLightbox](https://www.npmjs.com/package/simplelightbox).

Complete this task in the `01-gallery.html` and `01-gallery.js` files. Break down the task into several subtasks:

Use the code from the previous assignment and refactor it. You don't need to write everything from scratch. For example, the creation of gallery items will remain the same. However, you should delete the event delegation and modal window opening code.

You will need to slightly change the gallery card layout; use the template below.

```html
<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img class="gallery-image" src="small-image.jpg" alt="Image description" />
  </a>
</li>
```

Use `npm` to add [SimpleLightbox](https://www.npmjs.com/package/simplelightbox) as a dependency to your project. To include the library's CSS code in the project, you need to add another import in addition to what is specified in the documentation.

```javascript
// Import the main component
import SimpleLightbox from 'simplelightbox';
// Import additional styles
import 'simplelightbox/dist/simple-lightbox.min.css';
```

The next step is to initialize the library after creating and adding the gallery items to `ul.gallery`. For this, refer to the [SimpleLightbox](https://www.npmjs.com/package/simplelightbox) documentation — primarily the "Usage" and "Markup" sections.

After that, look at the "Options" section in the documentation and add the display of captions from the images' `alt` attribute. The caption should be at the bottom and appear 250 milliseconds after the modal window opens.

### Mentor's Checklist:

- The live page displays an image gallery from the `images` data array.
- The image gallery is styled to match the layout.
- The gallery data is generated dynamically in JS.
- There are no custom event listeners.
- The SimpleLightbox library is integrated using `npm`.
- The library instance is initialized after the gallery items are added to the DOM and outside the scope of any function.
- When a gallery item is clicked, the library's modal window opens with an enlarged version of the clicked image, and the library's basic functions work.
- Within 250 milliseconds of the modal window opening, the content of the image's `alt` attribute is displayed as a caption below the image.

---

## Task 2 - Feedback Form 📝

Complete this task in the `02-form.html` and `02-form.js` files.

Add a feedback form to the HTML structure. In JS, write a script that saves the field values to local storage when the user types something.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Complete this task in the `02-form.html` and `02-form.js` files. Break the task into the following subtasks:

1.  Using delegation, track the `input` event on the form and save an object containing the `email` and `message` fields to local storage each time. Use the string `"feedback-form-state"` as the key for storage.
2.  When the page loads, check the state of the storage. If there is saved data, fill the form fields with it. Otherwise, the fields should be empty.
3.  When the form is submitted, clear the storage and the form fields. Also, log an object containing the `email`, `message` fields and their current values to the console.

### Mentor's Checklist:

- The live page displays a form with two form elements and a button of type `submit`.
- The form is styled according to the layout.
- The `input` and `submit` events are listened for on the form.
- When data is entered into any form element, it is saved to local storage under the key `"feedback-form-state"`, and the saved data does not contain leading or trailing spaces.
- Entering data in one field of the form does not delete the data from the other field in storage.
- When the page is refreshed, the data from local storage is placed in the form elements, and there are no `undefined` values in the form fields.
- When the form is submitted, it checks if both form elements are filled.
- If both form elements are filled upon submission, an object with the `email`, `message` fields and their current values is printed to the console, and the storage and form fields are cleared.
- If data is entered into any form element after submission, the data from the previous submission does not appear in local storage.
