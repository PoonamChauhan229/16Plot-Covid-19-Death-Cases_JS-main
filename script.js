// let url=`https://api.covid19api.com/summary`

updateMap()
async function updateMap(){
    let data=await fetch("https://poonamchauhan229.github.io/16Plot-Covid-19-Death-Cases_JS-main/data.json")
    let res=await data.json()
    console.log(res.data)
    console.log(res.data)
    let list=res.data

    list.map(async function(element){
        // console.log(element)
        // console.log(element.NewConfirmed)
        // console.log(element.Country)
        console.log(`Loading`)
        let data1=await fetch(`https://restcountries.com/v3.1/name/${element.country}`)
        let res1=await data1.json()
        // console.log(res1[0].latlng)

        let latitude=res1[0].latlng[0]
        let longitude=res1[0].latlng[1]


        let cases=element.dead

        if(cases>255){
            color="rgb(255,0,0)"
        }
        else if(cases>100 && cases<255){
            color="rgb(168,23,62)"
        } 
        else{
            color=`rgb(${element.dead},0,0)`
        }
        // Mark on the map

        new mapboxgl.Marker({
            draggable: false,
            // color:"red"
            color:color

            })
            .setLngLat([longitude, latitude])
            .addTo(map);


    })

}
let interval=9000
setInterval(updateMap,interval)
