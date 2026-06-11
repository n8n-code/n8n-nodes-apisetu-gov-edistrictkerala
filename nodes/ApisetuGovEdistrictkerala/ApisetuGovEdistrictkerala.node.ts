import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovEdistrictkerala implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Edistrictkerala',
		name: 'N8nDevApisetuGovEdistrictkerala',
		icon: { light: 'file:./apisetu-gov-edistrictkerala.svg', dark: 'file:./apisetu-gov-edistrictkerala.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'EDistrict Kerala portal issues Residence, Income, Caste Certificates.',
		defaults: { name: 'Apisetu Gov Edistrictkerala' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovEdistrictkeralaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
