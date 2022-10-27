export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '635aa98d25d3944e1a7c0d33',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-yycck59c',
                  apiId: '3760e176-d5c8-4511-9f5f-66b0680c4e0f'
                },
                {
                  buildHookId: '635aa98df589ff52cb67b418',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-drizyd93',
                  apiId: '19f2364b-48ab-45c0-a892-f63720de191e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/irinainina/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-drizyd93.netlify.app', category: 'apps'}
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
