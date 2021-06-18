export const getInitials = (firstname: string, lastname: string): string => {
  if (firstname?.length && lastname?.length) return `${firstname[0]} ${lastname[0]}`.toUpperCase();
  if (firstname?.length) return firstname.slice(0, 2);
  if (lastname?.length) return lastname.slice(0, 2);
  return '';
};
