
# FB-API

Facebook API integration is to get the Basic Information of LoggedIn User.
It Authenticate the User via Facebook Oath, and get the Basic Information




## API Reference

#### Get all items

```http
  GET /
```

#### Response

```{
    "id":"5328467753912882",
    "email":"sathishkrish20@gmail.com",
    "first_name":"Sathish",
    "last_name":"Krishnan",
    "metadata":{
        "fields":[
            {   "name":"about",
                "description":"*Returns no data as of April 4, 2018.*",
                "type":"string"
            }
        ]
    }
}            
```






## Run Locally

Clone the project

```bash
  git clone https://github.com/sathishkrishnan20/fb-api.git
```

Go to the project directory

```bash
  cd fb-api
```

Install dependencies

```bash
  npm install
```

Env Variables

```bash
    Create a .env file under root 
    Copy the env Variables from envsample and paste them to .env file.
```

Start the server

```bash
  npm run dev
```


## Deployment

To build the project run

```bash
  npm run build
```

To deploy this project run

```bash
  npm run start
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

