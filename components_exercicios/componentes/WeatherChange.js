// WeatherChange.js
export default{
    name: 'WeatherChange',
    data (){
        return {
            temperature: {}
        }
    },
    methods: {
        async getPedidos(){
            const req = await fetch("https://api.origamid.dev/weather/rio");
            const response = await req.json();

            for(let item of response.consolidated_weather){

                this.temperature = item.max_temp
            }
        }
    },
    template: `
    
        <p>Temperatura: {{ temperature }} </p> 
    `,
    mounted(){
        this.getPedidos()
    }
};