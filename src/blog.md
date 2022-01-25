---
title: 'A Blog About Software Development And Life'
layout: 'layouts/blog-feed.html'
pagination:
  data: collections.blog
  size: 3
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#blog-list'
---

Welcome to my blog. Subscribe and get my latest blog post in your inbox.