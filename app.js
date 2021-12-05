const famaly = [

    {
        name        : 'akash',
        relation    : 'me',
        phoneNumber : '01819522713',
        location    : 'manikgonj',

    },

    {
        name        : 'tajel',
        relation    : 'father',
        phoneNumber : '01819522695',
        location    : 'manikgonj',

    },

    {
        name        : 'poly',
        relation    : 'sister',
        phoneNumber : '01819522548',
        location    : 'manikgonj',

    },

    {
        name        : 'rabeka',
        relation    : 'mother',
        phoneNumber : '01819522758',
        location    : 'manikgonj',

    },

    {
        name        : 'ridom',
        relation    : 'brother',
        phoneNumber : '01819522658',
        location    : 'Dhaka',

    },

    {
        name        : 'ahasa',
        relation    : 'sister',
        phoneNumber : '01819522758',
        location    : 'Dhaka',

    },

    {
        name        : 'roksana',
        relation    : 'anti',
        phoneNumber : '01819522756',
        location    : 'Dhaka',

    },

    {
        name        : 'anis',
        relation    : 'me',
        phoneNumber : '01819522713',
        location    : 'Dhaka',

    },

    {
        name        : 'shelem',
        relation    : 'vai',
        phoneNumber : '01819522725',
        location    : 'gjzipur',

    },

    {
        name        : 'Achem',
        relation    : 'brother',
        phoneNumber : '01845759586',
        location    : 'mirpur',

    },
]


famaly.map((data =>{

    console.log(`
    wellcome my famaly 
    `);
    
    console.log(`
    name        : ${data.name}
    relation    : ${data.relation}
    phoneNumber : ${data.phoneNumber}
    location    : ${data.location}
========================================

    `); 
}))