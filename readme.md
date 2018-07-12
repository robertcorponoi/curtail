# Curtail

Curtail is a simple browser based image manipulation library. Currently the only functionality offered by Curtail is cropping but more functionality is coming soon.

## Installation

To use Curtail, you can install it from npm and import it into your project.

```$ npm install --save curtail```

```js
import { Curtail } from './node_modules/curtail/curtail.js';

const curtail = new Curtail();
```

or you can just download the `curtail.js` file and import as above, just from a different directory.

## API

### Crop

The crop function in Curtail takes an image and a set of options as parameters. The image provided must be from a local source and the options will default to 0 if not specified

```js
const options = {
    locX: 50,        // The x position in the original image to begin cropping.
    locY: 75,        // The y position in the original image to being cropping.
    size: '350x500'  // The dimension to crop out of the original image beginning at the starting location.
};

const croppedImage = await Curtail.crop('./images/placeholder.png', options);
// Returns an image element with the newly cropped image.

## License

MIT