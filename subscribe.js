// function handleSubmit(event) {
//   event.preventDefault(); // prevent the default form submission
//   const form = event.target;
//   const formData = new FormData(form);
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', form.action);
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // handle successful form submission
//       console.log(xhr.responseText);
//     }
//   };
//   xhr.send(new URLSearchParams(formData).toString());
// }