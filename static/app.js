var $i = document.getElementById.bind(document)
var body = document.getElementsByTagName('body')[0]
var source = $i('source').innerText
var target = $i('content')
var a

target.innerHTML = marked(source)

a = document.querySelectorAll('#content a')
a.forEach(function (el) {
  el.setAttribute('target', '_blank')
})

$i('fontSans').onclick = function () {
  body.className = 'font-sans'
}

$i('fontSerif').onclick = function () {
  body.className = 'font-serif'
}
