import {defineField, defineType, validation} from 'sanity'

export default defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
      { name: 'school', type: 'string', title: 'School', validation: Rule => Rule.required() },
      { name: 'degree', type: 'string', title: 'Degree' },
      { name: 'duration', type: 'string', title: 'Duration' },
      { name: 'image', type: 'image', title: 'Image' },
    ],
  });
  