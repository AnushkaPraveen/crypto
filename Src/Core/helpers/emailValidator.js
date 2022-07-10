const validEmail = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);

export function emailValidator(email) {
  if (!email) return "Email can't be empty.";
  if (!validEmail.test(email)) return 'Please Enter Valid Email';
}
