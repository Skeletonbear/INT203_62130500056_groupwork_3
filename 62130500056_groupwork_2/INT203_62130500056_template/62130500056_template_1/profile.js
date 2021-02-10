const app = {
    data() {
        return {
            fname: 'Piyathida',
            lname: 'Thaneewan', 
            city: 'Bangkok',
            image: './images/62130500056.jpg '
        }
    }
}
mountApp = Vue.createApp(app).mount('#app')