Vue.component('task-list', {

    template: `
                <div>
                    <task v-for="task in tasks">{{ task.description }}</task>
                </div>
`,

    data() {
        return{
            tasks: [
                { description: 'Go to the store', completed: true },
                { description: 'Finish screencast', completed: false },
                { description: 'Make donation', completed: false },
                { description: 'Clear inbox', completed: false },
                { description: 'Make dinner', completed: false },
                { description: 'Clean room', completed: true },
            ]
        };
    }
});

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