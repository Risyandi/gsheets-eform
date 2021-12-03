<template>
    <div class="wrapper" id="media-website">
        <div v-for="dataMedia in mediaWebsite" :key="dataMedia.name" v-bind:class="dataMedia.bg_dark !== true ? 'card' : 'card bg-dark'">
            <p>{{dataMedia.name}}</p>
            <p><a :href="dataMedia.link" target="_blank"> {{dataMedia.link}}</a></p>
            <p>{{dataMedia.description}}</p>
        </div>
    </div>
</template>

<script>
import Data from '../static/dataMediawebsite.json'
export default {
    data() {
        return {
            mediaWebsite: Data
        }
    }
}
</script>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1rem;
        max-width: 960px;
        margin: 0 auto;
    }
    .card {
        border: 3px solid;
        border-radius: .5rem;
        padding: 1rem;
        margin-bottom: 1rem;
    }
    .card :first-child {
        font-weight: bold;
        font-size: 2.5rem;
        margin: 1rem 0;
    }
    .card :last-child {
        font-style: italic;
        font-size: .8rem;
    }
    .bg-dark {
        background-color: #343a40;
        color: aliceblue;
    }
</style>