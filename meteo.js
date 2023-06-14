let search = document.getElementById('boutton')

search.addEventListener('click', (e) => {
    e.preventDefault
    let ville = document.getElementById('search_bar').value;
    let afficher_ville = document.getElementById('city');
    let temperature = document.getElementById('temp');
    let description = document.getElementById('description');
    let humidite = document.getElementById('humidity');
    let wind = document.getElementById('wind');

   
})

    



   /*  const api=`https://api.openweathermap.org/data/2.5/weather?q=Cotonou&appid=eb90f861ef0fada27b9791cfe57896bf&&units=metric`
    fetch(api)
    .then (response => response.json())
    .then(data =>{
        variable=data.conversion_rates;)} */

    async function getweather(){
        let res=await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cotonou&appid=eb90f861ef0fada27b9791cfe57896bf&&units=metric')
        let data=res.json();
        console.log(data);
    }