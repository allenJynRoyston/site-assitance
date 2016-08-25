var sm = require('sitemap'),
    fs = require('fs');

// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap({
      hostname: 'http://www.semanticui-ang2.com/',
      urls: [
        { url: '/' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/install' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/accordion' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/dimmer' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/dropdown' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/embed' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/modal' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/popup' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/progress' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/rating' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/sidebar' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/shape' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/tab' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/transition' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true },
        { url: '/features/visibility' , changefreq: 'weekly', priority: 0.5, lastmodrealtime: true }
    ]
});
// Generates XML with a callback function
sitemap.toXML( function(err, xml){ if (!err){ console.log(xml) } });
// Gives you a string containing the XML data

fs.writeFileSync("sitemap/sitemap.xml", sitemap.toString());
