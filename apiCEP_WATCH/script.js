'use strict'

const vm = new Vue({
    el: '#app',
    data:{
        cep: "",
        endereco:{},
    },
    watch: {
        cep(valor){
            console.log(valor);
            if(valor.length === 8 ){
                fetch(`https://viacep.com.br/ws/${valor}/json/`)
                .then(response => response.json())
                .then(jsonCep => {
                    console.log(jsonCep);
                    this.endereco = jsonCep;
                })
            }
        },
    }
})

