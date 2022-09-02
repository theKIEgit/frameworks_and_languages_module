Assignment 2 - Digital Artifact
------------

Freecycle-Inc have a working prototype implementation of their proposed service.

https://github.com/calaldees/frameworks_and_languages_module

The repository provides:
* An OpenAPI3 Specification for the server service `openapi.yml`
* `example_server` A reference server implementation that runs in a container (you will replace this implementation) 
* `test_server` An automated test container that tests the server implementation's conformance to the OpenAPI3 spec.
  * These test run as GitHub actions as part of CI
* `example_client` A reference client implementation (that uses `example_server` container)
* `test_client` A set of browser tests (cypress), to document the expected client/user flows

### Task
* You are to replace the example server and client implementations with new implementations that pass the server and client automated test suites
* Your solutions must run in containers on CI
* Your solutions can use any programming language or framework as long as the tests pass

### Guidance

* It is not required for your server service to have a persistent data model
  * You can use a data persistence model if desired. There are no extra marks allocated to this
* There is no requirement for any user authentication
* There is no requirement for scale
  * The system will be operating with less than 100 items
* You will be allocated marks for partial solutions
* You are working towards being a professional software engineers. It is expected that you share and discuss your solutions with peers throughout this assignment


### Marks Breakdown



| Assignment | Section | Marks (Total 60) |
|---|--------------------------------|---:|
| 1 | Server tests                   | 21 |
| 1 | Server documentation           |  4 |
| 1 | Client tests                   | 21 |
| 1 | Client documentation           |  4 |
| 1 | Visual framework               | 10 |
|   |                                | 60 |


Server Tests
------------

0 tests == 0 marks

Port open
serves html on root
POST
 returns json
 complete 201
POST
 incomplete 405
GET item
 json
 fields
 404
GET items
 json
 fields
 filter username
DELETE
 200
 404
CORS
  OPTIONS
  items
NEAR
 bonus

16 marks

5 marks for?
Use of framework features (1 mark)
Use of language features (list comprehensions, async etc) (1 mark)
Conciseness (verbose? unneed intermediaries? readable) (1 mark)
File/folder structure (sensible names) (1 mark)


Documentation
README sufficient to explain, launch, test, use  (1 mark)
Comments in code describe/explain functionality (1 mark)
minimum 24+ Commits well worded and technical (1 mark) [automate]
minimum 4x References snippets/tutorial urls inline (1 mark) [automate]
 Disclose your sources - what conversations with other members of the group contributed to this code


Client Tests
------------

0 tests == 0 marks

200 (1 mark)
has Freecycle (1 mark)
has Text input and button (2 mark)
submit + see item (6 marks)
delete + remove (4 marks)

todo: has real image?


Visual framework
----------------

no framework == 0 marks (even if it looks nice)

Navbar 2

styled
 input 2
 buttons 1

item/card 2
Responsive to mobile 3
