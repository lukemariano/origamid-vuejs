const vm = new Vue({
    el: "#app",
    data:{
        nome: 'Lucas',
        sobrenome:'Mariano',
        paises:{},
        selecionado: '',
        capitalSelecionada:null,
    },
    computed:{
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
    },
    methods:{
        getPaises(){
            fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(jsonPaises =>{
                this.paises = jsonPaises;
            })
        },
    },
    watch:{
        selecionado(){
            fetch(`https://restcountries.com/v2/name/${this.selecionado}`)
            .then(response => response.json())
            .then(jsonCapital => {
                console.log(this.selecionado);
                this.capitalSelecionada = jsonCapital[0].capital;
            })
        },
    },

})