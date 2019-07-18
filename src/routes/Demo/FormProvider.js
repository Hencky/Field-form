import React, { useEffect } from 'react';
import Form, { Field, List, FormProvider } from 'rc-field-form';
import { Input, Button, notification, Switch  } from 'antd';

const FieldFormA = () => {
  useEffect(() => {
    console.log('finish')
  })
  
  return(
    <Form name="formA">
      <Field name="userA">
        <Input />
      </Field>
      <Button htmlType="submit">Submit</Button>
    </Form>
  )
}

const FieldFormB = () => {
  useEffect(() => {
    console.log('finish')
  })
  
  return(
    <Form name="formB">
      <Field name="userB">
        <Input />
      </Field>
      <Button htmlType="submit">Submit</Button>
    </Form>
  )
}

const FieldForm = () => {
  return (
    <FormProvider
      onFormChange={(name, { changedFields, forms }) => {
        console.log('change from:', name, changedFields, forms);
        if (name === 'first') {
          forms.second.setFields(changedFields);
        }
      }}
      onFormFinish={(name, { values, forms }) => {
        console.log('finish from:', name, values, forms);
        if (name === 'second') {
          forms.first.setFieldsValue(values);
        }
      }}
    >
      <FieldFormA name="A" />
      <FieldFormB name="B" />
    </FormProvider>
  );
}

export default FieldForm;