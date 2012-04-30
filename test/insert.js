var expect = require('racer/test/util').expect
  , model = require('racer/test/util/model').mockSocketEcho()[0]
  , SchemaBuilder = require('../lib/schema')

var Schema = SchemaBuilder(model)
  , Post = Schema("Post", function(p) {
      p.string("title")
    })

describe("Inserting a document", function() {
  it("should save the document", function(done) {
    var post = new Post({ title: "w00t Hey" }, function() {
      expect(model.get("posts.0")).specEql({ title: "w00t Hey" })
      done()
    })
  })
})
