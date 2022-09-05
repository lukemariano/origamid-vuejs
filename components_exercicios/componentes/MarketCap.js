import ExchangeReal from "./ExchangeReal.js"


export default{
    name: 'MarketCap',
    data(){
        return {
            quoteApple:{}
        }
    },
    components: {
        ExchangeReal
    },
    methods:{
        async getMaketCap(){
            const req = await fetch("https://api.origamid.dev/stock/aapl/quote");
            const response = await req.json();
            this.quoteApple = response;


        }
    },
    template: `
        <div>
            <p>MarketCap {{ quoteApple.companyName }}({{ quoteApple.symbol }}) : U\${{ quoteApple.marketCap }}</p>
            <exchange-real></exchange-real>
        </div>
    `, 
    mounted(){
        this.getMaketCap()
    }
}