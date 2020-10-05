// Summarise data by month
// sample data: [
// {
//  number_of_fatalities: 9,
//  time: "January 1, 2015 12:15:00 AM"
// },
// {
// number_of_fatalities: 10,
// time: "February 1, 2015 12:15:00 AM"
// },
// {
//  number_of_fatalities: 0,
//  time: "February 14, 2015 12:15:00 AM"
// }
// ]
//
//


function aggregateByMonth(data) {
  let result = []

  let p = 0;
  let acc = 0
  while (p < data.length - 1) {
    acc += data[p].number_of_fatalities

    if (data[p].month !== data[p+1].month){
      let fatalByMonth = {}
      fatalByMonth["sum"] = acc
      fatalByMonth["month"] = data[p].month
      fatalByMonth["year"] = data[p].year
      result.push(fatalByMonth)
      acc = 0
    }
    p++
  }
  return result
}
