# Automation Test for Technical Interview #


## Table of Contents

- [Getting Started](#installation)
  * [Prerequisites](#prerequisites)
  * [Project Setup](#install-project)
- [Usage](#usage)
- [Conclusion](#conclusion)

## <a name="section-installation">Getting Started</a>

### Prerequisites

Required

- NodeJS 12

Recommended

- VS Code
## <a name="install-project">Project Setup</a> 

You should run this command:
```bash
  npm install
``` 

## <a name="usage">Usage</a>

### Run API test

```bash
  npm run cypress:run
```

### Generate HTML Report
 To generate the html report, this command must first be executed, to generate the report that groups all the results in a single file.
```bash
  npm run cypress:report
```

Then you need to run the following command to generate the results.html file.
```bash
  npm run cypress:report:html
```

So the structure must show like this:
   <br> mochawesome-report
   <br> |-- assets
   <br> |-- results.html

