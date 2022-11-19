# get npm stats (as a csv)
This script allows you to pull downloads for any npm package over time, as a csv. 

There's a lot of websites to chart npm stats (e.g. http://npm-stats.org/, https://npm-stat.com/) but I couldn't find a easy way to pull downloads <b>as a csv</b> in an extensible way.

## how to use
1. clone repo
2. `npm install`
3. in terminal, run the node script specifying your npm_package, the start date, and end end date separated by a space


Here is an example: `node getnpmstats.js web3 2022-01-01 2022-11-18`

## limitations
The npm API endpoint I'm using is limited to at most <b>18 months of data</b>. Also, the earliest date data will be returned for is January 10, 2015. 

## questions
If you have any problems, you can DM me on twitter at [@caseycaruso](https://twitter.com/caseykcaruso)