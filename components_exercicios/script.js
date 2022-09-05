import WeatherChange from "./componentes/WeatherChange.js"
import MarketCap from "./componentes/MarketCap.js"

Vue.component('WeatherChange', WeatherChange)

const vm = new Vue({
    el: "#app",
    data: {
        
    },
    components: {
        MarketCap
    },
})