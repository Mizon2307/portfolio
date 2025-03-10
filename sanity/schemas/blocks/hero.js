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
			name: 'carousel',
			title: 'Carousel',
			type: 'document',
			fields: [
				{
					name: 'images',
					title: 'Images',
					type: 'array',
					of: [
						{
							type: 'image',
							options: {
								hotspot: true,
							},
						},
					],
				},
			],
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
