const request = require('request')

const forecast = (l1, l2, callback) => {
    const url = 'https://api.darksky.net/forecast/1429e7a7226319c3899a5ac0ddedeef3/' + encodeURIComponent(l1) + ',' + encodeURIComponent(l2)

    request({ url, json: true }, (error, { body }) => { 
        if (error)
        {
        callback('Cant connect to the weather service', undefined)
        } else if (body.error) { 
        callback('Unable to find location', undefined) 
    }
        else {
        const s = body.daily.data[0].summary+ ' It is currently '+ body.currently.temperature+ ' degrees out. There is a '+ body.currently.precipProbability+ '% chance of rain'
        callback(undefined,s)
        }
    })

}

module.exports=forecast