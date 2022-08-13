const url = "https://jsonplaceholder.typicode.com/users";
const api = fetch(url);
api.then((data) => data.json()).then((data) => users(data));

const users = (data) => {
  console.log(data);
  let body = ``;
  data.forEach((date) => {
    return (body += `
    <tr class="user">
        <td>${date.name}</td>
        <td>${date.id}</td>
        <td>@${date.email}</td>
        <td>${date.phone}</td>
        <td>${date.address.city}</td>
        <td>${date.company.name}</td>
    </tr>
            `);
  });
  document.getElementById("user").innerHTML=body
};
