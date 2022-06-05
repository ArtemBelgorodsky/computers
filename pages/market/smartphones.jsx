import {React, useState, useEffect} from 'react';
import { Card, Space} from 'antd';
import { PlusSquareOutlined, EllipsisOutlined, RetweetOutlined } from '@ant-design/icons';
const { Meta } = Card;



const Smartphones =({data}) => {
	const [smartphonesList, setsmartphonesList] = useState([]);

	useEffect(() => {
		setsmartphonesList(data)
	}, [])

	const DeleteCard = (item) => {

		const newArr = smartphonesList.filter((elem) => elem._id !== item._id)
		setsmartphonesList(newArr)
}

	const CreateCard = (item) => {
		setsmartphonesList([...smartphonesList, item]);
	}

	const rendersomeCard = (type, value) => {
		let result;
		switch (type) {
			case 'color': {

				result = value + ' ' + 'color'
				break
			}
			case 'weight': {

				result = value + ' ' + 'weight'
				break
			}
			default: {
				result = value
				break;
			}
		}
		return result
	}

const UpperCase = (itemIndex) => { //ФУНКЦИЯ СЕТ ВОЗВРАЩАЕТ ПРЕДЫДУЩЕЕ ЗНАЧЕНИЕ! 
	setsmartphonesList (prev => {
		const copy = [...prev];
		copy[itemIndex].name = copy[itemIndex].name.toUpperCase()
	return copy
	})}

	return (
		<Space direction={'horizontal'}>
	{smartphonesList.map((item, index) => {
		if (item._type == 'smartphone'){
		return (
			<Card key ={index}
			style={{
				width: 300,
			}}
			cover={
				<img
					alt="example"
					src={item.image}
				/>
			}
			actions={[
				<RetweetOutlined  onClick={() => DeleteCard(item)} key="RetweetOutlined" />,
				<PlusSquareOutlined  onClick={() => CreateCard(item)} key="plusSquareOutlined" />,
				<EllipsisOutlined onClick={() => UpperCase(index)} key="ellipsis" />,
			]}
		>
			<Meta key={item}
				title={item.name}
				description={Object.keys(item.short_desc).map((elem, index) => {
					return (
						<div key={index}>
							{rendersomeCard(elem, item.short_desc[elem])}
						</div>
					)
				})}
			/>
		</Card>
	)}
	})}
	</Space>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`http://localhost:3000/api/hello`)
	const data = await res.json()

	// Pass data to the page via props
	return {props: {data}}
}

export default Smartphones;