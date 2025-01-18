import {defineField, defineType, validation} from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      { name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'technologies', type: 'string', title: 'Technologies' },
      { name: 'github', type: 'url', title: 'GitHub Link' },
      { name: 'link', type: 'url', title: 'Live Link' },
    ],
  });
  