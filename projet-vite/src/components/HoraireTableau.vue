<template>
    <table class="bg-gray-50 dark:bg-gray-600">
            <caption>La Cantine Miam vous accueille :</caption>
            <tr>
                <th>lundi:</th>
                <td>11H30 - 14H00</td>
                <td>et de</td>
                <td>18H00 - 19H30</td>
            </tr>
            <tr>
                <th>mardi:</th>
                <td>11H30 - 14H00</td>
                <td>et de</td>
                <td>18H00 - 19H30</td>
            </tr>
            <tr>
                <th>mercredi:</th>
                <td>11H30 - 14H00</td>
                <td>et de</td>
                <td>18H00 - 19H30</td>
            </tr>
            <tr>
                <th>jeudi:</th>
                <td>11H30 - 14H00</td>
                <td>et de</td>
                <td>18H00 - 19H30</td>
            </tr>
            <tr>
                <th>vendredi:</th>
                <td colspan="3"> 11H30 - 14H00 </td>
            </tr>
        </table>
</template>

<script>
export default {
    name: "HoraireTableau"
}
</script>

<style lang="scss" scoped>
    caption{
        font-size: 1.8rem;
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
        text-decoration: underline;
        font-size: 1.2rem;
        font-weight: normal;
        text-align: left;
        padding-left: 10px;
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