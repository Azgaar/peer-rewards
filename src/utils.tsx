export const getInitials = (firstname: string, lastname: string): string => {
  if (firstname?.length && lastname?.length) return `${firstname[0]} ${lastname[0]}`.toUpperCase();
  if (firstname?.length) return firstname.slice(0, 2);
  if (lastname?.length) return lastname.slice(0, 2);
  return '';
};

export const fetchJSON = (url: string, callback: (json: any) => void) => {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error('Network error ' + res.status);
      return res.json();
    })
    .then((json) => callback(json))
    .catch((err) => console.log(err));
};
