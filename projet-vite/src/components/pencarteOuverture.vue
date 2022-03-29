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

            jour_travail_1: 1,
            jour_travail_2: 2,
            jour_travail_3: 3,
            jour_travail_4: 4,
            jour_travail_5: 5,
            jour_travail_6: null,
            jour_travail_7: null,

        }
    },
   mounted () {
       
        let jours_travail = [this.jour_travail_1, this.jour_travail_2 ,this.jour_travail_3, this.jour_travail_4, this.jour_travail_5, this.jour_travail_6, this.jour_travail_7 ];

        let open_lunch= ( this.open_lunch_hour * 60 ) + this.open_lunch_minute;
        let close_lunch = ( this.close_lunch_hour * 60 ) + this.close_lunch_minute;
        let open_diner = ( this.open_diner_hour * 60 ) + this.open_diner_minute;
        let close_diner =  ( this.close_diner_hour * 60 ) + this.close_diner_minute;

        const date = new Date();
        let day = date.getDay();

        let minute = date.getMinutes();
        let hour = date.getHours();
        let horaire_user = ( hour*60 ) + minute;

        const pencarte = document.getElementById("pencarte");

             if ( jours_travail.includes(day) === false) {
                 pencarte.innerHTML = "la cantine est fermée  aujourd'hui." 
             } 

            function horaire( debutMidi, finMidi ,debutSoir,finSoir, heureMidi , minuteMidi, heureFinMidi, minuteFinMidi,heureSoir,minuteSoir,heureFinSoir ,minuteFinSoir){
            if ( jours_travail[0] == 1) 
                {

                    if (horaire_user >= 0 && horaire_user < debutMidi){
                        pencarte.innerHTML = "la cantine ouvre à " + heureMidi + " h " + minuteMidi + ".";
                    }
                    else if ( horaire_user >= debutMidi && horaire_user < finMidi) {
                        pencarte.innerHTML = "la cantine est ouverte jusqu'à " + heureFinMidi + " h " + minuteFinMidi + ".";
                    }
                    else if (horaire_user >=  finMidi && horaire_user < debutSoir ) {
                        pencarte.innerHTML = "la cantine réouvre à " + heureSoir + " h " + minuteSoir + ".";
                    }
                    else if ( horaire_user >= debutSoir && horaire_user < finSoir){
                        pencarte.innerHTML = "la cantine est ouverte jusqu'à " + heureFinSoir + " h " + minuteFinSoir + ".";
                    }
                    else{
                        pencarte.innerHTML = "la cantine est fermée pour ce soir." 
                    }
                

                };
        };
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