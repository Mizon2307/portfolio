import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contact',
	title: 'Contact',
	type: 'object',
	fields: [
		defineField({
			name: 'form',
			title: 'Form',
			type: 'string',
		}),
	],

	preview: {
		select: {
			form: 'form',
		},
		prepare(selection) {
			const { form } = selection

			return {
				title: form,
				subtitle: 'Form',
			}
		},
	},
})
