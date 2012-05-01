var expect = require('racer/test/util').expect
  , model = require('racer/test/util/model').mockSocketEcho()[0]
  , SchemaBuilder = require('../lib/schema')

var Schema = SchemaBuilder(model)
  , Post = Schema("Post", function(p) {
      p.string("title")
    })

describe("The schema", function() {
  it("should not allow fields not in schema", function(done) {
    var post = new Post({ eltit: "I'm backwards" }, function(err) {
      if(!err || !err.message.match(/invalid field/i)) {
        done(new Error("should cause error"))
      } else { 
        done()
      }
    })
  })
})
