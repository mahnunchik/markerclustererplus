var gulp = require('gulp');

//run as gulp pack from the command line (after npm installing gulp)
gulp.task('pack', function() {
  var packer = require('packer'),
      fs = require('fs');

  var inFile =  "./src/markerclusterer.js",
      outFile = inFile.replace(/\.js$/, "_packed.js");

  console.log("Packing " + inFile + " to output " + outFile);

  // options
  var base62 = true,
      shrink = true;

  fs.readFile(inFile, function(err, data) {
    if (err) return console.error(err);

    var packedScript = packer.pack(data, base62, shrink);

    fs.writeFile(outFile, packedScript, function(err) {
      if(err) return console.error(err);
      console.log("The file was saved!");
    });
  });
});

