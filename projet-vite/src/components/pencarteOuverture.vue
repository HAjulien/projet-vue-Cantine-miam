<template>
    <p id="pencarte" class="dark:bg-gray-600 bg-gray-50" :class="isOuvert == true ? 'text-emerald-400 border-emerald-400' : 'text-red-400 boder-red-400'" ></p>
</template>

<script>
export default {
    name:'pencarte',

    data() {

        return {
            open_lunch_hour : 11,
            open_lunch_minute : 30,

            close_lunch_hour : 14,
            close_lunch_minute : 0, 

            open_diner_hour : 18, 
            open_diner_minute : 0,

            close_diner_hour : 19, 
            close_diner_minute: 30,

            isOuvert:true,

        }
    },
    mounted () {

        //converti heure et minute en un nombre que l'on peut comparer avec l'heure du visiteur let horaire_user
        let open_lunch= ( this.open_lunch_hour * 60 ) + this.open_lunch_minute;
        let close_lunch = ( this.close_lunch_hour * 60 ) + this.close_lunch_minute;
        let open_diner = ( this.open_diner_hour * 60 ) + this.open_diner_minute;
        let close_diner =  ( this.close_diner_hour * 60 ) + this.close_diner_minute;

        const date = new Date();
        let day = date.getDay();

        let minute = date.getMinutes();
        let hour = date.getHours();
        let horaire_user = ( hour*60 ) + minute;
        let self = this
        //pour modifier le contenu de la pencarte
        const pencarte = document.getElementById("pencarte");

            function horaire( open_lunch, close_lunch ,open_diner,close_diner, heureMidi , minuteMidi, heureFinMidi, minuteFinMidi,heureSoir,minuteSoir,heureFinSoir ,minuteFinSoir){
                    //quand la cantine n'ouvre pas le matin 0 equivaut à null
                    if ( horaire_user < open_diner && close_lunch == 0 && open_diner !== 0 ) {
                        pencarte.innerHTML = "la cantine n'ouvre que le soir à partir de " + heureSoir +"h"+ minuteSoir +"."
                        self.isOuvert = false
                    }
                    else if (horaire_user >= 0 && horaire_user <  open_lunch){
                        pencarte.innerHTML = "la cantine ouvre à " + heureMidi + " h " + minuteMidi + "."
                        self.isOuvert = false
                    }
                    else if ( horaire_user >=  open_lunch && horaire_user < close_lunch) {
                        pencarte.innerHTML = "la cantine est ouverte jusqu'à " + heureFinMidi + " h " + minuteFinMidi + "."
                        self.isOuvert = true
                    }
                    else if ( horaire_user > close_lunch && this.day == 5 ) {
                        pencarte.innerHTML = "la cantine n'ouvre pas ce soir."
                        self.isOuvert = false;
                    }
                    else if (horaire_user >=  close_lunch && horaire_user < open_diner ) {
                        pencarte.innerHTML = "la cantine réouvre à " + heureSoir + " h " + minuteSoir + "."
                        self.isOuvert = false;
                    }
                    else if ( horaire_user >= open_diner && horaire_user < close_diner){
                        pencarte.innerHTML = "la cantine est ouverte jusqu'à " + heureFinSoir + " h " + minuteFinSoir + "."
                        self.isOuvert = true;
                    }
                    else{
                        pencarte.innerHTML = "la cantine est fermée pour ce soir."
                        self.isOuvert = false;
                    }
            
                };

        

        if ( day == 0 || day == 6) {
            pencarte.innerHTML = "la cantine est fermée aujourd'hui." 
            this.isOuvert = false
        }else{
            horaire(
            open_lunch,
            close_lunch,
            open_diner,
            close_diner,
            this.open_lunch_hour,
            this.open_lunch_minute,
            this.close_lunch_hour,
            this.close_lunch_minute,
            this.open_diner_hour,
            this.open_diner_minute,
            this.close_diner_hour,
            this.close_diner_minute,
            );
            console.log(this.isOuvert);
        }


    },

}
</script>

<style lang="scss" scoped>
    p{
        margin: auto;
        width: 96%;
        max-width: 450px;
        padding: 15px 0;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 700;
        border: 2px solid ;

    }

    @media screen and (min-width:780px) {
        p{
            font-size: 1.5rem;
        }

    }
</style>