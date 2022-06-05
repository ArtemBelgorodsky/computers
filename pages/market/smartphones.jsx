import {React, useState, useEffect} from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;



const Smartphones =({data}) => {
	const [smartphonesList, setsmartphonesList] = useState([]);

	useEffect(() => {
		setsmartphonesList(data)
	}, [])
	
	console.log(data);
	smartphonesList.map((item, index) => {
		return (
			<Card key ={index}
			style={{
				width: 300,
			}}
			cover={
				<img
					alt="example"
					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				/>
			}
			actions={[
				<SettingOutlined key="setting" />,
				<EditOutlined key="edit" />,
				<EllipsisOutlined key="ellipsis" />,
			]}
		>
			<Meta
				avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
				title={item.name}
				description="This is the description"
			/>
		</Card>
	);
	})
}

export async function getServerSideProps() {
	const res = await fetch(`http://localhost:3000/api/hello`)
	const data = await res.json()

	// Pass data to the page via props
	return {props: {data}}
}

export default Smartphones;