# Extracting salient key-value pairs from specification sheets

Through the use of PyPDF2, we have been able to create a lookup table for each document sheet with high levels of accuracy. We are currently in the process of testing different processing pipelines to extract important information from images embedded within these specification sheets. We have determined that a CNN approach for this pipeline would be highly desirable. Accordingly, we are investigating the source code of an out-of-the-box open-source solution with the goal of modifying it to our needs.

## 9/29/2020 update

This has been merged with Content Analysis and Auto Template Creation

## 8/19/2020 update

We have been able to create a lookup table for each document sheet with high levels of accuracy, we are branching our efforts into extracting and analyzing diagrams from the specification sheets. This will allow us to extract important information such as dimensions and input/output details. By modifying the source code of out-of-the-box CNN solutions we have been able to efficiently extract and analyze these diagrams. We have also branched our efforts into writing a unit converter so as to standardize queries into the lookup table.