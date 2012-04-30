module.exports = function(model) {

  function Document(document, callback) {
    callback = callback || function() {}
    model.push("posts", document, function() {
      callback()
    })
  }

  function Schema(schemaName, describeFunction) {
    var that = this
      , _schemaName = schemaName
      , _properties = {}

    describeFunction({
      string: function(name) { }
    })
    return Document
  }

  return Schema
}
