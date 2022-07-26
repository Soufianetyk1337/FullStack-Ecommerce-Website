const review = {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'fullname',
            title: 'FullName',
            type: 'string',
        },
        {
            name: 'review',
            title: 'review',
            type: 'string',
        },
        {
            name: 'stars',
            title: 'stars',
            type: 'number',
        },


    ],
};



export default review;