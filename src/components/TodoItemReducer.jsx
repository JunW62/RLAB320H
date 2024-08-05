function todoItemreducer(state, { type, payload }) {
  switch (type) {
    case "add": {
      return [
        {
          id: Date.now(),
          userId: payload.userId,
          title: payload.title,
          completed: payload.completed,
        },
        ...state,
      ];
    }
    case "delete": {
      return state.filter((item) => item.id !== payload.id);
    }
    case "toggle": {
      return state.map((item) =>
        item.id === payload.id ? { ...item, completed: !item.completed } : item
      );
    }
    case "edit": {
      return state.map((item) =>
        item.id === payload.id ? { ...item, title: payload.title } : item
      );
    }
    default: {
      throw Error("Unknown Action: " + type);
    }
  }
}
export default todoItemreducer;
