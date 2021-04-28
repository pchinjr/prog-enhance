const arc = require('@architect/functions')
const data = require('@begin/data')

exports.handler = arc.http.async(route)

async function route(req) {

  await data.set({
      table: `prayers-table`,
      key: 001,
      content: req.body.content
  })

  return {
    location: '/'
  }
}
