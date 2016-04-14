var names=[];

for (var i=0; i < 5; i++) {
  names.push(prompt('Insert user name'));
}

var user = prompt('Introduce yourself, stranger!!!')

var broOrNotBro

for (i=0; i < names.length; i++) {
  if (user == names[i]) {
  broOrNotBro = true;
  }
}

if (broOrNotBro) {
  alert('Come in, ' + user + '! You are my Bro!')
}
else {
  alert('Go out, m..f...!!!')
}
