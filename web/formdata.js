function onSubmitForm(event) {
  event.preventDefault();
  let customerForm = [];
  let customer = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    request: document.getElementById("request").value,
  };
  customerForm.push(customer);
  console.log(customerForm);
  localStorage.setItem("customerForm", JSON.stringify(customerForm));
  showData();
}

function showData() {
  let jsonData = localStorage.getItem("customerForm");
  let customerForm = JSON.parse(jsonData);
  let html = `<ul>`;
  for (let form of customerForm) {
    html += `
                <li>
                    Name : <b>${form.name}</b></br>
                    Số điện thoại : <b>${form.phone}</b></br>
                    Địa chỉ  : <b>${form.address}</b></br>
                    Yêu cầu khác : <b>${form.request}</b></br>
                </li>
                    `;
  }
  html += `</ul>`;
  console.log(html);
  document.getElementById("app").innerHTML = html;
}

function myFunction() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (filter != "" && txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      document.getElementById("up").style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}
