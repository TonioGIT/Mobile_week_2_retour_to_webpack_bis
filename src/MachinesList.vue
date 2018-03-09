<template>
    <div>
        <h1>Liste des machines</h1> 
        <machine-compo id="listcadres" v-for="machine in machines" :key="machine.id" 
        v-bind:name="machine.name" 
        v-bind:status="machine.status" 
        v-bind:checkedAt="machine.checkedAt" v-bind:createdAt="machine.createdAt">
        </machine-compo>
    </div>
</template>

<script>
var event = new Date();
import axios from 'axios';
    export default {
        data() {
            return {
                machines: [],
                loading: false,
                error: null,
            }
        },
        created() {
            axios.get('https://machine-api-campus.herokuapp.com/api/machines')
            .then(response => {
                this.machines = response.data;
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        }
            // machine: {  
            //     name: 'Berlin Coffee Machine',
            //     status: false,
            //     checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
            //   }
                // machines: [{
                //     id: 1,
                //     name: 'BLUE OCEAN',
                //     status: true,
                //     checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
                // }, {
                //     id: 2,
                //     name: 'BERRY CRUSH',
                //     status: false,
                //     checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
                // }, {
                //     id: 3,
                //     name: 'WHITE SOVIET',
                //     status: true,
                //     checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
                // }, {
                //     id: 4,
                //     name: 'PINK LADY',
                //     status: false,
                //     checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
                // }]
        
    }
</script>

<style scoped>

#listcadres {
    border: 3px solid #0a3c59;
    margin: 10.5px 21px;
}

</style>
