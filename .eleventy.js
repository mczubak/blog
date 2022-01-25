const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// custom markdown plugin
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');

module.exports = config => {
  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  // Custom markdown plugin
  const options = {
    html: true,
    breaks: true,
    linkify: true
  };
  const markdownLib = markdownIt(options).use(markdownItAttrs);
  config.setLibrary("md", markdownLib);

  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/scripts/');


  // Returns a collection of blog posts in reverse date order
  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  // Returns a collection of blog posts in reverse date order
  config.addCollection('latestBlogPosts', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse().slice(0, 3);
  });

  config.setBrowserSyncConfig({
    files: './dist/css/**/*.css'
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
