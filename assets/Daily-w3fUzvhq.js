const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NoteMarkdown-DZl4HOCR.js","assets/index-D8hNeBYx.js","assets/index-BwJg-BCi.css"])))=>i.map(i=>d[i]);
import{u as I,r as y,j as e,P as v,L as f,_ as j}from"./index-D8hNeBYx.js";const T=`---
date: 2026-10-03
tags:
  - bayesian
---
I picked up a Bayesian Statistics textbook. It's common in everyday life to collect data to support our existing beliefs. Rather, the Bayesian approach starts with a prior belief, then assessing the data, and then most importantly, updating those beliefs based on how well your hypothesis explains the data. Evaluating competing hypotheses can help you update beliefs based on those hypotheses with greater probabilities. 
A bit untechnical for a daily-learning but hey ho, it be that way sometimes. 
`,P=`---
date: 2026-09-23
tags:
  - machine-learning
---
After my 9-5, worked on coding multiple-linear regression from scratch. It had been a while since I had studied cost function, gradient descent and thought I was getting a little bit rough with the concepts. So I spent the last few days attempting to learn and use online resources, textbooks, etc. to review without relying on AI. 

A helpful resource while reviewing my fundamentals is this course Deep Learning AI's [Machine learning Specialization](https://www.deeplearning.ai/specializations/machine-learning?_gl=1*4kzwf1*_ga*MTEyNzM2NDc2Ny4xNzg5MTgzMjk5*_ga_FR2MZ1VLMS*czE3OTAyOTE0OTQkbzYkZzEkdDE3OTAyOTE1MTkkajM1JGwwJGgw). 

And late last night I finally was able to do it! My notebook has some pretty scrappy manual learning-rate logging but happy to have done it all with my brain. Next, I will be reviewing the lectures for logistic regression! On and forwards!  

![[Pasted image 20260924191300.png|492]]`,N=`---
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

`,A=`---
date: 2026-10-10
tags:
  - models
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

`,z=`---
tags:
  - probability
  - machine-learning
  - agents
date: 2026-09-24
---
Short note for today. Spent some time getting my website updated so I can upload my daily-learnings. I set up a folder to store my Markdown notes (I'm using Obsidian as my UI) and have the folder synced to Github to make this daily learning writing process as easy as possible.
Lots of learnings today:
1) Re-learned that the logistic regression function is basically the linear regression model outputs (weights * x-values plus b-intercept) - after it is transformed by going through the sigmoid function. Since the outputs of the sigmoid function are between 0 and 1, this means the logistic function can have its outputs interpreted as a probability.  
![[Pasted image 20260925014557.png]]

2) Weighted probabilities. I tried a weighted-probability [puzzle](https://leetcode.com/problems/random-pick-with-weight/) today which was definitely challenging. I understand the way to solve these problems in general is to take the number of possible outcomes and ascribe probabilities for the range depending on the problem. This problem in particular requires you to compute prefix sums so this means it's probability of it or a number below it is equal to it's prefix sum over sum of all numbers. You then are asked to return an index - and if you randomly generate a number in the range of the prefix-sum total, you can identify which index would be returned. This type of thinking is something I understand now and will further develop. 
3) Started using Muse. Hehe I call mine Rocky. 
[![Rocky amaze - “Fist My Bump!” - Project Hail Mary Andy Weir T-Shirt|403](https://images.teepublic.com/derived/production/designs/79318467_0/1756103300/i_p:c_ffffff,s_630,q_90.jpg)](https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.teepublic.com%2Ft-shirt%2F79318467-rocky-amaze-fist-my-bump-project-hail-mary-andy-we&ved=0CBYQjRxqFwoTCKCfz9iIiZcDFQAAAAAdAAAAABA5&opi=89978449)`,S=`---
date: 2026-10-07
tags:
  - models
---
Have come quite a long way to re-understanding logistic regression today. I find Andrew Ng’s lectures very helpful for gaining intuition to think about these models. 

To review, linear regression works well when you want to predict some continuous value. However, let’s say you wanted to predict a class instead i.e. 0 or 1. If so, then you would have to set a threshold so some values are represented by the 0 class and others by the 1 class. What’s important to remember is that this linear regression line is unbounded. So if there's a change in the line depending on the data - especially on extreme ends, the line could wrongly misclassify values. Linear regression is also not great when computing probabilities as it can extend below 0 and above 1. Instead, if you take this line, and transform it through the sigmoid function - you will get the logistic function which outputs a probability (P). What's most important about this curve, is that it is bounded so if you have very small X-values, the line will asymptote towards 0 and if you have very very large X-values, the line will asymptote towards 1. 
![[Pasted image 20261007205245.png]]

If you needed to interpret this model such as through the following example, you consider the log of odds. For instance, defaulting increases by 0.102 log of odds with every day of being delinquent ;) The log odds of defaulting with B-usage is 0.008 higher compared to not having B-usage. (I'm definitely off in my interpretation of these acronyms, forgive me reader as I pulled this image from Google).  ![[Pasted image 20261007205532.png]]

In order to retrieve the best logistic regression function, the method of Maximum Likelihood Estimation is used which gives us the cost function for logistic regression. The cost function from linear regression cannot be used as the squared-difference between prediction through sigmoid and the actual target label would result in a non-convex curve. This means gradient descent may not be able to find the global minimum and could land in a local minimum instead.![[Pasted image 20261007205955.png]]
To find the best line, we use the process of gradient descent: you compute the derivative of the cost to update the weights and b-value by taking a step (through learning rate) in the opposite direction of the derivative. This means you get values that are closer to the minimum cost/error. We repeat this process until the costs/error plateaus. These are the formulas here. ![[Pasted image 20261007210256.png]]

`,L=`---
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
We need activation functions in a neural network different than just linear in order to capture non-linear patterns in the data. 

There's a reason the field has progressed towards using ReLU activation functions (especially within the hidden layers).
It's because:
1) Compared to sigmoid function which includes exponentials, it is quicker to compute ReLU and this leads to more efficiency during gradient descent.
2) The sigmoid function has two parts of the graph that are flat, so minimizing the loss with gradient descent process is harder than in ReLU which only has a single flat portion in the curve. This causes a vanishing gradient problem because the partial derivative in these regions would be close to 0 in these flat regions which means that weight updates would stall.
However, for the output layer (depending on the final answer), the above activation functions may be useful in those cases.`,E=`---
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

- With multi-class classification, the total amount of neurons that will be composing the output layer will correspond to the number of classes. For example, if 10 classes, there will be 10 neurons within the final output layer (and if using Softmax activation function), these outputs are the probabilities for each class summing to 1. `,D=`---
date: 2026-10-21
tags:
  - machine-learning
  - neural-networks
---
![[Pasted image 20261021211749.png|344]]

Apologies for the longer than usual absence. Had a very fun weekend away from technology (cottage trip) and then immediately entered a very busy week of work! I am a little busy but wanted to revise code for neural network using TensorFlow. Maybe one day I'll attempt to code this from scratch! 

Above, I’m creating a model with 3 layers of 25, 15, and 1 unit/neuron. Each neuron uses a sigmoid activation, the same function used in logistic regression, so every neuron outputs a value between 0 and 1, a measure to how strongly it’s 'activating.' The final single neuron gives the probability that y = 1, which means this is a binary classifier.

The model is made with Sequential. Compile then decides how it learns. You have the loss function (binary cross-entropy) and the optimizer (Adam, with a learning rate of 0.001)

What’s interesting is that the actual learning, i.e. backpropagation, happens behind the scenes in Fit. Here it fits to X and y for 20 epochs, where one epoch is a full pass through the data.`,M=`---
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
`,O=`---
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

With one image, many containers can be made so the same code can be run in identical ways on any machine. Next steps will involve implementing for personal projects. `,C="/assets/Pasted%20image%2020260924191300-BotCu84p.png",F="/assets/Pasted%20image%2020260925014557-CUN6aFzc.png",$="/assets/Pasted%20image%2020260927232447-BHnPyyim.png",B="/assets/Pasted%20image%2020261007205245-cQ3e1TEj.png",R="/assets/Pasted%20image%2020261007205532-Bnt2ZN3m.png",q="/assets/Pasted%20image%2020261007205955-VykKnMiw.png",W="/assets/Pasted%20image%2020261007210256-ieE7Lq9q.png",H="/assets/Pasted%20image%2020261010221214-CDON0d8N.png",U="/assets/Pasted%20image%2020261010221801-9t8hKDQC.png",X="/assets/Pasted%20image%2020261010222627-DeOKMYf8.png",Y="/assets/Pasted%20image%2020261011213349-BVTOg4AR.png",Q="/assets/Pasted%20image%2020261011214837-Cdgp8Srz.png",V="/assets/Pasted%20image%2020261021211749-BpivxPIX.png",G={"data informs beliefs, beliefs do not inform data":"2026-10-03","first entry!":"2026-09-24","fri-yay":"2026-09-25","logistic regression from scratch":"2026-10-10","logistic regression learnings and probabilities":"2026-09-25","logistic regression revision":"2026-10-07","neural net training":"2026-10-22","neural nets review":"2026-10-10","neural nets with Tensorflow":"2026-10-19","start of week":"2026-09-28","weekend energy whelp":"2026-09-27"},K=Object.assign({"../content/daily/data informs beliefs, beliefs do not inform data.md":T,"../content/daily/first entry!.md":P,"../content/daily/fri-yay.md":N,"../content/daily/logistic regression from scratch.md":A,"../content/daily/logistic regression learnings and probabilities.md":z,"../content/daily/logistic regression revision.md":S,"../content/daily/neural net training.md":L,"../content/daily/neural nets review.md":E,"../content/daily/neural nets with Tensorflow.md":D,"../content/daily/start of week.md":M,"../content/daily/weekend energy whelp.md":O}),Z=Object.assign({"../content/daily/media/Pasted image 20260924191300.png":C,"../content/daily/media/Pasted image 20260925014557.png":F,"../content/daily/media/Pasted image 20260927232447.png":$,"../content/daily/media/Pasted image 20261007205245.png":B,"../content/daily/media/Pasted image 20261007205532.png":R,"../content/daily/media/Pasted image 20261007205955.png":q,"../content/daily/media/Pasted image 20261007210256.png":W,"../content/daily/media/Pasted image 20261010221214.png":H,"../content/daily/media/Pasted image 20261010221801.png":U,"../content/daily/media/Pasted image 20261010222627.png":X,"../content/daily/media/Pasted image 20261011213349.png":Y,"../content/daily/media/Pasted image 20261011214837.png":Q,"../content/daily/media/Pasted image 20261021211749.png":V}),J=Object.values([G])[0]||{},ee=Object.fromEntries(Object.entries(Z).map(([t,a])=>[t.split("/").pop(),a])),b=t=>t.trim().replace(/^["']|["']$/g,"");function te(t){const a=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!a)return{data:{},body:t};const n={};let s=null;for(const o of a[1].split(/\r?\n/)){const h=o.match(/^\s+-\s*(.*)$/);if(h&&s){Array.isArray(n[s])||(n[s]=[]),n[s].push(b(h[1]));continue}const d=o.match(/^([\w-]+):\s*(.*)$/);if(!d)continue;s=d[1];const c=d[2].trim();n[s]=c.startsWith("[")&&c.endsWith("]")?c.slice(1,-1).split(",").map(b).filter(Boolean):b(c)}return{data:n,body:t.slice(a[0].length)}}function ne(t,a,n){const s=a.split("/").pop(),o=ee[s];return o?`![${s}](<${o}>${n?` "${n}"`:""})`:""}function ae(t){return t.replace(/%%[\s\S]*?%%/g,"").replace(/!\[\[([^\]|#]+\.(?:png|jpe?g|gif|webp|svg))(?:\|(\d+)(?:x\d+)?)?\]\]/gi,ne).replace(/!\[\[[^\]]*\]\]/g,"").replace(/\[\[([^\]|#]+)(?:#[^\]|]*)?\|([^\]]+)\]\]/g,"$2").replace(/\[\[([^\]|#]+)(?:#[^\]]*)?\]\]/g,"$1").replace(/^## Notes\s*$/m,"").trim()}const ie=/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$|`[^`\n]+`/gm,se=/\uE000(\d+)\uE000/g;function oe(t,a){const n=[],s=t.replace(ie,h=>`${n.push(h)-1}`);return a(s,h=>h.replace(se,(d,c)=>n[c]))}const re=/^\d{4}-\d{2}-\d{2}$/;function le(t,a){const n=t.match(/\d{4}-\d{2}-\d{2}/),s=n?n[0]:a.date||a.created||J[t]||"",o=new Date(`${String(s).slice(0,10)}T12:00:00`);return isNaN(o)?null:o}const de=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"note",g=Object.entries(K).map(([t,a])=>{const n=t.split("/").pop().replace(/\.md$/,""),s=de(n),{data:o,body:h}=te(a);let d=o.title;const c=oe(h,(l,m)=>{let p=ae(l);const w=p.match(/^# (.+)$/m);return!d&&w&&(d=m(w[1].trim()),p=p.replace(w[0],"").trim()),m(p)});!d&&!re.test(n)&&(d=n);const u=le(n,o),i=(Array.isArray(o.tags)?o.tags:o.tags?[o.tags]:[]).map(l=>l.replace(/^#/,"")).filter(l=>l&&l!=="daily"),r=c.split(/\s+/).filter(Boolean).length;return{slug:s,title:d||(u?u.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}).toLowerCase():s),date:u,tags:i,content:c,minutes:Math.max(1,Math.round(r/200))}}).filter(t=>t.content).sort((t,a)=>(a.date||0)-(t.date||0)),he=y.lazy(()=>j(()=>import("./NoteMarkdown-DZl4HOCR.js"),__vite__mapDeps([0,1,2]))),_=t=>t?t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}).toLowerCase():"",ce=t=>t?t.toLocaleDateString("en-US",{month:"long",year:"numeric"}).toLowerCase():"undated";function x({tags:t}){return t.length===0?null:e.jsx("span",{className:"daily-tags",children:t.map(a=>e.jsxs("span",{children:["#",a]},a))})}function k({note:t}){return e.jsx("div",{className:"daily-body",children:e.jsx(y.Suspense,{fallback:e.jsx("p",{className:"daily-loading",children:"loading…"}),children:e.jsx(he,{content:t.content})})})}function ge({slug:t}){const a=g.findIndex(h=>h.slug===t),n=g[a],s=g[a-1],o=g[a+1];return e.jsxs("main",{children:[e.jsx(v,{subtitle:"This page is a record of my daily learning logs."}),e.jsx("p",{children:e.jsx(f,{to:"/daily",children:"← all notes"})}),n?e.jsxs("article",{children:[e.jsxs("p",{className:"daily-date",children:[_(n.date)," · ",n.minutes," min"]}),e.jsx("h1",{className:"daily-single-title",children:n.title}),e.jsx(x,{tags:n.tags}),e.jsx(k,{note:n}),e.jsxs("nav",{className:"daily-pager","aria-label":"More notes",children:[o?e.jsxs(f,{to:`/daily/${o.slug}`,children:["← ",o.title]}):e.jsx("span",{}),s&&e.jsxs(f,{to:`/daily/${s.slug}`,children:[s.title," →"]})]})]}):e.jsx("p",{children:"This note isn't published."})]})}const me=()=>{const{slug:t}=I(),[a,n]=y.useState("all"),[s,o]=y.useState(()=>new Set),h=i=>o(r=>{const l=new Set(r);return l.has(i)?l.delete(i):l.add(i),l});if(t)return e.jsx(ge,{slug:t});const d=["all",...new Set(g.flatMap(i=>i.tags))],c=g.filter(i=>a==="all"||i.tags.includes(a)),u=[];return c.forEach(i=>{const r=ce(i.date),l=u.find(m=>m.label===r);l?l.notes.push(i):u.push({label:r,notes:[i]})}),e.jsxs("main",{children:[e.jsx(v,{subtitle:"This page is a record of my daily learning logs."}),g.length===0?e.jsx("p",{className:"daily-empty",children:"No notes yet. Check back soon."}):e.jsxs(e.Fragment,{children:[d.length>1&&e.jsx("div",{className:"daily-filters",role:"group","aria-label":"Filter by tag",children:d.map(i=>e.jsxs("button",{type:"button","aria-pressed":a===i,onClick:()=>n(i),children:["#",i," ",e.jsx("span",{className:"daily-count",children:i==="all"?g.length:g.filter(r=>r.tags.includes(i)).length})]},i))}),u.map(i=>e.jsxs("section",{children:[e.jsx("h2",{className:"daily-month",children:i.label}),e.jsx("ul",{className:"daily-entries",children:i.notes.map(r=>{const l=s.has(r.slug);return e.jsxs("li",{className:"daily-entry","data-open":l,children:[e.jsxs("div",{className:"daily-row",children:[e.jsxs("button",{type:"button",className:"daily-toggle","aria-expanded":l,onClick:()=>h(r.slug),children:[e.jsx("span",{className:"daily-date",children:_(r.date)}),e.jsxs("span",{className:"daily-heading",children:[e.jsx("span",{className:"daily-title",children:r.title}),e.jsx(x,{tags:r.tags})]}),e.jsxs("span",{className:"daily-meta",children:[r.minutes," min"]})]}),e.jsx(f,{to:`/daily/${r.slug}`,className:"daily-open","aria-label":`Open ${r.title} on its own page`,children:"open ↗"})]}),l&&e.jsx(k,{note:r})]},r.slug)})})]},i.label))]})]})};export{me as default};
