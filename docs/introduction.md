* Introduction (2 hours) 10:00 to 12:00
* IDE + Containers (2 hours) 13:00 to 15:00

Introduction (2 hours)
============

* Learning Objectives
  * Understand the module content and assessment content
  * Understand the core technologies we will be using

Who am I?
---------

* 7 Years teaching Computing in secondary schools
    * A-level, Linux, networking, game programming. Part of transition from ICT to Computing.
* 10 years Software engineering
    * 2 years - Lead developer of a Citizen Journalism startup
    * 6 years - Global Radio (full stack web, android dev, lead test and internal tooling engineer)
    * 6 months - Financial investment platform CI infrastructure
    * 1.5 years - NHS Genome processing pipeline for cancer and rare disease analysis
* 4 years Lecturer in Education (teacher training)
* 2 years Lecturer in Computing

* Side projects
  * DMX Stage lighting and projector sys (with 3d stage visualiser)
  * Karaoke System for mobile phones
  * Lots of other rubbish
  * Won a number of commercial hack events (2009 to 2012)


Module Overview
---------------

<sub>Hint: Take notes .... seriously! ... get a notepad, or open a text document. Get ready!</sub>

TASK: (10min) 
* Find - the module handbook - read
* Whiteboard - What do you think is in this module?

## Module Aims
To develop the student’s understanding of the fundamental concepts of Programming Frameworks and Languages. 
This module supports the Implement and Operate elements of the CDIO model.

### Intended Learning Outcomes 
By the end of the module students should be able to:
1. Demonstrate an understanding of the concept of a Framework in general, a Framework used for Programming, and a Framework used for software Testing
2. Critically evaluate the effectiveness of a particular framework for an application and platform
3. Synthesise a small digital artefact using a well-formed programming framework

Whiteboard in half: words to describe
* What is a [programming language](https://en.wikipedia.org/wiki/Programming_language)?
* What is a [software framework](https://en.wikipedia.org/wiki/Software_framework)?

The sign of an amateur:
> _TECH_XYZ_ is rubbish
This module will help develop an important part of your professional skill-set: 
* The ability to discuss and reason about technology choices

* The ability to use a professional toolchain (CI)
* Understand the basic elements of full stack web development
  

### Definitions

* Language
  * A formal structure to describe machine behaviour
* Framework
  * Inversion of control
    * It calls you, rather than you call it
* Tests
  * Automated
  * Document business requirements/spec
  * Document correct flow

### How will we learn

1. Focus on a business engineering problem with real industry tools
    * Hands-on each week with a range of tools
2. Discussion
    * Real engineers can discuss/reason about technology
    * Pair programming
3. Multiple languages
  * [langauge_reference.html](https://computingteachers.uk/static/langauge_reference.html)

#### Level 6
* Level 4 - You are told what to do
* Level 5 - Supported developing competency in a range of problem domains
* Level 6 - You are able to self direct (with support)

* My role is NOT to have all the answers
* My role is to facilitate your transition towards a skilled professional

Side Note: Employment. Popular languages? Less popular or new languages? Mark scheme 70%+

#### Session Overview - Online/Campus

Task: Look on blackboard at session list

* Each week
    * 09:00 - 13:00 Lab
    * 14:00 - 18:00 Supervised Workshop Support


Starting point Quiz (15min)
-------------------

How much do you as a class know already?
(They are deliberately challenging questions)

https://b.socrative.com/login/student/
`CALLAGHAN1818`




Assessment 1 - Digital Artefact - Demo
------------------

* Demo: The simple app

* Implement Web App
  * Server Framework (data api service)
  * Client Framework (browser app logic)
  * Client Layout Framework (styles + visuals)
* Assignments
  * Set Today
  * Assignment 1 - Digital Artifact - December
  * Assignment 2 - Technical Report - January
* Tools
  * GitPod + containers
  * OpenAPI Spec

Mark breakdown

### Run it yourself (1 hour)

* Demo: (15min)
* Task: (30min)
* QA

<sub>Seriously ... make notes ... </sub>

* https://gitpod.io/ create account with GutHub login
* https://gitpod.io/#https://github.com/calaldees/frameworks_and_languages_module

* Signup to GitPod
  * DO NOT use `vscode-latest` it's broken
  * GitPod -> Stop Container !important
  * GitPod -> Color Theme -> Dark+ (recommended)

Demo:
* Fork (description)
  * Allow CI
* The IDE
* The Interaction (public port)
* The tests
* GitPod shutdown and startup
  * 50 hours a month free
    * [GitHub Student Developer Pack](https://education.github.com/pack) - 100 hours with cccu address + cccu id 

1. (Fork and) run the project on GitPod
2. Add an item with the web interface
3. Run the tests
4. Add an item to another persons server
5. Make a commit and see CI






Development Environment + Containers (2 hours)
====================================

<sub>Seriously ... take notes ... </sub>

* Complete working example for reference
  * https://github.com/calaldees/gitpod_container_demo

* Learning Objective
  * Build Fundamental Skills
    * Setup new GitPod environment bound to new repo
      * `https://gitpod.io/#YOUR_REPO_HTTPS`
    * Commit via commandline
      * Edit README.md with GitPod link
    * Understand how to Build a container
      * Starting layer
      * Layers and Cache
        * Overlay FS (visualiser?)
      * Entrypoint
    * Understand how to Run a container
      * Ports
      * Volume mounts
      * Clean container state
    * Orchestrate multiple containers


### Notes

```bash
docker build --tag http_server_python .
docker images
docker run --rm -it http_server_python /bin/sh
curl https://raw.githubusercontent.com/calaldees/TeachProgramming/master/teachprogramming/static/projects/net/http_server.py -O
# Native python (NOT IN CONTAINER!)
python3 http_server.py
# Explore public browser
    FROM python:alpine
    WORKDIR /app/
    COPY *.py ./
    ENTRYPOINT ["http_server.py"]  #DELIBERATE!
docker run --rm -it --entrypoint /bin/sh http_server_python
# rebuild?
8000 not served?
docker run --rm -it --publish 8000:8000 http_server_python

java 19?
jwebserver -b 0.0.0.0 -p 8000
https://openjdk.java.net/jeps/408

Makefile
help/build/run

git status
.gitignore
```


---



  1. Module overview
    1. Assignments
      1. Writeup justification
      2. OpenAPI + Tests + Containers
    2. What level 6 means
    3. How do you analyse a framework (explicit)
    4. Languages
    5. Frameworks
    6. Tests
  2. Practical
    7. Clone and commit
    8. gitpod
    9. Containers
      1. build/run
      2. compose
    10. Make HTTP Server
      3. python/java
  3. Homework: 


---

Initial audit notes


Updated


1. What is this? (not including subsets)
    * ```json
        {"code": 200, "message": "something happened", "payload": ["a", "b", "c"]}
        ```
    1. python
    2. javascript
    3. json (X)
    4. yml
    5. xml
2. What are these?
    * GET, POST, DELETE, PUT
    1. Database operations
    2. Common language commands
    3. HTTP request methods (X)
    4. Part of the OpenAPI spec
3. What is the difference between virtualisation and containerisation?
    * Virtualisation is simulating an entire machine, Containerisation is an isolated environment managed by the kernel (X)
    * Virtualisation is the emulation of an operating system, Containerisation is a virtual system
    * Virtualisation runs inside another process, Containerisation is running on the host
    * Virtualisation runs on your local machine, Containerisation runs remotely
4. What is an event loop?
    1. A `while` loop
    2. A core game/ui loop that process's each frame in realtime
    3. A technique for handling user input efficiently at a low level
    4. A way for single threaded languages to mimic/utilise concurrency (X)
5. Which of these is a _functional_ language
    1. TypeScript
    2. C#
    3. Haskell (X)
    4. Prolog
    5.  Java
6. What are websockets used for?
    1. Downloading files from websites
    2. Used to serve websites sites via HTTP on a known port
    3. Websockets are an abstract concept
    4. Enabling browser based apps to have ongoing bi-directional communication (X)
7. `git pull --rebase` is used for
    1. Refreshing a repository content with the upstream
    2. Replaying local commits over remote changes to make a linear history (X)
    3. Pulling and merging remote commits
    4. Rebase-ing creates a separate branch to merge changes
8. What is this?
    * ```markdown
        ## Title
        paragraph
        * thing1
        * [example](http://example.com/)
        ```
    1. A linux file descriptor
    2. Markdown (X)
    3. LaTex
    4. Python



Notional machine of how twitter works?
