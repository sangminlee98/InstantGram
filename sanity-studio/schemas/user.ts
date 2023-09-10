import {defineType, defineField, defineArrayMember} from 'sanity'

const user = defineType({
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    defineField({
      title: 'Username',
      name: 'username',
      type: 'string',
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'string',
    }),
    defineField({
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [defineArrayMember({type: 'user'})],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: 'Follower',
      name: 'follower',
      type: 'array',
      of: [defineArrayMember({type: 'user'})],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'post'}],
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
})

export default user
