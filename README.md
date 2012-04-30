derby-odm
=========

  Object Document Mapper (ODM) built for use with derby and racer.

Schemas
-------

  Schemas define the structure of your documents.  It describes the type your
data is allowed to take.
 
```javascript
require("derby-odm/schema")(racer)

Schema("Post", function(p) {
  p.string('title')
  p.string('content')
  p.integer('votes')
  p.date('createdAt')
})

var user = User({ name: "Zach" })
user.save()
// makes this user available as _currentUser in your model

var post = Post({ title: "Imma title"
                , content: "first!"
                , votes: 1337
                , createdAt: new Date
                , author: user })

post.save()

var posts = Post.find({ votes: { $gt: 10 }, title: "post" })
var posts = Post.where("votes").gt(10).and('title').equals("post")
```

> ### Schema` ( collectionName, describeFunction(model) )`
> 
> **collectionName:**  The name of the collection the schema describes.
>
> **context:** A function that allows you to describe the properties of the schema


  The Schema function creates a new schema which defines a 
collection of documents with the name `collectionName`. 


```javascript
Schema("Post", function(p) {
  p.string('title')
})
```
```coffeescript

Schema "Post", (p) ->
  p.string 'title'
``` 

