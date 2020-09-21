async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const response = await fetch(url);
    document.writeln(response.json().name);
  } catch (error) {
    console.log(error);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
