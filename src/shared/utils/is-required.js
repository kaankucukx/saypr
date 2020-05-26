export const isRequired = (message) => (value) => (!!value ? undefined : message);
