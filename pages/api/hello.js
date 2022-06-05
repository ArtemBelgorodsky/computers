// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const computersArray = [
    {
        name: 'Aser',
        cost: '1000P',
        short_desc: {
            memory: '8gb',
            video: '2gb',
            color:'red'
        },
        image: 'https://media.istockphoto.com/vectors/desktop-computer-vector-id862739260',
        _id: '1',
				_type: 'computer'
    },
    {
        name: 'Gigabyte',
        cost: '1050P',
        short_desc: {
            memory: '16gb',
            video: '4gb',
            weight:'3kg'
        },
        image:'https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8.fit_lim.v1583853669.jpg',
        _id: '2',
				_type: 'computer'
    },
    {
        name: 'MSI',
        cost: '4050P',
        short_desc: {
            memory: '32gb',
            video: '16gb',
            size:'100cm'
        },
        image: 'https://www.freecodecamp.org/news/content/images/2021/11/niclas-illg-wzVQp_NRIHg-unsplash.jpg',
        _id: '3',
				_type: 'computer'
    },
		{
			name: 'Oppo',
			cost: '10000P',
			camera: '60Mpx',
			short_desc: {
				color: 'black',
				weight: '200g'
			},
			image: 'https://static.eldorado.ru/photos/71/715/685/82/new_71568582_l_1601907909.jpeg/resize/400x300/',
			_id: '4',
			_type: 'smartphone'
	},
	{
			name: 'Xiaomi',
			cost: '15000',
			camera: '70Mpx',
			short_desc: {
				color: 'red',
				weight: '300g'
			},
			image:'https://mishock.ru/image/cache/catalog/redmi9a/Xiaomi-Redmi-9A-Green-720x720.jpg',
			_id: '5',
			_type: 'smartphone'
	},
	{
			name: 'Apple',
			cost: '60000P',
			camera: '80Mpx',
			short_desc: {
				color: 'gold',
				weight: '100g'
			},
			image: 'https://c.dns-shop.ru/thumb/st1/fit/760/600/7a19dfabcefeda682346c3202bb58248/q93_1fd02601a9a9d3eced8738b856b3a7b5d09e92a19e55636ab13b01db082919eb.jpg',
			_id: '6',
			_type: 'smartphone'
	},
]

export default function handler(req, res) {
	res.status(200).json(computersArray)
};


