const request = require('postman-request')

const geocode = (address,callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidnAwNyIsImEiOiJja3I2b2xubHMyZnR5Mm5tbmsxdDd2Ync2In0.M6mpTSAmS5_QzzBuXgf2Cg&limit=1'
    
    request({url : geocodeURL,json : true} , (error,{body}) => {
         if(error){
             callback('Unable to connect to the Internet!!!',undefined)
         }
         else if(body.features.length == 0){
             callback('Invalid Input',undefined)
         }
         else{
             callback(undefined,{
                 latitude : body.features[0].center[1],
                 longitude : body.features[0].center[0],
                 location : body.features[0].place_name,
            })
         }
    })
}

module.exports =  geocode 
