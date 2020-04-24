  // by value (primitive)
  var a = 3;
  var b;
  b = a;

  /* here both a and b are 3, but there are two copies in memomry with value 3,
   so if we now change value of a it would not change value of b */
  a = 4;
  console.log(a, b);

  let name = "Khushbu";

  function changeName(name, lastName) {
      name = `__${name}__${lastName}__`;
      console.log(name);
  }

  changeName(name, 'Thakur');

  changeName('Doe');

  changeName(name);

  /* output: 
__Khushbu__Thakur__
__Doe__undefined__
__Khushbu__undefined__


here original variable name does not gets changed as it is passed by value, i.e. a copy is passed.

so name inside function is changed but it does not changes outside value as both variables points to different location
  */

  // ----------------------------------------------------------------------------------------------------------------------

  // by pointer - reference (non- primitive)
  var c = {
      someVal: 1
  };

  var d;

  d = c;

  console.log('Before:', c, d);

  /* Output: Before: { someVal: 1 } { someVal: 1 } */

  /* whereas here both c and d are pointing to same address in memory. 
  so if we now change some value inside object of c (mutate c) it would change value of d as well
  
  */

  c.someVal = 5; // mutate

  console.log('After:', c, d);
  /* Output: After: { someVal: 5 } { someVal: 5 } */

  //   passing as params

  function changeVal(obj) {
      obj.someVal = 'Hello changed'; // mutate
  };

  changeVal(c);

  console.log('After more:', c, d);

  /* Output: After more: { someVal: 'Hello changed' } { someVal: 'Hello changed' } */

  // --------------------------------------------- Special case in reference -------------------------------------------------------

  var firstLang = {
      language: "English"
  };

  var globalLang = firstLang;

  console.log('Before:', firstLang, globalLang);

  /*output: Before: { language: 'English' } { language: 'English' }*/

  firstLang = {
      language: 'Hindi'
  };

  console.log('After:', firstLang, globalLang);

  /*output: After: { language: 'Hindi' } { language: 'English' } */

  /* equals operator sets up new space in memory space (new address)
  so here = saw that second parameter is not an object that already exists, it sets up new memory space for it.

  in earlier case when we assigned globalLang = firstLang.

  it saw that second paramter firstLang already exits in memory so it assigns same space to globalLang
  */

  // ----------------------------------------------------------------------------------------------------------------------

  let e = {
      val: 3
  };


  let f;

  f = {
      ...e
  };

  console.log('Before:', e, f);

  e.val = 5;

  console.log('After:', e, f);