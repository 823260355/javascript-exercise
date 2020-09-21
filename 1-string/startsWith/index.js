export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const result = collection.filter(it => it.startsWith('粤A')).length;
  return result;
}
