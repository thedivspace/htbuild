# htBuild 

#### The Power to Your HTML Code with 0-Bytes of Deployment

Nowadays static websites are back in the trending zone. And it even has a name: htBuild. The fact is after years of sophistication and dynamism in web development, we rediscovered that static websites are pretty fast. Also, there are many reasons for wanting to generate a static site. For example security. htBuild powers up every developer in the simplest way and makes many elements secure, easy to use and work with. 

### What is htBuild ?

htBuild is a framework developed by Divspace. This is the first version of htBuild released in 2021. You need not to install a new tool which in turn forces you to install a programming language you don’t use. 

htBuild is an easy-to-use static site framework written in JavaScript. It lets you use variables and components in static site in a very easy method. Feel free to change anything according to your tastes, no need to master much complex framework and/or terms and activities. 



### Benefits of using htBuild

Boot up to get into a holistically simplest htBuild:

- htBuild is the easiest Static Site Builder Framework

- Variables, components and libraries if used makes a coder's task comprehensible

- Provides clean UI and Direct Platform to build your sites in the best way possible

- It most certainly *not* requires you to learn a very complex framework and/ or terms and activities

- Since dynamic sites require cloud for deployment, here, static site do not need cloud

- Thus, htbuild provides you with *Zero Byte of Deployment* in order to save your storage space on server

  Front-end Developers' life made easy, yet simpler than ever before

### System Requirements

- Desktop or Laptop PC with Windows OS/ MacOS/ Linux or any OS that can run Node.js 
- Node.js 10.13 or later (Follow "Installation Setup of htBuild" step 1. if not installed)

### Installation Setup of htBuild

Get ready to install htBuild by following the steps given below:

1. Install Nodejs from [here](https://nodejs.org/en/download/)
2. Open command line and enter below command

```bash
npm install @thedivspace/htbuild
```



## File Structure

htBuild aims to create a simple, clean and sophisticated environment for development that is easy to comprehend. It allows you to create the files and folders that you require for your htBuild project. 

The File Structure in [htBuild]() plays a key role in putting your project together and organised. So, in htBuild we have three different environments for which the file structure is incorporated. 

They are:

1. Development Environment
2. htBuild Environment
3. Deployment Environment

Following is the file structure that guides you for your htbuild project when it is initialized by  `init`:

```bash
\---
    |
    |--source\
    |
    |--components\
    |
    |--output\
    |
    |--variables.json

```

- ### source

  `source` directory will store all the html files in which we will be adding htbuild tags.

  This directory comes under users' development environment. 

  Here you do the coding, use htBuild components and your created components and compile your project.

- ### components

  `components` directory will allow you to store all html "components". This directory stands under the htBuild environment.

  These components can also have sub components. For creating a component, you just have to go to the `components` directory and can directly start typing your code for that component. You can also have sub-component(s) and start to create your htBuild components. Every single component that you create will have a separate .html file.

- ### output

  `output` directory will have the files generated with *build* command. You need to store all your assets in this directory.  This directory is used for deployment of your htbuild project. `output` directory consists of the user's compiled code after it's compiled from the `source` directory. This compiled code is then uploaded to the server side. Thus, `output` directory comes under the deployment environment. 

- ### variables.json

  `variables.json` will store all global variables to be used in complete website code. This file stands under the htBuild environment as the global variables you use in the complete website code including the components are extracted from this file when in use.



## Variable

- ### Local Variable

  Using a variable comes second, you've to first create and initialize it — more accurately, we call this defining the variable. For this, we type the keyword `data-var` followed by the name you want of the variable with following <space> and the keyword `data-val`  to initialize the variable with the value you want it to hold. You do this by typing the keyword `data-val`,  followed by the value you want to give it. Let's look at a simple example:

#### 	Defining a local variable

​		Define a local variable in your code:

```html
<!-- Defining Variable -->
<ht-variable data-var"name" data-val="John Doe"/>
```

​		 Here we're defining a local variable called `name` with value as `John Doe` .

#### 	Using a local variable

​		Refer the following to use a local variable in your code:

```html
<!-- Using Variable -->
<h1>Welcome, {{name}} </h1>
```

​		 Here we used the local variable- `name` in the code which has a value stored in it.

#### 	After compilation

​		The result after compiling above code would look like the following:

```html
<!-- Using Variable -->
<h1>Welcome, John Doe </h1>
```

​		We used the variable in the code and hence, the result after compiling is displayed with value of the variable.



- ### Global Variable

  A global variable is a variable with global scope, hence accessible throughout the program, unless shadowed. Using a variable comes second, you've to first create and initialize it — more accurately, we call this defining the variable. For this, initialize the variable with the value that you want it to hold (if working with character/string datatype then it should be mentioned in `" "` ). Let's look at a simple example:

#### 	Defining a global variable

​		Define a global variable in your code:

```json
{
    "name": "John Doe"
}
```

 		Here we're defining a global variable called `name` with value as `John Doe` .

#### 	Using a global variable 

​		Refer the following to use a global variable in your code:

```html
<!-- Using Variable -->
<h1>Welcome, {{g_name}} </h1>
```

​		Here we used the global variable- `name` in the code which has a value stored in it.

#### 	After compilation

​		The result after compiling above code would look like the following:

```html
<!-- Using Variable -->
<h1>Welcome, John Doe </h1>
```

​		 We used the variable in the code and hence, the result after compiling is displayed with value of the variable. The variable `name` is accessible throughout the code.



## Components

#### 	Defining an htBuild component

There are basically two operations in regards to components- 

1) Creating a component 

2) Updating a component

**To Create an htBuild Component:**

​		First, create a file in  ``\components\`` directory with ``component_name.html``
​		Then add your component html code in it.

​			Suppose the following are the tabs you want in the navigation bar. This navigation bar is present on every single page of your website. And there are 10 webpages then you might have to create it repeatedly in all code manually thereby visiting every webpage code. What if there are 100 webpages or more? Tedious! 

When you use htbuild, this is a whole different situation. Here, you create an html file in the components directory as "`navbar.html`"consisting all the tabs you want in your website's navigation bar. This html file will act as a component which you will add in one of your webpage code, let's say in the first webpage. And here you can rest easy. 

How and what about the other webpages? 

So, htbuild has taken care of the other webpages. A navigation bar is created on every webpage in your website by adding it once in a code of a webpage.

***Create*** an html file in the "`/components/`" directory as "`navbar.html`" with following code:

```html
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
```

#### 	Using a component

​		For using a component, we use opening an `ht-component` tag  followed by <space> keyword `data-component="<name_of_your_component_file.html>"` hence closing the single line `ht-component` tag.

​		Refer the following to use a component in your code:

```html
<!-- Using Component -->
<ht-component data-component="/navbar"/>
```

#### 	After compilation

​		The result after compiling above code would look like the following:

```html
<!-- Using Component -->
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
```



**To Update an htBuild Component:**

After you've created a component, you might want to make changes to it. Htbuild allows you to easily change the contents of your component(s). 

Suppose there are 10 webpages then you might have to make changes to all code manually thereby visiting every page and changing the code. What if there are 100 webpages or more? It's pretty hard to make through. In htbuild, you only make few required changes in a single webpage code and the rest webpages' codes are updated. Thus, htbuild handles it for you.

***Update*** a tab "Contact" to "Gallery" in the navigation bar.

​		 You have an html file in the "/components/" directory as "navbar.html" with following code:

```html
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
```

​		 Following are the changes you made in the html file "navbar.html", present in the "/components/" directory with following code:

```html
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Gallery</li>
</ul>
```

#### 	Using a component

​		 Refer the following to use a component in your code:

```html
<!-- Using Component -->
<ht-component data-component="/navbar"/>
```

#### 	After compilation

​		The result after compiling above code would look like:

```html
<!-- Using Component -->
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Gallery</li>
</ul>
```

Make as many components as you like!

## Live Server

Live server is to be initiated through *serve* command. For this, check the "CLI Commands" section.

A live server helps you to keep your source files updated if any changes are made to them. This live server automatically refreshes, thus code without worrying about "ctrl+s" saving changes every single time.



## Demo

Following are some examples of using the elements which you can try out and see how htbuild works:

#### Syntax

##### Defining a Component

__File Path__ : Components/navbar.html

```
<nav>
	<ul>
		<li>Home</li>
		<li>About</li>
		<li>Contact</li>
	</ul>
</nav>
```

##### Using a Component

```html
<html>
    <head>
        <title>htBuild Demo</title>
    </head>
    <body>
        <ht_component data-component="/navbar">
    </body>
</html>


```

##### Defining & Using a Variable

````
<html>
    <head>
        <title>htBuild Demo</title>
    </head>
    <body>
        <ht_variable data-var"name" data-val="Akash">
        
        <p>Hello everyone my name is {{name}}, I developed htBuild</p>
        
        <footer>
        	Designed & Developed by {{name}}
        </footer>
    </body>
</html>

````



## CLI Commands

- ### init

  ```bash
  htbuild init
  ```

  The `init` command will initialize your htbuild project and will create required folders and files for htbuild. htBuild uses a particular directory structure to organize your site. Specifically, it relies on the existence of three directories: `source`, `components`, `output`, and it expects a file called `variables.json`.  The directory that contains these folders is the sum of your htBuild site.

  You can create a fresh *htBuild* site by running the command `htbuild init`. For all *htBuild* commands, the path from which the command was run will be considered the directory.

  It might be a good idea to track and version the content of your site. Adding the contents of `source`, `components`, and `output` to a source control system such as git would accomplish this goal. 

- ### build

  ```bash
  htbuild build
  ```

  `build` command compiles the source html file and builds a compiled html file in the output directory. It should generally be called during installation, but if you need to run it directly, you can.

  

- ### serve

  ```bash
  htbuild serve
  ```

  `serve` command will start a live server at port 3000 from the /output directory.

  It will automatically hence refresh when you make any changes in your source files.

- ### help

  ```bash
  htbuild help
  ```

  `help` command will guide you through all the commands you need. 
  
  ```bash
  htbuild help <term>
  ```
  
  If given a term , then shows the appropriate documentation page.



## FAQs

- #### What is htbuild?

<dt>htBuild is an easy and simplest static site builder framework to help developers build static sites with less mess!</dt>



- #### How difficult it is to learn htbuild?

<dt>Because it has a straight learning curve, htbuild is easy to learn.</dt>



- #### Who can use htbuild?

<dt>This tool is for all, specially created for all the front-end developers who wish to develop static websites.</dt>



- #### Why so simple?

<dt>As said "build static sites with *less mess*!", it is simpler than most existing tools. Additionally, it has minimal and useful features that make it look simple, yet elegant.</dt>



- #### What's added?

<dt>Little less to mention, 

- "0-byte" deployment
- Live server
- Safe and Secure (200%)
- Less dependencies
- No cloud needed (Yay!)
- Clean and sophisticated UI 

</dt>

________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________



###### **::::black_nib:Note:::**

##### <u>***Hey Techie,***</u> 

##### <u>***This is your tool, make the most and best out of it!***</u>
