# Area 2: Text Processing

We use NLP and other techniques to go through text and other material in corporate reports and similar documents to get "key items." This data can be linked with other computer-based information to take necessary follow-up actions.

## Current Status

Preprocessing: Convert PDFs to text; separate them into sections for analysis.

NLP: Using Natural Language Toolkit to preprocess text data with these techniques:
* [Latent Dirichlet Allocation](#lda)
<details><summary></summary>
<p>
Generate dynamic number of topics for each section. Use these topics to find candidate sentences which best summarize the given topic.
</p>
</details>
* Term Frequency Inverse Document Frequency
<details><summary></summary>
<p>
Summarize content from each section. Additionally weighting terms based on task related keywords to generate topic specific summaries.
</p>
</details>
* [Pre-Trained Transformer Networks](#transformers)
<details><summary></summary>
<p>
Leverage question answering capabilities to identify the issues raised and actions required in the text. Investigating priming and other techniques to enable few shot learning on the specific task.
</p>
</details>

Next: We plan on trying new models and continuing to train on more documents to gain further insights into what information can be gained from each section.​ LDA can be used for further applications to connect documents.

Area 2 is mainly based on data from a foreign bank.


## 9/29/2020 update

NLP: we have implemented methods for preprocessing documents in an NLP context. We use NLTK to perform tasks such as frequency dictionaries and named entity recognition. We plan on trying new models and continuing to read documents to gain further insights into what information can be gained from each section.​

Preprocessing: we convert PDFs (machine readable or scanned) to text and separate them into sections for analysis.

## Inputs/Outputs
### LDA
Input: Machine-readable PDF, desired summary length

Output: Overall summary of document. For each section, topics and key sentences.

### Transformers
Input: Machine-readable PDF

Output: Spreadsheet of issues, actions identified in each section of the text