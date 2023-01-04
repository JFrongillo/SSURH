const z = require('zod')

//validates when new user creates an account
const newUserValidation = data => {
  const registerValidationSchema = z.object({
    email: z.string().email('Please Input a valid Salem State University email'),
    password: z.string().min(8, 'Password must be 8 or more characters').trim(),
  });
  
  return registerValidationSchema.safeParse(data)
};

//validate user request when logging in
const userLoginValidation = data => {
  const loginValidationSchema = z.object({
    email: z.string().email('Please Input a valid Salem State University email'),
    password: z.string().min(8, 'Password must be 8 or more characters').trim(),
  });
  return loginValidationSchema.safeParse(data)
};

module.exports.newUserValidation = newUserValidation;
module.exports.userLoginValidation = userLoginValidation;