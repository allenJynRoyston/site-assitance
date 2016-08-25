var htmlSnapshots = require('html-snapshots');
var result = htmlSnapshots.run({
  input: "sitemap",
  source: "http://www.allenroyston.com/sitemap.xml",
  outputDir: "./snapshots",
  outputDirClean: false,
  selector: 'html',
  timeout: {"__default": 10000 }
});
