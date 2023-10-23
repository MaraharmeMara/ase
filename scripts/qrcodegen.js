const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

// Source and destination folder paths
const sourceFolderPath = "./models";
const destinationFolderPath = "./qrcodes";
const prefix = "https://stctuotanto.fi/360vr/AR-web/?qr=";

// Read the files from the source folder
fs.readdir(sourceFolderPath, function (err, files) {
  if (err) {
    console.error("Error reading files from the source folder:", err);
    return;
  }

  // Loop through the files
  files.forEach(function (file) {
    const filename = path.parse(file).name;
    // Create the full file paths
    const qrcode = `${prefix}${filename}`;
    const destinationFilePath = path.join(destinationFolderPath, `${file}.png`);

    // Generate QR code from the 3D model filename
    QRCode.toFile(destinationFilePath, qrcode, { scale: 25 }, function (err) {
      if (err) {
        console.error("Error generating QR code:", err);
        return;
      }

      console.log(`QR code generated for ${qrcode}`);
    });
  });
});
