import Vue from 'vue'
import mission1 from '../pages/mission1.vue'
import mission3Float from '../pages/mission3-float.vue'
import mission3Position from '../pages/mission3-position.vue'

export default [
    { path: '/', component: mission1 },
    { path: '/mission3Float', component: mission3Float },
    { path: '/mission3Position', component: mission3Position }
]
