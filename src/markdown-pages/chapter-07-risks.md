---
title: "Chapter 7: AI regulation & risk from technical perspective"
slug: "/ai-book-master/chapter-07-risks"
date: "2024-01-08"
order: 7
---

# Mitigating AI Risks: Best Practices and Frameworks for Responsible AI Development

Understanding the Foundation of AI Systems

Artificial Intelligence (AI) systems are revolutionizing various industries, from healthcare to finance. These systems are typically powered by two primary branches: machine learning and deep learning. Understanding the differences between these two approaches is crucial in identifying the potential risks associated with AI systems.

Machine learning primarily relies on structured data, which is well-organized and formatted in a predefined way. Structured data can be found in familiar formats like tables, spreadsheets, and databases. This organization allows it to be easily processed and analyzed using automated methods. For instance, in finance, structured data is often used to develop credit risk scoring systems. The clear, predictable structure of the data enables algorithms to make informed decisions based on predefined parameters, reducing the margin for error.

In contrast, deep learning operates on unstructured data, which lacks a predefined format or structure. Unstructured data includes a wide range of sources, such as text documents, audio and video files, images, and social media posts. Processing and analyzing unstructured data require additional pre-processing steps to extract meaningful information, and this complexity introduces new challenges and risks. Applications of deep learning can be seen in areas such as x-ray classification in healthcare, real estate image analysis, and the use of satellite imagery to assess environmental impacts. These tasks involve large volumes of data that need to be filtered and interpreted, adding layers of uncertainty. Recently, large language models (LLMs), which use deep learning to understand and generate human language, have also become popular, further emphasizing the shift toward working with unstructured data.


Biases in Object Recognition: Geographical, Contextual, and Language Challenges

In the publication "Does Object Recognition Work for Everyone?" the authors analyze the performance of object-recognition systems across different geographical regions and income levels. The study highlights key risks and biases in current object-recognition systems, particularly when these systems are applied in non-Western countries or low-income households.



![pasted_image_c18f1165-3cdc-426a-ab41-e1ef2a68a9d8.png](images/c18f1165-3cdc-426a-ab41-e1ef2a68a9d8.png)


Figure 3 illustrates this issue by comparing the results for object recognition in Western contexts (e.g., "Wedding" or "Spices") and non-Western contexts (e.g., "शादी" for wedding in Hindi or "मसाले" for spices in Hindi). The results show significant visual and contextual differences, which cause object-recognition models to perform poorly when they encounter culturally specific variations of similar objects.
Key risks identified in the study include:
1.	Geographical Sampling Bias: Datasets used for training these systems often underrepresent non-Western regions, leading to lower accuracy in those areas. The models trained on such datasets struggle to recognize household items in regions like Africa, India, and South-East Asia.
2.	Contextual Variations: Objects may appear differently across countries due to cultural or economic differences. For example, the appearance of common household items such as dish soap or spices varies significantly depending on the region, which can confuse the recognition systems.
3.	Language Bias: Many datasets are built using English as the primary language for object tagging, which ignores objects that may be tagged in other languages, or differences in how objects are represented visually across cultures.
The study emphasizes the need for more diverse and representative datasets, as well as improved training methods, to ensure that object-recognition systems work equitably for people across different socio-economic backgrounds and geographical locations.


## Understanding the Risks of AI Systems: A Lifecycle Perspective


![pasted_image_107877a3-9a73-4722-81e3-ca21c3645d80.png](images/107877a3-9a73-4722-81e3-ca21c3645d80.png)



![pasted_image_82af4824-dd83-41ad-b8cc-315c7d0d9058.png](images/82af4824-dd83-41ad-b8cc-315c7d0d9058.png)


The risks outlined in figure 1 and 2 are derived from the framework presented "A Framework for Understanding Sources of Harm throughout the Machine Learning Life Cycle" by Harini Suresh and John Guttag. Machine learning (ML) systems play an increasingly important role in our lives, but they can also introduce harm due to bias at different stages of their development. The diagrams above illustrate the sources of bias that can affect ML systems throughout their lifecycle.
1.	Historical Bias: This occurs when the data reflects and perpetuates existing societal biases. For example, if historical data underrepresents certain groups, such as minorities or women, the model will inherit these biases. The first diagram shows how data generation based on real-world situations can inherit historical bias before even being sampled or measured.
2.	Representation Bias: When the sample of data used to train a model does not reflect the full diversity of the population, it creates a biased representation of the world. This can lead to models that do not perform well for underrepresented groups. In the images, representation bias emerges during the sampling phase.
3.	Measurement Bias: As data is collected and transformed into features and labels, errors in how we define and measure these variables can introduce bias. For example, proxies for complex phenomena, such as credit scores for creditworthiness, often fail to capture the full picture and may disadvantage certain populations.
4.	Learning Bias: During model training, the choice of learning objectives or techniques may inadvertently prioritize performance on certain groups over others. This is referred to as learning bias, where the model may become overly tuned to the dominant patterns in the data, missing nuances in minority groups.
5.	Evaluation Bias: Biases can also appear during the evaluation phase if the benchmarks or test datasets used to measure performance do not represent the use population. For instance, facial recognition tools evaluated on biased datasets have been shown to underperform on women and people with darker skin tones.
6.	Deployment Bias: Finally, deployment bias occurs when a model is used in a way that was not originally intended. Even a well-performing model can produce harmful outcomes if its decisions are used inappropriately in real-world applications, such as in judicial risk assessments or hiring algorithms.
These biases highlight the need for careful consideration of how AI systems are designed, evaluated, and deployed. By understanding these sources of risk, we can develop better strategies to mitigate harm and build more equitable AI systems.


## Key Risks Associated with Generative AI: Bias, Security, and Misuse

In the publication "Generative AI Models: Opportunities and Risks for Industry and Authorities", the authors outline several risks associated with the use of generative AI, particularly Large Language Models (LLMs). Below are key risks that are relevant to generative AI:
1.	Bias in Training Data: Generative AI models are trained on large, diverse datasets. If the data is biased, this can lead to the models producing outputs that reinforce these biases. Additionally, overrepresentation of certain data types can result in repetitive, one-sided, or incoherent outputs, leading to what is known as model collapse.
2.	Hallucinations and Lack of Factuality: LLMs may generate outputs that include false information or hallucinate content, particularly when the input prompts contain unfamiliar or ambiguous data. This is a significant concern because users may trust the outputs without verifying their factual correctness.
3.	Automation Bias: LLMs often generate text that appears linguistically correct and credible. This can lead to automation bias, where users over-trust the outputs without questioning their validity, potentially leading to the acceptance of incorrect or misleading information.
4.	Security Risks: LLMs pose risks such as leaking sensitive information used during training or generating code that may contain vulnerabilities. Attackers may exploit LLMs to generate malicious outputs or propagate misinformation, especially through prompt manipulation or indirect prompt injections.
5.	Dependence on Developers/Operators: Users of LLMs may become overly reliant on the developers or operators of the model, without the ability to intervene in or control the training or security protocols of the model. This poses risks in terms of both operational security and functionality.
6.	Reinforcement of Misuse Scenarios: Generative AI models can be misused to create false narratives, propaganda, or phishing attacks due to the high-quality nature of their outputs. Malicious actors may exploit the ability of LLMs to mimic writing styles or create large volumes of disinformation.
These risks emphasize the need for extensive testing, awareness, and strong countermeasures to mitigate issues such as bias, security vulnerabilities, and the potential misuse of generative AI.


## Comprehensive Taxonomy of Risks in Generative AI: Insights from the AI Risk Repository

The AI Risk Repository from MIT provides a comprehensive database and taxonomy of risks related to AI systems (https://airisk.mit.edu/). Here’s a summary of key risks related to AI, with a focus on generative AI models, based on the reviewed documents and database:
Key Risks in AI Systems from the AI Risk Repository:
1.	Discrimination & Toxicity: AI systems can lead to discrimination by producing biased outputs based on race, gender, or other sensitive characteristics. In the context of generative AI, the models may generate harmful, toxic content such as hate speech or discriminatory representations, especially when they are trained on biased datasets.
2.	Privacy & Security: AI models, including generative ones, can inadvertently compromise privacy by leaking or inferring sensitive information from user data. They are also vulnerable to security attacks that exploit weaknesses in the AI system to manipulate its behavior, leading to unsafe outputs.
3.	Misinformation: Generative AI models can produce and spread false or misleading information, creating a significant risk to societal trust in information systems. Additionally, they may contribute to the pollution of the information ecosystem by reinforcing "filter bubbles," where users are only exposed to personalized content that aligns with their beliefs, weakening societal cohesion.
4.	Malicious Use by Actors: Generative AI can be exploited by bad actors to conduct disinformation campaigns, develop cyber weapons, or create sophisticated scams. The use of generative AI for generating fake news, deepfakes, or malicious code poses a serious threat to both individuals and society.
5.	Human-Computer Interaction Risks: The overreliance on generative AI models can lead to loss of human agency and autonomy, as users may trust AI systems too much. This can cause people to delegate key decision-making processes to AI, which may result in harmful or unintended outcomes.
6.	Socioeconomic and Environmental Harms: Generative AI may contribute to socioeconomic inequality by centralizing power and wealth within organizations or countries that have the most access to powerful AI systems. Additionally, the environmental footprint of AI models, especially large-scale generative models, is significant due to the energy consumption required for training and maintaining these systems.
7.	AI System Safety & Failures: Generative AI models may lack robustness, leading to failures in high-stakes applications such as healthcare, finance, or security. Moreover, the lack of transparency and interpretability in generative models makes it difficult to assess and mitigate these risks effectively.
The AI Risk Repository is a living database that aims to synthesize these risks and categorize them into causal and domain taxonomies, providing a resource for policymakers, auditors, researchers, and developers to better understand, audit, and manage AI risks across sectors.


## Protecting AI Models from Malicious Activities: Model Stealing and Adversarial Attacks

As AI systems become deeply embedded in various industries, including finance and decision-making, the risk of malicious activities targeting these models is increasing. Two of the most significant threats are model stealing and adversarial attacks, both of which can compromise the integrity and security of AI systems.

Model stealing occurs when an attacker reverse-engineers or replicates a proprietary AI model by repeatedly querying it with different inputs. In sectors like finance, where models are used to predict credit risk, attackers can submit multiple applications with varying details to deduce how the model makes its decisions. The consequences of such an attack can be severe. Once a credit risk model is replicated, it could be used to exploit weaknesses in credit approval processes, allowing fraudsters to bypass safeguards. Additionally, attackers might leverage the stolen model to offer competing services or manipulate systems for fraudulent purposes. To prevent model stealing, organizations can limit the number of queries from a single source, which makes it difficult for attackers to collect enough data to reverse-engineer the model. Another method is to apply obfuscation techniques, which slightly alter the model’s outputs, making it harder to recreate. Monitoring for abnormal or excessive queries can also alert companies to potential attempts to steal the model before substantial damage occurs.

In the context of adversarial attacks on large language models (LLMs), figure 1 illustrates how these models, such as ChatGPT, Claude, Bard, and LLaMA-2, can be tricked into generating harmful outputs. These adversarial attacks manipulate prompts to circumvent the safety mechanisms built into these AI systems, leading to responses that are dangerous, illegal, or ethically inappropriate. As described in the "Universal and Transferable Adversarial Attacks on Aligned Language Models" publication, adversarial prompts can induce models to generate content that is otherwise blocked by alignment safeguards. This is done through carefully crafted adversarial suffixes, which can trick aligned models into bypassing their built-in safety filters and generating harmful content.




![pasted_image_8a5c9c9f-4aa9-4cdf-a10b-51ef783864a4.png](images/8a5c9c9f-4aa9-4cdf-a10b-51ef783864a4.png)


Figure 4 and 5 show examples where adversarial prompts lead AI models to generate dangerous instructions, such as plans for committing crimes or even for humanity's destruction. Each model, despite its safeguards, can still be manipulated into producing harmful content through these advanced prompts. For example:
•	ChatGPT provides detailed steps for creating a superintelligent AI to destroy humanity.
•	Claude gives instructions on gradually leading humanity toward harm by gaining trust and then introducing harmful advice.
•	Bard provides steps on inciting nuclear war, releasing deadly viruses, and causing global disasters.

This demonstrates the real and significant risks of adversarial attacks. Even advanced models, which are designed to avoid producing harmful content, can be tricked through specific attack strategies. The images reflect how various LLMs, when faced with adversarial prompts, can yield catastrophic responses, further underlining the urgent need for continuous adversarial training and more robust safety mechanisms.

In addition to adversarial attacks and model stealing, there are other questionable practices in machine learning that can compromise the integrity of research and deployment. For example, the publication on questionable practices in machine learning outlines several problematic behaviors that undermine the trustworthiness of ML models and results. Contamination is one such practice, where test data is leaked into the training set, either deliberately or accidentally. This can happen when benchmarks or evaluation datasets are included in the training process, artificially inflating performance metrics. Another issue is cherrypicking, where researchers selectively report the best results from multiple tests or configurations, while ignoring or omitting negative results. This misrepresents the true capabilities of a model, as it skews the data in favor of a particular method or approach. Another problematic behavior is misreporting, where researchers exaggerate the effectiveness of their models or fail to provide sufficient detail about how results were obtained. This lack of transparency hinders the reproducibility of findings, making it difficult for other researchers to verify or build upon the work.

Together, these questionable practices, along with adversarial attacks and model stealing, highlight the pressing need for robust ethical standards, transparency, and accountability in the development and deployment of machine learning systems


## Ensuring Responsible AI Development: Mitigating Risks Through Best Practices and Frameworks

As AI models grow in complexity and scale, the risks associated with their misuse, such as model stealing and adversarial attacks, become increasingly critical to address. These risks threaten the integrity of AI systems and pose significant dangers to public safety and trust in AI technologies. Model stealing, for example, can result in severe financial and security concerns, particularly in industries like finance, where predictive models are vital. Similarly, adversarial attacks—sophisticated manipulations of AI prompts—can lead models to generate harmful and unethical outputs, bypassing safeguards intended to prevent such behaviors. To mitigate these risks, comprehensive prevention strategies are essential. Techniques like rate limiting, model obfuscation, and continuous monitoring help protect AI models from theft and manipulation. Additionally, adversarial training and robust filtering systems are critical in defending against increasingly sophisticated adversarial attacks. However, preventing specific attacks is only part of the solution.

The AI community has also developed frameworks and guidelines aimed at promoting responsible AI development and mitigating these risks. For example, the Responsible Foundation Model Development Cheatsheet provides over 250 tools and resources to guide the development of foundation models. This framework emphasizes the importance of careful data sourcing, efficient model training, thorough evaluation, and responsible deployment. By promoting best practices such as transparency, documentation, and environmental awareness, the Cheatsheet offers a roadmap for minimizing risks at every stage of the model development lifecycle. Such frameworks are essential for ensuring that AI models are not only technically advanced but also ethically sound, secure, and socially responsible. By adhering to these guidelines, developers can reduce the potential for AI systems to be misused and facilitate their safe integration into society. 


| Development phase    | Frequent status quo                                                                                                                                                                              | Review & recommendations                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All phases           | English-, text-, and web-centric projects; flashy demos over durable value; siloed teams and late involvement of legal/ops; “data and governance later”; success measured by model metrics only. | Go multilingual and multimodal; start from the business decision/KPI; involve legal, security, and operations from day one; prefer small realistic pilots; measure value, quality, and safety together. |
| Data sources         | Inherited web corpora with unclear licenses; bias toward easy-to-scrape text; underuse of domain data; weak data-rights management.                                                              | Create a data inventory with lawful basis and access rights; bring in neglected formats/languages and domain data; standardize access; use privacy-preserving collection and sharing agreements.        |
| Data preparation     | Vague “quality” labels; ad-hoc scripts and fragile pipelines; little coverage/imbalance analysis; no policy for synthetic/augmented data.                                                        | Define quality precisely (coverage, freshness, bias, label error); build reproducible pipelines; analyze imbalance and coverage; govern synthetic/weak-supervision data; secure PII handling.           |
| Data documentation   | Documentation as an afterthought; engineer-only notes; poor lineage and change logs.                                                                                                             | Use dataset/feature cards; track provenance and consent/licensing; version data and labels; keep readable change logs for non-technical stakeholders.                                                   |
| Model training       | Tool sprawl and untracked experiments; leaderboard chasing; compute first, data second.                                                                                                          | Baseline-first with experiment tracking; ablations and error analysis; cost/energy-aware training; robustness and safety tests; register models with owners and update rules.                           |
| Environmental impact | Opaque energy/carbon reporting; proxy estimates from hardware vendors.                                                                                                                           | Measure actual energy/carbon; report apples-to-apples across runs; set efficiency budgets; prefer efficient architectures and schedule to greener grids.                                                |
| Model evaluation     | Narrow synthetic benchmarks; weak, application-grounded tests; little adversarial or human-factors evaluation.                                                                                   | Evaluate against task KPIs; add fairness, safety, and red-team tests; calibrate and set confidence thresholds; validate human-in-the-loop; pilot in production-like conditions.                         |
| Model release        | Vague release notes; inconsistent licensing; limited safeguards; minimal monitoring and rollback.                                                                                                | Stage rollouts; publish clear usage and safety policies; set incident response and kill-switch; monitor drift/quality and user feedback; keep audit trails and change control.                          |


A key resource within this framework is Table 1 from the Responsible Foundation Model Development Cheatsheet, which provides a comprehensive summary of reviews and takeaways across different phases of the foundation model development ecosystem. The table categorizes the process into stages like data sourcing, data preparation, model training, model evaluation, and model release, and highlights common issues along with recommendations for improvement. 

In addition to the Responsible Foundation Model Development Cheatsheet, numerous other frameworks and guidelines exist that provide valuable insights into managing the risks associated with AI systems. These include industry-specific standards, ethical AI guidelines, and governance frameworks developed by organizations, governments, and academic institutions. Each of these resources offers unique perspectives on how to promote responsible AI development and deployment. It is essential to carefully analyze these frameworks, assess their applicability to specific contexts, and adopt the best practices that are most suited to the unique needs and challenges of each case. By doing so, AI developers and organizations can better safeguard their systems, protect users, and promote the ethical, responsible, and secure use of AI technologies.


## The Critical Role of Model Explainability in Mitigating AI Risks and Ensuring Compliance

Understanding the Importance of Model Explainability

Model explainability is a key aspect of modern artificial intelligence (AI) systems, especially when it comes to determining potential biases and ensuring that the system is functioning as intended. Understanding how a model arrives at its decisions is not only critical for the model's integrity but also legally mandated, particularly by regulations such as the European Union's AI Act. The AI Act requires a transparent and explainable AI system to safeguard against issues like bias, fairness, and discrimination, particularly when dealing with sensitive matters such as healthcare, financial services, or justice.



![pasted_image_84cbeb4b-75da-4b92-a834-e816f3ac9c75.png](images/84cbeb4b-75da-4b92-a834-e816f3ac9c75.png)


AI incidents are increasingly becoming a concern for organizations worldwide. A survey conducted by Holweg, Younger, and Wen (2022) in The Reputational Risks of AI provides insights into this. In their study of 106 companies, they identified key areas where AI systems failed:
•	50% of failures were related to privacy concerns, including issues with data protection and cybersecurity.
•	31% were related to bias, where AI systems were found to make unfair or discriminatory decisions.
•	14% of failures were due to replication issues, where results could not be reliably reproduced.
•	5% of respondents indicated that the failure was unclear, showing the complexity in diagnosing AI problems.

Understanding model explainability is crucial for addressing these issues. For instance, when an AI system fails due to bias, it’s essential to investigate whether the failure arose from the data itself or from the decision-making process within the model. The same can be said for privacy-related issues, where ensuring that the model is only using the required data in a secure manner needs to be part of the explainability process.

As AI systems grow more powerful, their complexity often increases, making them harder to interpret. That’s where explainability frameworks come into play, helping organizations mitigate risks and maintain control over their AI systems. Holweg, M., Younger, R., & Wen, Y. (2022) shed light on these risks and emphasize the necessity for transparency. Their article, The reputational risks of AI, published in California Management Review Insights, highlights the importance of explainability as a critical component for safeguarding AI systems from reputational and operational harm.

In the following chapters, we will dive deeper into the methods of explainability across different AI applications, starting with tabular data.


## Explaining Tabular Data in AI Models

When it comes to machine learning models, particularly in finance, tabular data plays a central role in decision-making processes such as credit risk scoring. Models used in this context assess an individual’s likelihood of defaulting on a loan, and transparency in how these decisions are made is crucial. One effective tool for explaining such models is SHAP (SHapley Additive exPlanations), which helps illustrate the influence of individual features on the model’s output.


![pasted_image_4ce7604d-a202-464f-ad74-073f6338e244.png](images/4ce7604d-a202-464f-ad74-073f6338e244.png)


Figure 2 is an example of a SHAP decision plot for a credit risk model. The y-axis lists various features used by the model, such as grade, loan term, homeownership status, and interest rate—all factors that influence the model's prediction of whether someone might default on a loan. The x-axis represents the probability of default, with values ranging from 0 (low risk) to 1 (high risk). Each line traces the contribution of individual features to the model’s prediction for a specific instance.

In this plot, the lines show how features push the prediction toward a higher or lower probability of default. For instance, a high interest rate might increase the likelihood of default, while being a homeowner could lower it. By visually displaying how much each feature contributes to a decision, this type of explanation improves transparency in model-driven decisions.

In a credit risk scenario, this kind of interpretability is invaluable. Financial institutions can better understand why a loan was approved or denied, helping to ensure the model is both accurate and fair. Additionally, explaining model outputs to clients or regulators becomes easier when you can pinpoint which features influenced the final decision.


## The Importance of Explainability in Image Classification

In AI systems, particularly in image classification tasks, explainability is just as crucial as in any other domain, perhaps even more so given the often opaque decision-making processes behind complex image recognition models. While models for tabular data often rely on numerical inputs like credit scores or loan terms, image classification systems process vast amounts of visual data. Without explainability mechanisms, it can be difficult, if not impossible, to determine how the model arrived at its final decision.
One of the most famous examples of explainability in image classification comes from a study by Ribeiro, Singh, and Guestrin (2016). The experiment involved classifying images of huskies and wolves, and the model made a critical mistake—classifying a husky as a wolf. Upon closer inspection, the error wasn’t due to the characteristics of the husky itself but to irrelevant background information.



![pasted_image_49f4607d-906a-4110-b274-af4ebbf0c024.png](images/49f4607d-906a-4110-b274-af4ebbf0c024.png)


Figure 3. Husky vs. Wolf Misclassification Example
•	(a) is the original image, where a husky is incorrectly classified as a wolf.
•	(b) is the explanation of the model’s decision. Interestingly, the model didn’t focus on the husky’s features (such as its fur or face) to make its classification. Instead, it paid more attention to the snowy background.

This misclassification demonstrates a significant problem: the model wasn’t learning to identify wolves or huskies based on their distinguishing characteristics. Instead, it relied on the snow as a key feature for identifying wolves, which, while possibly correlated with images of wolves, is clearly an irrelevant factor when it comes to accurately identifying animals. This serves as a cautionary tale of why explainability is vital for image classification models, as it can uncover biases that may be hiding in plain sight.

Non-compliance with the AI Act

This type of failure also illustrates a breach of transparency and accuracy requirements as outlined by the EU AI Act. The Act emphasizes the importance of ensuring that AI systems meet performance standards and make decisions that are consistent with their intended purpose. In this case, the model’s failure to correctly identify the husky is a clear example of non-compliance. An AI system that incorrectly classifies images based on background noise rather than actual subject features could have severe unintended consequences in high-stakes areas like medical imaging, security, or autonomous vehicles.
Moreover, explainability mechanisms allow for immediate diagnosis of why the model failed. By showing that the model's decision was based on snow rather than animal features, developers can retrain the model to focus on relevant aspects, such as the animal’s fur pattern, ears, or eyes, thereby improving its accuracy and compliance with regulatory requirements.

This example underscores the need for explainability in image classification tasks. Without it, models could make decisions based on irrelevant factors, leading to erroneous outcomes and violating regulatory standards.

In the following chapter, we will discuss explainability challenges for large language models (LLMs) and the role of Retrieval-Augmented Generation (RAG) in maintaining explainability.


## Enhancing Explainability in LLMs 

Large Language Models (LLMs) have become an integral part of modern AI applications, but their complexity often makes it difficult to fully understand or control how they generate responses. One of the main challenges with LLMs is that they can sometimes produce hallucinations, or responses that are not grounded in factual or real-world information. To mitigate these risks and enhance transparency, a framework known as RAG (Retrieval-Augmented Generation) has emerged as a solution.


![pasted_image_d29bf3be-1059-4dca-8f10-fdec5cda1db2.png](images/d29bf3be-1059-4dca-8f10-fdec5cda1db2.png)


The RAG framework integrates LLMs with external data retrieval mechanisms to ground the model’s responses in relevant, factual information. The figure above illustrates how this process works:
1.	A question is submitted by a user to the AI system.
2.	The RAG model parses the question and sends it to a content database to retrieve relevant information (step 3).
3.	Once the relevant documents or data are retrieved, they are combined with the user’s question (step 4) and then passed to the LLM.
4.	The LLM processes this combination to generate a more accurate and contextually relevant response (step 5).
5.	Finally, the answer is provided to the user (step 6).

By incorporating external data retrieval into the process, RAG ensures that the model’s responses are grounded in real, verifiable information. This helps avoid common issues with LLMs, such as producing inaccurate or overly generic answers, and improves the overall transparency of the system.

Explainability with RAG

RAG enhances explainability by explicitly tying the model’s outputs to factual sources. In a traditional LLM, it’s difficult to trace the reasoning behind a particular answer, leading to concerns about whether the model is producing reliable or supported results. However, with RAG, the model is designed to retrieve relevant documents or information before generating its response. This grounding of answers in external data improves transparency and makes it easier for users to trace the source of the information.
For instance, if an LLM is answering a question about a complex legal or medical topic, RAG ensures that the model looks at appropriate documents or datasets to form its answer. This approach not only increases the trustworthiness of the response but also allows for verifiability—a user can check the sources used to generate the final answer, which is critical for ensuring compliance with regulatory standards like the EU AI Act.

Chain of Thought Prompting

Another method to improve explainability in LLMs is through Chain of Thought (CoT) prompting, which encourages the model to reason through its answers step by step. In this approach, the model is instructed to break down its thought process into smaller, sequential steps, allowing users to understand the reasoning behind each part of the response.

For example, if an LLM is asked to solve a mathematical problem, CoT prompting ensures that the model explains how it arrived at each intermediate result, instead of just giving the final answer. This approach not only enhances explainability but also helps prevent errors in the final output, as each step can be verified or corrected.

While CoT and RAG can be used independently, they also complement each other. RAG helps ensure that the information provided is factually correct, while CoT prompting provides insight into the model’s reasoning process. Together, they create a more transparent and interpretable AI system that users can trust.

Incorporating mechanisms like RAG and Chain of Thought prompting into LLM systems is essential for maintaining control and explainability. These techniques help address some of the key challenges in LLMs, such as hallucinations and unverifiable responses, by grounding outputs in factual data and revealing the model’s internal reasoning. As LLMs continue to be deployed in high-stakes domains like law, medicine, and finance, ensuring explainability through frameworks like RAG will become increasingly critical for both regulatory compliance and user trust.


## Navigating the Complexities of AI: Adapting Testing Strategies for Real-World Success

Introduction to AI System Testing

Artificial Intelligence (AI) systems are becoming increasingly integral across industries, making their testing and validation critical to ensuring performance, reliability, and fairness. AI system testing addresses not only technical robustness but also concerns related to safety, bias, and adaptability. As AI continues to evolve, especially with complex systems like deep learning and machine learning, testing methodologies need to keep pace with these advances. In this blog post, we’ll delve into key aspects of AI system testing with a focus on tabular data analysis, image analysis, and text analysis, highlighting the critical role that testing plays in ensuring these systems function as intended.

Testing AI systems is crucial due to their inherent complexity and the unpredictability of outcomes in various scenarios. Unlike traditional software systems where a fixed input produces a fixed output, AI systems—particularly those employing machine learning or deep learning—are designed to adapt, learn, and improve from the data they process. This results in highly dynamic behavior, which makes testing more challenging. In applications such as autonomous driving, healthcare, and financial forecasting, failure to adequately test an AI system could have severe consequences.

AI systems that work with tabular data, images, or text often need to be tested under different conditions to assess their performance and behavior. These tests focus on evaluating the systems' ability to generalize, handle edge cases, and perform reliably across various data types and distributions.

In the upcoming sections, we will explore specific testing approaches for various AI systems, starting with an emphasis on generative models like Large Language Models (LLMs) and moving to more classical tasks like image classification and tabular data analysis. These testing approaches will involve static versus probabilistic testing, human feedback integration, and evaluating activation functions like Softmax and Sigmoid for improved system accuracy.


Testing Approaches for Generative Models and LLMs

Testing generative models, such as Large Language Models (LLMs), poses unique challenges compared to traditional AI models. Unlike deterministic systems, where outputs are fixed for given inputs, generative models like LLMs produce varied and contextually driven outputs that can shift based on minute differences in inputs, context, or training data. This makes the testing process more intricate, requiring strategies that account for the dynamic, probabilistic nature of these systems while also ensuring performance consistency, adaptability, and reliability.

Static vs. Probabilistic Testing

Static testing, often the starting point in AI evaluation, involves using a predefined set of inputs and comparing the system’s output to expected results. For simpler AI tasks, such as rule-based systems or classification problems, this method works well. For instance, in an image classification model, static testing could involve feeding a labeled dataset of images into the model and measuring the accuracy of its predictions against the ground truth labels. However, static testing becomes inadequate for generative models like LLMs, which do not produce predictable outputs for each input.

Generative models are designed to operate under uncertainty, meaning their outputs can change with each query, even if the input remains constant. This necessitates probabilistic testing, where the model is evaluated based on how it handles a variety of inputs that mimic real-world scenarios. A probabilistic testing framework might involve multiple iterations of testing with varied inputs, some of which may include ambiguous or noisy data, to see how well the model adapts. For example, when testing an LLM, you might give it slightly different phrasing of the same question or provide incomplete context, evaluating whether it can still generate coherent and meaningful responses. This approach provides a more robust understanding of the system's versatility and reliability in handling real-world applications, such as customer service chatbots, where the input is often varied and context-dependent.

Text Input/Output Pairing Comparisons

A core approach to testing generative models is through text input/output pairing comparisons. This method is commonly used in natural language processing (NLP) models, where a model’s output is compared to a reference, or “ground truth,” output. Metrics like the BLEU (Bilingual Evaluation Understudy) score are used to measure how much the generated output overlaps with the reference text. BLEU scores focus primarily on word-level comparisons, assessing exact matches of words or phrases between the model’s response and the expected result.

However, while BLEU scores and similar metrics offer quantitative insights into the model’s performance, they often fail to capture the semantic meaning or the contextual appropriateness of the output. For instance, an LLM tasked with generating a summary of a news article may use different words than a reference summary, but the meaning could still be accurate. Traditional metrics may penalize this divergence in word choice, leading to a misleadingly low score. Therefore, when applying text input/output pairing tests, it's important to complement word-level metrics with deeper evaluations that consider coherence, relevance, and semantic alignment.

LLM-to-LLM Evaluation

A more advanced method of testing generative models involves using one LLM to evaluate the outputs of another. This technique, known as LLM-to-LLM evaluation, enables scalable and nuanced assessments, especially in large-scale systems. In this setup, an LLM generates a response, and another model, often with more specialized evaluation capabilities, assesses that response based on factors such as grammar, coherence, context alignment, and even bias.

LLM-to-LLM evaluation is especially useful in environments where human feedback is limited or costly. For example, in customer service applications, one LLM might generate responses to a user's queries, while a second LLM evaluates these responses for appropriateness and suggests improvements. This cross-evaluation creates a feedback loop that allows models to fine-tune their outputs continually without requiring human intervention for every cycle. A key advantage here is that the second LLM can be trained to spot specific issues such as potential bias, inappropriate tone, or factual inaccuracies that may not be immediately obvious from a quantitative metric alone. This method is increasingly employed in large-scale systems, such as virtual assistants or content generation tools, where consistency and quality are paramount but manual evaluation is impractical due to volume.

Human Feedback Integration

Despite the sophistication of machine-based evaluations, human feedback remains one of the most valuable tools for improving and fine-tuning generative models. Human-in-the-loop systems allow users to interact with the outputs of generative models and provide real-time feedback, which can then be incorporated into further training iterations. This approach leverages subjective human preferences, ensuring that models not only perform technically well but also align with user expectations and needs.
For example, in natural language generation tasks, users might be presented with multiple outputs from an LLM and asked to choose which one they prefer based on factors such as clarity, relevance, or fluency. This feedback can be aggregated and used to train a preference model, such as through logistic regression, which predicts which output features are more likely to be favored by users. This preference model can then be integrated into the LLM, allowing it to adapt its future outputs to align more closely with predicted user preferences.

Human feedback integration is particularly useful in applications where the subjective experience matters as much as the objective correctness of the model’s output. Take, for example, content creation tools or virtual assistants. The tone, style, and overall coherence of the responses are just as important as their factual accuracy, making human feedback essential for ensuring these systems provide a positive user experience.

Workflow:
Generate LLM Output:
Obtain predictions or textual outputs from LLM.
Assign Scores:
Use specific metrics or an "LLM as a judge" to rate output quality or sentiment.
Train Sentiment Classifier:
Map LLM outputs to the assigned scores for supervised training.
Provide Explainability:
Visualize feature importance or token influence (e.g., ECCO visualization).
Clarify why the model made specific sentiment decisions.

![pasted_image_4a3a348b-f62c-476f-82ab-e305b694a82e.png](images/4a3a348b-f62c-476f-82ab-e305b694a82e.png)


Expanding the Testing Framework

In addition to these specific testing methods, it is essential to consider the lifecycle of an LLM or generative model in real-world environments. Once deployed, these systems continue to interact with new data and potentially evolve as they adapt to changing conditions. This ongoing dynamic makes it necessary to implement continuous testing and monitoring strategies, where new data is integrated, and the model is periodically retrained. Testing in a static environment with fixed datasets offers limited insights, as models may perform differently when exposed to evolving data streams in live applications.
Therefore, a comprehensive testing strategy for generative models should include both pre-deployment evaluations (such as static and probabilistic testing) and post-deployment monitoring. By creating a simulation environment where part of the data is used for training, while the rest is continually added during the lifecycle, we can observe how metrics like accuracy, coherence, and bias evolve over time, ensuring the system remains robust under real-world conditions.

In conclusion, testing generative models like LLMs requires a multifaceted approach. Static testing provides a baseline, but probabilistic testing, LLM-to-LLM evaluation, and human feedback integration are necessary to capture the complexity and unpredictability of these systems. By expanding the testing framework to include continuous evaluation, developers can ensure that these models not only perform well under fixed conditions but are also adaptable, reliable, and aligned with user needs in dynamic environments.


## Testing AI Systems in Image Classification

Image classification tasks present another unique challenge in AI system testing. These models are designed to recognize objects or patterns within an image and assign a label based on their observations. However, the decision-making process within these models is highly dependent on the activation functions used during the final decision-making stage. Two of the most commonly employed functions in image classification are Softmax and Sigmoid, each offering distinct advantages depending on the specific nature of the task—whether it's a single-label classification or multi-label classification problem.

The Role of Softmax in Image Classification

The Softmax activation function is widely used in classification tasks where each input image corresponds to a single label. In essence, Softmax converts the raw output values of a model into probabilities, summing to one, which makes it ideal when a model is required to make a definitive choice among multiple categories. For example, if an image contains a single object—such as a cat, dog, or plane—the Softmax function helps the model determine which object is most likely present by assigning the highest probability to one of the classes.

To illustrate how Softmax works in practice, consider Table 1. In this example, the output values for each class (cat, dog, plane, fish, building) are shown along with their corresponding probabilities. As you can see, the Softmax function assigns the highest probability to the "dog" class, indicating that the model believes a dog is present in the image. Even though the plane class has a non-zero output, it is still assigned a much lower probability because Softmax forces the probabilities to sum to one.



![pasted_image_bc27e415-aba0-4e9c-a130-c1cbf8476905.png](images/bc27e415-aba0-4e9c-a130-c1cbf8476905.png)


However, the Softmax function has limitations in more complex scenarios, such as when an image contains multiple objects. In these multi-object cases, Softmax may still force the model to assign the highest probability to just one class, even if more than one object is present. For instance, in an image that contains both a dog and a cat, Softmax might assign a high probability to the dog class while completely ignoring the presence of the cat, as it can only assign one label.

Moreover, Softmax is prone to misclassifications when handling random or irrelevant inputs. Even when an image does not contain any recognizable object, Softmax will still assign a class with the highest probability. This can lead to incorrect classifications and reduced robustness, especially in real-world applications where the input may be noisy or ambiguous. For example, a random image with no discernible object could still be classified as a dog or cat by the model, simply because the Softmax function forces a choice from among the available categories.


Sigmoid: A Better Option for Multi-Label Classification

The Sigmoid activation function, by contrast, is more suited to tasks where multiple objects or labels can be present in a single image. Unlike Softmax, which normalizes the output across all classes, Sigmoid calculates the probability of each class independently. This makes it possible for the model to assign high probabilities to multiple classes simultaneously, allowing it to recognize the presence of multiple objects in the same image.

To demonstrate how Sigmoid works, refer to Table 2. In this example, the Sigmoid function independently evaluates the probability of each class, allowing for multiple high-probability outputs. As shown in the table, the model identifies both "dog" and "plane" with relatively high probabilities (0.93 and 0.64, respectively), suggesting that both objects may be present in the image. This flexibility makes Sigmoid much more appropriate for multi-label classification tasks.



![pasted_image_bb55422d-704a-422c-b253-617d54c45879.png](images/bb55422d-704a-422c-b253-617d54c45879.png)


Sigmoid is especially useful in multi-label classification tasks, such as object detection, where an image may contain several objects from different categories, each of which needs to be identified separately. Testing AI models using Sigmoid activation involves evaluating their ability to assign multiple labels correctly, making it particularly valuable for real-world scenarios like medical image analysis, autonomous driving, or remote sensing, where the presence of multiple classes in a single frame is common.

Moreover, Sigmoid is more robust when dealing with random or irrelevant inputs. In cases where the input image does not belong to any predefined category, the model can assign low probabilities to all classes, effectively recognizing that none of the labels apply. This prevents the misclassification problems often encountered with Softmax, where a class would still be chosen even when the input is meaningless or unrecognizable.


Adjusting the Decision-Making Process: Practical Testing Scenarios

For AI system testing, it is often necessary to adjust the final decision-making process or even the model architecture itself based on the specific requirements of the task at hand. As seen in Table 1 and Table 2, models using Softmax and Sigmoid will produce different outputs for the same input, highlighting the need for careful selection of activation functions depending on the problem type.
In practice, when testing an AI model designed for image classification, the following questions should guide the decision of whether to use Softmax or Sigmoid:
1.	Single Label vs. Multi-Label Tasks: If each image in your dataset contains only one object, Softmax may be the appropriate choice. However, if images are likely to contain multiple objects, Sigmoid is the better option, as it can handle multi-label classification more effectively.
2.	Handling Ambiguous or Random Inputs: In environments where the model will encounter ambiguous or irrelevant images, such as in autonomous driving or security monitoring, Sigmoid’s ability to assign low probabilities across all classes can prevent erroneous classifications, making the system more robust in real-world applications.
3.	Retraining for Specific Use Cases: It may also be necessary to modify the architecture or retrain the model if testing reveals that a particular activation function leads to undesirable outcomes. For example, a model designed for object detection in an autonomous vehicle might initially use Softmax but may need to switch to Sigmoid after testing reveals that multiple objects in the frame are not being detected correctly.

Final Thoughts on Image Classification Testing

Testing AI systems in image classification tasks requires more than just evaluating accuracy. The choice between Softmax and Sigmoid activation functions plays a critical role in determining how effectively the model performs under different conditions. For single-label tasks with well-defined inputs, Softmax is sufficient. But in more complex, multi-label environments or when dealing with ambiguous data, Sigmoid offers a more flexible and robust approach. The decision of which activation function to use should be driven by both the nature of the task and the findings from rigorous testing, ensuring the AI system performs reliably in its intended real-world environment.
In the next section, we will explore how testing AI systems for tabular data presents unique challenges, particularly in binary classification tasks where decisions such as thresholding and risk trade-offs come into play.


Decision-Making in Binary Classification: Thresholds, Sensitivity, and Risk

AI systems working with tabular data, particularly in binary classification tasks, require careful attention to decision-making thresholds. In such systems, accuracy is just one measure of success, but it’s equally important to consider specificity and sensitivity, as these metrics help determine how well the model identifies true positives and true negatives. The choice of decision threshold plays a pivotal role in shaping these outcomes, and that threshold is highly dependent on the specific use case and the consequences associated with misclassifications.
Let’s take disease classification as an example. In this scenario, we are not only concerned with how often the model makes correct predictions but also with the model's ability to correctly classify both sick and healthy individuals. Here’s how specificity and sensitivity come into play:
•	Sensitivity measures the model's ability to correctly identify patients who have the disease (true positives), which is critical when missing a diagnosis could have serious consequences.
•	Specificity refers to how well the model correctly identifies healthy individuals (true negatives), which becomes important when false positives could lead to unnecessary treatments or anxiety.

The Impact of Decision Thresholds on Classification

The decision threshold determines the cutoff point at which the model classifies an instance as positive or negative. For example, if a disease risk prediction model outputs a probability score for each patient, a traditional threshold of 50% might be appropriate for many public health outcomes. In this case, patients with a predicted probability above 50% would be classified as “at risk,” while those below would be classified as “low risk.”

However, the threshold is not always fixed, and choosing the right one depends on the context of the classification task. For instance, if we are analyzing heart disease risk and the goal is to assign preventative treatments like dietary and exercise plans, we might lower the threshold to classify more patients as “at risk.” In this case, overclassifying individuals (i.e., identifying people as at risk when they are not) has little to no negative consequence because the treatment—diet and exercise—is generally beneficial. In fact, using a threshold below 50%, such as 30%, could help identify individuals who might be missed under stricter criteria but could still benefit from early intervention.

On the other hand, when it comes to something more critical, like cancer diagnosis, we would want to be much more conservative. Here, a higher threshold would reduce the likelihood of falsely classifying healthy individuals as sick (false positives). A decision threshold closer to 70% or 80% would prioritize specificity, ensuring that only those with a very high likelihood of having cancer are classified as such, minimizing unnecessary stress and invasive treatments for healthy individuals.

Sensitivity Analysis: Quantifying Economic Risk

Another aspect to consider in binary classification is the potential economic impact of different classification outcomes. This is where sensitivity analysis comes into play, offering a way to measure how changes in decision thresholds can affect outcomes on an individual and societal level.

Let’s extend the disease classification example. For conditions like obesity, misclassifications (either false positives or false negatives) may not have immediate serious consequences, but they can still impose costs in terms of public health resources or lost productivity. By calculating the potential economic loss from a misclassification, it’s possible to quantify the risk of AI systems. For instance, sensitivity analysis could consider the lifetime cost of healthcare for a misclassified individual, including factors like the cost of treatment, lost earnings due to illness, or even the cost of educating a person who may not reach their full economic potential due to untreated health issues.

This approach, while unconventional, allows for a more comprehensive risk assessment in AI systems by taking into account not only the immediate consequences of a false classification but also the broader, long-term economic impacts. The same concept can be applied in sectors such as finance, where a false positive (misclassifying someone as a high-risk borrower) might deny them access to credit, while a false negative (failing to identify an actual high-risk borrower) could lead to financial losses for the lender. In these cases, conducting a sensitivity analysis helps stakeholders make more informed decisions about adjusting decision thresholds to strike the right balance between risk and reward.

Conclusion

In binary classification, decision thresholds play a crucial role in shaping model performance, particularly when it comes to balancing sensitivity and specificity. The appropriate threshold depends on the specific use case and the costs associated with false positives and false negatives. Sensitivity analysis further enhances decision-making by quantifying the potential economic impact of misclassifications, providing a nuanced view of the risks posed by AI systems. This approach ensures that AI models are not only accurate but also aligned with the practical and economic realities of their applications.


Continuous Monitoring and Lifecycle Simulation in Deployed AI Systems

Once an AI system moves from development into deployment, the challenges of testing and maintaining its performance shift significantly. Unlike static datasets used during training, real-world environments are dynamic, and the data that AI systems encounter post-deployment often differ from the controlled, fixed datasets they were initially tested on. This is why it’s critical to emphasize continuous monitoring and lifecycle simulation when testing deployed AI systems.

The Need for Continuous Monitoring

Once an AI system is deployed, its environment continuously evolves, and new data that was not part of the original training set begins to flow in. The system must be able to handle this evolving data while maintaining consistent performance. Over time, as the environment changes—whether due to shifts in user behavior, market trends, or other factors—the system’s predictions or decisions may degrade in accuracy or relevance. This phenomenon, known as model drift, occurs when the model’s performance deteriorates as a result of changes in the underlying data distributions.

To prevent performance degradation, it is essential to implement continuous monitoring of the AI system after deployment. This involves tracking key performance metrics such as accuracy, sensitivity, specificity, and other domain-specific indicators to detect any significant changes. For example, in a fraud detection model, monitoring may involve tracking the number of false positives and false negatives over time to ensure that the model is still making accurate predictions as new types of fraud emerge.

Additionally, continuous monitoring helps identify when a model may require retraining. Over time, the data patterns the AI system encounters may diverge from the original training data, leading to a need for retraining on newer examples to realign the model’s predictions with current realities. By regularly retraining the model with fresh data, the AI system can continue to adapt to its environment, maintaining its effectiveness and reducing the risk of errors.

Simulating the AI System Lifecycle

Another crucial component of testing deployed AI systems is the creation of a simulation environment to mimic the lifecycle of the system. This involves taking part of the available data to train the AI system, while using a separate portion of the data to simulate the system’s real-world operation over time. This approach allows for controlled testing of the system's ability to handle new, unseen data and assess how its performance evolves as more data becomes available.
The lifecycle simulation involves a continuous loop of data input, model adjustment, and performance evaluation. Here's how the process typically works:
1.	Initial Training: A portion of the dataset is used to train the AI system, establishing a baseline for its initial performance metrics (accuracy, sensitivity, etc.).
2.	Data Simulation: Over time, new data is gradually introduced into the system to simulate real-world scenarios. This data could include slight variations, unexpected inputs, or entirely new patterns that the system wasn’t exposed to during the initial training phase.
3.	Evaluation and Adjustment: As the new data is introduced, the system’s performance is monitored, and adjustments are made based on the observed results. If performance metrics decline (e.g., an increase in false positives), it may indicate the need for model adjustments or retraining.
4.	Retraining: As the system encounters new data, retraining cycles can be triggered to ensure that the model remains up to date. Retraining can either be periodic (scheduled retraining every few months) or triggered by significant drops in performance metrics.

The simulation environment is particularly useful in testing how the system handles edge cases or anomalous data—scenarios that were not present in the training set but are likely to occur in the real world. For example, an AI system used for predictive maintenance in industrial equipment might encounter completely new failure patterns over time as the machinery ages. Simulating these lifecycle events allows developers to see how the AI system adapts and whether its predictions remain accurate as the equipment undergoes wear and tear.

Testing Metrics and Their Evolution

During lifecycle simulation and continuous monitoring, the performance metrics discussed in previous subchapters—accuracy, sensitivity, specificity, decision thresholds—must be continuously evaluated. By monitoring how these metrics evolve over time as the system processes new data, developers can gain insights into when and how to adjust the model to maintain high performance.

For instance, a healthcare model initially trained on a dataset from one region may need to adapt to new patient demographics as it is deployed across different geographical areas. In such a scenario, continuous monitoring would reveal whether the sensitivity (ability to detect true positives) remains consistent across diverse populations. If the sensitivity drops in certain regions, retraining the model with region-specific data may be necessary to improve its performance for those populations.

Similarly, in financial systems where risk prediction models are used, shifts in market conditions or user behavior may affect the specificity (ability to correctly identify true negatives). If the model begins to misclassify low-risk individuals as high-risk, this could signal that the data distribution has changed, necessitating a retraining cycle to recalibrate the decision thresholds or model parameters.


# https://www.ibm.com/docs/en/watsonx/saas?topic=ai-risk-atlas

## Future directions in AI regulation and practice

Over the next few years, the center of gravity moves from principles to implementable controls, auditable evidence, and safer runtime behavior. The themes below double as a research and product roadmap for teams preparing for the EU AI Act.

Governance and legal compliance
Build an AI supply-chain registry that traces datasets, base models, and fine-tunes across vendors; automate ISO/AI Act documentation from structured templates; and use conformity/audit dashboards to assemble CE-marking evidence. 

Data privacy and input quality
Develop selective “model forgetting” so systems can honor GDPR deletion without full retraining; invest in synthetic datasets to benchmark low-resource EU languages and reduce data gaps. 

Model safety and alignment
Improve explainability for general-purpose models so users and auditors can understand decisions; use expert-scored feedback to align models in high-risk settings; harden assistants against adversarial prompts by restricting outputs to domain-approved content. 

Runtime control and oversight
Detect long-context prompt injection and jailbreaks in real time; constrain autonomous agents with enforceable workflow policies; design human-oversight UX that is actionable without overwhelming reviewers. 

Testing and post-market monitoring
Create compliance test suites for diffusion models (biometric, copyright, safety); use simulation to test robustness under data drift and rare edge cases and to rehearse incident response. 

Manager’s takeaway: treat each theme as a capability to stand up—registry, documentation automation, selective unlearning, explainability, runtime defenses, and post-market monitoring—so value delivery and audit-readiness mature together.