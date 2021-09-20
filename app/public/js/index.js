// From Professor Tom Gregory
const Offer = {
    data() {
      return {
        "person": {},
        }
    },

    computed: {
        formatDate() {
            return dayjs(this.person.dob.date)
            .format('D MMM, YYYY')
        }
    },

    created() {
        fetch('https://randomuser.me/api/')
        .then( response => response.json() )
        .then( (responseJson) => {
            this.person = responseJson.results[0];
        })
        .catch( (err) => {
            console.error(err);
        })
        console.log("B");
    } //end created
} // end Offer config

  
Vue.createApp(Offer).mount('#randomApp');
console.log("Z");