const services = [
    {
        name : 'Napa',
        id : 1,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zkxwwWTjBF9It9YZMGgbxYHcM367v1Xyow&usqp=CAU',
        price : 50
    },
    {
        name : 'peracitemol',
        id : 2,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsO3tn0HIq3czvUCmpf0ACrCYNLonLdOudg&usqp=CAU',
        price : 69
    },
    {
        name : 'Comprid',
        id : 3,
        img : 'data:image/jpeg;base64,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',
        price : 75
    },
    {
        name : 'Cough Syrup',
        id : 4,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPeaocFRvX5U1fJviHPalp4Ud58_KuEJlsA&usqp=CAU',
        price : 40
    },
    {
        name : 'Flexi',
        id : 5,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHd9j1KtXozrzVbRc-TfW1s2Cf0eitDGGTw&usqp=CAU',
        price : 54
    },
    {
        name : 'Sitagil',
        id : 6,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkISfJRLGKf5XN8BE-f5Pnmu4a01U1TbM_A&usqp=CAU',
        price : 68
    },
    {
        name : 'Neotack',
        id : 7,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hXNlMC-Ph0pqZVcjv8iHtLjLmUNG36TZBA&usqp=CAU',
        price : 71
    },
    {
        name : 'Menaril',
        id : 8,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQFKXray61IGQfy11mcA2vjqPHcJ8eB0PlA&usqp=CAU',
        price : 31
    },
    {
        name : 'Domilux',
        id : 9,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3iUbANtV1dUTQ_2PICuc6Oj6VwDlxzaA19g&usqp=CAU',
        price : 50
    },
]
export default services;