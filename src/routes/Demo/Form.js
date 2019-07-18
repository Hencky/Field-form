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
        user: 'Hencky',
        psd: '123456',
      }}
      onValuesChange={(changedValues, values) => {
        console.log(changedValues, values)
      }}
    >
      {(values, form) => {
        return (
          <>
            <div>{JSON.stringify(values)}</div>
            <Field name="user">
              <Input />
            </Field>
            {values.user === 'Hencky' && (
              <Field name="psd" dependencies={['user']} >
                <Input />
              </Field>
            )}
            <div></div>
            <Button htmlType="submit" type="primary">Button</Button>
          </>
        )
      }}
    </Form>
  )
}

export default FieldForm;