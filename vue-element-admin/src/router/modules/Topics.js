/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/Topics',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Topics',
  meta: {
    title: 'Topics',
    icon: 'chart'
  },
  children: [
    {
      path: 'Vaccine',
      component: () => import('@/views/charts/keyboard'),
      name: 'Vaccine',
      meta: { title: 'Vaccine', noCache: true }
    },
    {
      path: 'Enagement',
      component: () => import('@/views/charts/line'),
      name: 'Enagement',
      meta: { title: 'Enagement', noCache: true }
    },
    {
      path: 'Inflation',
      component: () => import('@/views/charts/mix-chart'),
      name: 'Inflation',
      meta: { title: 'Inflation', noCache: true }
    }
  ]
}

export default chartsRouter
