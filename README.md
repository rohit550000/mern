<h1>How to run this  project</h1>
<ul>
    <li>Clone repo or Download zip file and cd into it</li>
    <li><b>cd to backend folder <b></li>
    <li><b>run</b> : npm i</li>
    <li><b>run</b> : <b>New-Item -ItemType file .env<b> or <b>touch .env<b> to create a .env file </li>
    <li><b>Open env file </b> : 
      <h1> DATABASE_URL="Your mongo db connection string" </h1>
      <h1> CLIENT_URL= your react localhost path </h1>
       <h1>PORT = your port </h1>
    </li>
    <li><b>run</b> : php artisan config:clear</li>
    <li><b>run</b> : php artisan serve</li>
    <li><b>Visit</b> to localhost:8000 in your browser</li>
</ul>
