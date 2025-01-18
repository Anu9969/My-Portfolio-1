import {defineField, defineType, validation} from 'sanity'

export default defineType({
    name: 'certificates',
    title: 'Certificates',
    type: 'document',
    fields: [
      { name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'icon', type: 'image', title: 'Icon' },
      { name: 'link', type: 'url', title: 'Certificate Link' },
    ],
  });
  