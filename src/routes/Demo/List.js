import React, { useEffect } from 'react';
import Form, { Field, List } from 'rc-field-form';
import { Input, Button, notification, Switch  } from 'antd';

const FieldForm = () => {
  useEffect(() => {
    console.log('finish')
  })
  
  return(
    <Form
      onFinish={val => console.log(val)}
      onValuesChange={(changedValues, values) => {
        console.log(changedValues, values)
      }}
    >
      <List name="list">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <Field {...field}>
                  <Input style={{ width: 100 }}/>
                </Field>
              ))}
              <Button onClick={add}>Add</Button>
              <Button onClick={() => remove(0)}>Remove</Button>
              <Button htmlType="submit">提交</Button>
            </div>
          )
        }}
      </List>
    </Form>
  )
}

export default FieldForm;