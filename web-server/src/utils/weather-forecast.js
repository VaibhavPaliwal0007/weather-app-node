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
             callback(undefined, 'The current temperature is ' + body.current.temperature + ' and it feels like ' + 
             body.current.weather_descriptions)
         }
    })
} 

module.exports = forecast 
    
