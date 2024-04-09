<h1>How to run this  project</h1>
<ul>
    <li>Clone repo or Download zip file and cd into it</li>
    <li><b>cd to backend folder <b></li>
    <li><b>run</b> : npm i</li>
    <li><b>run</b> : <b>New-Item -ItemType file .env<b> or <b>touch .env<b> to create a .env file </li>
    <li><b>Open env file </b> : 
      <h5> DATABASE_URL="Your mongo db connection string" </h5>
      <h5> CLIENT_URL= your react localhost path </h5>
      <h5>PORT = your port </h1>
    </li>
    <li><b>Eaxmple or you can use this, just past in env</b> : 
      <h5> DATABASE_URL="mongodb+srv://root:root@real-state-mern-project.c4485ph.mongodb.net/realstate?retryWrites=true&w=majority&appName=real-state-mern-project" </h5>
      <h5> CLIENT_URL= http://localhost:5173 </h5>
      <h5>PORT = 8801</h1>
    </li>
    <li><b>run</b> : php artisan config:clear</li>
    <li><b>run</b> : php artisan serve</li>
    <li><b>Visit</b> to localhost:8000 in your browser</li>
</ul>
