const linkRef = require('main.css').default

console.log('start test code')

const testResultNodes = document.getElementsByTagName('p')

testResultNodes[0].innerText = linkRef.href
