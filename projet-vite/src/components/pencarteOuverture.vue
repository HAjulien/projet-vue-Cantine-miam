<template>
    <p id="pencarte"></p>

</template>

<script>
export default {
  name:'pencarte',
    components:{

    },
    data() {

        return {
            open_lunch_hour : 10,
            open_lunch_minute : 50,

            close_lunch_hour : 14,
            close_lunch_minute : 10, 

            open_diner_hour : 17, 
            open_diner_minute : 40,

            close_diner_hour : 21, 
            close_diner_minute: 16,

            travail: true,

        }
    },
   mounted () {
       
        //converti heure et minute en un nombre que l'on peut comparer avec l'heure du visiteur let horaire_user
        let open_lunch= ( this.open_lunch_hour * 60 ) + this.open_lunch_minute;
        let close_lunch = ( this.close_lunch_hour * 60 ) + this.close_lunch_minute;
        let open_diner = ( this.open_diner_hour * 60 ) + this.open_diner_minute;
        let close_diner =  ( this.close_diner_hour * 60 ) + this.close_diner_minute;

        //recuperer le jour (entre 0 et 6) pas besoin avec sql et l'heure du visiteur que l'on converti en un nombre
        // let day = date.getDay();
         const date = new Date();

        let minute = date.getMinutes();
        let hour = date.getHours();
        let horaire_user = ( hour*60 ) + minute;

        //pour modifier le contenu de la pencarte
        const pencarte = document.getElementById("pencarte");

            function horaire( open_lunch, close_lunch ,open_diner,close_diner, heureMidi , minuteMidi, heureFinMidi, minuteFinMidi,heureSoir,minuteSoir,heureFinSoir ,minuteFinSoir){
                    //quand la cantine n'ouvre pas le matin 0 equivaut à null
                    if ( horaire_user < open_diner && close_lunch == 0 && open_diner !== 0 ) {
                        pencarte.innerHTML = "la cantine n'ouvre que le soir à partir de " + heureSoir +"h"+ minuteSoir +".";
                    }
                    else if (horaire_user >= 0 && horaire_user <  open_lunch){
                        pencarte.innerHTML = "la cantine ouvre à " + heureMidi + " h " + minuteMidi + ".";
                    }
                    else if ( horaire_user >=  open_lunch && horaire_user < close_lunch) {
                        pencarte.innerHTML = "la cantine est ouverte jusqu'à " + heureFinMidi + " h " + minuteFinMidi + ".";
                    }
                    else if ( horaire_user > close_lunch && open_diner == 0 ) {
                        pencarte.innerHTML = "la cantine n'ouvre pas ce soir.";
                    }
                    else if (horaire_user >=  close_lunch && horaire_user < open_diner ) {
                        pencarte.innerHTML = "la cantine réouvre à " + heureSoir + " h " + minuteSoir + ".";
                    }
                    else if ( horaire_user >= open_diner && horaire_user < close_diner){
                        pencarte.innerHTML = "la cantine est ouverte jusqu'à " + heureFinSoir + " h " + minuteFinSoir + ".";
                    }
                    else{
                        pencarte.innerHTML = "la cantine est fermée pour ce soir." 
                    }
            
                };

        

         if ( this.travail == false) {
             pencarte.innerHTML = "la cantine est fermée aujourd'hui." 
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
         }


    },

}
</script>

<style lang="scss" scoped>
    #pencarte{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 350px;
        height: 80px;
        margin: auto;
        background-color: rgb(185, 151, 109);
        color: #f8f8f8;
        border: 3px solid #7cf808;
        border-radius: 15px;
    }

</style>