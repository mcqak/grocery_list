const changeActiveStatusAction = (id) => {
  return {
    type: "CHANGE_ACTIVE_STATUS",
    id: id,
  };
};

export default changeActiveStatusAction;
