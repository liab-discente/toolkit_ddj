import Papa from 'papaparse'

const fetcher = url => fetch(url).then(res => res.text()).then(csvData => {
  return Papa.parse(csvData, {
    header: true,
    delimiter: ","
  }).data});

export {
  getParsedCSVData,
  fetcher,
  fetcher2
}
  
