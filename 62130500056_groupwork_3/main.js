    const app = {
        data() {
            return {
                tasks: [{
                        image: './images/food1.jpg',
                        article: 'Steamed crab',
                        like: false
                    },
                    {
                        image: './images/food2.jpg',
                        article: 'Steamed shrimp',
                        like: false
                    },
                    {
                        image: './images/food3.jpg',
                        article: 'Oyster',
                        like: false
                    }
                    
                ],


            }
        },
        methods: {
            togglelike(index) {
                this.tasks[index].like = !this.tasks[index].like
            }
        },
        computed: {
            countUnlike() {
                return this.tasks.filter(t => !t.like).length
            }
        }
    }
    Vue.createApp(app).mount('#app')