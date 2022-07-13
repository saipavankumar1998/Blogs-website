Step 1: create a react app to download all the dependencies for the project using the following command:

npx create-react-app "filename"

Step 2: You will need a json server to access the blogs object. So, open another command prompt window without closing the previous localhost:3000 port. Then type the following command:

npx json-server --watch data/database.json --port 8000

Note: Your json server is now up and running on the port 8000.
