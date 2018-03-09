<template>
    <div>
        <h1>Carte des machines</h1> 
        <gmap-map
            id="map"
            :center="{lat:45, lng:6}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 1000px; height: 600px"
            >
                <gmap-marker v-for="position in machines"
                 :key="position.id"
                  v-bind:position="{lat:Number(position.latitude), lng:Number(position.longitude)}">
                </gmap-marker>
            
        </gmap-map>
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
        }  
        }  
            //     machines: [{
            //         id: 1,
            //         latitude: 45.1300,
            //         longitude: 6.1600,
            //     },
            // {
            //         id: 2,
            //         latitude: 45.8000,
            //         longitude: 6.5000,
            //     },
            // {
            //         id: 3,
            //         latitude: 45.1850,
            //         longitude: 5.7130,
            //     }]
        
        
    
</script>


<style scoped>
    #map {
        margin-left: 10px;
    }
</style>
