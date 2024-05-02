<h1>How to run this  project  <-  Please follow every step to run the project successfully -> </h1>
<ul>
    <li>Clone repo or Download zip file and cd into it</li>
    <h3>Steps for backend</h3>
    <li><b>cd to backend folder <b></li>
    <li><b>run</b> : npm i</li>
    <li><b>run</b> : <b>New-Item -ItemType file .env  <b> or  <b>touch .env   <b> to create a .env file </li>
    <li><b>Open env file and put this all below veriables</b> : 
      <h5> DATABASE_URL="Your mongo db connection string" </h5>
      <h5> CLIENT_URL= your react localhost path </h5>
      <h5> PORT = your port </h5>
    </li>
    <li><b>Eaxmple or you can use this, just past in env</b> : 
      <h5> DATABASE_URL="mongodb+srv://root:root@real-state-mern-project.c4485ph.mongodb.net/realstate?retryWrites=true&w=majority&appName=real-state-mern-project" </h5>
      <h5> CLIENT_URL= http://localhost:5173 </h5>
      <h5>PORT = 8801</h1>
    </li>
    <li><b>run</b> : npm run dev </li>
    <li><b>Keep this server running and open a new terminal with the backend directory only</b></li>
    <li><b>below command is for generating fack data and to update backend model and schema</b></li>
    <li><b>run: </b> npx prisma db push</li>
    <li><b>run : </b> node seed.js</li>
    <h3>Steps for Frontend</h3>
    <li><b>cd to frontend folder <b></li>
    <li><b>run</b> : <b>New-Item -ItemType file .env<b> or <b>touch .env<b> to create a .env file </li>
    <li><b>Open env file and put this veriable</b> : 
      <h5>VITE_APP_BASE_URL = http://localhost:8801/api</h5>
    </li>
    <li>remeber 8801 was the backend server port in this example</li>
     <li><b>run :</b> npm i</li>
    <li><b>run :</b> npm run dev</li>
</ul>


![image](https://github.com/rohit550000/mern/assets/123115001/9afb0cb6-62ea-4c47-b995-c9ef41981355)
![image](https://github.com/rohit550000/mern/assets/123115001/48c697e5-044c-464d-b10f-b3e3e03948e0)
![image](https://github.com/rohit550000/mern/assets/123115001/107b2f2c-e49c-4de8-b591-89344eb39320)
![image](https://github.com/rohit550000/mern/assets/123115001/18616570-6a2a-491b-a79c-57f86dd82cdf)
![image](https://github.com/rohit550000/mern/assets/123115001/afe24185-5395-46c8-9f33-42bcfc03e49d)
![image](https://github.com/rohit550000/mern/assets/123115001/be6203fe-d788-430f-a68a-afc1497d7d07)
![image](https://github.com/rohit550000/mern/assets/123115001/69a2e226-8076-4fb6-9ef1-ff566b18b5c5)














