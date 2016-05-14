
export class GQLConnectionService {	

    private _graphQlServerUrl: string;

	constructor() { 
		this._graphQlServerUrl = "http://localhost:3000";
	}

    getGraphQlServerUrl() { 
        return this._graphQlServerUrl;
    }

}