var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch1-syllabus",
  "level": "1",
  "url": "ch1-syllabus.html",
  "type": "Section",
  "number": "1.1",
  "title": "Syllabus",
  "body": " Syllabus  Overview of topics, grading, and schedule.   A simple table    Variable  Variable  Conjunction  Disjunction    T  T  T  T    T  F  F  T    F  T  F  T    F  F  F  F     "
},
{
  "id": "ch1-syllabus-3",
  "level": "2",
  "url": "ch1-syllabus.html#ch1-syllabus-3",
  "type": "Table",
  "number": "1.1.1",
  "title": "A simple table",
  "body": " A simple table    Variable  Variable  Conjunction  Disjunction    T  T  T  T    T  F  F  T    F  T  F  T    F  F  F  F    "
},
{
  "id": "ch1-sec1",
  "level": "1",
  "url": "ch1-sec1.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vectors and Linear Combinations",
  "body": " Vectors and Linear Combinations   This section reviews vectors in , linear combinations, and span.    Basic Definitions  A vector in is an ordered -tuple . Vector addition and scalar multiplication are defined componentwise.    Given vectors and scalars , a linear combination of the vectors is .      With , , and , , the linear combination is .      Span    The span of is .    Geometrically, the span is the smallest subspace containing the vectors.    Linear Independence    Vectors are linearly independent if implies .    A quick test: place the vectors as columns of a matrix . If , then they are independent.      Let , , . Determine whether is linearly independent.      Describe in geometrically.     "
},
{
  "id": "def-linear-combination",
  "level": "2",
  "url": "ch1-sec1.html#def-linear-combination",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Given vectors and scalars , a linear combination of the vectors is .   "
},
{
  "id": "ex-basic-combo",
  "level": "2",
  "url": "ch1-sec1.html#ex-basic-combo",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  With , , and , , the linear combination is .   "
},
{
  "id": "def-span",
  "level": "2",
  "url": "ch1-sec1.html#def-span",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  The span of is .   "
},
{
  "id": "def-lin-indep",
  "level": "2",
  "url": "ch1-sec1.html#def-lin-indep",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  Vectors are linearly independent if implies .   "
},
{
  "id": "ch1-sec1-ex1",
  "level": "2",
  "url": "ch1-sec1.html#ch1-sec1-ex1",
  "type": "Exercise",
  "number": "1.2.4.1",
  "title": "",
  "body": "  Let , , . Determine whether is linearly independent.   "
},
{
  "id": "ch1-sec1-ex2",
  "level": "2",
  "url": "ch1-sec1.html#ch1-sec1-ex2",
  "type": "Exercise",
  "number": "1.2.4.2",
  "title": "",
  "body": "  Describe in geometrically.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
