nth </br>
Gets the element at index n of array. If n is negative, the nth element from the end is returned.
    
Example: </br>
      var array = ['a', 'b', 'c', 'd'];
      </br>
      _.nth(array, 1);
      // ➜ 'b'
      </br>
      _.nth(array, -2);
      // ➜ 'c'; </br>

tail </br>
Gets all but the first element of array. </br>

Example: </br>
      _.tail([1, 2, 3]);</br>
      // ➜ [2, 3] </br>

head </br>
Gets the first element of array. </br>

Example: </br> 
      _.head([1, 2, 3]); </br>
      // ➜ 1 </br>
      
      _.head([]); </br>
      // ➜ undefined </br>

chunk </br>
Creates an array of elements split into groups the length of size. If array can’t be split evenly, the final chunk will be the remaining elements.
</br> 

Example: </br>
      _.chunk(['a', 'b', 'c', 'd'], 2);</br>
      // ➜ [['a', 'b'], ['c', 'd']]  </br>
      
      _.chunk(['a', 'b', 'c', 'd'], 3); </br>
      // ➜ [['a', 'b', 'c'], ['d']] </br>

remove </br>
Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array). 
      </br>
      
Example: </br> 
      var array = [1, 2, 3, 4]; </br>
      var evens = _.remove(array, function(n) { </br>
        return n % 2 == 0; </br>
      }); </br>
      
      console.log(array); </br>
      // ➜ [1, 3] </br>
      
      console.log(evens); </br>
      // ➜ [2, 4] </br>
      
pull </br>
Removes all given values from array using SameValueZero for equality comparisons.  
</br> 

Example: </br>
      var array = ['a', 'b', 'c', 'a', 'b', 'c']; </br>
      
      _.pull(array, 'a', 'c'); </br>
      console.log(array); </br>
      // ➜ ['b', 'b'] </br>

take </br>
Creates a slice of array with n elements taken from the beginning. </br>

Example: </br>
      _.take([1, 2, 3]); </br>
      // ➜ [1] </br>
      
      _.take([1, 2, 3], 2); </br>
      // ➜ [1, 2] </br>
      
      _.take([1, 2, 3], 5); </br>
      // ➜ [1, 2, 3] </br>
      
      _.take([1, 2, 3], 0); </br>
      // ➜ [] </br>
      
zip </br>
Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on. </br>

Example: </br>

      _.zip(['a', 'b'], [1, 2], [true, false]); </br>
      // ➜ [['a', 1, true], ['b', 2, false]] </br>

parseInt </br>
Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used. </br>

Example: </br>

      _.parseInt('08'); </br>
      // ➜ 8 </br>
      
intersection </br> 
Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order of result values is determined by the order they occur in the first array. </br>

Example: </br>

      _.intersection([2, 1], [2, 3]);</br>
      // ➜ [2] </br> 
reverse </br>
Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.  </br>

Example: </br> 

      _.reverse(array); </br>
      // ➜ [3, 2, 1] </br>
      
      console.log(array); </br>
      // ➜ [3, 2, 1] </br>

indexOf </br>
Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it’s used as the offset from the end of array. </br>

Example: </br>

      _.indexOf([1, 2, 1, 2], 2); </br>
      // ➜ 1 </br> 
      
      // Search from the `fromIndex`. </br>
      _.indexOf([1, 2, 1, 2], 2, 2); </br>
      // ➜ 3 </br>

toUpper </br>
Converts string, as a whole, to upper case. </br> 

Example: </br> 
      _.toUpper('--foo-bar--'); </br>
      // ➜ '--FOO-BAR--' </br> 
      
      _.toUpper('fooBar'); </br> 
      // ➜ 'FOOBAR' </br> 
      
toLower </br>
Converts string, as a whole, to lower case. </br> 

Example: </br> 

      _.toLower('--Foo-Bar--'); </br>
      // ➜ '--foo-bar--' </br> 
      
      _.toLower('fooBar'); </br>
      // ➜ 'foobar' </br> 
      
difference </br>
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order of result values is determined by the order they occur in the first array.  </br>

Example: </br>

      _.difference([2, 1], [2, 3]); </br>
      // ➜ [1] </br>

map </br> 
Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection). </br>

Example: </br>
      
      function square(n) { </br>
        return n * n; </br>
      } </br> 
      
      _.map([4, 8], square);</br>
      // ➜ [16, 64]</br>
      
      _.map({ 'a': 4, 'b': 8 }, square);</br>
      // ➜ [16, 64] (iteration order is not guaranteed)</br>
      
      var users = [</br>
        { 'user': 'barney' },</br>
        { 'user': 'fred' }</br>
      ];</br>
      
      // The `_.property` iteratee shorthand.</br>
      _.map(users, 'user');</br>
      // ➜ ['barney', 'fred']</br>
      
includes </br>
Checks if value is in collection. If collection is a string, it’s checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it’s used as the offset from the end of collection. </br>

Example: </br>

      _.includes([1, 2, 3], 1); </br>
      // ➜ true</br>
      
      _.includes([1, 2, 3], 1, 2);</br>
      // ➜ false</br>
      
      _.includes({ 'a': 1, 'b': 2 }, 1);</br>
      // ➜ true</br>
      
      _.includes('abcd', 'bc');</br>
      // ➜ true</br>
      
toString </br>
Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved. </br>

Example: </br>

      _.toString(null); </br>
      // ➜ ''</br>
      
      _.toString(-0);</br>
      // ➜ '-0'</br>
      
      _.toString([1, 2, 3]);</br>
      // ➜ '1,2,3'</br>
      
forEach </br>
Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.  </br> 

Example: </br>
      
      _([1, 2]).forEach(function(value) { </br>
        console.log(value);</br>
      });</br>
      // ➜ Logs `1` then `2`. </br>
      
      _.forEach({ 'a': 1, 'b': 2 }, function(value, key) { </br>
        console.log(key); </br>
      });
      // ➜ Logs 'a' then 'b' (iteration order is not guaranteed). </br>
      
lte </br>
Checks if value is less than or equal to other. </br>

Example: </br>

      _.lte(1, 3); </br>
      // ➜ true</br>
      
      _.lte(3, 3);</br>
      // ➜ true</br>
      
      _.lte(3, 1);</br>
      // ➜ false</br>
initial </br> 
Gets all but the last element of array. </br> 

Example: </br>

      _.initial([1, 2, 3]); </br>
      // ➜ [1, 2] </br>

size </br>
Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.</br>

Example: </br>

      _.size([1, 2, 3]); </br>
      // ➜ 3 </br> 
      
      _.size({ 'a': 1, 'b': 2 });</br>
      // ➜ 2</br>
      
      _.size('pebbles');</br>
      // ➜ 7</br>
      
toArray </br> 
Converts value to an array. </br>

Example: </br>

      _.toArray({ 'a': 1, 'b': 2 }); </br>
      // ➜ [1, 2] </br>
      
      _.toArray('abc'); </br>
      // ➜ ['a', 'b', 'c'] </br>
      
      _.toArray(1); </br>
      // ➜ [] </br> 
      
      _.toArray(null); </br>
      // ➜ [] </br>

isArray </br> 
Checks if value is classified as an Array object. </br>

Example: </br>

      _.isArray([1, 2, 3]); </br>
      // ➜ true</br>
      
      _.isArray(document.body.children);</br>
      // ➜ false</br>
      
      _.isArray('abc');</br>
      // ➜ false</br>
      
      _.isArray(_.noop);</br>
      // ➜ false</br>
      
filter </br> 
Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).  </br>

Example: </br>

      var users = [ </br>
        { 'user': 'barney', 'age': 36, 'active': true },</br>
        { 'user': 'fred',   'age': 40, 'active': false }</br>
      ];</br>
      
      _.filter(users, function(o) { return !o.active; });</br>
      // ➜ objects for ['fred']</br>
      
      // The `_.matches` iteratee shorthand.</br>
      _.filter(users, { 'age': 36, 'active': true });</br>
      // ➜ objects for ['barney']</br>
      
      // The `_.matchesProperty` iteratee shorthand.</br>
      _.filter(users, ['active', false]);</br>
      // ➜ objects for ['fred']</br>
      
      // The `_.property` iteratee shorthand.</br>
      _.filter(users, 'active');</br>
      // ➜ objects for ['barney']</br>

concat </br> 
Creates a new array concatenating array with any additional arrays and/or values. </br>

Example: </br> 
      var array = [1];</br> 
      var other = _.concat(array, 2, [3], [[4]]);</br> 
      
      console.log(other);</br> 
      // ➜ [1, 2, 3, [4]]</br> 
      
      console.log(array);</br> 
      // ➜ [1]</br> 




