# burger
</br>
I developed this appalication using Node, Express using MVC design pattern and native/basic ORM approach. This application </br>
allows a user to add a burger that will be initially displayed in the "Not Devoured" section. Then when one clicks on the </br> 
"Devour" button, the entry shows up in the "Already Devoured"section! </br> 
Once the burger is 'devoured' the user can click the Delete button to delete/remove that entry. This will delete that burger </br>
from the underlying db as well.</br>

I deployed this app to Heroku as well. One thing to note is that the deployed app on Heroku uses the JAWSDB_URL environment </br>
variable for db connection details. For locally hosted version, I am using an environment variable called "MYSQL_PWD" whose value I </br>
stored in an .env file. I then put .env as a file type in my .gitignore file. When accessing this app locally you need to have your </br>
own .env file and provide the value for MYSQL_PWD variable in it.</br>

Please see the gif below to showcase what I developed</br>

![](gifs/burgers.gif)