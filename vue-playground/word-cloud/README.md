A Python Flask + Vue based Word Cloud generator

### Structure

- frontend: Vue2, element-ui
- backend: Python3, flask, wordcloud

### Development

- frontend

```
cd frontend

# install dependencies
npm install

# start server
npm start
```

- backend

```
cd backend

# create vitual env for word-cloud or activate existing env
conda activate word-cloud

# install dependencies
pip install -r requirements.txt

# start server
export FLASK_APP=app.py && flask run
```
