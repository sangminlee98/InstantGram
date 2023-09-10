import {defineType, defineField, defineArrayMember} from 'sanity'

const post = defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    }),
    defineField({
      title: 'Photo',
      name: 'photo',
      type: 'image',
    }),
    defineField({
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'user'}],
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            defineField({
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{type: 'user'}],
            }),
            defineField({
              title: 'Comment',
              name: 'comment',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'comments.0.comment',
      authorName: 'author.name',
      authorUserName: 'author.username',
      media: 'photo',
    },
    prepare(selection) {
      const {title, authorName, authorUserName, media} = selection
      return {
        title,
        subtitle: `by ${authorName} (${authorUserName})`,
        media,
      }
    },
  },
})

export default post
