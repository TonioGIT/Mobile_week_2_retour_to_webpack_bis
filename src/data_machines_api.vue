<template>
    <div>
        <list-compo v-for="data in machines" :key="data.id" 
        v-bind:machines="data.machines">
        </list-compo>

    </div>
</template>

<script>
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
        } ,
        props: ['machines']
        }
</script>

<style scoped>
</style>