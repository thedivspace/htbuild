<p align="center"><img src ="https://htbuild.thedivspace.com/assets/img/htbuild-logo%202.png" width="110" /></p>

<p align="center"><b>htBuild</b></br> 🚀 0 - Bytes of Deployment</p>

<hr>


#### Hard things made easy!

htBuild is a framework developed by Divspace. This is the first version of htBuild released in 2021. You need not to install a new tool which in turn forces you to install a programming language you don’t use. 

This easy-to-use framework written in JavaScript, lets you use variables and components in your projects in a very easy method. Feel free to change anything according to your tastes, no need to master much complex framework and/or terms and activities. 

### What's htBuild?

htBuild is a framework that allows user to use variables, components and libraries making a coder's task comprehensible. It does *not* requires you to learn a very complex framework and/ or terms and activities. Since dynamic sites require cloud for deployment, here, static site do not need cloud. htBuild provides **Zero Byte of Deployment** in order to save your storage space on server.

Front-end Developers' life made easy, yet simpler than ever before



### Installation

Get ready to install htBuild by following the steps given below:

1. Install Nodejs from [here](https://nodejs.org/en/download/)
2. Open command line and enter below command

```javascript
npm install @thedivspace/htbuild
```

Know more on -  [htBuild Install Guide](https://htbuild.thedivspace.com/docs/#/install)



### Usage


<p align="center"><img src ="https://htbuild.thedivspace.com/assets/img/file-structure.png" width="380" /></p>


* #### Component 

  Why to use components? 

  => When you code a "repetitive-element" used in the site, the main code expands. Hence, in this scenario, htbuild component proves useful. You create a component file, call/import it into your main code once, or 'n' number of times; thus, keeps your code precise and readable for anyone.

  **Here's how to create an htBuild Component:**

  ​		First, create a file in  ``\components\`` directory with ``component_name.html``
  ​		Then add your component html code in it. 

  ​		Following is the usage of component to use in your code:

  ```html
  <!-- Using Component -->
  <ht-component data-component="/component_name"/>
  ```

  [Click here](https://htbuild.thedivspace.com/docs/#/components) for detailed guidelines to create, update and <b>use components.</b>

  

* #### Global Variable

  A global variable is a variable with global scope, hence accessible throughout the program, unless shadowed.

  ​	Define a global variable in your code:

  ```json
  {
      "[global_variable_name]": "[global_variable_value]"
  }
  ```

  ​	Refer the following to use a global variable in your code:

  ```html
  <!-- Using Variable -->
  <h1>Welcome, {{[global_variable_name]}} </h1>
  ```

  [Click here](https://htbuild.thedivspace.com/docs/#/gvariables) for detailed guidelines to create, update and use <b>global variables.</b>

  

* #### Local Variable 

  Like components, variables can be used whenever and wherever you desire and helps increasing your code performance and readability.

  ​	Define a local variable in your code:

  ```html
  <!-- Defining Variable -->
  <ht-variable data-var"[variable_name]" data-val="[variable_value]"/>
  ```

  ​	Refer the following to use a local variable:

  ```html
  <!-- Using Variable -->
  <h1>Welcome, {{[variable_name]}} </h1>
  ```

  [Click here](https://htbuild.thedivspace.com/docs/#/variables) for detailed guidelines to create, update and use <b>local variables</b> in your code.

  

* #### Live Server

  htBuild has live server which allows any updates in your file to display in real-time in your browser without refresh.



### Documentation

Check out the guide and other docs of htBuild on our [website!](https://htbuild.thedivspace.com/)

You can find more information (and the manual) on the [Documention of htBuild](https://htbuild.thedivspace.com/docs/#/). For questions and discussion, use the discussion forum of [#htbuild](https://discord.gg/2ExYddrt2e) channel on discord.

> htBuild powers up every developer in the simplest way and makes many elements secure, easy to use and work with.



## Contribute

Got a feature request? Please add it as an issue or make a pull request.

If you have a bug to report, please Create New issue to help us easily isolate it.

Would you like to contribute? 
