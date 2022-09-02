Assignment - Digital Artifact
=============================

Overview
--------

Create a digital artifact. This will be 60% of this module.

* You will demonstrate you can work towards a formal spec and use automated tests to produce a working system to a business specification
* You will use 3 frameworks for 3 separate problem domains


| Assignment | Section | Marks (Total 60) |
|---|--------------------------------|---:|
| 1 | Server tests                   | 16 |
| 1 | Server framework (independent) |  5 |
| 1 | Server documentation           |  4 |
| 1 | Client tests                   | 16 |
| 1 | Client framework (independent) |  5 |
| 1 | Client documentation           |  4 |
| 1 | Visual framework               |  6 |
| 1 | Visual framework (independent) |  4 |
|   |                                | 60 |
1 mark = 1% of module


Scenario
--------

Freecycle-Inc have a working prototype implementation of their proposed service.

https://github.com/calaldees/frameworks_and_languages_module

The repository provides:
* An OpenAPI3 Specification for the server service `openapi.yml`
* Complete working reference implementations
  * This `example_` reference implementations were built with NO frameworks to allow you to critique/understand why frameworks are used (see Assignment Technical Report)
  * `example_server` A complete reference server implementation that runs in a container (you re-create this functionality) 
  * `example_client` A reference client implementation (that uses `example_server` container)
* Automated Tests  
* * These test run as GitHub actions as part of CI
  * `test_server` An automated test container that tests the server implementation's conformance to the OpenAPI3 spec
  * `test_client` A set of browser tests (cypress), to document the expected client/user flows
* Your implementations
  * `./server/` the stub folder for your server container implementation
  * `./client/` the stub folder for your client container implementation


Task
----

* You are to replace the stub `./server/` and `./client/` implementations with new implementations that pass the server and client automated test suites.
* Your solutions must run in containers on CI
* no tests passing == 0 marks
* Your solutions can use any programming language or frameworks as long as the tests pass


Guidance
--------

* It is not required for your server service to have a persistent data model
  * You can use a data persistence model if desired, but There are no extra marks allocated to this
* There is no requirement for any user authentication
* There is no requirement for scale
  * The system will be operating with less than 100 items (pagination is not needed)
* You will be allocated marks for partial solutions (based on tests that pass)
* You are working towards being a professional software engineers. It is expected that you share and discuss your solutions with peers throughout this assignment. It is expected that you document your sources/references for your code (this includes discussions with dates with classmates)


Server Tests
------------

0 tests == 0 marks
no framework == 0 marks

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


Client Tests
------------

0 tests == 0 marks
no framework == 0 marks

* Automated tests (14 marks)
  * 200 (1 mark)
  * has 'Freecycle' text (1 mark)
  * has Text input and button (2 mark)
  * submit + see item (6 marks)
  * delete + remove (4 marks)
* Tutor verified
  * Displays real image (1 mark)
  * ? (1 mark)


Independent (use of) Framework (Server and Client)
------------------------------
Use of a language or framework that was not under direct instruction from lectures (5 marks)
  Use of framework features (1 mark)
  Use of language features (list comprehensions, async etc) (1 mark)
  Conciseness (verbose? unneeded intermediaries? readable) (1 mark)
  File/folder structure (sensible names) (1 mark)


Documentation (Server and Client)
-------------
README sufficient to explain, launch, test, use  (1 mark)
Comments in code describe/explain functionality (1 mark)
minimum 24+ Commits well worded and technical (1 mark) [automate]
minimum 4x References snippets/tutorial urls inline (1 mark) [automate]
 Disclose your sources - what conversations with other members of the group contributed to this code with dates and @githubUsernames


Visual framework
----------------

no framework == 0 marks (even if it looks nice)

* Tutor verified (6 marks)
  * Navbar/Title (1 mark)
  * styled
    * inputs (1 mark)
    * buttons (1 mark)
    * item/card (1 mark)
  * Responsive to mobile (2 marks)

You used a framework that was not under direct instruction (4 marks)
