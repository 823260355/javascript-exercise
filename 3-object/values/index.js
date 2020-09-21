export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return (
    Object.values(source)
      // eslint-disable-next-line radix
      .map(it => Number.parseInt(it))
      .reduce((result, it) => result + it)
  );
}
