import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    }
  ],
})
