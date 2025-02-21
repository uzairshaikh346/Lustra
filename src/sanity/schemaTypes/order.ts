// schemas/order.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    defineField({
      name: 'user',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'address', type: 'string', title: 'Address' },
        { name: 'contactNumber', type: 'string', title: 'Contact Number' },
        { name: 'email', type: 'string', title: 'Email' }
      ]
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
      title: 'Products'
    }),
    defineField({
      name: 'quantities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productId', type: 'string', title: 'Product ID' },
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'price', type: 'number', title: 'Price' },
            { name: 'quantity', type: 'number', title: 'Quantity' }
          ]
        }
      ],
      title: 'Quantities'
    }),
    defineField({ name: 'paymentMethod', type: 'string', title: 'Payment Method' }),
    defineField({ name: 'orderDate', type: 'datetime', title: 'Order Date' })
  ]
});
