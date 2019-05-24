const Compose = (...func) => (compon) => {
  return func.reduceRight((prevRes, value) => value(prevRes), compon)
};

export { Compose }