export class Territory {
    id: number;
    territoryName: String;
    code: String;

    status: {
        situation: String;
        active: Boolean;
        date: Date;
    }

    comments: any[
    ];
    adress: any[
    ];
}