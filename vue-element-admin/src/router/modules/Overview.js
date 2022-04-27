/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const overviewRouter = {
  path: '/Overview',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Overview',
  meta: {
    title: 'Overview',
    icon: 'Overview'
  }
}

export default overviewRouter
