const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NoteMarkdown-Dj_VoVWO.js","assets/index-Bi5Un0lQ.js","assets/index-TVjxNtRE.css"])))=>i.map(i=>d[i]);
import{r as p,j as e,L as v,u as z,P as N,_ as C}from"./index-Bi5Un0lQ.js";const E=`---
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


`,O=`---
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
- the order is important, it tells you order in which the rules are applied `,F=`---
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

`,W=`---
date: 2026-10-03
tags:
  - bayesian
---
I picked up a Bayesian Statistics textbook. It's common in everyday life to collect data to support our existing beliefs. Rather, the Bayesian approach starts with a prior belief, then assessing the data, and then most importantly, updating those beliefs based on how well your hypothesis explains the data. Evaluating competing hypotheses can help you update beliefs based on those hypotheses with greater probabilities. 
A bit untechnical for a daily-learning but hey ho, it be that way sometimes. 
`,R=`---
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

`,q=`---
date: 2026-09-23
tags:
  - machine-learning
---
After my 9-5, worked on coding multiple-linear regression from scratch. It had been a while since I had studied cost function, gradient descent and thought I was getting a little bit rough with the concepts. So I spent the last few days attempting to learn and use online resources, textbooks, etc. to review without relying on AI. 

A helpful resource while reviewing my fundamentals is this course Deep Learning AI's [Machine learning Specialization](https://www.deeplearning.ai/specializations/machine-learning?_gl=1*4kzwf1*_ga*MTEyNzM2NDc2Ny4xNzg5MTgzMjk5*_ga_FR2MZ1VLMS*czE3OTAyOTE0OTQkbzYkZzEkdDE3OTAyOTE1MTkkajM1JGwwJGgw). 

And late last night I finally was able to do it! My notebook has some pretty scrappy manual learning-rate logging but happy to have done it all with my brain. Next, I will be reviewing the lectures for logistic regression! On and forwards!  

![[Pasted image 20260924191300.png|492]]`,H=`---
date: 2026-11-03
tags:
  - aws-exam
---
I have been making a ton of progress for my AWS certification exam that is coming up soon and today I covered 2 sections. One about relational databases/caching and the other about the internet web-address mafia, but more officially known as Route 53. 

1) For caching. For AWS to cache RDS, there are two main strategies 
	- Lazy loading which is whe
re you can search cache and then on a cache-miss, read from the database and then cache this request so the next time, requests can be read quicker from the cache.
	- Write-through which is immediately after writing where you cache a request. 
	- You can incorporate TTL (time to live) rules so that cache-eviction process occurs to keep the cache small. When TTL expires, items are removed and in case the cache is full, the least recently used (LRU) cache items are removed first. But removing cache and knowing the timing of the TTL is always a guess/fuzzy rule.
	- *There are only 2 things hard in computer science: cache invalidation and naming things* ~ Phil Karlton

2) Next, DNS basics. 
To understand this, we have to first ask ourselves, how does your internet browser know what address to direct to when given a website, joharapurkar.com for instance? 
Well, your browser has to first check your stub-resolver whether the website has been accessed. If so, then it looks up the address from its cache. But if this is the first time, then it goes to the Local DNS Server, run through your internet provider who does the following look ups: 
- It starts at the root DNS server that is organized by multiple organizations (coordinated by ICANN). It doesn't know individual websites, so it will then direct the local DNS server to search for just the .com (TLD) part. 

![[Pasted image 20261103200303.png]]

Then the local DNS server will then ask the TLD DNS server which will return with the address of the SLD DNS server, a name-server (for example Amazon Route 53) that holds records for the SLD (joharapurkar.com). The local DNS server will then route to that server which will return back the actual IP address. This will then be stored in the DNS server's cache and then pass this to the browser which connects to joharapurkar.com using this address.

I think it's so interesting that there's this 'I know a guy' kind-of-chain that you have to keep following until you get your answer. It's actually surprising that the whole internet works this way and it happens in the background whenever you go to a new web-address. Kudos to the internet mafia. `,$=`---
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

`,B=`---
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
[![Rocky amaze - “Fist My Bump!” - Project Hail Mary Andy Weir T-Shirt|403](https://images.teepublic.com/derived/production/designs/79318467_0/1756103300/i_p:c_ffffff,s_630,q_90.jpg)](https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.teepublic.com%2Ft-shirt%2F79318467-rocky-amaze-fist-my-bump-project-hail-mary-andy-we&ved=0CBYQjRxqFwoTCKCfz9iIiZcDFQAAAAAdAAAAABA5&opi=89978449)`,Y=`---
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
`,U=`---
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

`,G=`---
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
`,K=`---
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
However, for the output layer (depending on the final answer), the above activation functions may be useful in those cases.`,V=`---
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

- With multi-class classification, the total amount of neurons that will be composing the output layer will correspond to the number of classes. For example, if 10 classes, there will be 10 neurons within the final output layer (and if using Softmax activation function), these outputs are the probabilities for each class summing to 1. `,Q=`---
date: 2026-10-21
tags:
  - machine-learning
  - neural-networks
---
![[Pasted image 20261021211749.png|344]]

Apologies for the longer than usual absence. Had a very fun weekend away from technology (cottage trip) and then immediately entered a very busy week of work! I am a little busy but wanted to revise code for neural network using TensorFlow. Maybe one day I'll attempt to code this from scratch! 

Above, I’m creating a model with 3 layers of 25, 15, and 1 unit/neuron. Each neuron uses a sigmoid activation, the same function used in logistic regression, so every neuron outputs a value between 0 and 1, a measure to how strongly it’s 'activating.' The final single neuron gives the probability that y = 1, which means this is a binary classifier.

The model is made with Sequential. Compile then decides how it learns. You have the loss function (binary cross-entropy) and the optimizer (Adam, with a learning rate of 0.001)

What’s interesting is that the actual learning, i.e. backpropagation, happens behind the scenes in Fit. Here it fits to X and y for 20 epochs, where one epoch is a full pass through the data.`,X=`---
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

With one image, many containers can be made so the same code can be run in identical ways on any machine. Next steps will involve implementing for personal projects. `,Z="/assets/Pasted%20image%2020260924191300-BotCu84p.png",J="/assets/Pasted%20image%2020260925014557-CUN6aFzc.png",ee="/assets/Pasted%20image%2020260927232447-BHnPyyim.png",te="/assets/Pasted%20image%2020261007205245-cQ3e1TEj.png",ne="/assets/Pasted%20image%2020261007205532-Bnt2ZN3m.png",ae="/assets/Pasted%20image%2020261007205955-VykKnMiw.png",ie="/assets/Pasted%20image%2020261007210256-ieE7Lq9q.png",oe="/assets/Pasted%20image%2020261010221214-CDON0d8N.png",se="/assets/Pasted%20image%2020261010221801-9t8hKDQC.png",re="/assets/Pasted%20image%2020261010222627-DeOKMYf8.png",le="/assets/Pasted%20image%2020261011213349-BVTOg4AR.png",de="/assets/Pasted%20image%2020261011214837-Cdgp8Srz.png",he="/assets/Pasted%20image%2020261021211749-BpivxPIX.png",ce="/assets/Pasted%20image%2020261026202606-ubT1kGq2.png",ue="/assets/Pasted%20image%2020261026203927-Dw4IkREW.png",ge="/assets/Pasted%20image%2020261031221025-OWqm80pu.png",me="/assets/Pasted%20image%2020261103200303-BL-A8pdG.png",pe={"AWS exam prep":"2026-11-02","LEGB scoping rules":"2026-11-01","algorithm challenges":"2026-09-25","data informs beliefs, beliefs do not inform data":"2026-10-03","docker concepts":"2026-10-31","first entry! linear regression from scratch":"2026-09-24","how the internet mafia works":"2026-11-03","logistic regression from scratch":"2026-10-10","logistic regression learnings and probabilities":"2026-09-25","logistic regression learnings":"2026-09-28","logistic regression revision":"2026-10-07","multiclass neural networks":"2026-10-23","neural net training":"2026-10-22","neural nets review":"2026-10-10","neural nets with Tensorflow":"2026-10-19","what does Docker do?":"2026-09-27"},fe=Object.assign({"../content/daily/AWS exam prep.md":E,"../content/daily/LEGB scoping rules.md":O,"../content/daily/algorithm challenges.md":F,"../content/daily/data informs beliefs, beliefs do not inform data.md":W,"../content/daily/docker concepts.md":R,"../content/daily/first entry! linear regression from scratch.md":q,"../content/daily/how the internet mafia works.md":H,"../content/daily/logistic regression from scratch.md":$,"../content/daily/logistic regression learnings and probabilities.md":B,"../content/daily/logistic regression learnings.md":Y,"../content/daily/logistic regression revision.md":U,"../content/daily/multiclass neural networks.md":G,"../content/daily/neural net training.md":K,"../content/daily/neural nets review.md":V,"../content/daily/neural nets with Tensorflow.md":Q,"../content/daily/what does Docker do__QMARK__.md":X}),ye=Object.assign({"../content/daily/media/Pasted image 20260924191300.png":Z,"../content/daily/media/Pasted image 20260925014557.png":J,"../content/daily/media/Pasted image 20260927232447.png":ee,"../content/daily/media/Pasted image 20261007205245.png":te,"../content/daily/media/Pasted image 20261007205532.png":ne,"../content/daily/media/Pasted image 20261007205955.png":ae,"../content/daily/media/Pasted image 20261007210256.png":ie,"../content/daily/media/Pasted image 20261010221214.png":oe,"../content/daily/media/Pasted image 20261010221801.png":se,"../content/daily/media/Pasted image 20261010222627.png":re,"../content/daily/media/Pasted image 20261011213349.png":le,"../content/daily/media/Pasted image 20261011214837.png":de,"../content/daily/media/Pasted image 20261021211749.png":he,"../content/daily/media/Pasted image 20261026202606.png":ce,"../content/daily/media/Pasted image 20261026203927.png":ue,"../content/daily/media/Pasted image 20261031221025.png":ge,"../content/daily/media/Pasted image 20261103200303.png":me}),we=Object.values([pe])[0]||{},be=Object.fromEntries(Object.entries(ye).map(([t,n])=>[t.split("/").pop(),n])),j=t=>t.trim().replace(/^["']|["']$/g,"");function ve(t){const n=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!n)return{data:{},body:t};const o={};let l=null;for(const r of n[1].split(/\r?\n/)){const h=r.match(/^\s+-\s*(.*)$/);if(h&&l){Array.isArray(o[l])||(o[l]=[]),o[l].push(j(h[1]));continue}const d=r.match(/^([\w-]+):\s*(.*)$/);if(!d)continue;l=d[1];const c=d[2].trim();o[l]=c.startsWith("[")&&c.endsWith("]")?c.slice(1,-1).split(",").map(j).filter(Boolean):j(c)}return{data:o,body:t.slice(n[0].length)}}function _e(t,n,o){const l=n.split("/").pop(),r=be[l];return r?`![${l}](<${r}>${o?` "${o}"`:""})`:""}function ke(t){return t.replace(/%%[\s\S]*?%%/g,"").replace(/!\[\[([^\]|#]+\.(?:png|jpe?g|gif|webp|svg))(?:\|(\d+)(?:x\d+)?)?\]\]/gi,_e).replace(/!\[\[[^\]]*\]\]/g,"").replace(/\[\[([^\]|#]+)(?:#[^\]|]*)?\|([^\]]+)\]\]/g,"$2").replace(/\[\[([^\]|#]+)(?:#[^\]]*)?\]\]/g,"$1").replace(/^## Notes\s*$/m,"").trim()}const xe=/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$|`[^`\n]+`/gm,Ie=/\uE000(\d+)\uE000/g;function je(t,n){const o=[],l=t.replace(xe,h=>`${o.push(h)-1}`);return n(l,h=>h.replace(Ie,(d,c)=>o[c]))}const Te=/^\d{4}-\d{2}-\d{2}$/;function Se(t,n){const o=t.match(/\d{4}-\d{2}-\d{2}/),l=o?o[0]:n.date||n.created||we[t]||"",r=new Date(`${String(l).slice(0,10)}T12:00:00`);return isNaN(r)?null:r}const De=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"note",f=Object.entries(fe).map(([t,n])=>{const o=t.split("/").pop().replace(/\.md$/,"").replace(/__QMARK__/g,"?").replace(/__HASH__/g,"#"),l=De(o),{data:r,body:h}=ve(n);let d=r.title;const c=je(h,(u,i)=>{let a=ke(u);const s=a.match(/^# (.+)$/m);return!d&&s&&(d=i(s[1].trim()),a=a.replace(s[0],"").trim()),i(a)});!d&&!Te.test(o)&&(d=o);const g=Se(o,r),y=(Array.isArray(r.tags)?r.tags:r.tags?[r.tags]:[]).map(u=>u.replace(/^#/,"")).filter(u=>u&&u!=="daily"),w=c.split(/\s+/).filter(Boolean).length;return{slug:l,title:d||(g?g.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}).toLowerCase():l),date:g,tags:y,content:c,minutes:Math.max(1,Math.round(w/200))}}).filter(t=>t.content).sort((t,n)=>(n.date||0)-(t.date||0)),Ne=1440*60*1e3,Pe=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],_=t=>{const n=new Date(t);return n.setHours(12,0,0,0),n},T=(t,n)=>_(new Date(t.getTime()+n*Ne)),b=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,Ae=t=>t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}).toLowerCase();function Le(t){const n=_(new Date(t,0,1)),o=_(new Date(t,11,31)),l=T(n,-n.getDay()),r=[],h=[];for(let d=0,c=l;c<=o;d+=1,c=T(c,7)){const g=Array.from({length:7},(w,u)=>T(c,u));r.push(g);const y=g.find(w=>w.getDate()===1&&w.getFullYear()===t);y&&h.push({week:d,label:Pe[y.getMonth()]})}return{weeks:r,monthLabels:h}}const Me=({notes:t})=>{const n=t.filter(a=>a.date),o=_(new Date),l=p.useMemo(()=>new Map(n.map(a=>[b(a.date),a])),[t]),r=n.length?_(new Date(Math.min(...n.map(a=>a.date)))):o,h=[];for(let a=o.getFullYear();a>=r.getFullYear();a-=1)h.push(a);const[d,c]=p.useState(h[0]),{weeks:g,monthLabels:y}=p.useMemo(()=>Le(d),[d]),[w,u]=p.useState(null),i=p.useRef(null);return p.useEffect(()=>{i.current&&(i.current.scrollLeft=d===o.getFullYear()?i.current.scrollWidth:0)},[d]),n.length===0?null:e.jsxs("section",{className:"cal","aria-label":"Writing calendar",children:[h.length>1&&e.jsx("div",{className:"cal-years",role:"group","aria-label":"Year",children:h.map(a=>e.jsx("button",{type:"button","aria-pressed":a===d,onClick:()=>c(a),children:a},a))}),e.jsxs("div",{className:"cal-card",children:[e.jsx("div",{className:"cal-scroll",ref:i,children:e.jsxs("div",{className:"cal-grid",style:{gridTemplateColumns:`repeat(${g.length}, var(--cal-box))`},children:[y.map(a=>e.jsx("span",{className:"cal-month",style:{gridColumn:a.week+1,gridRow:1},children:a.label},a.label)),g.flatMap((a,s)=>a.map(m=>{if(m.getFullYear()!==d)return null;const k=b(m),I=l.get(k),M={gridColumn:s+1,gridRow:m.getDay()+2},S={className:"cal-day","data-future":m>o,"data-today":k===b(o),style:M};if(!I)return e.jsx("span",{...S},k);const x=`${Ae(m)} · ${I.title}`;return e.jsx(v,{to:`/daily/${I.slug}`,...S,"data-filled":!0,"aria-label":x,title:x,onMouseEnter:()=>u(x),onMouseLeave:()=>u(null),onFocus:()=>u(x),onBlur:()=>u(null)},k)})),r.getFullYear()===d&&e.jsx("span",{className:"cal-started",style:{gridColumn:g.findIndex(a=>a.some(s=>b(s)===b(r)))+1,gridRow:9},children:"↑ started"})]})}),e.jsx("p",{className:"cal-hover","aria-live":"polite",children:w||" "})]})]})},ze=p.lazy(()=>C(()=>import("./NoteMarkdown-Dj_VoVWO.js"),__vite__mapDeps([0,1,2]))),P=t=>t?t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}).toLowerCase():"",D=t=>t?t.toLocaleDateString("en-US",{month:"long",year:"numeric"}).toLowerCase():"undated";function A({tags:t}){return t.length===0?null:e.jsx("span",{className:"daily-tags",children:t.map(n=>e.jsxs("span",{children:["#",n]},n))})}function L({note:t}){return e.jsx("div",{className:"daily-body",children:e.jsx(p.Suspense,{fallback:e.jsx("p",{className:"daily-loading",children:"loading…"}),children:e.jsx(ze,{content:t.content})})})}function Ce({slug:t}){const n=f.findIndex(h=>h.slug===t),o=f[n],l=f[n-1],r=f[n+1];return e.jsxs("main",{children:[e.jsx(N,{subtitle:"What I'm learning, revising and discovering."}),e.jsx("p",{children:e.jsx(v,{to:"/daily",children:"← all notes"})}),o?e.jsxs("article",{children:[e.jsxs("p",{className:"daily-date",children:[P(o.date)," · ",o.minutes," min"]}),e.jsx("h1",{className:"daily-single-title",children:o.title}),e.jsx(A,{tags:o.tags}),e.jsx(L,{note:o}),e.jsxs("nav",{className:"daily-pager","aria-label":"More notes",children:[r?e.jsxs(v,{to:`/daily/${r.slug}`,children:["← ",r.title]}):e.jsx("span",{}),l&&e.jsxs(v,{to:`/daily/${l.slug}`,children:[l.title," →"]})]})]}):e.jsx("p",{children:"This note isn't published."})]})}const Oe=()=>{const{slug:t}=z(),[n,o]=p.useState("all"),[l,r]=p.useState(()=>new Set),h=i=>r(a=>{const s=new Set(a);return s.has(i)?s.delete(i):s.add(i),s}),[d,c]=p.useState(()=>new Set([D(new Date)])),g=i=>c(a=>{const s=new Set(a);return s.has(i)?s.delete(i):s.add(i),s});if(t)return e.jsx(Ce,{slug:t});const y=["all",...new Set(f.flatMap(i=>i.tags))],w=f.filter(i=>n==="all"||i.tags.includes(n)),u=[];return w.forEach(i=>{const a=D(i.date),s=u.find(m=>m.label===a);s?s.notes.push(i):u.push({label:a,notes:[i]})}),e.jsxs("main",{children:[e.jsx(N,{subtitle:"What I'm learning, revising and discovering."}),f.length===0?e.jsx("p",{className:"daily-empty",children:"No notes yet. Check back soon."}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"daily-intro",children:"I try to write a few times a week. Some days I revisit fundamentals, and other days I dig into what I'm learning at work or new topics I'm exploring for myself."}),e.jsx(Me,{notes:f}),y.length>1&&e.jsx("div",{className:"daily-filters",role:"group","aria-label":"Filter by tag",children:y.map(i=>e.jsxs("button",{type:"button","aria-pressed":n===i,onClick:()=>o(i),children:["#",i," ",e.jsx("span",{className:"daily-count",children:i==="all"?f.length:f.filter(a=>a.tags.includes(i)).length})]},i))}),u.map(i=>{const a=d.has(i.label);return e.jsxs("section",{children:[e.jsx("h2",{className:"daily-month",children:e.jsxs("button",{type:"button",className:"daily-month-toggle","aria-expanded":a,onClick:()=>g(i.label),children:[e.jsx("span",{className:"daily-month-caret","aria-hidden":"true",children:"▾"}),i.label,e.jsx("span",{className:"daily-month-count",children:i.notes.length})]})}),a&&e.jsx("ul",{className:"daily-entries",children:i.notes.map(s=>{const m=l.has(s.slug);return e.jsxs("li",{className:"daily-entry","data-open":m,children:[e.jsxs("div",{className:"daily-row",children:[e.jsxs("button",{type:"button",className:"daily-toggle","aria-expanded":m,onClick:()=>h(s.slug),children:[e.jsx("span",{className:"daily-date",children:P(s.date)}),e.jsxs("span",{className:"daily-heading",children:[e.jsx("span",{className:"daily-title",children:s.title}),e.jsx(A,{tags:s.tags})]}),e.jsxs("span",{className:"daily-meta",children:[s.minutes," min"]})]}),e.jsx(v,{to:`/daily/${s.slug}`,className:"daily-open","aria-label":`Open ${s.title} on its own page`,children:"open ↗"})]}),m&&e.jsx(L,{note:s})]},s.slug)})})]},i.label)})]})]})};export{Oe as default};
