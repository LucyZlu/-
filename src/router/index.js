import Vue from 'vue'
import mission1 from '../pages/mission1.vue'
import mission3Float from '../pages/mission3-float.vue'
import mission3Position from '../pages/mission3-position.vue'
import mission4Position1 from '../pages/mission4-position.vue'
import mission4Position2 from '../pages/mission4-position2.vue'
import mission4Table from '../pages/mission4-table.vue'
import mission4Flex from '../pages/mission4-flex.vue'
import mission5Float from '../pages/mission5Float.vue'
import mission5Flex from '../pages/mission5Flex.vue'

export default [
    { path: '/', component: mission1 },
    { path: '/mission3Float', component: mission3Float },
    { path: '/mission3Position', component: mission3Position },
    { path: '/mission4Position', component: mission4Position1 },
    { path: '/mission4Position2', component: mission4Position2 },
    { path: '/mission4Table', component: mission4Table },
    { path: '/mission4Flex', component: mission4Flex },
    { path: '/mission5Float', component: mission5Float },
    { path: '/mission5Flex', component: mission5Flex }

]
