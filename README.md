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


![image](https://github.com/rohit550000/mern/assets/123115001/fc2525f7-3330-416c-8ac1-74d07815f61f)
![image](https://github.com/rohit550000/mern/assets/123115001/d419476b-ac4e-4ee1-b068-d9ad8f746044)
![image](https://github.com/rohit550000/mern/assets/123115001/d6b3ecff-f2c5-4885-873c-c1ba7013624d)
![image](https://github.com/rohit550000/mern/assets/123115001/f146ed4a-67e4-4807-a784-006a556910fa)
![image](https://github.com/rohit550000/mern/assets/123115001/7a179cb2-7a3b-48d4-9ae7-2743e703ad48)

<h3>Admin Panel</h3>

![image](https://github.com/rohit550000/mern/assets/123115001/2c43b5a3-1262-4a47-9d38-761833a7641d)
![image](https://github.com/rohit550000/mern/assets/123115001/992b3ea8-dbf7-4540-ac94-be5971d41b98)
![image](https://github.com/rohit550000/mern/assets/123115001/de83fb8d-c503-4f41-9863-29aede77d00a)
![image](https://github.com/rohit550000/mern/assets/123115001/6d340650-874d-47e1-b32d-5d58784df435)
![image](https://github.com/rohit550000/mern/assets/123115001/c7b38ae0-0e0b-42b9-89d9-305f1bc5598d)





















