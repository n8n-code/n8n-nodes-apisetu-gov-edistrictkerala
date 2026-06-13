import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovEdistrictkeralaApi implements ICredentialType {
        name = 'N8nDevApisetuGovEdistrictkeralaApi';

        displayName = 'Apisetu Gov Edistrictkerala API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovEdistrictkerala/apisetu-gov-edistrictkerala.svg', dark: 'file:../nodes/ApisetuGovEdistrictkerala/apisetu-gov-edistrictkerala.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/edistrictkerala/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/edistrictkerala/v3',
                        description: 'The base URL of your Apisetu Gov Edistrictkerala API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
