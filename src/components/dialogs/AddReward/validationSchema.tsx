import * as Yup from 'yup';

const userShema = Yup.object({
  email: Yup.string().required(),
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  image: Yup.string(),
});

export const validationSchema = Yup.object({
  id: Yup.number().required(),
  from: userShema,
  to: userShema.typeError('Please select a person'),
  reward: Yup.number().moreThan(0).required('Reward must be greater than 0'),
  datetime: Yup.string().required(),
  message: Yup.string().required('Please add a message'),
});
