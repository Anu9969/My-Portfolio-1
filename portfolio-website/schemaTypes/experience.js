import {defineField, defineType, validation} from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      { name: 'position', type: 'string', title: 'Position' },
      { name: 'company', type: 'string', title: 'Company' },
      { name: 'duration', type: 'string', title: 'Duration' },
      { name: 'image', type: 'image', title: 'Image' },
      {
        name: 'descriptions',
        type: 'array',
        title: 'Descriptions',
        of: [{ type: 'string' }],
      },
    ],
  });
  