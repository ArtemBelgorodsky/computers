import {React, useState, useEffect} from 'react';
import { Divider, List, Typography } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import {useRouter} from 'next/router'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

  

function filterlist() {
	const router = useRouter();
	const [form] = Form.useForm();
	const [filterQuery, setFilterQuery] = useState(data);
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		setRendered(true);
		form.setFieldsValue({
			...queryToObject()
		});
	}, [router.query])
	



	
	const onFinish = (values) => {
    console.log('Success:', values);
		const regEx = new RegExp(values.simple, 'gi');
		setFilterQuery(filterQuery.filter((string) => string.match(regEx)));
		const stringified = queryString.stringify(values);//object to query
		console.log(stringified);
		router.push({
			query: stringified,
	});
  };

	const queryToObject = () => {
		const parse = queryString.parse(window.location.search);
		return parse;
	}

	const onValuesChange =(values) => {
		if (values.simple.length === 0){
			setFilterQuery(data);
		} 
	}

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


	const queryString = require('query-string');

	return (
		<>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={filterQuery}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark></Typography.Text>{item}
        </List.Item>
      )}
    />

{ rendered && <Form
			form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
				...queryToObject()
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
			onValuesChange={onValuesChange}
    >
      <Form.Item
        label="Введите начало предложения"
        name="simple"
        rules={[
          {
            required: false,
            message: 'Пожалйуста, введите начало предложения',
          },
        ]}
      >
        <Input 
				placeholder="Введите начало предложения"></Input>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
				<Button 
				type="primary"
				onClick={() => {
					setFilterQuery(data);
				}}
				>
          Сбросить фильтр
        </Button>
				<Button 
				type="primary"
				onClick={() => {
					queryToObject();
				}}
				>
          to Object
        </Button>
      </Form.Item>
    </Form>}

  </>
);
}

export default filterlist