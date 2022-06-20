import {React, useState} from 'react'
import {Input, Table} from 'antd';
import 'antd/dist/antd.css';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
];
const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
	{
		key: '4',
		name: 'Stephan Mur',
		age: 55,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
	{
		key: '5',
		name: 'Sidney Rose',
		age: 12,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

function filtertable() {

	const [filterName, setfilterName] = useState('');
	const [filterAge, setfilterAge] = useState('');
	const [dataBase, setdataBase] = useState(data);

	

	const FilterFnName = (event) => {
		const value = event.target.value;
		setfilterName(value);
		const regEx = new RegExp(value, 'gi');
		setdataBase(data.filter((item) => item.name.match(regEx)));

	};

	const FilterFnAge = (event) => {
		const value = event.target.value;
		setfilterAge(value);
		setdataBase(data.filter((item) => (item.age >= value)))
}

	return (
		<div>
			<Table columns={columns} dataSource={dataBase} />
			<Input 
			placeholder={'Фильтр по имени'}
			value={filterName}
			onChange={FilterFnName}
			type="text"
			/>

			<Input 
			placeholder={'Фильтр по возрасту'}
			value= {filterAge}
			onChange={FilterFnAge}
			type="text"
			/>
		
		</div>
	)
}

export default filtertable