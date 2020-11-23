Promise.resolve(10).then((r) => console.log(r));

const woogie = () => console.log("woogie");

const asd = () => woogie();

asd();

woogie();
