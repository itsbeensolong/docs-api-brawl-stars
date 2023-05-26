---
sidebar_position: 1
---

# Documentation

This documentation will help you get familiar with the resources of the brawl Stars Api and show you how to make different queries, so that you can get the most out of it.

## Getting Started

### Rest

**Base Url**: https://github.com/itsbeensolong/api

The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json.

```rest
GET https://rickandmortyapi.com/api
```

```json
{
  "Brawlers": "https://api.brawlstars"
}
```

## Info and pagination

The API will automatically paginate the responses. You will receive up to 20 documents per page.

Each resource contains an info object with information about the response.
