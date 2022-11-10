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
            this.user = JSON.parse(userLocalStrorage.user);
        }
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
        }
    },
}