const banner = {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
        },

        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
        {
            name: 'heading_title',
            title: 'Heading_title',
            type: 'string',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'action',
            title: 'Action',
            type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'product',
                maxLength: 96,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 96)
            }
        },
    ],
};



export default banner;