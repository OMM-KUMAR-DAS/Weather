
function Weatherr()
{
  const[data,setd]=React.useState({})
  const[location,setl]=React.useState('')
  
  const url='https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&units=metric&appid=54ee8b6cd61aa901a3f7871f1d2bef5c'

  const searchLocation=(event)=>{
    if(event.key==='Enter')
    {
      axios.get(url).then((response)=>{
        setd(response.data)
      })
      .catch(err=>{
        alert("sorry")
      })
      setl('')
    }
  }

  return(
  <div className="app">
        <div className="search">
                <input 
                value={location}
                onChange={event=>setl(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='enter location'
                type="text"/>
        </div>

        <div className="container">
              <div className="top">
                    <div className="location">
                      {data.name}
                    </div>

                    <div className="location">
                      {data.main? <h1>{data.main.temp.toFixed()}<sup>0</sup>C</h1>:null}
                    </div>

                    <div className="location">
                    {data.weather? <p>{data.weather[0].main}</p>:null}
                    </div>
              </div>

              <div className="bottom">
                  <div className="feels">
                     {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null} 
                    <p>Feels Like</p>
                  </div>
                  <div className="humidity">
                     {data.main ? <p className='bold'>{data.main.humidity}%</p> : null} 
                    <p>Humidity</p>
                  </div>
                  <div className="wind">
                     {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
                    <p>Wind Speed</p>
                  </div>
              </div>
        </div>

  </div>
  )
 
}
//ReactDOM.render(<Weather/>,document.getElementById("root"))
const con = document.getElementById('root');
const root = ReactDOM.createRoot(con);
root.render(<Weatherr/>);