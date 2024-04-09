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
    <li><b>run :</b> npm run dev</li>
</ul>




![image](https://github.com/rohit550000/mern/assets/123115001/151ecafe-dd15-4d55-8b7d-8947caecc8ee)
![image](https://github.com/rohit550000/mern/assets/123115001/6dca7022-3bc1-4014-abc5-03ef40968c1f)
![image](https://github.com/rohit550000/mern/assets/123115001/258191f2-30a0-4bc0-b6ff-7ebb91d58553)
![image](https://github.com/rohit550000/mern/assets/123115001/4984447f-6fc8-4f97-aa93-7e4928431077)
![image](https://github.com/rohit550000/mern/assets/123115001/9741a2b4-71f9-48d5-9eb2-3080964d8ae4)
![image](https://github.com/rohit550000/mern/assets/123115001/75b4125b-18b6-422d-9300-b6dcedc5e1fa)
![image](https://github.com/rohit550000/mern/assets/123115001/9aab2176-d5cf-4936-a36b-6b7b674afa94)
![image](https://github.com/rohit550000/mern/assets/123115001/82c7c5a0-8b78-40c0-8205-388d33ffddf6)
![image](https://github.com/rohit550000/mern/assets/123115001/1ab2ffdf-8f57-4cb4-815a-e36de2ada059)
![image](https://github.com/rohit550000/mern/assets/123115001/79232800-208c-4bec-beb5-5745da73b095)









