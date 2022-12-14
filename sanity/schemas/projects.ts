import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'workType',
      title: 'WorkType',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    }),
    defineField({
      name: 'linkToGit',
      title: 'LinkToGit',
      type: 'url',
    }),
  ],
})
