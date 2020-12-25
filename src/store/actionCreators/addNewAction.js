const addNewAction = (text, status) => {
  return {
    type: "ADD_NEW",
    text: text,
    status: status
  };
};

export default addNewAction;
