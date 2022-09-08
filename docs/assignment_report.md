Assignment - Technical Report
=============================

Overview
--------

Create a 1600 word technical report. This will be 40% of this module.

* You will demonstrate your understanding of the frameworks and languages you have used in your _digital artefact_ assignment
* You will use technically accurate language


Intended Learning Outcomes 
--------------------------

* LO 2. Critically evaluate the effectiveness of a particular framework for an application and platform.


Marks Overview
--------------

| Assignment | Section | Marks (Total 40) |
|---|--------------------------------|---:|
| 2 | Server framework features *3   |  9 |
| 2 | Server language features *2    |  6 |
| 2 | Client framework features *3   |  9 |
| 2 | Client language features *2    |  6 |
| 2 | Critique of framework-less prototype |  4 |
| 2 | Future Technology Recommendations    |  6 |
|   |                                | 40 |

1 mark = 1% of module

(1600 words / 40 marks) == 40-ish words per mark. Make a clear point every 40-ish Words.
Your writing should be short, sharp, technical and meaningful.


Scenario
--------

* You have been employed by FreeCycle-Inc as a Lead Engineer
* Your role is to advise and justify the technologies you have chosen to use for your implementation (from assignment 1)
* Freecycle-Inc have an existing working prototype for their FreeCycle platform with tests.
* You will need to 
  * Justify the use of your proposed framework technologies
  * Critique the current prototype
  * Advise on possible future technologies with rational/reasons
  
Produce a summary technical report to the business directors (1600 words total)


Report Template
---------------

https://github.com/calaldees/frameworks_and_languages_module/blob/main/technical_report.md

* It is industry practice to keep technical documentation alongside program code in the same code repository
* A markdown report template has been provided `./technical_report.md`
* You will edit this markdown file in-place in your cloned repository. (do not rename the file)
* You will commit and submit this written report as part of your repository submission


Report Contents
---------------

### Introduction

* A summary of what this report contains and why it might be useful to business directors and your engineering team (no direct marks, but without this your write-up has no identifiable purpose)


### Framework Features (18 Marks)

Describe the features of the frameworks and explain the problem that they are solving.

* Headings
  * 3 * Server framework features (3 * 3 marks per feature = 9 marks)
  * 3 * Client framework features (3 * 3 marks per feature = 9 marks)
* Each feature should contain (3 marks per feature)
  1. Technical description of the feature (40ish words - 1 mark)
    * No technical terminology == no mark
  2. A code block snippet example demonstrating the feature (1 mark)
    * If you can additionally permalink to a snippet in your own code that would be additional supporting evidence
  3. Explain the problem-this-is-solving/why/benefits/problems (40ish words - 1 mark)
    * No technical terminology == no mark
  4. Provide reference urls to your sources of information about the feature
    * references do not count towards word count. 
    * No reference == No mark for this entire feature

### Language Features (12 Marks)

Describe the features of the language and explain the problem that they are solving.

* Headings
  * 2 * Server language features (2 * 3 marks per feature = 6 marks)
  * 2 * Client language features (2 * 3 marks per feature = 6 marks)
* (see feature marks above)

### Critique of framework-less prototype (4 marks)

* A technical critique of why one aspect of the the existing prototype implementation is not fit for business use
  * `./example_server/` Server prototype critique *1 (2 marks)
  * `./example_client/` Client prototype critique *1 (2 marks)
* Each prototype critique should contain (2 marks per critique)
  * A code snippet example demonstrating the feature (1 mark)
  * Explain why this pattern is problematic (40ish words - 1 mark)

### Future Technology Recommendations (6 Marks)

Future Technology Suggestions: Consider a 2 year technical expansion/deployment for freecycle-inc
* Suggest *3 features of other frameworks or tools/technologies that might be useful in expanding the freecycle product
  * Description of a feature or tool (40ish words - 1 mark)
  * Why/benefits/problems with using this (40ish words - 1 mark)
  * Provide reference urls - to your source of information about this technology
    * references do not count towards word count. 
    * No reference == No mark for this entire feature


Guidance
--------

* Every week a writing workshop will be provided in sessions.
  * We will as a group refine our writing for individual sections above.
* Level of Expectation
  * Realistically; You are not a lead developer. You are not expected to write this to a true industry standard. You are trying to demonstrate to an external examiner your knowledge and understanding of these technologies.
* Technical reports heavily used bullet points. You do not need to write in full english paragraphs all the time.
* Your justifications need to be supported with references. 
  * Show links to developer documentation, blog articles and case studies that support your technical assessment/recommendations.
  * Note: with _Academic Writing_ it is an institutional policy to use Harvard style referencing. However; this assignment is not _Academic Writing_, This assignment is _Technical Writing_. You may use urls to refer to developer documentation with the commit-timestamp to your markdown document serving as a record of the access time.
