export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const year = new Date().getFullYear();
  return collection.find(it => year - it.age >= 2000 && year - it.age <= 2010).name;
}
