<template>
    <table class="bg-gray-50 dark:bg-gray-600">
            <caption>La Cantine Miam vous accueille :</caption>
            <tr
            :class="day == 1 ? 'text-emerald-500': ''"
            >
                <th>lundi:</th>
                <td>11H30 - 14H00</td>
                <td>et</td>
                <td>18H00 - 19H30</td>
            </tr>
            <tr
            :class="day == 2 ? 'text-emerald-500': ''"            
            >
                <th>mardi:</th>
                <td>11H30 - 14H00</td>
                <td>et</td>
                <td>18H00 - 19H30</td>
            </tr>
            <tr
            :class="day == 3 ? 'text-emerald-500': ''"        >
                <th>mercredi:</th>
                <td>11H30 - 14H00</td>
                <td>et</td>
                <td>18H00 - 19H30</td>
            </tr>
            <tr
            :class="day == 4 ? 'text-emerald-500': ''"        
            >
                <th>jeudi:</th>
                <td>11H30 - 14H00</td>
                <td>et</td>
                <td>18H00 - 19H30</td>
            </tr>
            <tr
            :class="day == 5 ? 'text-emerald-500': ''"        
            >
                <th>vendredi:</th>
                <td colspan="3"> 11H30 - 14H00 </td>
            </tr>
        </table>
</template>

<script>
export default {
    name: "HoraireTableau",
    data() {
        return {
            day :''
        }
    },
    created() {
        this.day = new Date().getDay()
        console.log(this.day);
    },
}
</script>

<style lang="scss" scoped>
    caption{
        font-size: 1.7rem;
        font-family: 'Satisfy', cursive;
        text-align: center;
        padding: 15px 0;
}
    table{
        width: 96%;
        max-width: 550px;
        margin: auto;
        padding: 50px auto;
        border: 2px solid $green;
    }

    th{
        font-family: "Satisfy", sans-serif;
        text-decoration: underline;
        font-size: 1.3rem;
        font-weight: normal;
        text-align: left;
        padding-left: 5px;
    }

    th::first-letter{
        text-transform: uppercase;
    }

    td{
        text-align: center;
        text-transform: lowercase;
        padding: 15px 0;
    }

    td:nth-child(3){
        padding: 0;
        font-style: italic;


    }
    td:not(:nth-child(3)){
        font-weight: 600;
    }
</style>