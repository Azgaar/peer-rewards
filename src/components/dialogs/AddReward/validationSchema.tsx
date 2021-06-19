import * as Yup from 'yup';

const userShema = Yup.object({
  email: Yup.string().required(),
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  image: Yup.string(),
});

export const validationSchema = Yup.object({
  to: userShema.typeError('Please select a person'),
  reward: Yup.number().moreThan(0, 'Reward must be greater than 0'),
  message: Yup.string().required('Please add a message'),
});
