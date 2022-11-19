# GET NPM DOWNLOADS (as a csv)
This script allows you to pull downloads for any NPM package over any period of time, as a csv. 

There's a lot of sites to get pre-charted npm stats (e.g. http://npm-stats.org/, https://npm-stat.com/) but I couldn't find a super easy way (for my non-technical friends) to get downloads as a csv so they can pop them into Google sheets or excel. Hopefully this script fills that gap. 


## HOW TO USE 
1. clone the repo
2. `npm install`
3. in terminal, run the node script specifying your npm_package, the start date and end end date as `{start_date}:{end_date}`


Here is an example: `node getnpmstats.js web3 2020-01-01:2022-11-18`


If you have any problems, you can DM me on twitter at [@caseycaruso](https://twitter.com/caseykcaruso)
