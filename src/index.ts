const woogie = async (): Promise<number> => {
  return 10;
};

const result = async (): Promise<void> => {
  const asd = await woogie();
  console.log(asd);
};

result();
