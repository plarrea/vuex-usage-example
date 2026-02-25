export default {
  counter(state) {
    // you can also get getters, rootState and rootGetters
    return state.counter;
  },
  finalCounter(state) {
    return state.counter * 3;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    } else if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
