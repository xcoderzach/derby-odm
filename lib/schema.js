module.exports = function(model) {

  function generateDocument(schemaName, properties) {

    function Document(document, callback) {

      this.extractFields(document)

      callback = callback || function() {}
      model.push("posts", document, function() {
        callback()
      })
    }

    Document.prototype.schemaName = schemaName
    Document.prototype.config = properties

    Document.prototype.extractFields = function(document) {
      var validKey
        , newDoc = {}

      for(validKey in this.config.fields) {
        if(this.config.fields.hasOwnProperty(validKey)) {
          newDoc[validKey] = document[validKey]
        }
      }
    }
    return Document
  }

  function Schema(schemaName, describeFunction) {
    var that = this
    schemaName = schemaName
    properties = {fields: {}}

    describeFunction({
      string: function(name) { 
        properties.fields[name] = {}
      }
    })
 
    var Document = generateDocument(schemaName, properties)
   
    return Document
  }

  return Schema
}
