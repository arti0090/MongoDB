db = connect("localhost:27017/films")

// use films

db.film.find({"year":{$gt:2000}},{"title":1,_id:0,"year":1}).sort({"title":1})

cursor = db.film.aggregate(
  [
    {
      $group:{
        _id:'$year',
        total: {$sum:1}
      }
    }
  ]
)

while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}


