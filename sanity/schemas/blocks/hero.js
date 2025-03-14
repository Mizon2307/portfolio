import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'hero',
	title: 'Hero',
	type: 'object',
	fields: [
		defineField({
			name: 'heading',
			title: 'Heading',
			type: 'string',
		}),
		defineField({
			name: 'copy',
			title: 'Copy',
			type: 'richText',
		}),
		defineField({
			name: 'pedals',
			title: 'Pedals',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'carousel',
			title: 'Carousel',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				hotspot: true,
			},
		}),
	],

	preview: {
		select: {
			heading: 'heading',
		},
		prepare(selection) {
			const { heading } = selection

			return {
				title: heading,
				subtitle: 'Hero',
			}
		},
	},
})
