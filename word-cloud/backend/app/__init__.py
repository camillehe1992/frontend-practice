from flask import Flask

app = Flask(__name__,
            template_folder="../../frontend/dist",
            static_folder="../../frontend/dist/static")
# import app must be at the below
from app import routes