## The Three Rules of TDD

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
1. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
1. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Which means the workflow is:

1. Write a failing test. Stop writing the test as soon as it fails.
1. Write the minimal production code required for the test to pass. Stop writing any code once the test passes.
1. Refactor the test code and the production code without altering the functionality. All tests should pass.

## Stack
#### Requirements
- Must be able to tell its size
- Must be able to tell if isEmpty
- Must be able to push an integer
- Must be able to pop last integer pushed

No cheating! Use only a native array of integers.

#### Tests
1. Empty at creation
1. Size zero at creation
1. Size one after single push
1. Size returns to zero after single pop
1. Size increments with multiple pushes
1. Size decrements with multiple pops
1. Same element popped as pushed
1. Elements popped in LIFO order

## Set
#### Requirements
A Set is an UNORDERED collection that contains NO DUPLICATE values.
Methods:

- `add(Int)`
- `contains(Int)`
- `isEmpty()`
- `remove(Int)`
- `size()`

No cheating! Use only a native array of integers.

#### Tests
1. Empty at creation
1. Size zero at creation
1. Size one after single add
1. Size increments with multiple adds
1. Contains for non existing element
1. Contains for existing element
1. Delete non-existing element, size remains unchanged
1. Delete existing element, size decrements
1. Delete element, no longer contains
1. Insert duplicates, size does not increment

## FizzBuzz
#### Requirements
- Returns an array of a given size
- A given size returns an array of strings, counting from 1 to the given size  `1 => ["1"]`, `5 => ["1","2","3","4","5"]`, `10 => ["1","2","3","4","5","6","7","8","9","10"]`
- for multiples of three, return "Fizz” instead of the number `3 => ["1","2","Fizz"]`
- for multiples of five, return "Buzz" `5 => ["1","2","Fizz","4","Buzz"]`
- For numbers which are multiples of both three and five, return "FizzBuzz".

#### Tests
- I don't know... what tests should you write? ;)

#### Stretch Goals (how easy is it to add more requirements?)
- for multiples of seven, print "Bang!"
- for multiples of three and seven, print "FizzBang!"
- for multiples of five and seven, print "BuzzBang!"
- for multiples of three, five, and seven, print "FizzBuzzBang!"

## String Calculator
#### Requirements
- Write a method "add" that, given a delimited string, returns the sum of the numbers in the string.

#### Tests
1. An empty string returns zero `'' => 0`
1. A single number returns the value `'1' => 1`, `'2' => 2`
1. Two numbers, comma delimited, returns the sum `'1,2' => 3`, `'10,20' => 30`
1. Two numbers, newline delimited, returns the sum `'1\n2' => 3`
1. Three numbers, delimited either way, returns the sum `'1\n2,3\n4' => 10`
1. Numbers greater than 1000 are ignored
1. A single char delimiter can be defined on the first line starting with `//` (e.g `//#\n1#2` for a ‘#’ as the delimiter)
1. A multi char delimiter can be defined on the first line starting with `//` (e.g. `//###\n1###2` for ‘###’ as the delimiter)
