var sm = require('sitemap'),
    fs = require('fs');

// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap({
      hostname: 'http://allenroyston.com',
      urls: [
        { url: '/' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/resume' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/portfolio/sites' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/portfolio/github' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true }
    ]
});
// Generates XML with a callback function
sitemap.toXML( function(err, xml){ if (!err){ console.log(xml) } });
// Gives you a string containing the XML data

fs.writeFileSync("sitemap/sitemap.xml", sitemap.toString());
