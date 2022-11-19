import axios from 'axios'
import figlet from 'figlet'
import { createObjectCsvWriter } from 'csv-writer'

const getInputs = async() => {
  let time_period = 'last-year'
  let npm_package = 'web3'

  if (process.argv[2]) { npm_package = process.argv[2] }
  if (process.argv[3] && process.argv[4]) {
    time_period = `${process.argv[3]}:${process.argv[4]}`
  }
  return {'npm_package': npm_package, 'time_period': time_period}
}

const getStats = async(inputs) => {
  const res = await axios.get(`https://api.npmjs.org/downloads/range/${inputs.time_period}/${inputs.npm_package}`).catch((err) => {
    console.error("API error:", err)
    return null
  })
  return res.data
}

const writeStats = async (statsData) => {
  console.log(`\nBuilding csv of downloads for ${statsData.package} over ${statsData.start}:${statsData.end}.`)
  figlet('Follow the devs\n', function(err, data) { console.log(data) })

  const csvWriter = createObjectCsvWriter({
    path: `./npm_stats_${statsData.package}.csv`,
    header: [
      {id: 'day', title: 'date'},
      {id: 'downloads', title: 'daily_downloads'},
    ],
  });
  await csvWriter.writeRecords(statsData.downloads)
}

const getNPMStats = async () => {
  const inputs = await getInputs()
  const res = await getStats(inputs)
  writeStats(res)
}

getNPMStats()