// src/utils/cloudinaryConfig.js

import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dcjcdkgzy', // Replace with your Cloudinary cloud name
  }
});

export default cld;
