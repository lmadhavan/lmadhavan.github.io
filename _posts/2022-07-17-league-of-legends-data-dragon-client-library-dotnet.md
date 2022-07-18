---
layout: post
title: ".NET client library for League of Legends Data Dragon API"
tags: league-of-legends
---

[Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon) is the official Riot Games API for accessing [League of Legends](https://www.leagueoflegends.com/) champion and item information. It's a bunch of static assets (JSON data + images) vended via Riot's CDN and updated whenever a new game patch is released.

When I built [League Handbook]({% link _posts/2016-05-19-league-handbook-a-league-of-legends-reference-app-for-windows-10.md %}) several years ago, I couldn't find any good .NET client libraries for Data Dragon, so I ended up writing my own. While the source code for League Handbook (including the client library) has always been available on [GitHub](https://github.com/lmadhavan/lol-handbook), I wanted to make it simpler for other developers to consume the library, so I went ahead and published it as a [NuGet package](https://www.nuget.org/packages/LolHandbook.DataDragonClient/) today. Check it out if you're looking for an easy way to pull champion/item information into your .NET project (and feel free to share your project in the comments below).

[View on NuGet](https://www.nuget.org/packages/LolHandbook.DataDragonClient/){:.button}
