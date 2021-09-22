// From Professor Tom Gregory
const Offer = {
    data() {
      return {
        "person": undefined,
        }
    },

    computed: {
        formatDate() {
            return dayjs(this.person.dob.date)
            .format('D MMM, YYYY')
        }
    },

methods: {
        fetchUserData() {
            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.person = responseJson.results[0];
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchUserData();
    }
} 
  
Vue.createApp(Offer).mount('#randomApp');