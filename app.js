// fonksiyonun başına async eklemek onu direkt Promise yapısında yapar.

// başına function koyunca return'den sonrasını ezmez.
async function hello() {
  return "Hello";
}

const text = hello();
console.log(text);
text.then((response) => console.log(response));

document.querySelector("#btn1").addEventListener("click", async () => {
  const result = await Notification.requestPermission();
  // evet veya hayır bildirimi çıkarır.
  // async olduğu için evet/hayır seçilmeden konsola basmaz.
  console.log(result);
});

document.querySelector("#btn2").addEventListener("click", async () => {
  //fetch Promise yapıda döndürür. Bu yüzden get edildiğinde .json ile format verilir.
  
  const post = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  //   const post = await response.json();
  //   const comments = await fetchComments.json();

  const comments = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
    )
  ).json();
  
  console.log(post, comments);
  // .then = await gibi düşünülebilir.
  // .then((res) => res.json())
  // .then((response) => {
  //   fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${response.id}/comments`
  //   )
  //     .then((res) => res.json())
  //     .then((comments) => console.log(comments));
  // });
});
