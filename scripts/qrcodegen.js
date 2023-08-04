
var QRCode = require('qrcode');
var fs = require('fs');
var path = require('path');

// Source and destination folder paths
const sourceFolderPath = './models';
const destinationFolderPath = './qrcodes';

// Read the files from the source folder
fs.readdir(sourceFolderPath, function (err, files) {
  if (err) {
    console.error('Error reading files from the source folder:', err);
    return;
  }

  // Loop through the files
  files.forEach(function (file) {
    // Create the full file paths
    var sourceFilePath = path.join(sourceFolderPath, file);
    var destinationFilePath = path.join(destinationFolderPath, `${file}.png`);

    // Generate QR code from the 3D model filename
    QRCode.toFile(destinationFilePath, file, function (err) {
      if (err) {
        console.error('Error generating QR code:', err);
        return;
      }

      console.log(`QR code generated for ${file}`);
    });
  });
});
