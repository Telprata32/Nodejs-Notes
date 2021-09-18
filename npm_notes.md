# NPM 
- global command, comes with node 

## How to install them
- **`npm install [Package Name]` (Local Dependancy)** - Use it only in this particular project
- **`npm install -g [Package Name]` (Global Dependancy)** - Use it in any project  

## Starting a project 

1. Method 1: Auto setup  
- **`npm init`** -  Step by step initialisation of project   
- **`npm init -y`** - Initialise project and answer to everything with yes by default  
- package.json file with the details of the project will be menifested

2. Method 2: Manual setup  
- Create the package.json file manually at the root of the project folder

## Creating a remote git repository on Github,etc.

1. Gitignore: node\_modules folder because the node\_modules folder is too big
2. When people download the project, to get all the node modules that the projecy includes as dependancy:
	1. People can just run **`npm install`** to install all dependancies

**Dev Dependancies**  

1. Also included in the Package JSON like the dependancies  
2. Separates the dependancies used for running the package or for others to use the package  
3. Dev Dependancies are only using during the development process of the package  
	
To Install a Package as a Dev Dependancy:
	
`npm install [Package Name] -D`  

or 

`npm install [Package Name] --save-dev`
## Adding scripts to package

1. Scripts can be added to the Package JSON to help utomate certain tasks 
2. Add them to the Package JSON file like so:  


	"scripts": {  
		"start": "node index.js"		 
		"say-hello": "echo 'Hello World!'"  
	}  
3. Certain scripts that come available with npm like `npm start` can just be invoked using `npm start` while others may require for example `npm run say-hello`

## Clearing packages from a projects

- Node packages can be uninstalled using `npm uninstall [Package Name]`
- Alternatively, nuking the node modules, consist deleting the entire "node_modules" folder, and then deleting the "package-lock.json"

## NPX 
- An alternative to having to install a npm package globally, i.e. `npm install -g [Package name]` 
- Just execute the package installed locally from anywhere by using `npx [Package name]`
