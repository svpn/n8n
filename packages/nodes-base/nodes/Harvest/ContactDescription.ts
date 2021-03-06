import { INodeProperties } from "n8n-workflow";

export const contactOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'contact',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get data of a contact',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get data of all contacts',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},

] as INodeProperties[];

export const contactFields = [

/* -------------------------------------------------------------------------- */
/*                                contact:getAll                            */
/* -------------------------------------------------------------------------- */

{
	displayName: 'Return All',
	name: 'returnAll',
	type: 'boolean',
	displayOptions: {
		show: {
			resource: [
				'contact',
			],
			operation: [
				'getAll',
			],
		},
	},
	default: false,
	description: 'Returns a list of your user contacts.',
},
{
	displayName: 'Limit',
	name: 'limit',
	type: 'number',
	displayOptions: {
		show: {
			resource: [
				'contact',
			],
			operation: [
				'getAll',
			],
			returnAll: [
				false,
			],
		},
	},
	typeOptions: {
		minValue: 1,
		maxValue: 100,
	},
	default: 100,
	description: 'How many results to return.',
},
{
	displayName: 'Filters',
	name: 'filters',
	type: 'collection',
	placeholder: 'Add Filter',
	default: {},
	displayOptions: {
		show: {
			resource: [
				'contact',
			],
			operation: [
				'getAll',
			],
		},
	},
	options: [
		{
			displayName: 'Is Active',
			name: 'is_active',
			type: 'boolean',
			default: '',
			description: 'Pass true to only return active clients and false to return inactive clients.',
		},
		{
			displayName: 'Updated Since',
			name: 'updated_since',
			type: 'dateTime',
			default: '',
			description: 'Only return clients that have been updated since the given date and time.',
		}
	]
},

/* -------------------------------------------------------------------------- */
/*                                contact:get                            */
/* -------------------------------------------------------------------------- */
{
	displayName: 'Contact Id',
	name: 'id',
	type: 'string',
	default: '',
	required: true,
	displayOptions: {
		show: {
			operation: [
				'get',
			],
			resource: [
				'contact',
			],
		},
	},
	description: 'The ID of the contact you are retrieving.',
}

] as INodeProperties[];
