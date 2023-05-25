import { DashboardOne, DocDetail, ImageFiles } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/admin',
    component: () => import('@/layouts/admin/index.vue'),
    meta: { auth: true, menu: { title: 'Dashboard', icon: DashboardOne, order: 100 } },
    children: [
      {
        name: 'admin',
        path: '',
        component: () => import('@/views/admin/index.vue'),
        meta: { title: '工作台', menu: { title: '工作台' } },
      },
      {
        name: 'admin.soft',
        path: 'soft',
        component: () => import('@/views/soft/admin.vue'),
        meta: { title: '软件管理', menu: { title: '软件管理' } },
      },
      {
        name: 'soft.create',
        path: 'soft/create',
        component: () => import('@/views/soft/form.vue'),
        meta: { title: '软件发布' },
      },
      {
        name: 'soft.update',
        path: 'soft/update/:id',
        component: () => import('@/views/soft/form.vue'),
        meta: { title: '软件修改' },
      },
    ],
  },
  // {
  //   path: '/admin/editor',
  //   component: () => import('@/layouts/admin/index.vue'),
  //   meta: { auth: true, menu: { title: '编辑器', icon: DocDetail } },
  //   children: [
  //     {
  //       name: 'wangEditor',
  //       path: '',
  //       component: () => import('@/views/admin/wangeditor.vue'),
  //       meta: { title: '富文本编辑器', menu: { title: '富文本编辑器' } },
  //     },
  //     {
  //       name: 'markdown',
  //       path: 'markdown',
  //       component: () => import('@/views/admin/markdown.vue'),
  //       meta: { title: 'Markdown', menu: { title: 'Markdown' } },
  //     },
  //   ],
  // },
  // {
  //   path: '/admin/upload',
  //   component: () => import('@/layouts/admin/index.vue'),
  //   meta: {
  //     auth: true,
  //     menu: { title: '文件上传', icon: ImageFiles },
  //   },
  //   children: [
  //     {
  //       name: 'upload.singleImage',
  //       path: 'single_image',
  //       component: () => import('@/views/admin/singleImage.vue'),
  //       meta: { title: '图片上传', menu: { title: '图片上传' } },
  //     },
  //   ],
  // },
] as RouteRecordRaw[]
