const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NoteMarkdown-DPIxIT6D.js","assets/index-D3M9DH_b.js","assets/index-DOMv6za-.css"])))=>i.map(i=>d[i]);
import{r as f,j as t,L as _,u as M,P as j,_ as F}from"./index-D3M9DH_b.js";const W=`---
date: 2026-11-02
tags:
  - aws-exam
---
I have an AWS exam scheduled for the end of month that I am required to complete for work - so apologies in advance to the readers for having to read my logs today about networking or load balancing but alas, some days it be like that.

I think it's interesting to learn even though I don't directly work with these details day by day but I do hear them in passing in work conversations so am happy that I can understand some of these terms after today's lectures:

- HTTP carries url path, headers
- IP gets packets to right machine 
- TCP/UDP uses port to get to right program on machine 

- AWS has 3 load balancers (classic being deprecated):
	- application based - routes on URL, query string, paths
	- network based - routes on connection 
	- gateway based - sends traffic through third-party firewall applications for inspection prior 

Something super interesting (in this context atleast) that I learned today is that a load balancer will use its certificate to decrypt HTTPS traffic so the instance behind it will not have to work on that and just simply will receive the plain HTTP request instead. Hurrah! 


`,q=`---
date: 2026-11-08
tags:
  - thoughts
---
Happy Diwali! Short log as I've been busy with festivities and family events. 
![[Pasted image 20261108222635.png|195]]

I have been seeing lots of AI-generated posters in my Whatsapp forwards this year relative to last, and it made me think: *Why do all AI generated posters look the same?* I think there is an interesting reason which I'll go into in another future log about the technology i.e. RHLF/law of averages as well as human behaviour behind this phenomena. 
What are the tells that give away AI posters and is there anything we could do to make it look less AI-y? 

When I look at these posters, it's usually a mix of a few things:
- Too much busyness with words, details
- Having a lack of any fixed templates/references for the models to compare to 
- Generic texts i.e. ChatGPT voice 
- More is more 

I think less clutter and direction for specific art styles could have the biggest gains for the average person using these tools. Wishing everyone a happy Diwali and all of you a year ahead full of prosperity and good health and all good things! 
`,z=`---
date: 2026-11-01
tags:
  - python
---
- Came across [this video](https://www.youtube.com/watch?v=QVdf0LgmICw) while trying to understand the terminology behind something I had known intuitively about the scope of variables in Python
- **LEGB** stands for **Local, Enclosing, Global, Built-In** rules
	- **local** - variables defined within a function 
		- if updating variables within function, updates will remain in the context of function unless variables being updated are defined as global 
	- **enclosing** - in local scope of enclosing function (function levels up)
		- can use nonlocal statement i.e. to affect outer function variable updates  
	- **global** - declared at top of module (global keywords not necessary) 
		- if updating global variable inside function, need to explicitly state global keyword to make the outer global variable update 
	- **built-in** - names preassigned in Python i.e. min/max 
		- can actually be overwritten with custom functions, so need to be careful to not do that! (I did not know this actually)
- the order is important, it tells you order in which the rules are applied `,R=`---
date: 2026-11-05
tags:
  - aws-exam
---
Today I have learned the difference between S3 storage tiers so I'll explain them in my log for today. AWS S3 is actually ubiquitous in industry and most of the companies in the world use them as storage solutions. Interestingly, a pertinent example for the day is that NASDAQ stores past stock history in the S3 Glacier storage classes and by the end of this log, you'll understand why. 

![[C115D99F-F0E1-4F7F-A4D9-D96EAB3A9B7E_1_201_a.jpeg|263]]

S3 is known as AWS's storage solution. 
- All classes are atleast 99.999999999% (11 nines) durability meaning that if you store 10 million objects, only 1 object is expected to be lost every 10 000 years 
- Availability refers to how reliably you can access your data when requested 
- Therefore, the tier of the 
AWS storage solution you pick will be dependent on how fast and often you require your data to be retrieved 

- S3 Standard is the default for frequently accessed data 
- If data in Infrequently Accessed, storage can be moved to S3 Standard-IA which is for data that is infrequently needed but must be retrieved instantly when requested
- Data can also be stored in One Zone-IA as well, but if the AZ is destroyed, owners must be accepting of needing to have data recreated 
- S3 Glacier Instant Retrieval is for data that does not need to be accessed frequently and can be stored in this other class but can be retrieved in milliiseconds when needed
- S3 Glacier Flexible Retrieval is the same, but rather taking minutes to hours (upto 12)
- Lastly, S3 Glacier Deep Archive is the same as above but could take from 12 - 48 hours 
- Intelligent Tiering can move objects between these tiers based on usage automatically  

![[Pasted image 20261105212516.png]]



`,B=`---
date: 2026-11-06
tags:
  - evals
---
Let's take a break from AWS content for today! (hurrah) Today I will answer some critical questions related to a topic I'm interested in which is AI evaluations i.e. ensuring agentic/LLM-generated outputs are reliable and dependable enough within the healthcare landscape. 

In a recent DS meeting I was co-leading, someone asked about why agentic evaluations are important as we have great models nowadays. Every new model hits new benchmarks and these great models are now great at producing excellent SQL and not straying from the plan, etc. Why are evaluations still important then?

It's a good question and to answer this, we have to separate the model from the system the model is deployed within. Although model scores are improving, this doesn't translate directly to 100% reliable production and system behaviour at all times. The benchmarks for top of the line models do not capture systemic metrics such as tool failure, API failures, context-changes or changes in user variability. Only system level evaluations can surface these. Even changing something as simple as a prompt could have regressions but these won't be caught unless evaluations are implemented (for example, running evaluations as a pre-merge check).

To capture these metrics, we must collect traces (i.e. step records, tool calls, outputs of a run) to evaluate such workflows. Only then can we measure metrics such as costs, latencies, tool success, task success. It's imperative to continue doing this even after launch. We also need to monitor for drift continuously so we can be proactive with changes to our products and systems and catch regressions early. These metrics can also be tied directly to business outcomes:
- collecting token costs means you can have better intuition about system scalability
- task completion metrics can help you understand operational reliability (especially critical in health)
- latency can help with understanding user experiences
Overall, evaluations matter greatly and must be a key counterpart to building agentic systems, not an afterthought. 


`,O=`---
date: 2026-09-25
tags:
  - algorithms
---
The week has drawn to an end, hurrah!  Today the learnings are slim, had some meetings for an important project which took up quite a lot of my time and brainpower. 
Today I had just an algorithm-problem I solve. With these problems, I try to solve without AI assistance as well as time-box myself. 
I solved a variation of this [problem](https://python-forum.io/thread-32120.html). The aim was that I needed to find the first letter in a word that broke alphabetical order (i.e. the last E in Beehive). The way that I solved this problem included looking at the ord of the char while iterating through all the characters in the word. After reviewing the problem and taking some time away, I realize I could have just compared the characters with a (char1) < (char2) as Python can compare strings alphabetically.  Big whoop. I also did not ensure my function had consistent return types as when I had a failure, I returned the char but if a success, I didn't return anything at the end and should have returned None (not to mention raising a ValueError for invalid input). I think these problems I timebox myself to do are helpful as it helps me become a better thinker/programmer, which is incredibly important in the age of AI. I also realize something else I can do when writing a function is to create type hints before my code i.e. something like the following so that I can ensure I have the right returns. That's all for today! On and forwards! 

\`\`\`
def what_program_should_do(word:str) -> str | None:
\`\`\`

`,H=`---
date: 2026-11-04
tags:
  - aws-exam
---
Lots of more AWS exam preparation today. I am now fully confident and able to read and understand twisty-windy architecture diagrams like the following. Feel free to contact me to assist your comprehension of complicated architecture diagrams if you're out of tokens :) 
![[Pasted image 20261104112037.png|410]]

Here's an aggregate summary of many days topics on how your architecture flow would look like if you needed to access a web application (instance) on AWS infra which is an easier diagram to explain than the one above: 
- First, you as the user would need to navigate to the web-address for the application (let us imagine the web address is the ELB which redirects traffic to one of three instances for the web application you are interested in)
- If you have visited the address prior, through DNS caching, then you will be able to visit immediately else you will have to navigate the Route 53 process to find the correct web address
- Then you will navigate to the ELB, which is hosted in public subnet i.e. accessible over public internet 
- Following this, the ELB will forward the request to be fulfilled by a instance in a private-subnet 
- Let us also imagine the ELB and private subnet and data subnets are all in the VPC (virtual private cloud). The ELB is simply in the public subnet of the VPC.
- This means these subnets in the VPC can route to each other through local routes and security groups can determine if these are allowable connections i.e. instance to ElastiCache is allow
- Then the request from your instance in the private subnet will redirect to the ElastiCache and if request has been cached, will return the request to the instance. Else, it will go to the RDS and read/write data and also cache that request in ElastiCache (if lazy-loading strategy)
- Then the request will go back to your private subnet and then ELB and then back to the end-user 
![[Pasted image 20261104105551.png|441]]

`,$=`---
date: 2026-10-03
tags:
  - bayesian
---
I picked up a Bayesian Statistics textbook. It's common in everyday life to collect data to support our existing beliefs. Rather, the Bayesian approach starts with a prior belief, then assessing the data, and then most importantly, updating those beliefs based on how well your hypothesis explains the data. Evaluating competing hypotheses can help you update beliefs based on those hypotheses with greater probabilities. 
A bit untechnical for a daily-learning but hey ho, it be that way sometimes. 
`,U=`---
date: 2026-11-07
tags:
  - systems-design
  - aws-exam
---
A light log as it's Diwali and there's lots to do and celebrate! 

For some light reading, I picked up [Designing Data-Intensive Applications](https://www.goodreads.com/en/book/show/23463279-designing-data-intensive-applications) to gain more intuition about design of software applications and systems design.![[Pasted image 20261107222406.png|244]]

To my surprise, I find it to be a great counterpart to my AWS course study. It's nice to know that my studying for this exam isn't futile and the course knowledge is  relevant to understanding the design of applications better. 

The first chapter focuses on Reliable, Scalable and Maintainable Applications and I'll briefly define them here:
- Reliability: system should work correctly even in face of adversity
- Scalability: as system grows, there should be reasonable ways of dealing with that growth
- Maintainability: As different people work on the system, they should be able to work productively regardless if it's maintenance of current work or adapting to new use cases 

That's all for today! Happy Diwali! 
`,Y=`---
date: 2026-10-31
tags:
  - tools
---
One month ago, I had purchased a (one month) trial of a virtual machine that I needed for running some personal projects using Dokploy. My one month trial was successful and today I needed to move my setup to a virtual machine I have bought for a 1-year period. In doing so, I was surprised by how it was less daunting for me to setup my projects, and I am happy that I know a little bit more than I did before. I thought now would be a good time to record these learnings.

Firstly, what's difference between VM (virtual machine) vs Container vs Dokploy?
- VM runs separate operating system (OS) and kernel. I got a KVM (kernel based virtual machine). 
- Containers share a host's kernel with other containers - are quicker to load (there is no OS to boot) but worse for isolation. If the host kernel is compromised which could happen through processes escaping out of containers (container escape), all containers linked are also compromised. However, it is good to run trusted services on, like mine.
- Dokploy is something I run on top of Docker. It's a self hosted dashboard that tells Docker what to run/adds domains/HTTPS and is a nice UI to manage all your Docker projects.

Here are some foundational terms:
- Dockerfile = describes how to build image
	- Build recipe i.e. each Dockerfile line adds on to the recipe of the image
	- Layer order is important. Good Dockerfiles should have expensive/resource intensive steps at the top and frequently-changed steps afterwards. This is because of caching and reducing build time with Dockerfile. If steps are unchanged, their associated build items are cached. This means less time is needed for the overall build. 
	- However this is also important because you need to stay aware of packages/file versions and update when you can. A great example of why is because a couple days ago, the world was faced with this PHP and Node.js vulnerabilities.
	![[Pasted image 20261031221025.png|660]]
	- I had some applications using Node.js package in their images in my Dockerfile and I realized that I needed to wait for the maintainers to publish an update and then force a version update. My Dockerfile did not automatically update even after the version change was added because all the Dockerfile cache key sees are instructions/local inputs but not anything else i.e. version updates. After doing that, then I needed to redeploy.
- Image = immutable file system involving the dependencies, OS files, libraries and code, built by Dockerfile
	- Immutable because the layers are read-only, and when the Dockerfile is updated - a new image is made but the old is not modified. Each layer is identified by a separate content-hash.
- Registry = shared place to hold all images so it can be sent to other places i.e. production, someone else's computer
	- There are some open-source projects I was using that were stored in registries that I pulled images from to create my own container
- Container = image being run
	- The app running inside a container is what you as an end-user actually use. 
	- Persistent data lives inside volumes. I had stored my settings inside the volumes so it was easy to migrate across VPS changes.
	- Shares the kernel of it's host so if it ever needs a separate kernel/host, then the host has to change. 
- Orchestration (i.e. ECS/Kubernetes/Docker Swarm) can be useful for scheduling, removing failed containers, spreading work, scaling processes. 

`,G=`---
date: 2026-11-09
tags:
  - aws-exam
---
Back to AWS content with exam looming soon. Learned about ECS today and finished that lecture for AWS. ECS refers to **Elastic Container Service** and this service lets you manage and control the different tasks/containers you will be running. 
ECS runs on a cluster which means that ECS decides where the tasks will go i.e. which machine will run your task. ECS is similar to Docploy that I had used earlier to manage my Docker container. 
2 ways that tasks can run:
- EC2 launch type which is where you manage the instances
- Fargate: serverless


`,V=`---
date: 2026-09-23
tags:
  - machine-learning
---
After my 9-5, worked on coding multiple-linear regression from scratch. It had been a while since I had studied cost function, gradient descent and thought I was getting a little bit rough with the concepts. So I spent the last few days attempting to learn and use online resources, textbooks, etc. to review without relying on AI. 

A helpful resource while reviewing my fundamentals is this course Deep Learning AI's [Machine learning Specialization](https://www.deeplearning.ai/specializations/machine-learning?_gl=1*4kzwf1*_ga*MTEyNzM2NDc2Ny4xNzg5MTgzMjk5*_ga_FR2MZ1VLMS*czE3OTAyOTE0OTQkbzYkZzEkdDE3OTAyOTE1MTkkajM1JGwwJGgw). 

And late last night I finally was able to do it! My notebook has some pretty scrappy manual learning-rate logging but happy to have done it all with my brain. Next, I will be reviewing the lectures for logistic regression! On and forwards!  

![[Pasted image 20260924191300.png|492]]`,Q=`---
date: 2026-11-03
tags:
  - aws-exam
---
I have been making a ton of progress for my AWS certification exam that is coming up soon and today I covered 2 sections. One about relational databases/caching and the other about the internet web-address mafia, but more officially known as Route 53. 

1) Caching. For AWS to cache RDS, there are two main strategies:
	- Lazy loading which is where you can search cache and then on a cache-miss, read from the database and then cache this request so the next time, requests can be read quicker from the cache.
	- Write-through which is immediately after writing where you cache a request. 
	- You can incorporate TTL (time to live) rules so that cache-eviction process occurs to keep the cache small. When TTL expires, items are removed and in case the cache is full, the least recently used (LRU) cache items are removed first. But removing cache and knowing the timing of the TTL is always a guess/fuzzy rule.
	- *There are only 2 things hard in computer science: cache invalidation and naming things* ~ Phil Karlton

2) Next, DNS basics. 
To understand this, we have to first ask ourselves, how does your internet browser know what address to direct to when given a website, joharapurkar.com for instance? 
Well, your browser has to first check your stub-resolver whether the website has been accessed. If so, then it looks up the address from its cache. But if this is the first time, then it goes to the Local DNS Server, run through your internet provider who does the following look ups: 
- It starts at the root DNS server that is organized by multiple organizations (coordinated by ICANN). It doesn't know individual websites, so it will then direct the local DNS server to search for just the .com (TLD) part. 

![[Pasted image 20261103200303.png|572]]

Then the local DNS server will then ask the TLD DNS server which will return with the address of the SLD DNS server, a name-server (for example Amazon Route 53) that holds records for the SLD (joharapurkar.com). The local DNS server will then route to that server which will return back the actual IP address. This will then be stored in the DNS server's cache and then pass this to the browser which connects to joharapurkar.com using this address.

I think it's so interesting that there's this 'I know a guy' kind-of-chain that you have to keep following until you get your answer. It's actually surprising that the whole internet works this way and it happens in the background whenever you go to a new web-address. Kudos to the internet mafia. `,X=`---
date: 2026-10-10
tags:
  - machine-learning
---
Happy to announce that I have been successful in coding logistic regression from scratch without using any ML libraries such as scikit-learn. Previously in my last entry, I covered the theory behind logistic regression and how it differs from linear regression. Although coding LR by looking up formulas was tricky, the most difficult part for me was understanding how to ensure I was performing the right order of matrix operations with numpy. 
![[Pasted image 20261010222627.png]]

The example dataset I am using has features: exam_score1 and exam_score2 and the target is binary (1, 0). 

When computing the predictions, the order of operands matters for whether we are doing the dot product of X with weights OR weights with X. The number of columns of the first matrix must equal the number of rows within the second matrix. Another way of saying this is that the inner dimensions must match. The best part is that numpy is flexible with 1D arrays and will infer orientation depending on where you put the weights. 

![[Pasted image 20261010221214.png|377]]

We know that the number of rows for the X-values will correspond to m (i.e. number of student records) and there will be only one Y-value for each of the m rows of students. As such, the weights will be (2,) as we only have two weights corresponding to the two features. X will be (m, 2) with m corresponding to the size. 

According to the [matmul documentation with numpy](), if the first argument is 1D, it will have 1 added to the front of it and if the second argument is 1D, the 1 will be appended to it. 
![[Pasted image 20261010221801.png|481]]

This means depending on the order, the numpy shape of the weights will change and it could be shaped as a row or as a column. So what we can do is do the dot product of X @ weights which means this is interpreted like (m,2) @ (2,1). This will work! The output shape is (m,) with one prediction per student, and b can be added to each.
If it was the other way around with (1,2) @ (m,2) here the inner dimensions do not match, and numpy will throw an error. 

`,K=`---
tags:
  - probability
  - machine-learning
date: 2026-09-24
---
Short note for today. Spent some time getting my website updated so I can upload my daily-learnings. I set up a folder to store my Markdown notes (I'm using Obsidian as my UI) and have the folder synced to Github to make this daily learning writing process as easy as possible.
Lots of learnings today:
1) Re-learned that the logistic regression function is basically the linear regression model outputs (weights * x-values plus b-intercept) - after it is transformed by going through the sigmoid function. Since the outputs of the sigmoid function are between 0 and 1, this means the logistic function can have its outputs interpreted as a probability.  
![[Pasted image 20260925014557.png]]

2) Weighted probabilities. I tried a weighted-probability [puzzle](https://leetcode.com/problems/random-pick-with-weight/) today which was definitely challenging. I understand the way to solve these problems in general is to take the number of possible outcomes and ascribe probabilities for the range depending on the problem. This problem in particular requires you to compute prefix sums so this means it's probability of it or a number below it is equal to it's prefix sum over sum of all numbers. You then are asked to return an index - and if you randomly generate a number in the range of the prefix-sum total, you can identify which index would be returned. This type of thinking is something I understand now and will further develop. 
3) Started using Muse. Hehe I call mine Rocky. 
[![Rocky amaze - “Fist My Bump!” - Project Hail Mary Andy Weir T-Shirt|403](https://images.teepublic.com/derived/production/designs/79318467_0/1756103300/i_p:c_ffffff,s_630,q_90.jpg)](https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.teepublic.com%2Ft-shirt%2F79318467-rocky-amaze-fist-my-bump-project-hail-mary-andy-we&ved=0CBYQjRxqFwoTCKCfz9iIiZcDFQAAAAAdAAAAABA5&opi=89978449)`,Z=`---
date: 2026-09-28
tags:
  - algorithms
  - machine-learning
---
Hallo gentlest readers. Today was the start of the work week and work projects are going crazy. Lots to do. After work, I did try to allocate time for a daily [LC](https://leetcode.com/submissions/detail/2156207093/) of the day, an exercise I do to prevent my brain from atrophying.
In this problem, I needed to re-position the array elements such that non-zero elements were moved to the beginning and then zero elements afterwards, while keeping the order of the non-zero elements. I was initially stupid and coded up an approach that involved looping over each element, and then swapping elements if they were non-zero with a zero-element. After I got the worst-time complexity score known to man (O(N2) with the repeated swapping), I watched a video and learned that a better way to solve this problem would be to move the non-zero elements to the beginning of the array (keeping track of exactly where with something like a last-seen pointer) and then replacing all elements after that pointer with a zero - this is O(N). Bam! Super elegant. 

Next, also revised logistic regression. I re-learned that the cost function for logistic regression is not the same as for linear regression (the squared cost error) due to the fact that you cannot obtain a convex function with plugging the sigmoid in the cost-function and if used, you would end up with many local minima instead of a global minimum during gradient descent. Instead, this other cost function log loss (binary cross-entropy) can be used.

Further, to prevent overfitting with regression there are 3 methods:
- Increase number of training examples -> the model will likely find a more generalizable model that does not have high variance
- Work on feature selection -> Can combine or exclude features even with the same amount of training data and see if this improves model
- Regularization ->  Shrink the parameter weights towards 0
	- L1 reduces some weights to 0, in effect removing them 
	- L2 shrinks all weights towards 0, but never 0
`,J=`---
date: 2026-10-07
tags:
  - machine-learning
---
Have come quite a long way to re-understanding logistic regression today. I find Andrew Ng’s lectures very helpful for gaining intuition to think about these models. 

To review, linear regression works well when you want to predict some continuous value. However, let’s say you wanted to predict a class instead i.e. 0 or 1. If so, then you would have to set a threshold so some values are represented by the 0 class and others by the 1 class. What’s important to remember is that this linear regression line is unbounded. So if there's a change in the line depending on the data - especially on extreme ends, the line could wrongly misclassify values. Linear regression is also not great when computing probabilities as it can extend below 0 and above 1. Instead, if you take this line, and transform it through the sigmoid function - you will get the logistic function which outputs a probability (P). What's most important about this curve, is that it is bounded so if you have very small X-values, the line will asymptote towards 0 and if you have very very large X-values, the line will asymptote towards 1. 
![[Pasted image 20261007205245.png]]

If you needed to interpret this model such as through the following example, you consider the log of odds. For instance, defaulting increases by 0.102 log of odds with every day of being delinquent ;) The log odds of defaulting with B-usage is 0.008 higher compared to not having B-usage. (I'm definitely off in my interpretation of these acronyms, forgive me reader as I pulled this image from Google).  ![[Pasted image 20261007205532.png]]

In order to retrieve the best logistic regression function, the method of Maximum Likelihood Estimation is used which gives us the cost function for logistic regression. The cost function from linear regression cannot be used as the squared-difference between prediction through sigmoid and the actual target label would result in a non-convex curve. This means gradient descent may not be able to find the global minimum and could land in a local minimum instead.![[Pasted image 20261007205955.png]]
To find the best line, we use the process of gradient descent: you compute the derivative of the cost to update the weights and b-value by taking a step (through learning rate) in the opposite direction of the derivative. This means you get values that are closer to the minimum cost/error. We repeat this process until the costs/error plateaus. These are the formulas here. ![[Pasted image 20261007210256.png]]

`,ee=`---
date: 2026-10-26
tags:
  - neural-networks
  - machine-learning
---

Update: Have really enjoyed brushing up on my AI/ML fundamentals and through my daily-note learning series, reviewing notes and fundamentals that I had known like the back of my hand at one point in time. 

- As discussed in previous notes, the activation functions used can vary especially for hidden and output layers
- why are activation functions needed?
	- if only linear activation functions used in all units, no different than a linear regression model - linear function of a linear function is just linear
- for multiclass classification, can use softmax function
- the function involves computing each output, exponentiating the outputs and then divide each by the sum of all exponentiated outputs of other neurons (itself included)
![[Pasted image 20261026202606.png|386]]
- There is a unique feature about this activation function compared to other activation functions, which is that each output requires **all element**-wise exponentiated outputs to be computed before computing the final proportion to generate final activations
	- With application in Tensorflow, need to apply numerical stability (linear activation function and then loss with SparseCategoricalCrossEntropy, from_logits). Then need to apply \`tf.nn.softmax\` to convert back to probabilities.
![[Pasted image 20261026203927.png|544]]

- In general, Adam (Adaptive Moment estimation) Algorithm can adjust the learning rate/alpha so in gradient descent, you can reach minimum faster
	- each weight, bias will get it own learning rate
	- if parameters are moving in same direction, increase learning rate
	- but if parameters are oscillating, decrease learning rate 

What are convolution layers?
- Each unit will only receive a region/limited window of previous layer's activations, not all
- reasons?
	- faster computation 
	- less training data/less prone to overfitting
- CNN = when a neural network has many convolutional layers
`,te=`---
date: 2026-10-22
tags:
  - neural-networks
  - machine-learning
---
Training a neural network involves 3 steps:
1) Create the neural network (covered in previous note)
2) Determine the loss function/cost function to be used.
	- If dealing with a binary classification problem, can use binary cross entropy
	- If regression, can use mean squared error
3) Use gradient descent to update weights to minimize loss/cost function.

- When it comes to activation functions, these are the commonly used functions:
	- ReLU
		- The function is g(z) = max(0, z)
	- Linear Activation Function. 
		- The function is g(z) = z
	- Sigmoid Function
		- The function is g(z) = 1/(1+e^(-z)) 
We need activation functions in a neural network different than just linear functions in order to capture non-linear patterns in the data. 

There's a reason the field has progressed towards using ReLU activation functions (especially within the hidden layers).
It's because:
1) Compared to sigmoid function which includes exponentials, it is quicker to compute ReLU and this leads to more efficiency during gradient descent.
2) The sigmoid function has two parts of the graph that are flat, so minimizing the loss with gradient descent process is harder than in ReLU which only has a single flat portion in the curve. This causes a vanishing gradient problem because the partial derivative in these regions would be close to 0 in these flat regions which means that weight updates would stall.
However, for the output layer (depending on the final answer), the above activation functions may be useful in those cases.`,ne=`---
date: 2026-10-11
tags:
  - machine-learning
  - neural-networks
---
Had a good revision of Neural Networks for multi-class classification today. I'll cover the basics in this entry, and neural network training in a future note. The first question you might have is why you would choose neural network models instead of traditional models for example, logistic regression. It's because neural networks do perform better than traditional models as they learn their own features. Face detection is a common example with earlier layers for differentiating edges, middle layers for face elements and shapes, and overall faces in later layers. Further, performance improves especially with greater volumes of data, which in today's world, we markedly do not have a shortage of. Traditional models instead would have plateau effects with performance even with increasing data. 

This is a visual of a neural network:
![[Pasted image 20261011213349.png|309]]
- You have an input layer and then an output layer, and layers in the middle which are referred to as hidden layers. Note: when we discuss the amount of layers, we refer to the total amount of layers minus the initial input layer.
- You can specify amount of 'hidden layers' and this is something you would tune as well as number of neurons within each layer
- Each neuron has an activation function e.g. sigmoid, ReLU
- The activations from the previous layer flow into each neuron. This is where matrix multiplications of the weights with the activations/or input layer is computed, and the bias is added. This is then transformed by the activation function to make the activation value that will compose the activation-vector, that is forward propagated to the next layer
- Why do we have activation functions? This is to [capture nonlinearities](https://developers.google.com/machine-learning/crash-course/neural-networks/activation-functions) between features and the label in the target problem you are modelling. Adding more layers will not help unless you have non-linear activation functions as the neural network would only be learning to model linear patterns. The ReLU activation function for instance is not linear and it returns anything < 0 as 0 and if anything greater than or equal to 0, the original input value. It's commonly used within hidden layer neurons.
![[Pasted image 20261011214837.png|245]]

- With multi-class classification, the total amount of neurons that will be composing the output layer will correspond to the number of classes. For example, if 10 classes, there will be 10 neurons within the final output layer (and if using Softmax activation function), these outputs are the probabilities for each class summing to 1. `,ae=`---
date: 2026-10-21
tags:
  - machine-learning
  - neural-networks
---
![[Pasted image 20261021211749.png|344]]

Apologies for the longer than usual absence. Had a very fun weekend away from technology (cottage trip) and then immediately entered a very busy week of work! I am a little busy but wanted to revise code for neural network using TensorFlow. Maybe one day I'll attempt to code this from scratch! 

Above, I’m creating a model with 3 layers of 25, 15, and 1 unit/neuron. Each neuron uses a sigmoid activation, the same function used in logistic regression, so every neuron outputs a value between 0 and 1, a measure to how strongly it’s 'activating.' The final single neuron gives the probability that y = 1, which means this is a binary classifier.

The model is made with Sequential. Compile then decides how it learns. You have the loss function (binary cross-entropy) and the optimizer (Adam, with a learning rate of 0.001)

What’s interesting is that the actual learning, i.e. backpropagation, happens behind the scenes in Fit. Here it fits to X and y for 20 epochs, where one epoch is a full pass through the data.`,se=`---
date: 2026-11-10
tags:
  - aws-exam
---
Just finished Sec18 for my AWS exam study which covered CloudFormation. This is basically a document that declaratively lets you provision AWS resources so you don't have to work in the UI. The pros are that you have this code, can version control. 
There's a template you have to follow but there are all of these commands that we have to know for the exam.
!Ref means a reference in your YAML document to resources or parameters that are returned. !FindInMap means you can look up values in a static mapping table which plugs into your template. 
There's !GetAtt which means getting attributes from resources. 
It's a lot ngl and less intuitive than other sections of this course. 

![[Pasted image 20261110224712.png|378]]`,ie=`---
date: 2026-09-27
tags:
  - tools
---
Had a fun and relaxing weekend! Did not get to go textbook-heavy but on Sunday night, I thought I would watch some videos on Docker/containers to improve my understanding of this area. 
As a DS, all I previously knew is that Docker allows applications to be run in the same way regardless of machine/system being used. Came across this funny slide hehe in one of the videos I [watched](https://www.youtube.com/watch?v=DQdB7wFEygo)
![[Pasted image 20260927232447.png|411]]

Now I understand the reason Docker is useful is because it combines
1) image - which contains the code, runtimes, tools/instructions, library, configs etc. to run it 
2) containers - running instance of the image 

With one image, many containers can be made so the same code can be run in identical ways on any machine. Next steps will involve implementing for personal projects. `,oe="/assets/C115D99F-F0E1-4F7F-A4D9-D96EAB3A9B7E_1_201_a-BncNMoxS.webp",re="/assets/Pasted%20image%2020260924191300-DEUuIQbG.webp",le="/assets/Pasted%20image%2020260925014557-MRPlskpx.webp",de="/assets/Pasted%20image%2020260927232447-Cn_rue6I.webp",ce="/assets/Pasted%20image%2020261007205245-BVMDblL7.webp",he="/assets/Pasted%20image%2020261007205532-Dyq6xOKM.webp",ue="/assets/Pasted%20image%2020261007205955-tozaL1Ic.webp",me="/assets/Pasted%20image%2020261007210256-CEIgetVY.webp",ge="/assets/Pasted%20image%2020261010221214-RBCnUAcG.webp",pe="/assets/Pasted%20image%2020261010221801--S4qmuCl.webp",fe="/assets/Pasted%20image%2020261010222627-BqqGPLlw.webp",ye="/assets/Pasted%20image%2020261011213349-Bc5rDfvW.webp",we="/assets/Pasted%20image%2020261011214837-CYAyvsUU.webp",be="/assets/Pasted%20image%2020261021211749-DPr_aP8T.webp",ve="/assets/Pasted%20image%2020261026202606-fujYf4u1.webp",_e="/assets/Pasted%20image%2020261026203927-Cs3xN9Ig.webp",ke="/assets/Pasted%20image%2020261031221025-4X2sO6Fw.webp",Ie="/assets/Pasted%20image%2020261103200303-U4a-RjgN.webp",xe="/assets/Pasted%20image%2020261104105551-9WZ-6hn6.webp",Se="/assets/Pasted%20image%2020261104112037-C5tIhP14.webp",Te="/assets/Pasted%20image%2020261105212516-2l8nH3-S.webp",Ae="/assets/Pasted%20image%2020261107222406-D86Nh-E3.webp",De="/assets/Pasted%20image%2020261108222635-DPjUR6KU.webp",Pe="/assets/Pasted%20image%2020261110224712-CEXCAIbs.webp",je={"AWS exam prep":"2026-11-02","Happy Diwali!":"2026-11-08","LEGB scoping rules":"2026-11-01","S3 Storage":"2026-11-05","agentic evals are not an afterthought":"2026-11-05","algorithm challenges":"2026-09-25","call me for your architecture diagram interpretation needs":"2026-11-04","data informs beliefs, beliefs do not inform data":"2026-10-03","data systems":"2026-11-07","docker concepts":"2026-10-31","elastic container service summary":"2026-11-09","first entry! linear regression from scratch":"2026-09-24","how the internet mafia works":"2026-11-03","logistic regression from scratch":"2026-10-10","logistic regression learnings and probabilities":"2026-09-25","logistic regression learnings":"2026-09-28","logistic regression revision":"2026-10-07","multiclass neural networks":"2026-10-23","neural net training":"2026-10-22","neural nets review":"2026-10-10","neural nets with Tensorflow":"2026-10-19","so many commands":"2026-11-10","what does Docker do?":"2026-09-27"},Ne=Object.assign({"../content/daily/AWS exam prep.md":W,"../content/daily/Happy Diwali!.md":q,"../content/daily/LEGB scoping rules.md":z,"../content/daily/S3 Storage.md":R,"../content/daily/agentic evals are not an afterthought.md":B,"../content/daily/algorithm challenges.md":O,"../content/daily/call me for your architecture diagram interpretation needs.md":H,"../content/daily/data informs beliefs, beliefs do not inform data.md":$,"../content/daily/data systems.md":U,"../content/daily/docker concepts.md":Y,"../content/daily/elastic container service summary.md":G,"../content/daily/first entry! linear regression from scratch.md":V,"../content/daily/how the internet mafia works.md":Q,"../content/daily/logistic regression from scratch.md":X,"../content/daily/logistic regression learnings and probabilities.md":K,"../content/daily/logistic regression learnings.md":Z,"../content/daily/logistic regression revision.md":J,"../content/daily/multiclass neural networks.md":ee,"../content/daily/neural net training.md":te,"../content/daily/neural nets review.md":ne,"../content/daily/neural nets with Tensorflow.md":ae,"../content/daily/so many commands.md":se,"../content/daily/what does Docker do__QMARK__.md":ie}),Le=Object.assign({"../content/daily/media/C115D99F-F0E1-4F7F-A4D9-D96EAB3A9B7E_1_201_a.webp":oe,"../content/daily/media/Pasted image 20260924191300.webp":re,"../content/daily/media/Pasted image 20260925014557.webp":le,"../content/daily/media/Pasted image 20260927232447.webp":de,"../content/daily/media/Pasted image 20261007205245.webp":ce,"../content/daily/media/Pasted image 20261007205532.webp":he,"../content/daily/media/Pasted image 20261007205955.webp":ue,"../content/daily/media/Pasted image 20261007210256.webp":me,"../content/daily/media/Pasted image 20261010221214.webp":ge,"../content/daily/media/Pasted image 20261010221801.webp":pe,"../content/daily/media/Pasted image 20261010222627.webp":fe,"../content/daily/media/Pasted image 20261011213349.webp":ye,"../content/daily/media/Pasted image 20261011214837.webp":we,"../content/daily/media/Pasted image 20261021211749.webp":be,"../content/daily/media/Pasted image 20261026202606.webp":ve,"../content/daily/media/Pasted image 20261026203927.webp":_e,"../content/daily/media/Pasted image 20261031221025.webp":ke,"../content/daily/media/Pasted image 20261103200303.webp":Ie,"../content/daily/media/Pasted image 20261104105551.webp":xe,"../content/daily/media/Pasted image 20261104112037.webp":Se,"../content/daily/media/Pasted image 20261105212516.webp":Te,"../content/daily/media/Pasted image 20261107222406.webp":Ae,"../content/daily/media/Pasted image 20261108222635.webp":De,"../content/daily/media/Pasted image 20261110224712.webp":Pe}),Ee=Object.values([je])[0]||{},P=Object.fromEntries(Object.entries(Le).map(([n,a])=>[n.split("/").pop(),a])),T=n=>n.trim().replace(/^["']|["']$/g,"");function Ce(n){const a=n.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!a)return{data:{},body:n};const s={};let r=null;for(const i of a[1].split(/\r?\n/)){const c=i.match(/^\s+-\s*(.*)$/);if(c&&r){Array.isArray(s[r])||(s[r]=[]),s[r].push(T(c[1]));continue}const l=i.match(/^([\w-]+):\s*(.*)$/);if(!l)continue;r=l[1];const h=l[2].trim();s[r]=h.startsWith("[")&&h.endsWith("]")?h.slice(1,-1).split(",").map(T).filter(Boolean):T(h)}return{data:s,body:n.slice(a[0].length)}}function Me(n,a,s){const r=a.split("/").pop(),i=P[r]||P[r.replace(/\.[^.]+$/,".webp")];return i?`![${r}](<${i}>${s?` "${s}"`:""})`:""}function Fe(n){return n.replace(/%%[\s\S]*?%%/g,"").replace(/!\[\[([^\]|#]+\.(?:png|jpe?g|gif|webp|svg))(?:\|(\d+)(?:x\d+)?)?\]\]/gi,Me).replace(/!\[\[[^\]]*\]\]/g,"").replace(/\[\[([^\]|#]+)(?:#[^\]|]*)?\|([^\]]+)\]\]/g,"$2").replace(/\[\[([^\]|#]+)(?:#[^\]]*)?\]\]/g,"$1").replace(/^## Notes\s*$/m,"").trim()}const We=/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$|`[^`\n]+`/gm,qe=/\uE000(\d+)\uE000/g;function ze(n,a){const s=[],r=n.replace(We,c=>`${s.push(c)-1}`);return a(r,c=>c.replace(qe,(l,h)=>s[h]))}const Re=/^\d{4}-\d{2}-\d{2}$/;function Be(n,a){const s=n.match(/\d{4}-\d{2}-\d{2}/),r=s?s[0]:a.date||a.created||Ee[n]||"",i=new Date(`${String(r).slice(0,10)}T12:00:00`);return isNaN(i)?null:i}const Oe=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"note",p=Object.entries(Ne).map(([n,a])=>{const s=n.split("/").pop().replace(/\.md$/,"").replace(/__QMARK__/g,"?").replace(/__HASH__/g,"#"),r=Oe(s),{data:i,body:c}=Ce(a);let l=i.title;const h=ze(c,(u,g)=>{let e=Fe(u);const d=e.match(/^# (.+)$/m);return!l&&d&&(l=g(d[1].trim()),e=e.replace(d[0],"").trim()),g(e)});!l&&!Re.test(s)&&(l=s);const m=Be(s,i),b=(Array.isArray(i.tags)?i.tags:i.tags?[i.tags]:[]).map(u=>u.replace(/^#/,"")).filter(u=>u&&u!=="daily"),y=h.split(/\s+/).filter(Boolean).length;return{slug:r,title:l||(m?m.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}).toLowerCase():r),date:m,tags:b,content:h,minutes:Math.max(1,Math.round(y/200))}}).filter(n=>n.content).sort((n,a)=>(a.date||0)-(n.date||0)),He=1440*60*1e3,$e=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],k=n=>{const a=new Date(n);return a.setHours(12,0,0,0),a},A=(n,a)=>k(new Date(n.getTime()+a*He)),v=n=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,Ue=n=>n.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}).toLowerCase();function Ye(n){const a=k(new Date(n,0,1)),s=k(new Date(n,11,31)),r=A(a,-a.getDay()),i=[],c=[];for(let l=0,h=r;h<=s;l+=1,h=A(h,7)){const m=Array.from({length:7},(y,u)=>A(h,u));i.push(m);const b=m.find(y=>y.getDate()===1&&y.getFullYear()===n);b&&c.push({week:l,label:$e[b.getMonth()]})}return{weeks:i,monthLabels:c}}const Ge=({notes:n})=>{const a=n.filter(e=>e.date),s=k(new Date),r=f.useMemo(()=>new Map(a.map(e=>[v(e.date),e])),[n]),i=a.length?k(new Date(Math.min(...a.map(e=>e.date)))):s,c=[];for(let e=s.getFullYear();e>=i.getFullYear();e-=1)c.push(e);const[l,h]=f.useState(c[0]),{weeks:m,monthLabels:b}=f.useMemo(()=>Ye(l),[l]),[y,u]=f.useState(null),g=f.useRef(null);return f.useEffect(()=>{g.current&&(g.current.scrollLeft=l===s.getFullYear()?g.current.scrollWidth:0)},[l]),a.length===0?null:t.jsxs("section",{className:"cal","aria-label":"Writing calendar",children:[c.length>1&&t.jsx("div",{className:"cal-years",role:"group","aria-label":"Year",children:c.map(e=>t.jsx("button",{type:"button","aria-pressed":e===l,onClick:()=>h(e),children:e},e))}),t.jsxs("div",{className:"cal-card",children:[t.jsx("div",{className:"cal-scroll",ref:g,children:t.jsxs("div",{className:"cal-grid",style:{gridTemplateColumns:`repeat(${m.length}, var(--cal-box))`},children:[b.map(e=>t.jsx("span",{className:"cal-month",style:{gridColumn:e.week+1,gridRow:1},children:e.label},e.label)),m.flatMap((e,d)=>e.map(o=>{if(o.getFullYear()!==l)return null;const w=v(o),S=r.get(w),C={gridColumn:d+1,gridRow:o.getDay()+2},D={className:"cal-day","data-future":o>s,"data-today":w===v(s),style:C};if(!S)return t.jsx("span",{...D},w);const I=`${Ue(o)} · ${S.title}`;return t.jsx(_,{to:`/daily/${S.slug}`,...D,"data-filled":!0,"aria-label":I,title:I,onMouseEnter:()=>u(I),onMouseLeave:()=>u(null),onFocus:()=>u(I),onBlur:()=>u(null)},w)})),i.getFullYear()===l&&t.jsx("span",{className:"cal-started",style:{gridColumn:m.findIndex(e=>e.some(d=>v(d)===v(i)))+1,gridRow:9},children:"↑ started"})]})}),t.jsx("p",{className:"cal-hover","aria-live":"polite",children:y||" "})]})]})},Ve=f.lazy(()=>F(()=>import("./NoteMarkdown-DPIxIT6D.js"),__vite__mapDeps([0,1,2]))),N=n=>n?n.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}).toLowerCase():"",x=n=>n?n.toLocaleDateString("en-US",{month:"long",year:"numeric"}).toLowerCase():"undated";function L({tags:n}){return n.length===0?null:t.jsx("span",{className:"daily-tags",children:n.map(a=>t.jsxs("span",{children:["#",a]},a))})}function E({note:n}){return t.jsx("div",{className:"daily-body",children:t.jsx(f.Suspense,{fallback:t.jsx("p",{className:"daily-loading",children:"loading…"}),children:t.jsx(Ve,{content:n.content})})})}function Qe({slug:n}){const a=p.findIndex(c=>c.slug===n),s=p[a],r=p[a-1],i=p[a+1];return t.jsxs("main",{children:[t.jsx(j,{subtitle:"What I'm learning, revising and discovering."}),t.jsx("p",{children:t.jsx(_,{to:"/daily",children:"← all notes"})}),s?t.jsxs("article",{children:[t.jsxs("p",{className:"daily-date",children:[N(s.date)," · ",s.minutes," min"]}),t.jsx("h1",{className:"daily-single-title",children:s.title}),t.jsx(L,{tags:s.tags}),t.jsx(E,{note:s}),t.jsxs("nav",{className:"daily-pager","aria-label":"More notes",children:[i?t.jsxs(_,{to:`/daily/${i.slug}`,children:["← ",i.title]}):t.jsx("span",{}),r&&t.jsxs(_,{to:`/daily/${r.slug}`,children:[r.title," →"]})]})]}):t.jsx("p",{children:"This note isn't published."})]})}const Ke=()=>{const{slug:n}=M(),[a,s]=f.useState("all"),[r,i]=f.useState(()=>new Set),c=e=>i(d=>{const o=new Set(d);return o.has(e)?o.delete(e):o.add(e),o}),[l,h]=f.useState(()=>new Set([x(new Date)])),m=e=>h(d=>{const o=new Set(d);return o.has(e)?o.delete(e):o.add(e),o}),b=e=>{s(e),h(e==="all"?new Set([x(new Date)]):new Set(p.filter(d=>d.tags.includes(e)).map(d=>x(d.date))))};if(n)return t.jsx(Qe,{slug:n});const y=["all",...new Set(p.flatMap(e=>e.tags))],u=p.filter(e=>a==="all"||e.tags.includes(a)),g=[];return u.forEach(e=>{const d=x(e.date),o=g.find(w=>w.label===d);o?o.notes.push(e):g.push({label:d,notes:[e]})}),t.jsxs("main",{children:[t.jsx(j,{subtitle:"What I'm learning, revising and discovering."}),p.length===0?t.jsx("p",{className:"daily-empty",children:"No notes yet. Check back soon."}):t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"daily-intro",children:"I write every log myself, no AI. I try to write a few times a week. Some days I revisit fundamentals, and other days I dig into what I'm learning at work or new topics I'm exploring for myself."}),t.jsx(Ge,{notes:p}),y.length>1&&t.jsx("div",{className:"daily-filters",role:"group","aria-label":"Filter by tag",children:y.map(e=>t.jsxs("button",{type:"button","aria-pressed":a===e,onClick:()=>b(e),children:["#",e," ",t.jsx("span",{className:"daily-count",children:e==="all"?p.length:p.filter(d=>d.tags.includes(e)).length})]},e))}),g.map(e=>{const d=l.has(e.label);return t.jsxs("section",{children:[t.jsx("h2",{className:"daily-month",children:t.jsxs("button",{type:"button",className:"daily-month-toggle","aria-expanded":d,onClick:()=>m(e.label),children:[t.jsx("span",{className:"daily-month-caret","aria-hidden":"true",children:"▾"}),e.label,t.jsx("span",{className:"daily-month-count",children:e.notes.length})]})}),d&&t.jsx("ul",{className:"daily-entries",children:e.notes.map(o=>{const w=r.has(o.slug);return t.jsxs("li",{className:"daily-entry","data-open":w,children:[t.jsxs("div",{className:"daily-row",children:[t.jsxs("button",{type:"button",className:"daily-toggle","aria-expanded":w,onClick:()=>c(o.slug),children:[t.jsx("span",{className:"daily-date",children:N(o.date)}),t.jsxs("span",{className:"daily-heading",children:[t.jsx("span",{className:"daily-title",children:o.title}),t.jsx(L,{tags:o.tags})]}),t.jsxs("span",{className:"daily-meta",children:[o.minutes," min"]})]}),t.jsx(_,{to:`/daily/${o.slug}`,className:"daily-open","aria-label":`Open ${o.title} on its own page`,children:"open ↗"})]}),w&&t.jsx(E,{note:o})]},o.slug)})})]},e.label)})]})]})};export{Ke as default};
