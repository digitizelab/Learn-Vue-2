Vue.component('tabs', {
    template: `
               <div>
                <div class="tabs">
                    <ul>
                        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                            <a :href="tab.href" @click="selectTab(tab)"> {{ tab.name }}</a></li>
                    </ul>
                </div>
                <div class="tabs-details">
                    <slot></slot>
                </div>
               </div>
`,
    data() {
        return {
            tabs: [],
        }
    },

    //When the component is created, get the children and set to tabs
    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab){
            //Filters through all the tabs and set the update the isActive property
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },

    mounted() {
        console.log(this.$children);
    }
});

Vue.component('tab', {

    //Tab Titles
    template: `
            <div v-show="isActive"><slot></slot></div>`,

    //Get the name and make it required
    props: {
        name: {required: true},
        selected: {default: false},
    },

    data() {
        return {
            isActive: false
        }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#root',

});