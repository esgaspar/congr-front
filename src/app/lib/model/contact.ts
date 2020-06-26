export class Contact {

    contactname: String;
    firstName: String;
    lastName: String;
    sexGender: String;
    familyId: String;
    headFamily: Boolean;
    age: Number;
    lifeCycle: String;
    territory: String;
    visit: [
        {
            status: String;
            schedule: String;
            type: String;
            comments: String;
            publications: String;
            responserUser: String;
            nextVisit: {
                date: Date;
                publication: String
            }
            ;
            partnerUser: [{ type: String }]
        }];

    roles: [{
        name: String;
        level: String;
    }];
    congregation: { congregationId: String };
    status: {
        situation: String;
        active: Boolean;
        date: Date
    }
        ;
    away: [{
        to: Date;
        from: Date;
    }
    ];
    email: [{
        email: String;
        preference: Boolean;
    }
    ];
    phones: [{
        ddd: Number;
        phone: Number;
        preference: Boolean;
    }];
    comments: [{
        type: String;
        comment: String;
        date: Date;
    }];
    adress: [{
        country: String;
        state: String;
        city: String;
        code: String;
        street: String;
        number: String;
        neighborhood: String;
        complement: String
    }
    ];
    created_date: Date
}
