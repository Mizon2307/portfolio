import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'highlights',
	title: 'Highlights',
	type: 'object',
	fields: [
		defineField({
			name: 'client',
			title: 'Client',
			type: 'string',
		}),
		defineField({
			name: 'tagline',
			title: 'Tagline',
			type: 'string',
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'string',
		}),
		defineField({
			name: 'stack',
			title: 'Stack',
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
			name: 'caption',
			title: 'Caption',
			type: 'string',
		}),
	],

	preview: {
		select: {
			client: 'client',
		},
		prepare(selection) {
			const { client } = selection

			return {
				title: client,
				subtitle: 'Highlights',
			}
		},
	},
})
