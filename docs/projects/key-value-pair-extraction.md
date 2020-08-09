# Extracting salient key-value pairs from specification sheets

Through the use of PyPDF2, we have been able to create a lookup table for each document sheet with high levels of accuracy. We are currently in the process of testing different processing pipelines to extract important information from images embedded within these specification sheets. We have determined that a CNN approach for this pipeline would be highly desirable. Accordingly, we are investigating the source code of an out-of-the-box open-source solution with the goal of modifying it to our needs.