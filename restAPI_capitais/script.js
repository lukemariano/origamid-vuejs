const vm = new Vue({
    el: "#app",
    data:{
        nome: 'Lucas',
        sobrenome:'Mariano',
        paises:{},
        selecionado: '',
        capitalSelecionada:'',
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
       selecionado(valor){
            this.capitalSelecionada = this.paises.find((pais) => pais.name === valor);
       },
    },

})