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
                  buildHookId: '5ec49dd365b5438a431aa847',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pksyua1a',
                  apiId: 'b660b281-46d8-4b56-85b5-f327d4a63720'
                },
                {
                  buildHookId: '5ec49dd3557f7a7f67b286f0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-h3kye5q4',
                  apiId: '8f382a61-7bdc-4f9f-a64d-d159d6bc7475'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikelnorth/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-h3kye5q4.netlify.app', category: 'apps'}
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
