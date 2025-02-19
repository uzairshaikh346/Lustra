import { Rule } from 'sanity'; 

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().min(5).max(100),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: Rule) => Rule.required().min(20).max(1000),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: Rule) => Rule.required().min(0),
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: (Rule: Rule) => Rule.required().min(0),
      },
    ],
  };