import seriesData from "../api/seriesData.json";
import SeriesCards from "./SeriesCards";
const Netflixseries = () => {
  return (
    <ul>
      {seriesData.map((currElm) => {
        return (<SeriesCards key = {currElm.id} currElm = {currElm}/>)
      })}

    </ul>
  )
}

export default Netflixseries
