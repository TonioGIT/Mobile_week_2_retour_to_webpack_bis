<template>
    <div>

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
        }  ,
        }
</script>

<style scoped>
</style>