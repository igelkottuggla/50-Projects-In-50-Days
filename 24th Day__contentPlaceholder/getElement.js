const getElement = (selection) => {
  const element = document.getElementById(selection);
  if (element) return element;
  else {
    throw new Error(
      `Please, check the selection. There's no cuch element ${selection}`
    );
  }
};

export default getElement;
