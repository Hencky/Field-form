import React, { useEffect } from 'react';
import Form, { Field } from 'rc-field-form';
import { Input, Button, notification, Switch  } from 'antd';

const FieldForm = () => {
  useEffect(() => {
    console.log('finish')
  })
  
  return(
    <Form
      onFinish={val => console.log(val)}
      initialValues={{
        age: true,
      }}
    >
      <Field name="user">
        <Input placeholder="user" />
      </Field>  
      <Field name="pwd">
        <Input placeholder="password" type="password" />
      </Field>
      <Field
        name="age"
        dependencies={['user']}
        valuePropName="checked"
      >
        {(control, meta, form) => {
          if (form.getFieldValue('user') === 'Hencky') {
            return (
              <Input {...control} placeholder="age" />
            )
          }
          return (
            <Switch {...control} />
          )
        }}
      </Field>
      <Field name="phone">
        <Input />
      </Field>
      <div></div>
      <Button htmlType="submit" type="primary">Button</Button>
    </Form>
  )
}

export default FieldForm;