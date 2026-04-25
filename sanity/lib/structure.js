import { Iframe } from 'sanity-plugin-iframe-pane'

export const structure = (S, context) => {
  const baseUrl = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
    ? window.location.origin
    : 'http://localhost:3000';

  return S.list()
    .title('Content')
    .items([
      // Service documents
      S.listItem()
        .title('Services')
        .child(
          S.documentTypeList('service')
            .title('Services')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('service')
                .views([
                  S.view.form(),
                  S.view
                    .component(Iframe)
                    .options({
                      url: (doc) => {
                        const slug = doc?.slug?.current
                        if (!slug) return baseUrl
                        return `${baseUrl}/service/${slug}`
                      },
                      reload: {
                        button: true,
                      },
                    })
                    .title('Preview'),
                ])
            )
        ),
      // Home page singleton
      S.listItem()
        .title('Home Page')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
            .views([
              S.view.form(),
              S.view
                .component(Iframe)
                .options({
                  url: baseUrl,
                  reload: {
                    button: true,
                  },
                })
                .title('Preview'),
            ])
        ),
      // Settings singleton
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
    ])
}
