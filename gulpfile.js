var gulp = require('gulp');

gulp.task('default', function() {
  var packer = require('packer'),
      fs = require('fs');

  var inFile =  "./src/markerclusterer.js",
      outFile = inFile.replace(/\.js$/, "_packed.js");

  console.log("Packing " + inFile + " to output " + outFile);

  // options
  var base62 = true,
      shrink = true;

  var script = fs.readFile(inFile);
  var packedScript = packer.pack(script, base62, shrink);

  fs.writeFile(outFile, packedScript, function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
});

