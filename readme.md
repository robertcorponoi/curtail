<p align="center">
  <img width="250" height="250" src="./Curtail.png">
</p>

<h1 align="center">Curtail</h1>

<p align="center">Curtail is a pure JavaScript in browser canvas-based image manipulation tool.<p>

<div align="center">
  <a href="https://badge.fury.io/js/curtail"><img src="https://badge.fury.io/js/curtail.svg" alt="npm version" height="18"></a>
  <a href="https://badge.fury.io/js/curtail"><img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="build" height="18"></a>
  <a href="https://badge.fury.io/js/curtail"><img src="https://img.shields.io/github/issues/robertcorponoi/curtail.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/curtail"><img src="https://img.shields.io/github/license/robertcorponoi/curtail.svg" alt="license" height="18"></a>
</div>


**Note:** Curtail is still in its early stages and as such has limited functionality. Make sure to check back every now and again for exciting new features!

## **Installation**

To download this module through npm, simply use the following command.

```
$ npm install --save curtail
```

and to use it, you can import it as an ES6 module:

```js
import { Curtail } from './node_modules/curtail/curtail.js';
```

or reference the script:

```html
<script src="./node_modules/curtail/dist/curtail.min.js">
```

## **Initialization**

After referencing Curtail, a new instance can be created like below:

```js
const curtail = new Curtail();
```

Curtail does accept some optional parameters on initialization as highlighted below:

| param        | type    | description                                                                     | default |
|--------------|---------|---------------------------------------------------------------------------------|---------|
| autoDownload | boolean | If set to true, the newly edited file will automatically be queued to download. | false   |
| crossOrigin  | string  | Cross-origin property to set if the images are from a non-local source.         | null    |

So let's say you would like your images to be downloaded after edits, you would initialize Curtail like:

```js
const options = {
    autoDownload: true
};

const curtail = new Curtail(options);
```

## **API**

**Note:** As loading of images is an asynchoronous action, all of Curtail's methods return a Promise which you can use either `then` or `await` as shown in the examples below.

### **crop**

Curtail's crop method lets you input an image, crop location, and crop dimensions and returns a newly cropped version
of the original image.

| param  | type   | description                                     | default |
|--------|--------|-------------------------------------------------|---------|
| src    | string | The path to the image.                          |         |
| x      | number | Where to begin cropping the image horizontally. |         |
| y      | number | Where to begin cropping the image vertically.   |         |
| width  | number | The width of the new image.                     |         |
| height | number | The height of the new image.                    |         |

Using `Promise.then`:

```js
// This will take an image and start cropping at (100, 100) and create a new image
// with a width of 720x480.
curtail.crop('./path/to/image.png', 100, 100, 720, 480).then((newImage) => {

  // newImage will be your newly cropped image and if autoDownload is set to true
  // then you will have a local copy downloaded at this time.

});

```

Using `async/await`:

```js
async function main() {

  // This will take an image and start cropping at (100, 100) and create a new image
// with a width of 720x480.
  // You should probably use `try, catch`
  const newImage = curtail.crop('./path/to/image.png', 100, 100, 720, 480).catch((err) => console.log(err));

  // newImage will be your newly cropped image and if autoDownload is set to true
  // then you will have a local copy downloaded at this time.

}

main();
```

### **convert**

Curtail's convert method takes an image and converts it from one image format to another.

Note that in order to normalize format input, the `format` parameter will have to be selected from the `curtail.FORMAT` object.

If you have a transparent image and convert it to a format that doesn't support transparency, the image will be placed on a white background.

| param  | type           | description                                     | default |
|--------|----------------|-------------------------------------------------|---------|
| src    | string         | The path to the image.                          |         |
| format | Curtail.FORMAT | Where to begin cropping the image horizontally. |         |

Using `Promise.then`:

```js
// This will take an image and start cropping at (100, 100) and create a new image
// with a width of 720x480.
curtail.convert('./path/to/image.png', curtail.FORMAT.JPG).then((newImage) => {

  // newImage will be your newly converted image and if autoDownload is set to true
  // then you will have a local copy downloaded at this time.

});

```

Using `async/await`:

```js
async function main() {

  // This will take an image and start cropping at (100, 100) and create a new image
// with a width of 720x480.
  // You should probably use `try, catch`
  const newImage = curtail.convert('./path/to/image.png', curtail.FORMAT.JPG).catch((err) => console.log(err));

  // newImage will be your newly converted image and if autoDownload is set to true
  // then you will have a local copy downloaded at this time.

}

main();
```

## **License**

MIT