export default {

    data() {
        return {
            user: "",
            token: ""
        }
    },

    methods: {

        logout: function(){
            this.user ='',
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            location.reload()
        }
        
    },
    mounted() {
        if (localStorage.getItem('user')) {
            let userLocalStrorage = JSON.parse(localStorage.getItem('user'));
            let userObjet = JSON.parse(userLocalStrorage.user);
            //console.log(userObjet);
            //console.log(Object.values(userObjet));
            //on transforme l'objet en tableau
            this.user = Object.values(userObjet);
            console.log(this.user);
        }
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            //console.log(this.token);
        }
    },
}