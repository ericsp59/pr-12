import React from 'react';
// import s from './WallPostForm.module.css';
import {reduxForm, Field} from 'redux-form'

const WallPostForm = ({handleSubmit}) => {


return (
  <div>
    <form onSubmit={handleSubmit}>
      <h4>Добавить запись </h4>
      <label>Текст</label>
        <Field name='message' component="input"/>
      <button type='submit'>Сохранить</button>
    </form>
  </div>
)

}

export default reduxForm({
  form: 'WallPostForm'
}) (WallPostForm)