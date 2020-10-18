# Area 3: Creating a robust pre-processing pipeline for different types of documents

These documents &mdash; including company bylaws of bank clients, identification cards, and drivers’ licenses &mdash; are being examined in detail in order to improve and optimize the process of data extraction. The pre-processing pipeline we are designing begins with determining the type of document, which is done by identifying the major features of each document. From here, the document undergoes a specific preprocessing routine depending on what type of noise could be located on the document (for example, slanted text, scan grain, and watermarks) in order to prepare it for OCR. This process can be improved by implementing a feature extractor and then processing the images by individual clusters instead of via one single pipeline for the entire image. It can be further improved with the implementation of reinforcement learning so as to boost the decision-making ability for pre-processing each document type. This in turn, will yield the best results when applying OCR on the documents. Subsequent to optical recognition stage, we are using natural language processing to identify desired information (e.g. Identify a shareholder’s name and their position in the company). From this, we can generate a structured table that contains the information extracted.

## 9/29/2020 update

Preprocessing: our goal this semester is to use reinforcement learning and/or AutoML techniques to learn a preprocessing pipeline for pictorial data. We've gathered image preprocessing techniques to consider in our pipeline and will be implementing them over the next week.

Enhancement for existing commercial OCR solutions: we are now looking to expand features present in existing commercial OCR solutions. We've narrowed down the scope of this semester's work to improving current forms of bounding box detection for text. This feature is helpful in tracking where text extracted by OCR originated. We are beginning to brainstorm and design improvements to this feature. One potential area we may explore is to not require bounding boxes be axis-aligned.

Mainly using data from Itau bank.

## 8/19/2020 update

We are constructing a pre-processing pipeline that will prepare 
Identification Cards, Driver’s Licenses, and Company Bylaws for Optical Character Recognition (OCR). This process involves techniques such as binarization, thresholding, de-skewing, watermark removal, de-noising, etc.  The challenge with this process is knowing what combination of techniques to use for each document, and how mildly or aggressively they should be applied, considering that each document type is different and each individual image will be unique. We are currently investigating the following series of approaches to address this challenge in the most efficient manner:

1. Optimize a single pre-processing pipeline for all documents. 
2. Build a branched pre-processing pipeline and run multi-class classification (one pipeline for each type of document).
3. Implement a feature extractor to segment the document into clusters, then choose and apply one pre-processing technique per cluster, re-clusterize, and iteratively choose the best pre-processing method.
4. Apply reinforcement learning to learn the optimal pre-processing pipeline for each unique document.

Once the pre-processing is completed, we will detect text location by creating a bounding box around salient regions and cropping the images based on those bounds. This process will then be automated by a templating system.
