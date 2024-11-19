const apiKey = '8834900c58b0c24d1b4e1e6f8ac9cc20'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?unit=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon') 
const error = document.querySelector('.error') 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    

    if(response.status === 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
        setTimeout(() => error.innerHTML = '', 2000)
    }else {     
        var data = await response.json()

        console.log(data)
    
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
    
        if(data.weather[0].main === 'Cloud'){
            weatherIcon.src = 'image/cloud.jpeg'
        }
        else if(data.weather[0].main === 'Clear'){
            weatherIcon.src = 'image/clear.avif'
        }
        else if(data.weather[0].main === 'Rain'){
            weatherIcon.src = 'image/rain.jpeg'
        }
        else if(data.weather[0].main === 'Drizzle'){
            weatherIcon.src = 'image/rain.jpeg'
        }
        else if(data.weather[0].main === 'Mist'){
            weatherIcon.src = 'image/mist.jpg'
        }
    
        document.querySelector('.weather').style.display = 'block'
        document.querySelector('.error').style.display = 'none'
    } 
   
   
    }
    

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value)
})



