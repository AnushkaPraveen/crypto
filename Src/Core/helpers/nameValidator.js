const validName = new RegExp(/^[a-zA-Z" "\-]+$/);

export function nameValidator(name) {
  if (!name) return "Name can't be empty.";
  if (name.length < 10) return 'Name should have at least 10 characters';
  if (!validName.test(name)) return 'Name only can have a-z, A-Z';
  return '';
}
