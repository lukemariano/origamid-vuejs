export default{
    name: 'ExchangeReal',
    data (){
        return {
            cotation: {}
        }
    },
    methods: {
        async getExchange(){
            const req = await fetch("https://api.origamid.dev/exchange/usd")
            const response = await req.json()
            this.cotation = response.rates.BRL 
        },
    },
    template: `
    
        <P>Conversão para real: {{ cotation }} </P> 
    `,
    mounted(){
        this.getExchange()
    }
};