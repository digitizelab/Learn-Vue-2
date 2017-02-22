Vue.component('task', {
    template: '<li><slot></slot></li>',

    //In component, data should be a function that returns an object
    data() {
        return {

        };
    }
})

new Vue({
   el: '#root'
});