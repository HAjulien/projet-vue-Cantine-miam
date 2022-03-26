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

            jours_travail: [ this.jour_travail_1, this.jour_travail_2, this.jour_travail_3, this.jour_travail_4, this.jour_travail_5 ]
        }
    },
   mounted () {

        let open_lunch = ( this.open_lunch_hour * 60 ) + this.open_lunch_minute;
        let close_lunch = ( this.close_lunch_hour * 60 ) + this.close_lunch_minute;
        let open_diner = ( this.open_diner_hour * 60 ) + this.open_diner_minute;
        let close_diner =  ( this.close_diner_hour * 60 ) + this.close_diner_minute;

        const date = new Date();
        let day = date.getDay();

        let minute = date.getMinutes();
        let hour = date.getHours();
        let horaire_user = ( hour*60 ) + minute;

        const pencarte = document.getElementById("pencarte");


            if ( this.jours_travail.indexOf(day) === 1 ) 
                {

                    if (horaire_user >= 0 && horaire_user < open_lunch){
                        pencarte.innerHTML = "la cantine ouvre à " + this.open_lunch_hour + " h " + this.open_lunch_minute + ".";
                    }
                    else if ( horaire_user >= open_lunch && horaire_user < close_lunch) {
                        pencarte.innerHTML = "la cantine est ouverte jusqu'à " + this.close_lunch_hour + " h " + this.close_lunch_minute + ".";
                    }
                    else if (horaire_user >=  close_lunch && horaire_user < open_diner ) {
                        pencarte.innerHTML = "la cantine réouvre à " + this.open_diner_hour + " h " + this.open_diner_minute + ".";
                    }
                    else if ( horaire_user >= open_diner && horaire_user < close_diner){
                        pencarte.innerHTML = "la cantine est ouverte jusqu'à " + this.close_diner_hour + " h " + this.close_diner_minute + ".";
                    }
                    else{
                        pencarte.innerHTML = "la cantine est fermée pour ce soir." 
                    }

                }
            else{
                pencarte.innerHTML = 'nous sommes fermés aujourd\'hui.';
            };


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