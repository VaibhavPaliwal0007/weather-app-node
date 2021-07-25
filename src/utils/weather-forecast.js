const request = require('postman-request')

const forecast = (latitude,longitude,callback) => {
    const forecastURL = 'http://api.weatherstack.com/current?access_key=7905c8444ec9c3365b117339958f82a8&query=' + 
    latitude + ',' + longitude + '&units=m&limit=1'
  
    request({url : forecastURL ,json:true}, (error,{body}) => {
         if(error){
             callback('Unable to connect to the Internet', undefined)
         }
         else if(body.error){
             callback('Unable to find location', undefined)
         }
         else{
            callback(undefined, {
                temperature: body.current.temperature,
                precipitation: body.current.precip,
                feelsLike: body.current.feelslike,
                description: body.current.weather_descriptions[0],
                humidity: body.current.humidity,
                visibility: body.current.visibility,
                weatherImg: body.current.weather_icons[0],

                localTime: body.location.localtime,
                location: `${body.location.name}, ${body.location.region}, ${body.location.country}`
            });
         }
    })
} 

module.exports = forecast 
    
