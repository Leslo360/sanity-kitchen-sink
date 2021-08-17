export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611beb019fa1e30e418c069a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ary4x7s6',
                  apiId: '6d4c71c9-b8a4-4d44-aaa5-39552a4c57ab'
                },
                {
                  buildHookId: '611beb0113d1610e6518563b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-cdjbgkxn',
                  apiId: 'e308a6c9-e34a-4ac5-a6a4-8f3a806fd8bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Leslo360/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-cdjbgkxn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
