import React from 'react'
import { useForm } from 'react-hook-form';

export default () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
    }
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label>
          name
          <input type="text" id="name" {...register('name', { required: true })} />
          {errors.name && (<div>エラー</div>)}
        </label>
        </div>
        <div>
        <label>
          email
          <input type="email" id="email" {...register('email', { required: true })} />
        </label>
          {errors.email && (<div>エラー</div>)}
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  )
}
