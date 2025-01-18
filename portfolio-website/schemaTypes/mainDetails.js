import {defineField, defineType, validation} from 'sanity'

export default defineType({
    name: 'mainDetails',
    title: 'Main Details',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Name', validation: Rule => Rule.required() },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'role', type: 'string', title: 'Role' },
      { name: 'photo', type: 'image', title: 'Photo' },
      { name: 'email', type: 'string', title: 'Email', validation: Rule => Rule.required().email() },
    ],
  });
  