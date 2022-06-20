from flask import render_template
from flask import request
from app import app
from wordcloud import WordCloud
import io
import base64


def get_word_cloud(text):
    """Generate word cloud picture

    Args:
        text (string): [a string of text needs to generate word cloud]

    Returns:
        [string]: [a string of decode image]
    """
    pil_img = WordCloud(
        width=800,
        height=300,
        background_color="white"
    ).generate(text=text).to_image()

    img = io.BytesIO()
    pil_img.save(img, "PNG")
    img.seek(0)
    img_base64 = base64.b64encode(img.getvalue()).decode()
    return img_base64

# 主页面
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


# 生成词云图片接口，以base64格式返回
@app.route('/word/cloud/generate', methods=["POST"])
def cloud():
    text = request.json.get("word")
    logging.info(text)
    res = get_word_cloud(text)
    return res
