const arc = require('@architect/functions')
const data = require('@begin/data')

exports.handler = arc.http.async(route)

function form(prayer) {
  return `
  <h2> Daily Prayers </h2>
  <form action="/backend" method="post">
  <input type="text" name="content" value=${JSON.stringify(prayer[0].content) || ''}>
  <button>Save</button>
  </form>
  `
}

async function route(req) {

  let prayer = await data.get({
    table: 'prayers-table'
  })

  return {
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/_static/index.css">
  <link rel="shortcut icon" href="#">
  <title>Praise Cage</title>
</head>
<body>
<h1>Praise Cage</h1>

${form(prayer)}

<script src=/_static/index.js type=module></script>

</body>`
  }
}