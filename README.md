# Task Details
## Uttiya
   - Blog Management - Add Blog, Search Blog (both for my blogs and all blogs), Edit Blog, Delete Blog
   - Category Management - Add Category, See all categories, Search blogs by categories
## Sudarsh
   - Login Management
   - User Session Management
## Dharshan
   - User Profile Management
   - Add/Edit Comments 

# Steps to run the project:

There are two different ways to access the APIs.

1. The project is deployed to vercel with the hostUrl as `https://blog-verse-server.vercel.app`. Use the cURL commands provided in the next section from postman or any other API testing tool.
2. To run the application in your local follow the given steps:

   a. Clone the project using `git clone` command.

   b. Install the dependencies using `npm install`.

   c. Start the server using `npm start`.

   d. Assuming the application starts in PORT: 3002 replace the hostURL with `localhost:3002`.

# API specifications

## Author: Uttiya

### Blog Management

#### Create Blog

Request: 
```
curl --location 'https://blog-verse-server.vercel.app/api/blogs' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Git: SCM",
    "body": "<p>Git is a distributed version control system designed for tracking changes in source code during software development. It enables collaboration among developers by allowing them to work on the same codebase simultaneously and manage changes independently. Git maintains a history of all modifications made to files, making it easy to revert to previous versions if needed. It supports branching and merging, enabling developers to work on new features or bug fixes in isolation and then integrate them seamlessly into the main codebase. Git is widely used in the software industry due to its speed, efficiency, and robust version control capabilities.</p>",
    "createdBy": "User1",
    "category": "65d41679249f4fd77b219ef8"
}'
```
Response:
```
{
    "id": "65e928f10c967ac1105263f0"
}
```

#### View All Blogs

Request: `curl --location 'https://blog-verse-server.vercel.app/api/blogs/'`

Response: 

```
[
    {
        "_id": "65d1768def8d99161902a511",
        "title": "ChatGPT",
        "userName": "User1",
        "category": "programming",
        "createdDate": "Feb 18, 2024",
        "summary": "ChatGPT is an AI-powered language model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It belongs to the family of Generative Pre-trained Transformers (GPT), which are large-scale ne ..."
    },
    {
        "_id": "65e8e0d13b94523006426602",
        "title": "Introduction to Python Programming",
        "userName": "User1",
        "category": "programming",
        "createdDate": "Mar 6, 2024",
        "summary": "Python is a versatile and beginner-friendly programming language known for its simplicity and readability. Originally developed by Guido van Rossum in the late 1980s, Python has since become one of the most popular languages in the world, w ..."
    },
    
    ... (truncated)
]
```

#### Filter blogs

Request: `curl --location 'https://blog-verse-server.vercel.app/api/blogs/?createdBy=65cceadebbed8dce9c357bb6&searchQuery=Idea&category=tools'`

Response:
```
[
    {
        "_id": "65e8e1813b9452300642663f",
        "title": "IntelliJ IDEA",
        "userName": "User1",
        "category": "tools",
        "createdDate": "Mar 6, 2024",
        "summary": "IntelliJ IDEA, developed by JetBrains, is a powerful integrated development environment (IDE) primarily designed for Java development but also supports various programming languages like Kotlin, Groovy, Scala, and more. It offers a comprehe  ..."
    }
]
```


#### Get single blog

Request: `curl --location 'https://blog-verse-server.vercel.app/api/blogs/65d1768def8d99161902a511'`

Response:
```
{
    "_id": "65d1768def8d99161902a511",
    "title": "ChatGPT",
    "userName": "User1",
    "category": "programming",
    "createdDate": "Feb 17, 2024",
    "body": "<p>ChatGPT is an AI-powered language model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It belongs to the family of Generative Pre-trained Transformers (GPT), which are large-scale neural network architectures trained on vast amounts of text data. ChatGPT uses the GPT architecture, specifically GPT-3.5, which is one of the most advanced iterations of the model. What sets ChatGPT apart is its ability to generate contextually relevant responses across a wide range of topics and tasks. It can engage in conversations, answer questions, write essays, generate code snippets, assist with creative writing, and much more. The model achieves this by leveraging its deep understanding of language structure, grammar, semantics, and context. ChatGPT operates by processing input text and generating responses based on patterns learned during its training on diverse datasets. It doesn't rely on pre-written responses but instead generates text dynamically based on the input it receives. This allows ChatGPT to adapt to various conversation styles, tones, and topics. While ChatGPT demonstrates remarkable capabilities, it's not without limitations. It may occasionally produce nonsensical or inappropriate responses, especially when presented with ambiguous or contextually complex inputs. Additionally, it's essential to use ChatGPT responsibly, as it can potentially propagate misinformation or biased content if not monitored carefully. Overall, ChatGPT represents a significant advancement in natural language processing technology, offering a glimpse into the potential of AI-driven conversational agents to augment human communication and productivity.</p>"
}
```

#### Edit blog

Request:

```
curl --location --request PUT 'https://blog-verse-server.vercel.app/api/blogs/65d1768def8d99161902a511' \
--header 'Content-Type: application/json' \
--data '{
    "body": "<p>ChatGPT is an AI-powered language model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It belongs to the family of Generative Pre-trained Transformers (GPT), which are large-scale neural network architectures trained on vast amounts of text data. ChatGPT uses the GPT architecture, specifically GPT-3.5, which is one of the most advanced iterations of the model. What sets ChatGPT apart is its ability to generate contextually relevant responses across a wide range of topics and tasks. It can engage in conversations, answer questions, write essays, generate code snippets, assist with creative writing, and much more. The model achieves this by leveraging its deep understanding of language structure, grammar, semantics, and context. ChatGPT operates by processing input text and generating responses based on patterns learned during its training on diverse datasets.</p>"
}'
```

Response:

```
{
    "_id": "65d1768def8d99161902a511",
    "title": "ChatGPT",
    "body": "<p>ChatGPT is an AI-powered language model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It belongs to the family of Generative Pre-trained Transformers (GPT), which are large-scale neural network architectures trained on vast amounts of text data. ChatGPT uses the GPT architecture, specifically GPT-3.5, which is one of the most advanced iterations of the model. What sets ChatGPT apart is its ability to generate contextually relevant responses across a wide range of topics and tasks. It can engage in conversations, answer questions, write essays, generate code snippets, assist with creative writing, and much more. The model achieves this by leveraging its deep understanding of language structure, grammar, semantics, and context. ChatGPT operates by processing input text and generating responses based on patterns learned during its training on diverse datasets.</p>",
    "createdBy": "65cceadebbed8dce9c357bb6",
    "category": "65d15f408813ede4815d3f8d",
    "createdDate": "2024-02-18T03:16:29.817Z",
    "comments": [],
    "__v": 0,
    "deletedDate": null
}
```

#### Delete blog

Request: `curl --location --request DELETE 'https://blog-verse-server.vercel.app/api/blogs/65d1768def8d99161902a511'`

Response:
```
{
    "_id": "65d1768def8d99161902a511",
    "title": "ChatGPT",
    "body": "<p>ChatGPT is an AI-powered language model developed by OpenAI, designed to understand and generate human-like text based on the input it receives. It belongs to the family of Generative Pre-trained Transformers (GPT), which are large-scale neural network architectures trained on vast amounts of text data. ChatGPT uses the GPT architecture, specifically GPT-3.5, which is one of the most advanced iterations of the model. What sets ChatGPT apart is its ability to generate contextually relevant responses across a wide range of topics and tasks. It can engage in conversations, answer questions, write essays, generate code snippets, assist with creative writing, and much more. The model achieves this by leveraging its deep understanding of language structure, grammar, semantics, and context. ChatGPT operates by processing input text and generating responses based on patterns learned during its training on diverse datasets. It doesn't rely on pre-written responses but instead generates text dynamically based on the input it receives. This allows ChatGPT to adapt to various conversation styles, tones, and topics. While ChatGPT demonstrates remarkable capabilities, it's not without limitations. It may occasionally produce nonsensical or inappropriate responses, especially when presented with ambiguous or contextually complex inputs. Additionally, it's essential to use ChatGPT responsibly, as it can potentially propagate misinformation or biased content if not monitored carefully. Overall, ChatGPT represents a significant advancement in natural language processing technology, offering a glimpse into the potential of AI-driven conversational agents to augment human communication and productivity.</p>",
    "createdBy": "65cceadebbed8dce9c357bb6",
    "category": "65d15f408813ede4815d3f8d",
    "createdDate": "2024-02-18T03:16:29.817Z",
    "comments": [],
    "__v": 0,
    "deletedDate": "2024-03-07T02:43:34.057Z"
}
```

### Category Management

#### Create Category

Request:

```
curl --location 'https://blog-verse-server.vercel.app/api/categories' \
--header 'Content-Type: application/json' \
--data '{
    "name": "design principles"
}'
```

Response:
```
{
    "name": "design principles",
    "_id": "65e9fa701c91e22919bc3ec9",
    "createdDate": "2024-03-07T17:33:36.018Z",
    "__v": 0
}
```

#### View Categories

Request:

```
curl --location 'https://blog-verse-server.vercel.app/api/categories'
```

Response:
```
[
    "programming",
    "tools",
    "framework",
    "design principles"
]
```