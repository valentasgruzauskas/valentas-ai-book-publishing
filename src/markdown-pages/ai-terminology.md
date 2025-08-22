---
title: "AI Terminology"
slug: "/ai-terminology"
date: "2024-01-10"
order: 9
---

# AI Terminology

## Core AI & data

| Term                  | Definition                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| AI                    | Software that performs tasks linked to human intelligence (pattern recognition, language, decision support). |
| Machine learning (ML) | AI that learns rules from data instead of rules you code by hand.                                            |
| Deep learning         | ML with many-layer neural networks; strong on images, audio, and text.                                       |
| Model                 | The learned pattern mapping inputs to outputs.                                                               |
| System                | The product around a model: data pipelines, UI/API, monitoring, governance.                                  |
| Training              | The process of learning from examples.                                                                       |
| Inference             | Using the trained model to make predictions.                                                                 |
| Dataset               | A collection of examples used to train, validate, and test.                                                  |
| Label                 | The correct answer the model should learn (category, value).                                                 |
| Feature               | A piece of information the model uses (amount, date, pixel pattern).                                         |
| Embedding             | A numeric vector that represents meaning of text or images.                                                  |
| Token                 | A small chunk of text a model reads.                                                                         |
| Context window        | How much text the model can consider at once.                                                                |
| Hallucination         | A confident but wrong answer from a generative model.                                                        |
| Confidence score      | The model’s estimate of certainty for an output.                                                             |


## Building and running AI

| Term                                 | Definition                                                                           |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| Baseline                             | A simple first approach used for comparison.                                         |
| Data pipeline                        | Steps to collect, clean, transform, and deliver data.                                |
| MLOps                                | Deployment, versioning, monitoring, alerts, rollback, and audit trails for ML.       |
| Drift                                | Live data changes that degrade model performance.                                    |
| Shadow mode                          | Run in parallel without affecting decisions to test safely.                          |
| A/B test                             | Compare two approaches on real traffic to measure impact.                            |
| Rollback / kill switch               | A controlled way to disable or revert a model quickly.                               |
| Fine-tuning                          | Adapting a pre-trained model with your own data.                                     |
| Retrieval-augmented generation (RAG) | Fetch facts from trusted sources, then have the LLM draft with citations.            |
| Vector database                      | Storage for embeddings to enable similarity search.                                  |
| Guardrails                           | Policies and filters that restrict actions and outputs.                              |
| Post-market monitoring               | Ongoing production checks for quality, drift, and incidents.                         |
| Calibration and threshold            | Align confidence to real probabilities; set cutoffs for automation vs. human review. |
| Latency and throughput               | Time per prediction and predictions per second.                                      |
| Inference cost                       | Cost to run the model in production (compute, memory, energy).                       |


## LLMs and agentic systems

| Term                         | Definition                                                                               |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| Prompt                       | The instruction given to the model.                                                      |
| System prompt                | The always-on role and rules for the assistant.                                          |
| Tool (function) calling      | Let the model invoke approved tools (search, database, calculator) and use results.      |
| Agent                        | An LLM loop that plans, calls tools, reads results, and iterates with logs and handoffs. |
| Orchestration                | Coordination of models/agents/tools (routing, retries, timeouts).                        |
| Red-teaming                  | Stress tests to find safety, bias, or jailbreak failures.                                |
| Prompt injection / jailbreak | Adversarial inputs trying to bypass rules.                                               |
| Temperature / top-p          | Knobs that control creativity vs. determinism.                                           |
| Prompt engineering           | Structuring instructions and examples for reliable outputs.                              |


## Generative media (images, audio, video)

| Term                      | Definition                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| Diffusion model           | Learns to remove noise step-by-step until an image or video appears.                              |
| CLIP                      | Paired encoders that map captions and images into the same space so prompts can steer generation. |
| Guidance scale            | Strength of prompt steering in diffusion (too high overcooks, too low is vague).                  |
| Seed                      | Random starting state used to make results reproducible.                                          |
| Watermarking / provenance | Tagging or recording how content was generated (model, prompt, seed).                             |


## Key knobs, metrics, and resources

| Term                        | Definition                                                                |
| --------------------------- | ------------------------------------------------------------------------- |
| Parameter (model weight)    | A learned number inside the model that stores patterns.                   |
| Hyperparameter              | A setting chosen before training (learning rate, tree depth, batch size). |
| Loss function               | The model’s measure of error minimized during training.                   |
| Epoch                       | One full pass over the training data.                                     |
| Batch size                  | Number of examples processed at once.                                     |
| Overfitting / underfitting  | Memorizing training data vs. being too simple to learn the signal.        |
| FLOPs                       | Count of floating-point operations used by training or inference.         |
| Computational power         | Available hardware capacity (GPUs/TPUs, memory, bandwidth).               |
| Quantization / distillation | Techniques to shrink and speed up models with minimal accuracy loss.      |


## EU AI Act essentials

| Term                                                  | Definition                                                                                                |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| AI system                                             | A machine-based system that infers outputs (content, predictions, decisions) that influence environments. |
| Provider                                              | Puts an AI system on the market or into service under own name/brand; includes modifiers.                 |
| Deployer                                              | Uses an AI system in operations.                                                                          |
| Distributor / importer / authorized representative    | Actors bringing systems to the EU market or representing providers.                                       |
| General-purpose AI model (GPAI)                       | A versatile base model (e.g., LLM, diffusion).                                                            |
| Systemic-risk GPAI                                    | GPAI designated as posing wide societal risks with stricter duties.                                       |
| High-risk AI                                          | Annex III areas or safety components (employment, credit, education, essential services, etc.).           |
| Prohibited practices                                  | Specific AI uses banned outright.                                                                         |
| Risk management system                                | Continuous process to identify, assess, mitigate, and monitor risks.                                      |
| Technical documentation                               | Evidence describing design, data, tests, and performance.                                                 |
| Record-keeping and logs                               | Automatic traceability of actions and outputs.                                                            |
| Human oversight                                       | Measures enabling people to understand, intervene, or stop the system.                                    |
| Accuracy, robustness, cybersecurity                   | Performance and resilience requirements proportional to risk.                                             |
| Transparency obligations                              | Inform users and label synthetic media where required.                                                    |
| Fundamental Rights Impact Assessment (FRIA)           | Assessment some deployers must complete before certain uses.                                              |
| Conformity assessment                                 | Pre-market checks (internal or by notified body) for high-risk systems.                                   |
| CE marking                                            | Mark indicating conformity with the Act.                                                                  |
| Post-market monitoring and serious incident reporting | Ongoing surveillance and reporting duties after deployment.                                               |
| Codes of practice / regulatory sandboxes              | Recognized practices and supervised test environments.                                                    |
| EU AI Office / market surveillance authorities        | Bodies coordinating guidance and enforcement across Member States.                                        |
