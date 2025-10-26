const https = require('https');
const fs = require('fs');

// Download placeholder images
const images = [
  { url: 'https://placehold.co/800x400/ff6b6b/ffffff.jpg', filename: 'public/product.jpg' },
  { url: 'https://placehold.co/800x400/4ecdc4/ffffff.jpg', filename: 'public/people.jpg' }
];

images.forEach(img => {
  https.get(img.url, (response) => {
    const fileStream = fs.createWriteStream(img.filename);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${img.filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${img.filename}:`, err.message);
  });
});
