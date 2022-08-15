const about = {
    name: 'about',
    title: 'About',
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
            name: 'discount',
            title: 'Discount',
            type: 'number',
        },
        {
            name: 'section',
            title: 'Section',
            type: 'string',
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
        },

        {
            name: 'action',
            title: 'Action',
            type: 'string',
        },
        {
            name: 'description_1',
            title: 'Description_1',
            type: 'string',
        },
        {
            name: 'description_2',
            title: 'Description_2',
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



export default about;