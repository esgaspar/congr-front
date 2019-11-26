export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;

    batismDate: Date;
    birthDate: Date;
    sexGender: String;
    familyId: String;
    headFamily: Boolean;
    dc50Status: Boolean;
    congregation: {
        congregationId: String;
    };
    status: {
        situation: String;
        active: Boolean;
        date: Date;
    }
    privileges: any[
    ]
    away: any[
    ];
    email: any[
    ];
    phones: any[
    ];
    comments: any[
    ];
    adress: any[
    ];
}